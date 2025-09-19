import { experiencesData } from "@/data/sections/experiences/ExperiencesData";
import ExperiencesCard from "@/components/ui/cards/ExperiencesCard";

function ExperiencesDisplay() {
  return (
    <>
      {experiencesData.map((item) => (
        <ExperiencesCard key={item.id} {...item} />
      ))}
    </>
  );
}

export default ExperiencesDisplay;
