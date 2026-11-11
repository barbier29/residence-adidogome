/*
 * Les appartements de l'immeuble, d'après les photos du photographe (dossier « ROY Immeuble », novembre 2026).
 * Un équipement absent de la liste n'est pas affiché : on n'ajoute que ce qui se voit sur les photos ou ce que Roy confirme.
 *
 * offres      : "courte" (nuitée, semaine, mois meublé) et/ou "longue" (bail classique)
 * prix        : en FCFA. PROVISOIRES, à remplacer par la grille validée par Roy.
 * surface     : en m², null tant qu'elle n'est pas mesurée (elle n'est alors pas affichée)
 * occupe      : périodes déjà réservées [arrivée, départ] (le jour du départ est libre pour une nouvelle arrivée)
 * libreLe     : date à partir de laquelle le bien est libre en longue durée (null = libre)
 * photos      : générées par photos() ; la première est la couverture
 * galerie     : numéros (à partir de 0) des 5 photos de l'en-tête de la fiche
 * equipements : clés de la liste EQUIPEMENTS dans commun.js
 */
(function () {
  // Les fichiers sont numérotés dans l'ordre des pièces : [pièce, nombre de photos, numéros des photos verticales].
  function photos(id, pieces) {
    var liste = [], n = 0;
    pieces.forEach(function (p) {
      for (var i = 0; i < p[1]; i++) {
        n++;
        var num = (n < 10 ? "0" : "") + n;
        liste.push({ src: "assets/img/biens/" + id + "/" + num + ".webp", mini: "assets/img/biens/" + id + "/" + num + "-m.webp", piece: p[0], vertical: (p[2] || []).indexOf(n) > -1 });
      }
    });
    return liste;
  }

  window.BIENS = [
    {
      id: "baobab",
      nom: "Appartement Baobab",
      type: "4 pièces (3 chambres)",
      surface: null,
      voyageurs: 6,
      chambres: 3,
      lits: "3 lits doubles",
      sdb: 3,
      etage: "3e étage",
      offres: ["courte", "longue"],
      prix: { nuit: 70000, semaine: 420000, mois: 1200000, menage: 15000, loyer: 450000, caution: 900000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "Le dernier étage : trois chambres, un grand séjour lumineux et une terrasse pour dîner dehors.",
      description: [
        "Le séjour réunit un grand canapé d'angle, une table à manger ouverte sur la verdure et une terrasse meublée pour les repas à l'extérieur.",
        "Les trois chambres ont chacune un lit double, des placards intégrés et la climatisation. Une des salles de bain a une baignoire.",
        "La cuisine est entièrement équipée : four, plaques au gaz, réfrigérateur, micro-ondes et lave-linge. De la place pour une famille entière pendant les fêtes."
      ],
      equipements: ["clim", "cuisine", "lave-linge", "tv", "terrasse", "baignoire", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("baobab", [["Séjour", 4], ["Salle à manger", 5], ["Terrasse", 1], ["Cuisine", 4], ["Chambres", 9], ["Salles de bain", 6, [24, 26, 27, 28, 29]]]),
      galerie: [0, 9, 14, 18, 10]
    },
    {
      id: "iroko",
      nom: "Appartement Iroko",
      type: "3 pièces (2 chambres)",
      surface: null,
      voyageurs: 4,
      chambres: 2,
      lits: "2 lits doubles",
      sdb: 2,
      etage: "2e étage",
      offres: ["courte", "longue"],
      prix: { nuit: 50000, semaine: 300000, mois: 850000, menage: 10000, loyer: 300000, caution: 600000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "Deux chambres, un salon cuir et une cuisine ouverte avec bar, pour quatre personnes.",
      description: [
        "Le salon associe canapé cuir et fauteuils face à un grand mur télé. Il s'ouvre sur une cuisine en marbre avec bar et tabourets.",
        "La cuisine a un four encastré, des plaques au gaz et un grand réfrigérateur. Les deux chambres sont climatisées, avec placards et coiffeuse."
      ],
      equipements: ["clim", "cuisine", "tv", "travail", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("iroko", [["Séjour", 5], ["Cuisine", 5, [9]], ["Chambres", 7], ["Salles de bain", 3, [18, 19, 20]]]),
      galerie: [0, 5, 10, 13, 2]
    },
    {
      id: "teck",
      nom: "Appartement Teck",
      type: "2 pièces (1 chambre)",
      surface: null,
      voyageurs: 2,
      chambres: 1,
      lits: "1 lit double",
      sdb: 1,
      etage: "2e étage",
      offres: ["courte", "longue"],
      prix: { nuit: 35000, semaine: 210000, mois: 600000, menage: 7500, loyer: 200000, caution: 400000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "Une chambre, un vrai salon et une cuisine complète : idéal à deux, pour quelques nuits ou quelques mois.",
      description: [
        "Le salon lumineux a un canapé d'angle et une table à manger pour quatre. La cuisine ouverte en marbre a son bar, un four, des plaques et un lave-linge.",
        "La chambre est climatisée, avec placard intégré et salle de bain à douche."
      ],
      equipements: ["clim", "cuisine", "lave-linge", "tv", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("teck", [["Séjour", 5], ["Salle à manger", 2], ["Cuisine", 4, [11]], ["Chambre", 4], ["Salle de bain", 2, [16, 17]], ["Entrée", 1, [18]]]),
      galerie: [0, 5, 7, 11, 2]
    },
    {
      id: "nere",
      nom: "Appartement Néré",
      type: "2 pièces (1 chambre)",
      surface: null,
      voyageurs: 2,
      chambres: 1,
      lits: "1 lit double",
      sdb: 1,
      etage: "1er étage",
      offres: ["courte", "longue"],
      prix: { nuit: 35000, semaine: 210000, mois: 600000, menage: 7500, loyer: 200000, caution: 400000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "Un appartement d'une chambre avec salon, cuisine à bar et balcon.",
      description: [
        "Le salon a un canapé d'angle et une table ronde, ouverts sur une cuisine en bois clair et marbre avec bar.",
        "La chambre est climatisée, avec placard intégré. La salle de bain a une douche à l'italienne, et un balcon prolonge l'appartement."
      ],
      equipements: ["clim", "cuisine", "tv", "balcon", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("nere", [["Séjour", 4], ["Salle à manger", 1], ["Cuisine", 3, [7, 8]], ["Chambre", 4], ["Salle de bain", 3, [13, 14, 15]], ["Balcon", 1, [16]]]),
      galerie: [0, 5, 8, 4, 1]
    },
    {
      id: "fromager",
      nom: "Appartement Fromager",
      type: "3 pièces (2 chambres)",
      surface: null,
      voyageurs: 4,
      chambres: 2,
      lits: "2 lits doubles",
      sdb: 2,
      etage: "1er étage",
      offres: ["courte", "longue"],
      prix: { nuit: 50000, semaine: 300000, mois: 850000, menage: 10000, loyer: 300000, caution: 600000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "Deux chambres, un salon chaleureux et une cuisine avec bar, pour une famille ou un séjour de travail.",
      description: [
        "Le salon a un canapé cognac et deux fauteuils. Il fait face à une cuisine en marbre avec bar, four, plaques au gaz et grand réfrigérateur.",
        "Les deux chambres sont climatisées et ont des placards. L'une a un bureau pour travailler, et chaque salle de bain a sa douche vitrée."
      ],
      equipements: ["clim", "cuisine", "tv", "travail", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("fromager", [["Séjour", 5], ["Cuisine", 4, [9]], ["Chambres", 8], ["Salles de bain", 4, [18, 19, 20, 21]]]),
      galerie: [0, 5, 9, 14, 1]
    },
    {
      id: "karite",
      nom: "Appartement Karité",
      type: "3 pièces (2 chambres)",
      surface: null,
      voyageurs: 4,
      chambres: 2,
      lits: "2 lits doubles",
      sdb: 2,
      etage: "Rez-de-chaussée",
      offres: ["courte", "longue"],
      prix: { nuit: 45000, semaine: 270000, mois: 750000, menage: 10000, loyer: 280000, caution: 560000 },
      inclus: ["Eau", "Électricité", "Linge de maison"],
      minNuits: 2,
      resume: "De plain-pied : un grand salon, une salle à manger pour six et deux chambres avec leur salle de bain.",
      description: [
        "Le grand séjour réunit deux canapés et un mur télé. À côté, une salle à manger de six places reçoit toute la famille.",
        "Les deux chambres sont climatisées, avec placards. Les salles de bain ont des douches vitrées et des miroirs lumineux."
      ],
      equipements: ["clim", "tv", "salle-manger", "placards"],
      occupe: [],
      libreLe: null,
      photos: photos("karite", [["Séjour", 6], ["Salle à manger", 2], ["Chambres", 7], ["Salles de bain", 5, [16, 17, 18, 19]]]),
      galerie: [0, 6, 8, 11, 2]
    }
  ];
})();
