import FormationCard from "@/components/ui/FormationCard";
import { formationsData } from "@/data/sections/formations/FormationsData";

function FormationsDisplay() {
  return (
    <>
      {formationsData.map((item, index) => (
        <FormationCard key={index} {...item} />
      ))}
    </>
  );
}

export default FormationsDisplay;
