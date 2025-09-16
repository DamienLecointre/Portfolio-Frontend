type formationsDataType = {
  id: number;
  endDate: number | null;
  startDate: number | null;
  detail: string;
  place: string;
}[];

export const formationsData: formationsDataType = [
  {
    id: 1,
    endDate: 2025,
    startDate: null,
    detail: "RNCP Développeur Web & Mobile Fullstack",
    place: "LA CAPSULE (Bootcamp de 10 semaines)",
  },
  {
    id: 2,
    endDate: 2010,
    startDate: 2009,
    detail: "Voyage en Australie",
    place: "Immersion culturelle et linguistique",
  },
  {
    id: 3,
    endDate: 2009,
    startDate: 2003,
    detail: "Master en Architecture d'Intérieure",
    place: "ESAT Paris 17ème",
  },
  {
    id: 4,
    endDate: 2003,
    startDate: 2001,
    detail: "Bac STI Bois et Matériaux associés",
    place: "École BOULLE Paris 20ème",
  },
  {
    id: 5,
    endDate: 2001,
    startDate: 1999,
    detail: "BEP/CAP Ébenisterie",
    place: "St NICOLAS Paris 15ème",
  },
];
