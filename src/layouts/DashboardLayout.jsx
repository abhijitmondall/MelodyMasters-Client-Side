import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardMenu from "../pages/Dashboard/DashboardMenu";
import DashboardProfile from "../pages/Dashboard/DashboardProfile";

const DashboardLayout = () => {
  return (
    <section className="bg-colorGreyLight4 fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <div className="container">
        <div className="grid g-cols-2 justify-items-center my-[6rem] rounded-[2.5rem]">
          <DashboardMenu />

          <div className="w-full flex flex-col items-stretch rounded-r-[2rem]">
            <div className="p-[3.2rem] bg-white rounded-tr-[2rem]">
              <h1>header</h1>
            </div>

            <div className="grid w-full h-full g-cols-2x justify-items-center bg-colorGreyLight2 rounded-br-[2rem]">
              <Outlet>
                <Dashboard />
              </Outlet>

              <DashboardProfile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
