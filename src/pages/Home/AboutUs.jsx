import kidsIMG from "./../../assets/img/music-learning-kids.jpeg";
import { BsFillCheckCircleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section className="container">
      <div className="w-[90%] flex md:flex-row flex-col mx-auto mb-[9rem] gap-5">
        <div>
          <h2 className="text-textH2 text-colorPrimary mt-[4px] font-bold uppercase">
            MelodyMasters: Unleash Your Musical Potential
          </h2>
          <p className="py-6">
            MelodyMasters is the ultimate destination for musicians seeking to
            explore, discover, and grow. With comprehensive programs,
            world-class instructors, cutting-edge facilities, and a vibrant
            community, we empower musicians to unlock their true potential.
          </p>
          <ul>
            <li className="flex gap-3 pb-3">
              <span className="text-colorPrimary mt-[4px]">
                <BsFillCheckCircleFill />
              </span>
              <p>
                Comprehensive programs tailored to your individual musical needs
              </p>
            </li>

            <li className="flex gap-3 pb-3">
              <span className="text-colorPrimary mt-[4px]">
                <BsFillCheckCircleFill />
              </span>
              <p>World-class instructors with extensive industry experience</p>
            </li>

            <li className="flex gap-3 pb-3">
              <span className="text-colorPrimary mt-[4px]">
                <BsFillCheckCircleFill />
              </span>
              <p>
                Cutting-edge facilities equipped with state-of-the-art
                instruments and technology
              </p>
            </li>

            <li className="flex gap-3 pb-3">
              <span className="text-colorPrimary mt-[4px]">
                <BsFillCheckCircleFill />
              </span>
              <p>
                Vibrant community of fellow musicians for collaboration and
                networking
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-colorPrimary mt-[4px]">
                <BsFillCheckCircleFill />
              </span>
              <p>
                Join MelodyMasters today to embark on a transformative musical
                journey and unleash your full artistic potential.
              </p>
            </li>
          </ul>

          <button className="btn text-white btn-accent text-textH6 normal-case py-4 px-10 mt-10 h-auto">
            Learn More
          </button>
        </div>
        <div>
          <img
            src={kidsIMG}
            alt="Kids Learning"
            className="w-[75%] mx-auto rounded-[.3rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
