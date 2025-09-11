import Storytelling from "./Storytelling";

import styles from "@/styles/components/sections/storytelling/StorytellingData.module.scss";

type storytellingContentType = {
  id: number;
  text: string;
}[];

const storytellingContent: storytellingContentType = [
  {
    id: 1,
    text: "Formé aux technologies modernes du web (React, Next.js, TypeScript, Redux, Express), je conçois et développe des sites et applications performants, adaptés aux besoins de mes clients.",
  },
  {
    id: 2,
    text: "Mon parcours m'a permis d'acquérir des compétences clés que j'applique aujourd'hui au développement web : sens du détail, organisation rigoureuse, gestion de projet et capacité à collaborer efficacement avec différents interlocuteurs.",
  },
  {
    id: 3,
    text: "Je suis particulièrement attentif à l'expérience utilisateur et à la qualité du rendu visuel, tout en veillant à la solidité technique du projet, côté front-end comme back-end.",
  },
  {
    id: 4,
    text: "Mon objectif : accompagner mes clients dans la création d'outils digitaux sur-mesure, modernes et évolutifs.",
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
