import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";

const DashboardProfile = () => {
  const { user } = useAuth();
  const { users } = useUsers();

  return (
    <div className="w-full text-center p-[3.2rem] bg-colorGreyLight1 rounded-br-[2rem]">
      <div>
        <img
          src={user.photoURL}
          alt=""
          className="w-[80%] mx-auto rounded-[50%] object-cover"
        />
        <h2 className="text-textH5 font-bold text-colorPrimary">
          {user.displayName}
        </h2>
        <p className="text-colorGreyLight4 font-bold">{users?.role}</p>
      </div>
    </div>
  );
};

export default DashboardProfile;
