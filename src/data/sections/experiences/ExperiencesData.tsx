type experiencesDataType = {
  id: number;
  activity: string;
  detail: string;
  startDate: number | string;
  endDate: number | string;
}[];

const experiencesData: experiencesDataType = [
  {
    id: 1,
    activity: "Développeur web full stack",
    detail:
      "Aujourd'hui, je transpose mes compétences vers le numérique : concevoir un site ou une application suit la même logique que créer un espace. J'accompagne mes clients dans la création de solutions modernes, fonctionnelles et accessibles, en simplifiant chaque étape.",
    startDate: 2024,
    endDate: "now",
  },
  {
    id: 2,
    activity: "Architecte d'intérieur",
    detail:
      "Pendant plus de 14 ans, j'ai conçu et réalisé des projets hôteliers sur mesure, de la conception à la mise en œuvre. J'y ai développé créativité, gestion de projet et accompagnement client, toujours avec rigueur et souci du détail.",
    startDate: 2010,
    endDate: 2024,
  },
];

function ExperiencesData() {
  return experiencesData;
}

export default ExperiencesData;
