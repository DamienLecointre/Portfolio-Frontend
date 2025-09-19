import FormationCard from "@/components/ui/cards/FormationCard";
import { formationsData } from "@/data/sections/formations/FormationsData";

function FormationsDisplay() {
  return (
    <>
      {formationsData.map((item) => (
        <FormationCard key={item.id} {...item} />
      ))}
    </>
  );
}

export default FormationsDisplay;
