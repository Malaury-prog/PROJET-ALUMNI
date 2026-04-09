import { faker } from "@faker-js/faker/locale/fr";

const statuts = [
  { statut: "en-formation", labelStatut: "En formation" },
  { statut: "en-poste", labelStatut: "En poste" },
  { statut: "en-recherche", labelStatut: "En recherche" },
  { statut: "indisponible", labelStatut: "Indisponible" },
];

const formations = [
  "Développeur Web et Web Mobile",
  "BTS SIO",
  "BTS MCO",
  "BTS HRT",
  "Maintenance des systèmes",
];

const promos = ["DWWM", "BTS SIO", "BTS MCO", "BTS HRT"];

export const genererApprenants = (nombre = 20) => {
  return Array.from({ length: nombre }, (_, i) => {
    const statut = statuts[Math.floor(Math.random() * statuts.length)];
    return {
      id: i + 100,
      prenom: faker.person.firstName(),
      nom: faker.person.lastName(),
      avatar: `https://i.pravatar.cc/150?u=${faker.string.uuid()}`,
      formation: formations[Math.floor(Math.random() * formations.length)],
      promo: promos[Math.floor(Math.random() * promos.length)],
      annee: "2024-2025",
      linkedin: Math.random() > 0.3 ? faker.internet.url() : "",
      github: Math.random() > 0.5 ? faker.internet.url() : "",
      biographie: faker.lorem.sentence(),
      statut: statut.statut,
      labelStatut: statut.labelStatut,
    };
  });
};
