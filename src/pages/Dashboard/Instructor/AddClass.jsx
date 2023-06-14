import PageTitle from "../../../UI/PageTitle";
import SectionTitle from "../../../UI/SectionTitle";
import AddClassForm from "./AddClassForm";

const AddClass = () => {
  return (
    <section>
      <PageTitle>MelodyMasters | Add Classes</PageTitle>
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          Add Your Classes
        </SectionTitle>
      </div>

      <div>
        <AddClassForm>Add Class</AddClassForm>
      </div>
    </section>
  );
};

export default AddClass;
