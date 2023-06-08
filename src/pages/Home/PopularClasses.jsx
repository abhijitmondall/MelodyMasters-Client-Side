import Card from "../../UI/Card";
import SectionTitle from "../../UI/SectionTitle";

const PopularClasses = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle>Popular Classes</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
