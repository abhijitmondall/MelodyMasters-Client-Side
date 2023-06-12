import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../UI/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <section>
      <div className="mt-[6rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          Pay Now
        </SectionTitle>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default Payment;
