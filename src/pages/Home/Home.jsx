import PageTitle from "../../UI/PageTitle";
import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
  return (
    <>
      <PageTitle>MelodyMasters | Home</PageTitle>
      <HeroSection />
      <AboutUs />
      <PopularClasses />
      <PopularInstructors />
    </>
  );
};

export default Home;
