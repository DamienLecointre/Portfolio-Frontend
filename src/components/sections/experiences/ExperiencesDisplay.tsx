import { experiencesData } from "@/data/sections/experiences/ExperiencesData";
import ExperiencesCard from "@/components/ui/ExperiencesCard";

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
