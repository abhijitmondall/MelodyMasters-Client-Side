import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import usePayment from "../../../hooks/usePayment";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const { info } = usePayment();
  const { axiosSecureFetch } = useAxiosFetch();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const { refetch } = useSelectedClasses();

  const { user } = useAuth();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    (async () => {
      if (info) {
        const res = await axiosSecureFetch.post("create-payment-intent", {
          price: info?.info?.price,
        });
        setClientSecret(res.data.clientSecret);
      }
    })();
  }, [info]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card == null) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
      setCardError(error.message);
    } else {
      setCardError("");

      // console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.payment_method;
      setTransactionId(transactionId);

      const enrolledUser = {
        userName: user?.displayName,
        email: user?.email,
        classID: info?.info?.classID,
        transactionId: transactionId,
        price: info?.info?.price,
        className: info?.info?.className,
        classImage: info?.info?.classImage,
        enrolledStudents: info?.info?.enrolledStudents,
      };

      const res = await axiosSecureFetch.post("enrolledUsers", enrolledUser);
      if (res) {
        Swal.fire("You have successfully enrolled!");

        // Update Available Seats
        const newData = parseInt(info?.info?.enrolledStudents + 1);

        await axiosSecureFetch.patch(`classes/${info?.info?.classID}`, {
          enrolledStudents: newData,
        });

        // Delete The Selected Class
        const res2 = await axiosSecureFetch.delete(
          `selectedClasses/${info?.info?._id}`
        );

        if (res2) {
          refetch();
          navigate("/dashboard/enrolledClasses", { replace: true });
        }
      }
    }
  };

  return (
    <section className="w-full mt-[6rem]">
      <form
        onSubmit={handleSubmit}
        className="w-[60rem] mx-auto bg-colorSecondary p-[6rem] rounded-[.8rem]"
      >
        {cardError && <p className="text-textBody text-red-400">{cardError}</p>}
        {transactionId && (
          <p className="text-textBody text-colorPrimary">
            Transaction completed with transactionId: {transactionId}
          </p>
        )}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className={`${
            !clientSecret
              ? "disabled"
              : "btn btn-outline btn-accent text-textBody normal-case h-auto px-[2.5rem] py-[1rem]"
          }`}
        >
          Pay
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
