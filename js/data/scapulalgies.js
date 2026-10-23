// Module : SCAPULALGIES (douleurs scapulo-thoracique, épaule)
window.MODULES = window.MODULES || {};

window.MODULES.scapulalgies = {
  id: "scapulalgies",
  name: "Scapulalgies",
  icon: "🦴",
  desc: "Bilan de l'épaule et de la ceinture scapulaire.",
  flagsFields: [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_trauma", label: "Traumatisme récent (chute, luxation)" },
    { field: "flags_neuro", label: "Déficit neuro (faiblesse, engourdissement bras)" },
    { field: "flags_perte_poids", label: "Perte de poids inexpliquée / cancer connu" },
    { field: "flags_nocturne", label: "Douleur nocturne non mécanique" }
  ],
  sections: [
    {
      id: "anamnese",
      title: "Anamnèse",
      fields: [
        { id: "age", label: "Âge", type: "number" },
        { id: "metier", label: "Métier / activités sollicitant l'épaule (manutention, travail en élévation, racket...)", type: "text",
          howto: "### Anamnèse occupationnelle\n- Repérer les gestes répétitifs en élévation du bras (> 90°) ou avec charges.\n- Sports de lancer (rackét, natation, lancer) : risque de conflit et d'instabilité." },
        { id: "cote", label: "Côté atteint", type: "select", options: ["Droit", "Gauche", "Bilatéral"] },
        { id: "mode_debut", label: "Mode d'installation", type: "select", options: ["Progressif", "Brutal (traumatique)", "Brutal (sans trauma)"],
          howto: "### Installation de la douleur\n- **Progressif** : oriente vers dégénératif / conflit / tendinopathie.\n- **Brutal traumatique** : penser lésion ligamentaire, luxation, fracture.\n- **Brutal sans trauma** : calcification, capsulite, mais aussi redonner attention aux drapeaux rouges." },
        { id: "douleur_localisation", label: "Localisation de la douleur", type: "select", options: ["Antérieure", "Latérale", "Postérieure", "Diffuse / bras"], 
          howto: "### Topographie\n- **Antérieure** : coiffe, long biceps, articulation acromio-claviculaire.\n- **Latérale (deltoïdienne)** : conflit sous-acromial, rupture coiffe.\n- **Postérieure** : scapula, articulation scapulo-thoracique, capsulite postérieure.\n- **Diffuse / irradiation au bras** : origine cervicale à éliminer." },
        { id: "douleur_nuit", label: "Douleur nocturne (couché sur le côté)", type: "tri" },
        { id: "irradiation_cervicale", label: "Irradiation depuis le cou / paresthésies", type: "tri" }
      ]
    },
    {
      id: "inspection",
      title: "Inspection & palpation",
      fields: [
        { id: "asymetrie", label: "Asymétrie / atrophie (deltoïde, supra/infra-épineux)", type: "tri",
          howto: "### Inspection\n- Comparer les deux épaules de face, de profil et de dos.\n- Atrophie du supra-épineux (fosse supra-épineuse) ou infra-épineux : oriente vers rupture de coiffe ou neuropathie.\n- Rechercher une scapula ailée (paralysie du grand dentelé) et un décollement scapulo-thoracique." },
        { id: "palpation_ac", label: "Palpation douloureuse acromio-claviculaire", type: "tri" },
        { id: "palpation_biceps", label: "Palpation douloureuse gouttière bicipitale", type: "tri" },
        { id: "palpation_scaphoide_trapeze", label: "Palpation douloureuse trapèze / bord médial scapula", type: "tri" },
        { id: "crepitement", label: "Craquement / crépitement à la mobilisation", type: "tri" }
      ]
    },
    {
      id: "amplitudes",
      title: "Amplitudes articulaires (épaule)",
      fields: [
        { id: "abd", label: "Abduction / élévation antérieure", type: "select", options: ["Complète", "Limitée < 170°", "Limitée < 120°", "Limitée < 90°"],
          howto: "### Élévation antérieure\n- Patient debout, élève le bras, pouce vers le haut.\n- Normal : 170-180°.\n- Noter le point douloureux et l'arc douloureux (60-120° = conflit).\n- Observer le rythme scapulo-huméral : scapula qui se lève tôt = dyskinésie ou limitation gléno-humérale." },
        { id: "rot_ext", label: "Rotation externe (coude au corps)", type: "select", options: ["Normale", "Limitée"],
          howto: "### Rotation externe\n- Coude fléchi à 90° collé au corps, patient tourne l'avant-bras vers l'extérieur.\n- Normal : environ 60-80°." },
        { id: "rot_int", label: "Rotation interne (main dans le dos)", type: "select", options: ["Normale", "Limitée"],
          howto: "### Rotation interne (test de main dans le dos)\n- Le patient amène la main derrière son dos, atteindre le niveau vertébral.\n- Th1 (normal) à L5 (sévèrement limité).\n- Limitation : capsulite ou arthrose." },
        { id: "raidisseur_global", label: "Raideur globale dans toutes les directions", type: "tri",
          howto: "### Raideur globale\n- Limitation douloureuse de l'élévation ET des rotations : pattern capsulaire → capsulite rétractile / arthrose." },
        { id: "amplitude_active_vs_passive", label: "Amplitudes actives vs passives", type: "select", options: ["Actives = passives", "Actives < passives"],
          howto: "### Actif vs passif\n- Actives < passives → origine tendineuse/musculaire (rupture, tendinopathie, inhibition douloureuse).\n- Actives = passives limitées → origine articulaire (capsule, arthrose, ankylose)." }
      ]
    },
    {
      id: "tests_specifiques",
      title: "Manœuvres dynamiques & tests spécifiques",
      fields: [
        { id: "neer", label: "Test de Neer", type: "tri",
          howto: "### Test de Neer\n- Examineur stabilise la scapula d'une main, l'autre main élève passivement le bras en flexion avec rotation interne.\n- **Positif** : douleur entre 70° et 120° → conflit sous-acromial.\n- Plus sensible que spécifique." },
        { id: "hawkins", label: "Test de Hawkins", type: "tri",
          howto: "### Test de Hawkins\n- Bras en flexion de 90°, coude fléchi à 90°.\n- Examineur imprime une rotation interne forcée.\n- **Positif** : douleur antéro-latérale → conflit sous-acromial." },
        { id: "painful_arc", label: "Arc douloureux (60-120°)", type: "tri",
          howto: "### Arc douloureux\n- Élévation active du bras : douleur entre 60° et 120° qui disparaît au-delà.\n- Signe classique du conflit sous-acromial." },
        { id: "jobe", label: "Test de Jobe (supra-épineux)", type: "tri",
          howto: "### Test de Jobe / Empty can\n- Bras en élévation à 90° dans le plan scapulaire (30° antérieur), pouce vers le bas.\n- Examineur pousse vers le bas, le patient résiste.\n- **Positif** : douleur et/ou déficit de force → tendinopathie/lésion du supra-épineux." },
        { id: "lift_off", label: "Test de lift-off (subscapulaire)", type: "tri",
          howto: "### Lift-off test\n- Main dorsale au niveau lombaire, le patient décolle la main du dos.\n- Incapacité → déficit du subscapulaire.\n- Variante : belly press (main sur ventre, appuyer sans fléchir le poignet)." },
        { id: "hornblower", label: "Test du hornblower (infra-épineux)", type: "tri",
          howto: "### Hornblower test\n- Coude au corps à 90°, le patient amène la main vers la bouche en rotation externe contre résistance.\n- Déficit → lésion infra-épineux / teres minor." },
        { id: "apprehension", label: "Test d'appréhension (instabilité antérieure)", type: "tri",
          howto: "### Apprehension test\n- Patient décubitus, bras à 90° d'abduction, rotation externe progressive.\n- **Positif** : sensation de luxation imminente / craquement → instabilité antérieure." },
        { id: "relocation", label: "Test de relocation (soulage)", type: "tri" },
        { id: "sulcus", label: "Signe du sillon (instabilité inférieure / multidirectionnelle)", type: "tri",
          howto: "### Signe du sillon\n- Traction longitudinale vers le bas du bras relâché.\n- Traduction inférieure de la tête humérale avec apparition d'un sillon sous-acromial → hyperlaxité multidirectionnelle." },
        { id: "cross_add", label: "Cross adduction test (acromio-claviculaire)", type: "tri",
          howto: "### Cross adduction test\n- Bras à 90° de flexion, l'examineur croise le bras vers l'autre épaule.\n- Douleur sur l'articulation acromio-claviculaire → pathologie acromio-claviculaire." },
        { id: "biceps_speed", label: "Speed's test (long biceps)", type: "tri",
          howto: "### Speed's test\n- Coude tendu, avant-bras en supination, résister l'élévation antérieure à 60°.\n- Douleur dans la gouttière bicipitale → tendinopathie du long biceps." },
        { id: "scap_assist", label: "Correction scapulaire / test d'assistance (rédu douleur)", type: "tri",
          howto: "### Correction scapulaire\n- Réaliser le test douloureux (élévation, Jobe) tout en rétractant et abaissant la scapula manuellement.\n- Si la douleur/force s'améliore → dyskinésie scapulaire (trouble du rythme scapulo-huméral)." },
        { id: "serratus_winging", label: "Scapula ailée (grand dentelé)", type: "tri",
          howto: "### Scapula ailée\n- Poussée contre un mur bras tendus.\n- Décollement du bord médial de la scapula → paralysie du grand dentelé (nerf thoracique long)." }
      ]
    },
    {
      id: "force",
      title: "Testing musculaire (retrouvez la force)",
      fields: [
        { id: "force_abduction", label: "Force en abduction (deltoïde)", type: "select", options: ["Normale", "Diminuée", "Nulle"] },
        { id: "force_rote", label: "Force en rotation externe", type: "select", options: ["Normale", "Diminuée", "Nulle"],
          howto: "### Testing rotateurs\n- Coude au corps à 90°, résister la rotation externe puis interne.\n- Déficit asymétrique → atteinte coiffe ou déficit neurologique." }
      ]
    }
  ],
  rules: [
    {
      id: "conflit",
      name: "Conflit sous-acromial / tendinopathie de coiffe",
      weight: 3,
      note: "Diagnostic clinique le plus fréquent ; confirmer par échographie si évolution défavorable.",
      criteria: [
        { field: "neer", op: "is", value: "Positif" },
        { field: "hawkins", op: "is", value: "Positif" },
        { field: "painful_arc", op: "is", value: "Positif" },
        { field: "douleur_nuit", op: "is", value: "Positif" },
        { field: "jobe", op: "is", value: "Positif" },
        { field: "amplitude_active_vs_passive", op: "is", value: "Actives < passives" }
      ],
      minMatch: 3
    },
    {
      id: "rupture_coiffe",
      name: "Rupture (transfixiante) de coiffe des rotateurs",
      weight: 3.5,
      criteria: [
        { field: "asymetrie", op: "is", value: "Positif" },
        { field: "jobe", op: "is", value: "Positif" },
        { field: "hornblower", op: "is", value: "Positif" },
        { field: "force_abduction", op: "is", value: "Diminuée" },
        { field: "force_rote", op: "is", value: "Diminuée" },
        { field: "age", op: "gt", value: 45 },
        { field: "amplitude_active_vs_passive", op: "is", value: "Actives < passives" }
      ],
      minMatch: 3
    },
    {
      id: "capsulite",
      name: "Capsulite rétractile (épaule gelée)",
      weight: 3,
      note: "Évolution longue (12-24 mois), rééducation douce + kinésithérapie.",
      criteria: [
        { field: "raidisseur_global", op: "is", value: "Positif" },
        { field: "rot_ext", op: "is", value: "Limitée" },
        { field: "rot_int", op: "is", value: "Limitée" },
        { field: "abd", op: "in", value: ["Limitée < 170°", "Limitée < 120°", "Limitée < 90°"] },
        { field: "amplitude_active_vs_passive", op: "is", value: "Actives = passives" },
        { field: "douleur_nuit", op: "is", value: "Positif" }
      ],
      minMatch: 4
    },
    {
      id: "ac_joint",
      name: "Pathologie acromio-claviculaire",
      weight: 2.5,
      criteria: [
        { field: "palpation_ac", op: "is", value: "Positif" },
        { field: "cross_add", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Antérieure" },
        { field: "flags_trauma", op: "is", value: "Positif" }
      ],
      minMatch: 2
    },
    {
      id: "biceps",
      name: "Tendinopathie du long biceps",
      weight: 2,
      criteria: [
        { field: "palpation_biceps", op: "is", value: "Positif" },
        { field: "biceps_speed", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Antérieure" }
      ],
      minMatch: 2
    },
    {
      id: "instabilite",
      name: "Instabilité gléno-humérale",
      weight: 3,
      criteria: [
        { field: "apprehension", op: "is", value: "Positif" },
        { field: "relocation", op: "is", value: "Positif" },
        { field: "sulcus", op: "is", value: "Positif" },
        { field: "age", op: "lt", value: 35 },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" }
      ],
      minMatch: 2
    },
    {
      id: "dyskinesie_scapulaire",
      name: "Dyskinésie scapulaire / syndrome scapulo-thoracique",
      weight: 2.5,
      criteria: [
        { field: "scap_assist", op: "is", value: "Positif" },
        { field: "serratus_winging", op: "is", value: "Positif" },
        { field: "palpation_scaphoide_trapeze", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Postérieure" }
      ],
      minMatch: 2
    },
    {
      id: "arthrose_omarthrose",
      name: "Omarthrose (arthrose d'épaule)",
      weight: 2,
      criteria: [
        { field: "crepitement", op: "is", value: "Positif" },
        { field: "raidisseur_global", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 60 },
        { field: "amplitude_active_vs_passive", op: "is", value: "Actives = passives" }
      ],
      minMatch: 3
    },
    {
      id: "origine_cervicale",
      name: "Douleur d'origine cervicale (irradiation)",
      weight: 3,
      note: "Examiner le rachis cervical et réaliser un bilan neurologique du membre supérieur.",
      criteria: [
        { field: "irradiation_cervicale", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Diffuse / bras" },
        { field: "force_rote", op: "is", value: "Diminuée" }
      ],
      minMatch: 2
    }
  ]
};
