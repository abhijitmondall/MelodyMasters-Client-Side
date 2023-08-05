import PageTitle from "../../UI/PageTitle";
import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <PageTitle>MelodyMasters | Home</PageTitle>
      <HeroSection />
      <h1 className="text-[6rem] font-bold text-center text-[#18B1A2] mb-[6rem]">
        Welcome to Us!
      </h1>
      <AboutUs />
      <PopularClasses />
      <PopularInstructors />
      <Testimonial />
    </>
  );
};

export default Home;
