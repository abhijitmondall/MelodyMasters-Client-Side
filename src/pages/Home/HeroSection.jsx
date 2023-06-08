import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slide1 from "./../../assets/img/slide-1.jpeg";
import slide2 from "./../../assets/img/slide-2.jpeg";
import slide3 from "./../../assets/img/slide-3.jpeg";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="mb-[20rem]">
      <div className="h-[57rem]">
        <Carousel>
          <div className="relative hero__slide">
            <img src={slide1} alt="" className="hero__img" />

            <div className="hero__wrap">
              <div className="hero__content">
                <h1 className="hero__title">
                  <span>Experience the Magic of Music</span>
                </h1>
                <p className="hero__subtitle">
                  Unlock your musical potential with MelodyMasters
                </p>

                <div className="hero__btn">
                  <Link to="/allToys">
                    <span>Explore Our Programs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hero__slide">
            <img src={slide2} alt="" className="hero__img" />

            <div className="hero__wrap">
              <div className="hero__content">
                <h1 className="hero__title">
                  <span>Fuel Your Passion for Music</span>
                </h1>
                <p className="hero__subtitle">
                  Discover our expert instructors and world-class curriculum
                </p>

                <div className="hero__btn">
                  <Link to="/allToys">
                    <span>Meet Our Instructors</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hero__slide">
            <img src={slide3} alt="" className="hero__img" />

            <div className="hero__wrap">
              <div className="hero__content">
                <h1 className="hero__title">
                  <span>Become a Part of Our Musical Family</span>
                </h1>
                <p className="hero__subtitle">
                  Connect, learn, and grow with fellow music enthusiasts
                </p>

                <div className="hero__btn">
                  <Link to="/allToys">
                    <span>Join Our Community</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
