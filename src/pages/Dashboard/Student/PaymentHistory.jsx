import { useEffect, useState } from "react";
import SectionTitle from "../../../UI/SectionTitle";
import PaymentHistoryCard from "./PaymentHistoryCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import Spinner from "../../../UI/Spinner";
import PageTitle from "../../../UI/PageTitle";

const PaymentHistory = () => {
  const { axiosSecureFetch } = useAxiosFetch();
  const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axiosSecureFetch.get(
        `/enrolledUsers?email=${user.email}&sort=-createdAt`
      );
      if (res) {
        setEnrolledClasses(res.data.data.enrolledUsers);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <section className="w-full p-[1.6rem]">
      <PageTitle>MelodyMasters | Payment History</PageTitle>
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          Payment History
        </SectionTitle>
      </div>

      <div className="overflow-x-auto">
        <table className="table text-textBody text-colorGreyDark1">
          <thead>
            <tr className="text-textBody text-center">
              <th>#</th>
              <th>Class Img</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>TransactionId</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-colorGreyDark1">
            {loading ? (
              <Spinner />
            ) : (
              enrolledClasses?.map((info, index) => (
                <PaymentHistoryCard key={info._id} info={info} index={index} />
              ))
            )}
          </tbody>
        </table>
        {enrolledClasses?.length !== 0 || loading ? (
          ""
        ) : (
          <h2 className="text-textH2 text-center text-colorPrimary font-bold mt-[6rem]">
            You didn't Enroll any classes yet! No Payment History!
          </h2>
        )}
      </div>
    </section>
  );
};

export default PaymentHistory;
