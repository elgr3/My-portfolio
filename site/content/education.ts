export type Education = {
  school: string;
  degree: { fr: string; en: string };
  start: string;
  end: string;
};

export const education: Education[] = [
  {
    school: "EFREI — Grande école du numérique",
    degree: { fr: "Diplôme d'ingénieur en informatique", en: "Computer Engineering Degree" },
    start: "2025-09",
    end: "2027-08",
  },
  {
    school: "ESIC — École Supérieure d'Informatique et du Commerce",
    degree: {
      fr: "Expert en systèmes d'information et sécurité",
      en: "Information Systems & Security Expert",
    },
    start: "2024-09",
    end: "2025-06",
  },
  {
    school: "ISTY — Institut des Sciences et Techniques des Yvelines",
    degree: { fr: "Ingénierie informatique", en: "Computer Engineering" },
    start: "2023-09",
    end: "2024-06",
  },
  {
    school: "ESIMAC — École Sup. d'Ingénieur et de Management d'Afrique Centrale",
    degree: {
      fr: "Classes Préparatoires aux Grandes Écoles",
      en: "Preparatory Classes for Grandes Écoles",
    },
    start: "2021-09",
    end: "2023-06",
  },
];
