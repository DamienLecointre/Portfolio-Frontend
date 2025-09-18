import { experiencesData } from "@/data/sections/experiences/ExperiencesData";
import ExperiencesCard from "@/components/ui/cards/ExperiencesCard";

function ExperiencesDisplay() {
  return (
    <>
      {experiencesData.map((item, index) => (
        <ExperiencesCard key={index} {...item} />
      ))}
    </>
  );
}

export default ExperiencesDisplay;
