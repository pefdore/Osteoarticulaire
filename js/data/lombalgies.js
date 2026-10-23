// Module : LOMBALGIES
window.MODULES = window.MODULES || {};

window.MODULES.lombalgies = {
  id: "lombalgies",
  name: "Lombalgies",
  icon: "🧍",
  desc: "Douleurs lombaires : commune, discale, radiculaire, inflammatique.",
  flagsFields: [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_perte_poids", label: "Perte de poids inexpliquée" },
    { field: "flags_nocturne", label: "Douleur nocturne non mécanique (réveille au repos)" },
    { field: "flags_trauma", label: "Traumatisme récent important" },
    { field: "flags_neuro", label: "Déficit moteur / troubles sphinctériens (syndrome de la queue de cheval !)" },
    { field: "flags_age", label: "Âge > 55 ans avec douleur persistante inexpliquée" },
    { field: "flags_cancer", label: "Antécédent de cancer / immunodépression" },
    { field: "flags_cortico", label: "Corticothérapie prolongée / ostéoporose (fracture de compression)" }
  ],
  sections: [
    {
      id: "anamnese",
      title: "Anamnèse",
      fields: [
        { id: "age", label: "Âge", type: "number" },
        { id: "mode_debut", label: "Mode d'installation", type: "select", options: ["Progressif", "Brutal (traumatique)", "Brutal (sans trauma)"] },
        { id: "douleur_localisation", label: "Localisation", type: "select", options: ["Lombaire centrale", "Lombaire unilatérale", "Irradiant fesse", "Irradiant sous le genou (radiculaire)"],
          howto: "### Topographie\n- Douleur lombaire pure ou jusqu'à la fesse → douleur commune.\n- Irradiation sous le genou, en bande, avec paresthésies → radiculalgie (sciatique / crurale)." },
        { id: "douleur_mecanique", label: "Douleur mécanique (variée avec mouvement/position, soulagée au repos)", type: "tri" },
        { id: "douleur_inflammatoire", label: "Douleur de rythme inflammatoire (réveils nocturnes, raideur matinale > 30 min, améliorée par l'activité)", type: "tri",
          howto: "### Rythme de la douleur\n- Mécanique : aggravée par le mouvement, soulagée par le repos → discopathie, arthrose.\n- Inflammatoire : réveils 2ᵉ moitié de nuit, raideur matinale longue, amélioration à l'échauffement → spondyloarthrite (si < 45 ans, bilatérale alternante)." },
        { id: "raideur_matinale", label: "Raideur matinale > 30 minutes", type: "tri" },
        { id: "age_debut_jeune", label: "Début < 45 ans, douleur alternante fessiers", type: "tri" }
      ]
    },
    {
      id: "inspection",
      title: "Inspection & palpation",
      fields: [
        { id: "attitude_antalgique", label: "Attitude antalgique (incurvation, listesis)", type: "tri" },
        { id: "contracture_paravertebrale", label: "Contracture / points gâchettes paravertébraux", type: "tri" },
        { id: "palpation_epineuses", label: "Douleur à la palpation des épineuses (un étage précis)", type: "tri",
          howto: "### Palpation épineuse\n- Repérer les épineuses L4-L5-S1 (ligne bifessiers = S2).\n- Douleur vive sur un étage post-traumatique ou chez ostéoporotique → fracture à évoquer.\n- Douleur diffuse paravertébrale → douleur commune." },
        { id: "sacroiliaques_palpation", label: "Douleur sacro-iliaque à la palpation", type: "tri" }
      ]
    },
    {
      id: "amplitudes",
      title: "Amplitudes & examen dynamique",
      fields: [
        { id: "schober", label: "Test de Schober (distension lombaire)", type: "select", options: ["Normal (≥ 5 cm)", "Diminué (< 5 cm)"],
          howto: "### Test de Schober modifié\n- Patient debout, repérer les épineuses L5 (au niveau des crêtes iliaques) et 10 cm au-dessus.\n- Demander la flexion maximale du tronc : la distance doit augmenter d'au moins 5 cm.\n- Diminuée → limitation de la mobilité lombaire (spondyloarthrite, discopathie sévère)." },
        { id: "flexion_limitée", label: "Flexion du tronc limitée / douloureuse", type: "tri" },
        { id: "extension_douloureuse", label: "Extension lombaire douloureuse", type: "tri" },
        { id: "douleur_lateroflexion", label: "Latéro-flexion douloureuse (côté de la douleur)", type: "tri" },
        { id: "marche_talons", label: "Marche sur les talons impossible / déficitaire", type: "tri",
          howto: "### Marche talons / pointes\n- Talons (L4-L5, releveurs) puis pointes (S1, triceps).\n- Déficit unilatéral → atteinte radiculaire L5 ou S1." },
        { id: "marche_pointes", label: "Marche sur la pointe des pieds impossible", type: "tri" }
      ]
    },
    {
      id: "radiculalgie",
      title: "Examen neurologique & tests radiculaires",
      fields: [
        { id: "slr", label: "Signe de Lasègue (SLR) positif", type: "tri",
          howto: "### Lasègue (Straight Leg Raise)\n- Patient décubitus, jambe tendue, élever passivement la jambe.\n- Positif si douleur irradiant le long du membre entre 30° et 70° (reproduction de la douleur radiculaire).\n- Renforcement : dorsiflexion du pied augmente la douleur ; croisement (baisse du membre controlatéral) soulage." },
        { id: "lasègue_controle", label: "Lasègue controlatéral croisé positif (crosse)", type: "tri" },
        { id: "slr_reproduction", label: "Lasègue reproduit la douleur sous le genou", type: "tri" },
        { id: "deficit_moteur", label: "Déficit moteur (testing myotome)", type: "tri" },
        { id: "deficit_sensitif", label: "Anesthésie / hypoesthésie dans un territoire précis", type: "tri" },
        { id: "ROT_achille", label: "Réflexe achilléen diminué/aboli", type: "tri",
          howto: "### Réflexes rotuliens (L4) et achilléens (S1)\n- Comparer systématiquement au controlatéral.\n- Achilléen aboli → radiculalgie S1 ; rotulien diminué → L4." },
        { id: "sciatique_sourdissement", label: "Sciatique avec pérennité des douleurs (déficit progressif)", type: "tri" },
      ]
    },
    {
      id: "sacroiliaques",
      title: "Tests sacro-iliaques",
      fields: [
        { id: "test_compression", label: "Test de compression pelvienne (douleur sacro-iliaque)", type: "tri",
          howto: "### Tests sacro-iliaques\n- **Compression** : décubitus latéral, comprimer le bassin vers l'articulation.\n- **Distraction (FABER/Patrick)** : décubitus, flexion-abduction-rotation externe de la hanche, presser le genou vers la table.\n- **Gaenslen** : décubitus, hanche controlatérale en flexion maximale, extension de la hanche testée.\n- Douleur locale SI → atteinte sacro-iliaque." },
        { id: "faber", label: "FABER / Patrick positif (douleur postérieure fesse)", type: "tri" },
        { id: "gaenslen", label: "Test de Gaenslen positif", type: "tri" }
      ]
    }
  ],
  rules: [
    {
      id: "lombalgie_commune",
      name: "Lombalgie commune (non spécifique)",
      weight: 2,
      note: "Diagnostic d'élimination ; pas d'imagerie en l'absence de drapeau rouge.",
      criteria: [
        { field: "douleur_mecanique", op: "is", value: "Positif" },
        { field: "contracture_paravertebrale", op: "is", value: "Positif" },
        { field: "flexion_limitée", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "in", value: ["Lombaire centrale", "Lombaire unilatérale", "Irradiant fesse"] },
        { field: "slr", op: "isNot", value: "Positif" },
        { field: "deficit_moteur", op: "isNot", value: "Positif" }
      ],
      minMatch: 4
    },
    {
      id: "lombosciatique",
      name: "Lombosciatique par conflit disco-radiculaire (L5/S1)",
      weight: 3.5,
      criteria: [
        { field: "douleur_localisation", op: "is", value: "Irradiant sous le genou (radiculaire)" },
        { field: "slr", op: "is", value: "Positif" },
        { field: "slr_reproduction", op: "is", value: "Positif" },
        { field: "ROT_achille", op: "is", value: "Positif" },
        { field: "marche_pointes", op: "is", value: "Positif" },
        { field: "deficit_sensitif", op: "is", value: "Positif" },
        { field: "lasègue_controle", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "cruralgie",
      name: "Cruralgie (radiculalgie L3-L4, conflit discal haut)",
      weight: 3,
      criteria: [
        { field: "douleur_localisation", op: "is", value: "Irradiant sous le genou (radiculaire)" },
        { field: "marche_talons", op: "is", value: "Positif" },
        { field: "deficit_moteur", op: "is", value: "Positif" },
        { field: "extension_douloureuse", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 50 }
      ],
      minMatch: 3
    },
    {
      id: "spondyloarthrite",
      name: "Spondyloarthrite axiale (rythme inflammatoire)",
      weight: 3.5,
      criteria: [
        { field: "douleur_inflammatoire", op: "is", value: "Positif" },
        { field: "raideur_matinale", op: "is", value: "Positif" },
        { field: "age_debut_jeune", op: "is", value: "Positif" },
        { field: "sacroiliaques_palpation", op: "is", value: "Positif" },
        { field: "test_compression", op: "is", value: "Positif" },
        { field: "schober", op: "is", value: "Diminué (< 5 cm)" },
        { field: "age", op: "lt", value: 45 }
      ],
      minMatch: 4
    },
    {
      id: "sacro_iliite_mecanique",
      name: "Dysfonction sacro-iliaque (mécanique)",
      weight: 2.5,
      criteria: [
        { field: "sacroiliaques_palpation", op: "is", value: "Positif" },
        { field: "test_compression", op: "is", value: "Positif" },
        { field: "faber", op: "is", value: "Positif" },
        { field: "gaenslen", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "in", value: ["Lombaire unilatérale", "Irradiant fesse"] }
      ],
      minMatch: 3
    },
    {
      id: "fracture_compression",
      name: "Fracture vertébrale de compression (à éliminer)",
      weight: 4,
      note: "Drapeau rouge : radiographie/imagerie en urgence relative.",
      criteria: [
        { field: "flags_cortico", op: "is", value: "Positif" },
        { field: "flags_trauma", op: "is", value: "Positif" },
        { field: "palpation_epineuses", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 60 },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" }
      ],
      minMatch: 2
    },
    {
      id: "arthrose_facettaire",
      name: "Arthrose articulaire postérieure (facettes)",
      weight: 2,
      criteria: [
        { field: "extension_douloureuse", op: "is", value: "Positif" },
        { field: "douleur_lateroflexion", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 55 },
        { field: "douleur_mecanique", op: "is", value: "Positif" },
        { field: "schober", op: "is", value: "Normal (≥ 5 cm)" }
      ],
      minMatch: 4
    }
  ]
};
