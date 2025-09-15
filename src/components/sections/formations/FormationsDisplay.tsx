import FormationCard from "@/components/ui/FormationCard";
import FormationsData from "@/data/sections/formations/FormationsData";

function FormationsDisplay() {
  const formationsData = FormationsData();

  return (
    <>
      {formationsData.map((item, index) => (
        <FormationCard key={index} {...item} />
      ))}
    </>
  );
}

export default FormationsDisplay;
