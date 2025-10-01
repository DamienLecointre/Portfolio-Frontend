import { storytellingData } from "@/data/sections/storytelling/StorytellingData";
import Storytelling from "./Storytelling";

import styles from "@/styles/components/sections/storytelling/StorytellingDisplay.module.scss";

function StorytellingDisplay() {
  return (
    <div className={styles.storytellingContainer}>
      {storytellingData.map((sentence) => (
        <Storytelling key={sentence.id} {...sentence} />
      ))}
    </div>
  );
}

export default StorytellingDisplay;
