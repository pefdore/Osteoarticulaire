// Module : CERVICALGIES
window.MODULES = window.MODULES || {};

window.MODULES.cervicalgies = {
  id: "cervicalgies",
  name: "Cervicalgies",
  icon: "🧠",
  desc: "Cervicalgies communes, discoradiculaires, whiplash, céphalées cervicogéniques.",
  flagsFields: [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_perte_poids", label: "Perte de poids inexpliquée / cancer connu" },
    { field: "flags_nocturne", label: "Douleur nocturne non mécanique" },
    { field: "flags_trauma", label: "Traumatisme récent (accident, plongeon, chute)" },
    { field: "flags_neuro", label: "Déficit neurologique progressif (myélopathie ?)" },
    { field: "flags_sphincter", label: "Troubles sphinctériens / marche perturbée (urgence !)" },
    { field: "flags_age", label: "Âge > 55 ans avec douleur atypique/persistante" }
  ],
  sections: [
    {
      id: "anamnese",
      title: "Anamnèse",
      fields: [
        { id: "age", label: "Âge", type: "number" },
        { id: "mode_debut", label: "Mode d'installation", type: "select", options: ["Progressif", "Brutal (traumatique)", "Brutal (sans trauma)"] },
        { id: "mecanisme", label: "Mécanisme (si traumatique)", type: "select", options: ["Coup du lapin (whiplash)", "Chute / impact direct", "Non traumatique"] },
        { id: "douleur_localisation", label: "Localisation", type: "select", options: ["Cervicale haute (C0-C2)", "Cervicale basse (C5-C7)", "Irradiant épaule / bras", "Céphalée associée"],
          howto: "### Topographie\n- **Haute (C0-C3)** : céphalées cervicogéniques, articulation atloïdo-axoïdienne, névralgie d'Arnold.\n- **Basse (C5-C7)** : discopathie, arthrose uncovertébrale, radiculalgie C6-C7-C8.\n- **Irradiation bras + paresthésies** → discoradiculalgie." },
        { id: "irradiation_bras", label: "Irradiation dans le bras (dessin précis demandé)", type: "tri" },
        { id: "paresthesies", label: "Paresthésies / engourdissements dans un territoire précis", type: "tri" },
        { id: "douleur_mechanique", label: "Douleur mécanique (mouvements, positions prolongées)", type: "tri" },
        { id: "cephalee_associee", label: "Céphalées associées (occipitales, avec la douleur cervicale)", type: "tri" },
        { id: "vertiges", label: "Vertiges / sensations labyrinthiques", type: "tri" }
      ]
    },
    {
      id: "inspection",
      title: "Inspection & palpation",
      fields: [
        { id: "attitude_torticolis", label: "Attitude antalgique / torticolis (incurvation, tête décalée)", type: "tri" },
        { id: "palpation_paravertebrale", label: "Douleur paravertébrale à la palpation", type: "tri" },
        { id: "palpation_occipitale", label: "Douleur à la palpation C0-C2 (occiput, Arnold)", type: "tri",
          howto: "### Palpation cervicale haute\n- Palper l'occiput, l'articulation atloïdo-axoïdienne (C1-C2), le point d'Arnold (nerf grand occipital).\n- Douleur locale + céphalée occipitale → céphalée cervicogénique / névralgie d'Arnold." },
        { id: "palpation_basse", label: "Douleur à la palpation C5-C7 (uncovertrébrale)", type: "tri" },
        { id: "amyotrophie_membre_sup", label: "Amyotrophie / atrophie de l'épaule ou du bras", type: "tri" }
      ]
    },
    {
      id: "amplitudes",
      title: "Amplitudes cervicales",
      fields: [
        { id: "flexion_extension", label: "Flexion / extension", type: "select", options: ["Normales", "Limitées", "Très limitées"],
          howto: "### Mobilité cervicale\n- Flexion (menton vers sternum), extension (regard plafond).\n- Limitation globale → raideur arthrosique, discopathie, whiplash.\n- Extension limitée douloureusement → arthrose facettaire." },
        { id: "rotation_limitée", label: "Rotation (droite/gauche) limitée / douloureuse", type: "tri" },
        { id: "inclinaison_limitée", label: "Inclinaison latérale limitée / douloureuse", type: "tri" },
        { id: "douleur_arc_mouvement", label: "Douleur dans un arc précis du mouvement", type: "tri" }
      ]
    },
    {
      id: "neuro",
      title: "Examen neurologique membre supérieur",
      fields: [
        { id: "deficit_moteur_ms", label: "Déficit moteur (testing myotomes C5-C8)", type: "tri",
          howto: "### Testing myotomes\n- C5 : abduction coude fléchi (deltoïde/biceps).\n- C6 : flexion coude / extension poignet.\n- C7 : extension coude (triceps), flexion poignet.\n- C8 : flexion des doigts, pince.\n- Comparer au controlatéral systématiquement." },
        { id: "deficit_sensitif_ms", label: "Trouble sensitif dans un dermatome précis", type: "tri",
          howto: "### Dermatomes clés\n- C5 : face externe épaule. C6 : pouce. C7 : index/majeur. C8 : 5ᵉ doigt. T1 : face interne bras." },
        { id: "rot_biceps", label: "Réflexe bicipital diminué/aboli", type: "tri" },
        { id: "rot_triceps", label: "Réflexe tricipital diminué/aboli", type: "tri" },
        { id: "rot_stylo", label: "Réflexe styloradial diminué/aboli", type: "tri" },
        { id: "signe_hoffman", label: "Signe de Hoffman positif (myélopathie)", type: "tri",
          howto: "### Hoffman\n- Flicker le majeur (relâchement brusque de la phalange distale).\n- Flexion adduction du pouce et/ou index → hypersensibilité pyramidale → suspicion de myélopathie cervicale (avis urgent)." }
      ]
    },
    {
      id: "tests_specifiques",
      title: "Manœuvres dynamiques & tests spécifiques",
      fields: [
        { id: "spurling", label: "Test de Spurling (compression radiculaire)", type: "tri",
          howto: "### Spurling\n- Patient assis, inclinaison latérale + rotation du côté douloureux, puis compression axiale douce de la tête.\n- **Positif** : douleur irradiant dans le bras → discoradiculalgie.\n- Arrêter immédiatement si vertiges ou symptômes vertébro-basilaires." },
        { id: "distraction", label: "Test de distraction (soulage la douleur)", type: "tri",
          howto: "### Distraction\n- Patient décubitus, traction axiale douce de la tête.\n- Diminution de la douleur radiculaire → confirme l'origine compressive." },
        { id: "upper_limb_tension", label: "Upper Limb Tension Test (ULTT) positif", type: "tri",
          howto: "### ULTT (neurodynamique)\n- Séquence : abduction épaule, supination, extension coude, extension poignet, inclinaison controlatérale.\n- Reproduction des symptômes du patient → tension neurologique (radiculalgie)." },
        { id: "sharp_purser", label: "Test de Sharp-Purser positif (instabilité C1-C2)", type: "tri",
          howto: "### Sharp-Purser\n- Patient assis, pouce de l'examineur sur l'axis, appliquer une légère pression frontale sur le front.\n- Recul de C1 avec sensation de « cliquet » → instabilité atloïdo-axoïdienne (PR, trisomie, arthrite rhumatoïde) → imagerie." },
        { id: "algesie_provocation", label: "Palpation/mobilisation C0-C2 provoque la céphalée", type: "tri" },
        { id: "arnold", label: "Névralgie d'Arnold (douleur occipitale en éclair, trigger à la palpation)", type: "tri" }
      ]
    }
  ],
  rules: [
    {
      id: "cervicalgie_commune",
      name: "Cervicalgie commune (non spécifique)",
      weight: 2,
      criteria: [
        { field: "douleur_mechanique", op: "is", value: "Positif" },
        { field: "palpation_paravertebrale", op: "is", value: "Positif" },
        { field: "rotation_limitée", op: "is", value: "Positif" },
        { field: "irradiation_bras", op: "isNot", value: "Positif" },
        { field: "deficit_moteur_ms", op: "isNot", value: "Positif" },
        { field: "mode_debut", op: "isNot", value: "Brutal (traumatique)" }
      ],
      minMatch: 4
    },
    {
      id: "discoradiculalgie",
      name: "Discoradiculalgie cervicale (C6-C7 le plus souvent)",
      weight: 3.5,
      criteria: [
        { field: "irradiation_bras", op: "is", value: "Positif" },
        { field: "paresthesies", op: "is", value: "Positif" },
        { field: "spurling", op: "is", value: "Positif" },
        { field: "distraction", op: "is", value: "Positif" },
        { field: "deficit_moteur_ms", op: "is", value: "Positif" },
        { field: "deficit_sensitif_ms", op: "is", value: "Positif" },
        { field: "upper_limb_tension", op: "is", value: "Positif" },
        { field: "rot_biceps", op: "is", value: "Positif" },
        { field: "rot_triceps", op: "is", value: "Positif" }
      ],
      minMatch: 4
    },
    {
      id: "whiplash",
      name: "Whiplash (coup du lapin) / entorse cervicale post-traumatique",
      weight: 3,
      criteria: [
        { field: "mecanisme", op: "is", value: "Coup du lapin (whiplash)" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" },
        { field: "attitude_torticolis", op: "is", value: "Positif" },
        { field: "rotation_limitée", op: "is", value: "Positif" },
        { field: "douleur_arc_mouvement", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "cephalee_cervicogenique",
      name: "Céphalée cervicogénique (C0-C2)",
      weight: 3,
      criteria: [
        { field: "cephalee_associee", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Cervicale haute (C0-C2)" },
        { field: "palpation_occipitale", op: "is", value: "Positif" },
        { field: "algesie_provocation", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "nevralgie_arnold",
      name: "Névralgie d'Arnold (grand occipital)",
      weight: 2.5,
      criteria: [
        { field: "arnold", op: "is", value: "Positif" },
        { field: "palpation_occipitale", op: "is", value: "Positif" },
        { field: "cephalee_associee", op: "is", value: "Positif" }
      ],
      minMatch: 2
    },
    {
      id: "arthrose_cervicale",
      name: "Arthrose cervicale (uncovertébrale + facettaire)",
      weight: 2,
      criteria: [
        { field: "palpation_basse", op: "is", value: "Positif" },
        { field: "rotation_limitée", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 50 },
        { field: "douleur_mechanique", op: "is", value: "Positif" },
        { field: "inclinaison_limitée", op: "is", value: "Positif" }
      ],
      minMatch: 4
    },
    {
      id: "myelopathie",
      name: "Myélopathie cervicale — suspicion, avis urgent",
      weight: 4,
      note: "Signe de Hoffman + déficit + troubles de la marche → imagerie et avis neurologique sans délai.",
      criteria: [
        { field: "signe_hoffman", op: "is", value: "Positif" },
        { field: "deficit_moteur_ms", op: "is", value: "Positif" },
        { field: "flags_neuro", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 50 }
      ],
      minMatch: 2
    },
    {
      id: "instabilite_c1c2",
      name: "Instabilité atloïdo-axoïdienne (C1-C2) — à éliminer",
      weight: 4,
      note: "Imagerie systématique (radiographie dynamique, IRM) ; contexte rhumatologique/trisomique.",
      criteria: [
        { field: "sharp_purser", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Cervicale haute (C0-C2)" },
        { field: "vertiges", op: "is", value: "Positif" }
      ],
      minMatch: 2
    }
  ]
};
