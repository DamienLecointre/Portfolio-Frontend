import Storytelling from "./Storytelling";

import styles from "@/styles/components/sections/storytelling/StorytellingData.module.scss";

type storytellingContentType = {
  id: number;
  text: string;
}[];

const storytellingContent: storytellingContentType = [
  {
    id: 1,
    text: "Chaque projet naît d'une idée. Mon rôle est de vous accompagner pour la transformer en un site professionnel et efficace, fidèle à vos besoins.",
  },
  {
    id: 2,
    text: "Je prends en charge l'ensemble du processus : conception graphique, développement et mise en ligne.",
  },
  {
    id: 3,
    text: "Pas besoin de maîtriser le langage technique : je simplifie chaque étape pour que tout reste compréhensible et transparent, dans le respect de votre budget.",
  },
  {
    id: 4,
    text: "Mon objectif est de rendre la création de votre site web simple et agréable, et de vous livrer une solution prête à l'emploi.",
  },
  {
    id: 5,
    text: "Vous avez un projet ? Parlons-en et voyons comment le concrétiser ensemble.",
  },
];

function StorytellingData() {
  return (
    <div className={styles.storytellingContainer}>
      {storytellingContent.map((sentence) => (
        <Storytelling key={sentence.id} {...sentence} />
      ))}
    </div>
  );
}

export default StorytellingData;
