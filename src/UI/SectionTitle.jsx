import "./SectionTitle.css";

const SectionTitle = ({ children, className }) => {
  return (
    <div className="section__title-wrap pb-[6rem]">
      <h2 className={`section__title ${className?.className || " "}`}>
        {children}
      </h2>
      <div className="section__line"></div>
    </div>
  );
};

export default SectionTitle;
