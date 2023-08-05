import { useEffect, useState } from "react";
import SectionTitle from "../../../UI/SectionTitle";
import Spinner from "../../../UI/Spinner";
import ManageUserCard from "./ManageUserCard";
import PageTitle from "../../../UI/PageTitle";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}users`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      const data = await res.json();

      setAllUsers(data?.data?.users);
      setLoading(false);
    })();
  }, [reFetch]);

  const handleRefetch = () => {
    setReFetch(!reFetch);
  };

  return (
    <section className="w-full p-[1.2rem]">
      <PageTitle>MelodyMasters | Manage Users</PageTitle>
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          Manage Users
        </SectionTitle>
      </div>
      <div className="flex flex-col gap-[1.2rem]">
        <div className="grid grid-cols-max-7 items-center gap-[1.6rem] border-b-[1px] p-[1.6rem] text-center bg-colorGreyLight3">
          <div>#</div>
          <div>User Img</div>
          <div>User Name</div>
          <div>User Email</div>
          <div>Role</div>
          <div>Make Instructor</div>
          <div>Make Admin </div>
        </div>
        {allUsers?.length !== 0
          ? allUsers?.map((info, index) => (
              <ManageUserCard
                key={info._id}
                info={info}
                index={index}
                handleRefetch={handleRefetch}
              />
            ))
          : !loading && (
              <h2 className="text-textH2 text-center text-colorPrimary font-bold">
                You did't selected any classes yet!
              </h2>
            )}
      </div>

      {loading && <Spinner />}
    </section>
  );
};

export default ManageUsers;
