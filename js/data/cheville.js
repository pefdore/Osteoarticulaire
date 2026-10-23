// Module : DOULEURS DE CHEVILLE
window.MODULES = window.MODULES || {};

window.MODULES.cheville = {
  id: "cheville",
  name: "Douleurs de cheville",
  icon: "🦶",
  desc: "Entorses, tendinopathies, instabilité, arthrose sous-talienne.",
  flagsFields: [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_inflam", label: "Cheville chaude, rouge, œdémée (arthrite ?)" },
    { field: "flags_trauma", label: "Traumatisme récent avec impotence à la marche" },
    { field: "flags_perte_poids", label: "Perte de poids / cancer connu" },
    { field: "flags_diabete", label: "Diabète / neuropathie connue" }
  ],
  sections: [
    {
      id: "anamnese",
      title: "Anamnèse",
      fields: [
        { id: "age", label: "Âge", type: "number" },
        { id: "cote", label: "Côté atteint", type: "select", options: ["Droit", "Gauche", "Bilatéral"] },
        { id: "mode_debut", label: "Mode d'installation", type: "select", options: ["Progressif", "Brutal (traumatique)", "Brutal (sans trauma)"] },
        { id: "mecanisme", label: "Mécanisme (si traumatique)", type: "select", options: ["Inversion (entorse latérale)", "Eversion (entorse médiale)", "Dorsiflexion / compression", "Non traumatique"],
          howto: "### Mécanisme lésionnel\n- **Inversion** (pied qui se retourne en dedans) → ligaments latéraux (LTF, LCFT).\n- **Eversion** → ligament deltoïde (médial), rare et souvent plus grave.\n- **Dorsiflexion + rotation** → lésion de la syndesmose (entorse haute) ou du cartilage.\n- Sports avec appuis répétés (course, sauts) sans trauma → tendinopathie." },
        { id: "douleur_localisation", label: "Localisation de la douleur", type: "select", options: ["Latérale externe", "Médiale interne", "Antérieure", "Postérieure / tendon d'Achille", "Rétro-malléolaire", "Diffuse"] },
        { id: "instabilite", label: "Sensation d'instabilité / dérobements à répétition", type: "tri" },
        { id: "episodes_entorse", label: "Antécédents d'entorses à répétition", type: "tri" },
        { id: "douleur_matinale", label: "Douleur au premier appui matinal (start-up pain)", type: "tri",
          howto: "### Start-up pain\n- Douleur aux premiers pas le matin ou après repos, s'améliorant en marchant quelques minutes.\n- Typique des tendinopathies et de l'arthrose." }
      ]
    },
    {
      id: "inspection",
      title: "Inspection & palpation",
      fields: [
        { id: "oedeme", label: "Œdème / ecchymose", type: "tri" },
        { id: "palpation_ligament_lateral", label: "Palpation douloureuse ligament talo-fibulaire (LTF)", type: "tri",
          howto: "### Palpation des ligaments latéraux\n- LTF (talo-fibulaire antérieur) : juste en avant de la pointe de la malléole externe.\n- LCFT (calcanéo-fibulaire) : depuis la malléole vers l'os calcaneus.\n- Palper aussi les malléoles, la base du 5ᵉ métatarsien et la syndesmose (règle d'Ottawa)." },
        { id: "palpation_deltoide", label: "Palpation douloureuse ligament deltoïde (médial)", type: "tri" },
        { id: "palpation_achille", label: "Palpation douloureuse tendon calcanéen (Achille)", type: "tri" },
        { id: "palpation_peronea", label: "Palpation douloureuse tendons péroniers (rétro-malléolaire latéral)", type: "tri" },
        { id: "palpation_posterieure", label: "Palpation douloureuse face postérieure (os trigone, FHL)", type: "tri" },
        { id: "nodule_achille", label: "Nodule / épaississement tendon d'Achille", type: "tri" },
        { id: "deformation", label: "Déformation / varus de l'arrière-pied", type: "tri" }
      ]
    },
    {
      id: "amplitudes",
      title: "Amplitudes & marche",
      fields: [
        { id: "flexion_dorsale", label: "Flexion dorsale", type: "select", options: ["Normale", "Limitée", "Très limitée (< 10°)"],
          howto: "### Flexion dorsale\n- Genou fléchi (tibio-tarsienne) et genou tendu (chaîne postérieure).\n- Limitée → arthrose, capsulite, conflit antérieur (ostéophytes) ou rétraction du triceps sural." },
        { id: "flexion_plantaire", label: "Flexion plantaire", type: "select", options: ["Normale", "Limitée"] },
        { id: "douleur_flexion_dorsale", label: "Douleur en flexion dorsale forcée", type: "tri" },
        { id: "difficulte_talons", label: "Difficulté à monter sur la pointe des pieds", type: "tri",
          howto: "### Rising heel test (montée sur pointes)\n- Patient debout, monte sur la pointe des pieds bilatérale puis unipodale.\n- Impossible/Naussi douloureux → tendinopathie d'Achille ou rupture.\n- Unipodal impossible sur cheville atteinte → déficit fonctionnel significatif." },
        { id: "boiterie", label: "Boiterie / antalgique à la marche", type: "tri" }
      ]
    },
    {
      id: "tests_stabilite",
      title: "Tests de stabilité ligamentaire",
      fields: [
        { id: "tiroir_ant_talo", label: "Tiroir antérieur de la cheville (LTF)", type: "tri",
          howto: "### Tiroir antérieur\n- Patient assis jambes pendantes, une main fixe la jambe, l'autre tire le talon vers l'avant (relaxation du gastrocnémius).\n- Translation augmentée vs controlatéral → laxité LTF (entorse récente ou instabilité chronique)." },
        { id: "stress_inversion", label: "Stress en inversion (varus forcé) douloureux / laxité", type: "tri" },
        { id: "test_malleolaire", label: "Compression malléolaire douloureuse (compression des malléoles)", type: "tri",
          howto: "### Squeeze test (syndesmose)\n- Comprimer les malléoles l'une contre l'autre à mi-jambe.\n- Douleur dans la syndesmose → entorse haute (tibio-fibulaire) : gravité +, immobilisation + avis spécialisé." },
        { id: "test_ottawa", label: "Critères d'Ottawa positifs (douleur zone malleolaire + un critère)", type: "tri",
          howto: "### Règles d'Ottawa (radiographies si :)\n- Douleur dans la zone malléolaire ET un de :\n  - tenderness osseuse au bord postérieur ou à la pointe des malléoles,\n  - tenderness à la base du 5ᵉ métatarsien ou au naviculaire,\n  - incapacité à faire 4 pas immédiatement et à l'examen.\n- Si positif → radiographie à envisager." }
      ]
    },
    {
      id: "tests_dynamiques",
      title: "Manœuvres dynamiques & charge",
      fields: [
        { id: "one_leg_balance", label: "Équilibre unipodal difficile/douloureux", type: "tri" },
        { id: "hop_test", label: "Saut unipodal douloureux / impossible", type: "tri" },
        { id: "douleur_posterieure_dynamique", label: "Douleur postérieure en flexion plantaire forcée ( kicking, saut)", type: "tri" },
        { id: "douleur_impingement", label: "Douleur antérieure en flexion dorsale forcée (conflit antérieur)", type: "tri",
          howto: "### Conflit antérieur de cheville\n- Flexion dorsale forcée du genou fléchi (varus du pied) : douleur antérieure avec sensation de blocage osseux.\n- Fréquent après fractures, entorses répétées (danseurs, footballeurs) → ostéophytes." },
        { id: "test_thompson", label: "Test de Thompson (signe négatif = rupture)", type: "tri",
          howto: "### Test de Thompson\n- Patient décubitus ventral, pieds hors de la table.\n- Squeeze du mollet : la plante du pied doit se fléchir.\n- **Absence de flexion plantaire → rupture du tendon d'Achille** (urgence chirurgicale si jeune/sportif)." },
        { id: "peroneal_resistance", label: "Douleur à l'éversion contre résistance", type: "tri" },
        { id: "tinel_tarsien", label: "Signe de Tinel au tunnel tarsien (médial)", type: "tri",
          howto: "### Tunnel tarsien\n- Percussion derrière la malléole interne le long du nerf tibial.\n- Décharges électriques dans la plante → syndrome du tunnel tarsien." }
      ]
    }
  ],
  rules: [
    {
      id: "entorse_latérale",
      name: "Entorse latérale de cheville (ligaments latéraux)",
      weight: 3.5,
      criteria: [
        { field: "mecanisme", op: "is", value: "Inversion (entorse latérale)" },
        { field: "palpation_ligament_lateral", op: "is", value: "Positif" },
        { field: "tiroir_ant_talo", op: "is", value: "Positif" },
        { field: "oedeme", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" },
        { field: "stress_inversion", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "instabilite_chronique",
      name: "Instabilité chronique de cheville (post-entorse)",
      weight: 3,
      criteria: [
        { field: "instabilite", op: "is", value: "Positif" },
        { field: "episodes_entorse", op: "is", value: "Positif" },
        { field: "tiroir_ant_talo", op: "is", value: "Positif" },
        { field: "one_leg_balance", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "tendinopathie_achille",
      name: "Tendinopathie du tendon calcanéen (Achille)",
      weight: 3,
      criteria: [
        { field: "palpation_achille", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Postérieure / tendon d'Achille" },
        { field: "difficulte_talons", op: "is", value: "Positif" },
        { field: "nodule_achille", op: "is", value: "Positif" },
        { field: "douleur_matinale", op: "is", value: "Positif" },
        { field: "douleur_posterieure_dynamique", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "rupture_achille",
      name: "Rupture du tendon d'Achille — suspicion forte",
      weight: 4,
      note: "Test de Thompson positif = urgence : avis orthopédique rapide (échographie).",
      criteria: [
        { field: "test_thompson", op: "is", value: "Positif" },
        { field: "palpation_achille", op: "is", value: "Positif" },
        { field: "difficulte_talons", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" }
      ],
      minMatch: 2
    },
    {
      id: "peronea",
      name: "Tendinopathie / luxation des péroniers",
      weight: 2.5,
      criteria: [
        { field: "palpation_peronea", op: "is", value: "Positif" },
        { field: "peroneal_resistance", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "in", value: ["Rétro-malléolaire", "Latérale externe"] }
      ],
      minMatch: 2
    },
    {
      id: "entorse_mediale",
      name: "Atteinte du ligament deltoïde (médial)",
      weight: 2.5,
      criteria: [
        { field: "palpation_deltoide", op: "is", value: "Positif" },
        { field: "mecanisme", op: "is", value: "Eversion (entorse médiale)" },
        { field: "douleur_localisation", op: "is", value: "Médiale interne" }
      ],
      minMatch: 2
    },
    {
      id: "syndesmose",
      name: "Entorse haute (syndesmose tibio-fibulaire)",
      weight: 3,
      note: "Immobilisation et avis spécialisé : risque d'instabilité chronique.",
      criteria: [
        { field: "test_malleolaire", op: "is", value: "Positif" },
        { field: "mecanisme", op: "is", value: "Dorsiflexion / compression" },
        { field: "douleur_localisation", op: "in", value: ["Antérieure", "Diffuse"] }
      ],
      minMatch: 2
    },
    {
      id: "arthrose_cheville",
      name: "Arthrose de cheville / sous-talienne",
      weight: 2.5,
      criteria: [
        { field: "douleur_matinale", op: "is", value: "Positif" },
        { field: "flexion_dorsale", op: "in", value: ["Limitée", "Très limitée (< 10°)"] },
        { field: "deformation", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Progressif" },
        { field: "age", op: "gt", value: 45 }
      ],
      minMatch: 3
    },
    {
      id: "conflit_anterieur",
      name: "Conflit antérieur de cheville (impingement)",
      weight: 2.5,
      criteria: [
        { field: "douleur_impingement", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Antérieure" },
        { field: "douleur_flexion_dorsale", op: "is", value: "Positif" }
      ],
      minMatch: 2
    },
    {
      id: "tunnel_tarsien",
      name: "Syndrome du tunnel tarsien",
      weight: 2.5,
      criteria: [
        { field: "tinel_tarsien", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Médiale interne" }
      ],
      minMatch: 2
    }
  ]
};
