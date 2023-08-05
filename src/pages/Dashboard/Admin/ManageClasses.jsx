import { useEffect, useState } from "react";
import SectionTitle from "../../../UI/SectionTitle";

import ManageClassCard from "./ManageClassCard";
import Spinner from "../../../UI/Spinner";
import PageTitle from "../../../UI/PageTitle";

const ManageClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}classes`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      const data = await res.json();

      setAllClasses(data.classes);
      setLoading(false);
    })();
  }, [reFetch]);

  const handleRefetch = () => {
    setReFetch(!reFetch);
  };

  return (
    <section className="w-full p-[1.2rem]">
      <PageTitle>MelodyMasters | Manage Classes</PageTitle>
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          Manage Classes
        </SectionTitle>
      </div>
      <div className=" flex flex-col gap-[1.2rem]">
        <div className="grid grid-cols-max-10 items-center gap-[1.6rem] border-b-[1px] p-[1.6rem] text-center bg-colorGreyLight3">
          <div>#</div>
          <div>Class Img</div>
          <div>Class Name</div>
          <div>Instructor Name</div>
          <div>Instructor Email</div>
          <div>Available Seats</div>
          <div>Price</div>
          <div>Status</div>
          <div>Action</div>
          <div>Action</div>
        </div>
        {allClasses?.length !== 0
          ? allClasses?.map((info, index) => (
              <ManageClassCard
                key={info._id}
                info={info}
                index={index}
                handleRefetch={handleRefetch}
              />
            ))
          : !loading && (
              <h2 className="text-textH2 text-center text-colorPrimary font-bold">
                No Classes Found Yet!
              </h2>
            )}
      </div>

      {loading && <Spinner />}
    </section>
  );
};

export default ManageClasses;
