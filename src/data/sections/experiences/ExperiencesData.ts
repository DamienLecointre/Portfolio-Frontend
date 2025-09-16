type experiencesDataType = {
  id: number;
  activity: string;
  detail: string;
  startDate: number | string;
  endDate: number | string;
}[];

export const experiencesData: experiencesDataType = [
  {
    id: 1,
    activity: "Développeur web full stack",
    detail:
      "Aujourd'hui, je transpose ces compétences dans le numérique. Mon objectif reste le même : transformer chaque idée en une solution claire, moderne et prête à l'emploi, en accompagnant mes clients de la conception jusqu'au produit final.",
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
