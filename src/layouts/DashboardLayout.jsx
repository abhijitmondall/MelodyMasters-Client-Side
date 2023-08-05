import { Outlet } from "react-router-dom";
import DashboardMenu from "../pages/Dashboard/DashboardMenu";
import DashboardProfile from "../pages/Dashboard/DashboardProfile";
import logo from "./../assets/MelodyMasters.gif";

const DashboardLayout = () => {
  return (
    <section className="bg-colorGreyLight4 fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <div className="mx-auto px-[1.6rem]">
        <div className="grid g-cols-2 h-[100vh] justify-items-center my-[9rem] rounded-[2.5rem]">
          <DashboardMenu />

          <div className="w-full flex flex-col items-stretch rounded-r-[2rem]">
            <div className="p-[1.6rem] bg-white rounded-tr-[2rem]">
              {/* <h1 className="text-textH1 text-center text-[#18B1A2] font-bold">
                MelodyMasters
              </h1> */}
              <img src={logo} alt="" className="m-auto" />
            </div>

            <div className="grid w-full h-full g-cols-2x justify-items-center bg-colorGreyLight2 rounded-br-[2rem]">
              <main>
                <Outlet />
              </main>

              <DashboardProfile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
