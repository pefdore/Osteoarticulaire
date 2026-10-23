// Module : GONALGIES (douleurs du genou)
window.MODULES = window.MODULES || {};

window.MODULES.gonalgies = {
  id: "gonalgies",
  name: "Gonalgies",
  icon: "🦵",
  desc: "Bilan du genou : ligaments, ménisques, patella, arthrose.",
  flagsFields: [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_inflam", label: "Genou chaud, rouge, tuméfié (arthrite septique ?)" },
    { field: "flags_trauma", label: "Traumatisme récent avec impotence" },
    { field: "flags_blocage", label: "Blocage vrai du genou (extension impossible)" },
    { field: "flags_instabilite", label: "Sensation de dérobement / entorse récidivante" },
    { field: "flags_perte_poids", label: "Perte de poids / cancer connu" }
  ],
  sections: [
    {
      id: "anamnese",
      title: "Anamnèse",
      fields: [
        { id: "age", label: "Âge", type: "number" },
        { id: "cote", label: "Côté atteint", type: "select", options: ["Droit", "Gauche", "Bilatéral"] },
        { id: "mode_debut", label: "Mode d'installation", type: "select", options: ["Progressif", "Brutal (traumatique)", "Brutal (sans trauma)"],
          howto: "### Installation\n- **Brutal traumatique** : entorse, lésion méniscale, fracture.\n- **Brutal sans trauma** (avec œdème) : arthrite, goutte, kyste poplité rompu.\n- **Progressif** : arthrose, syndrome fémoro-patellaire, tendinopathie." },
        { id: "douleur_localisation", label: "Localisation de la douleur", type: "select", options: ["Antérieure / patellaire", "Interne", "Externe", "Postérieure", "Diffuse"],
          howto: "### Topographie\n- **Antérieure/patellaire** : fémoro-patellaire, tendinopathie quadricipital/rotulien.\n- **Interne** : ménisque interne, LCM, arthrose fémoro-tibiale interne.\n- **Externe** : ménisque externe, LCL, syndrome de l'essuie-glace / ITB.\n- **Postérieure** : kyste poplité, tendinopathie ischio-jambiers ou gastrocnémiens." },
        { id: "douleur_monte_descente", label: "Douleur en montant/descendant les escaliers", type: "tri",
          howto: "### Escaliers\n- Monter : fessiers et quadricipital.\n- Descendre : contrôle excentrique du quadricipital et contraintes fémoro-patellaires → douleur à la descente = syndrome fémoro-patellaire." },
        { id: "douleur_escalier", label: "Douleur en descendant (plus qu'en montant)", type: "tri" },
        { id: "episode_blocage", label: "Blocage ou pseudo-blocage (dérobement, déchirure)", type: "tri",
          howto: "### Blocage vs pseudo-blocage\n- **Blocage vrai** (extension complète impossible, mécanique) → lésion méniscale ou corps étranger.\n- **Pseudo-blocage** (dérobement par douleur) → instabilité ligamentaire ou patellaire." },
        { id: "episodes_entorse", label: "Antécédent d'entorse du genou", type: "tri" },
        { id: "gonflement_rapide", label: "Gonflement rapide après trauma (heures)", type: "tri",
          howto: "### Épanchement post-traumatique\n- Gonflement en minutes/2-3h → hémarthrose (rupture LCA, fracture ostéochondrale).\n- Gonflement sur 24h ou progressif → épanchement méniscal ou réactionnel." }
      ]
    },
    {
      id: "inspection",
      title: "Inspection & palpation",
      fields: [
        { id: "oedeme", label: "Œdème / épanchement (globe)", type: "tri",
          howto: "### Rechercher un épanchement\n- Comparer les deux genoux, chercher le signe du glaçon : pousser la rotule contre le fémur, si elle flotte et claque → épanchement.\n- Choc patellaire : main sur la tubérosité tibiale remonte le liquide, la rotule se soulève." },
        { id: "palpation_interligne", label: "Palpation douloureuse interlignes articulaires", type: "select", options: ["Non", "Interne", "Externe", "Les deux"],
          howto: "### Palpation des interlignes\n- Genou fléchi à 90°, palper l'interligne fémoro-tibial interne puis externe, juste sous les plateaux.\n- Douleur localisée → lésion méniscale ou arthrose compartimentale." },
        { id: "palpation_patella", label: "Palpation douloureuse des bords patellaires", type: "tri" },
        { id: "palpation_tendon_rotulien", label: "Palpation douloureuse tendon rotulien / tubérosité", type: "tri" },
        { id: "crepitement_patella", label: "Craquement fémoro-patellaire en mobilisant la rotule", type: "tri",
          howto: "### Mobilisation patellaire\n- Genou en extension relâché, mobiliser la rotule dans les 4 directions.\n- Crépitement + douleur → chondropathie / arthrose fémoro-patellaire." },
        { id: "alignement", label: "Déformation / axe (varus, valgus, flessum)", type: "tri" },
        { id: "amyotrophie_quad", label: "Amyotrophie quadricipitale (cercle cuisse)", type: "tri",
          howto: "### Mesure du cercle de cuisse\n- Mesurer les deux cuisses à 10 et 15 cm au-dessus de la rotule.\n- Différence > 1-2 cm → amyotrophie quadricipitale (post-traumatique ou arthrogène)." }
      ]
    },
    {
      id: "amplitudes",
      title: "Amplitudes articulaires (genou)",
      fields: [
        { id: "flexion", label: "Flexion", type: "select", options: ["Complète", "Limitée < 135°", "Limitée < 90°"],
          howto: "### Flexion\n- Normal : talon fesse, environ 140-150°.\n- Limitation douloureuse → épanchement, lésion méniscale, arthrose." },
        { id: "extension", label: "Extension (flessum)", type: "select", options: ["Complète", "Déficit d'extension",
"Déficit d'extension (flessum)"],
          howto: "### Extension\n- Patient décubitus, élever le talon : le genou doit s'étendre complètement.\n- Déficit d'extension (flessum) → lésion méniscale, corps étranger, ou rétraction." },
        { id: "douleur_flexion_forcee", label: "Douleur en flexion forcée (accroupi)", type: "tri" },
        { id: "hyperextension_laxite", label: "Hyperextension / laxité en tiroir", type: "tri" }
      ]
    },
    {
      id: "ligamentaire",
      title: "Tests ligamentaires",
      fields: [
        { id: "tiroir_ant", label: "Tiroir antérieur (LCA)", type: "tri",
          howto: "### Tiroir antérieur (Lachman / tiroir)\n- **Lachman** (le plus sensible) : genou à 30° de flexion, une main stabilise le fémur, l'autre tire le tibia vers l'avant. Comparaison controlatérale.\n- **Tiroir antérieur** à 90° : tirer le tibia vers l'avant.\n- Translation augmentée / arrêt mou → rupture LCA." },
        { id: "lachman", label: "Lachman (translation augmentée / arrêt mou)", type: "tri" },
        { id: "tiroir_post", label: "Tiroir postérieur (LCP)", type: "tri",
          howto: "### Tiroir postérieur\n- Genou à 90°, observer le « signe du godet » (relâchement du tendon rotulien) puis pousser le tibia vers l'arrière.\n- Translation postérieure → rupture LCP." },
        { id: "stress_m_medial", label: "Stress en valgus (LCM)", type: "tri",
          howto: "### Stress valgus (médiaux)\n- Genou à 30° de flexion : ouvrir le côté interne du genou.\n- Bâillement interne isolé à 30° → LCM ; à 0° et 30° → atteinte associée pivot central." },
        { id: "stress_lat", label: "Stress en varus (LCL)", type: "tri",
          howto: "### Stress varus (latéraux)\n- Genou à 30° de flexion : ouvrir le côté externe du genou.\n- Bâillement externe → LCL." },
        { id: "lachman_mou", label: "Lachman avec arrêt mou (vs dur)", type: "tri" }
      ]
    },
    {
      id: "menisques",
      title: "Tests méniscaux",
      fields: [
        { id: "mcmurray", label: "McMurray", type: "tri",
          howto: "### Test de McMurray\n- Patient décubitus, genou en flexion maximale.\n- Pour le ménisque interne : pied en rotation externe, étendre le genou en maintenant la rotation.\n- Pour le ménisque externe : rotation interne du pied.\n- **Positif** : clic douloureux ou blocage en extension → lésion méniscale." },
        { id: "steinmann", label: "Douleur au point de Steinmann (rotation tibiale)", type: "tri" },
        { id: "apley_grinding", label: "Apley (compression douloureuse en décubitus ventral)", type: "tri",
          howto: "### Test d'Apley (grinding)\n- Patient décubitus ventral, genou à 90°.\n- Comprimer le tibia contre le fémur tout en le tournant.\n- **Douleur à la compression** → ménisque ; **douleur à la traction** → ligamentaire." },
        { id: "thessaly", label: "Thessaly test (positif)", type: "tri",
          howto: "### Thessaly test\n- Patient debout sur la jambe atteinte, genou fléchi à 20°, rotations du corps gauche-droite.\n- Douleur / blocage → lésion méniscale." }
      ]
    },
    {
      id: "patello",
      title: "Tests fémoro-patellaires",
      fields: [
        { id: "apprehension_patella", label: "Test d'appréhension patellaire", type: "tri",
          howto: "### Appréhension patellaire\n- Genou relâché en extension, pousser la rotule vers l'extérieur.\n- Contraction réflexe du quadricipital / sensation de luxation → instabilité patellaire." },
        { id: "zohlen", label: "Signe de Zohlen (compression patellaire)", type: "tri",
          howto: "### Signe de Zohlen\n- Pousser la rotule vers le bas/contre le fémur tout en contractant le quadricipital.\n- **Positif** : douleur → syndrome fémoro-patellaire.\n- Attention : sensible mais peu spécifique." },
        { id: "q_angle", label: "Angle Q augmenté", type: "tri",
          howto: "### Angle Q\n- EIAS → centre patella → tubérosité tibiale.\n- Normal : < 15° homme, < 20° femme. Augmenté → facteur d'instabilité patellaire." }
      ]
    }
  ],
  rules: [
    {
      id: "lca",
      name: "Rupture du ligament croisé antérieur (LCA)",
      weight: 3.5,
      criteria: [
        { field: "lachman", op: "is", value: "Positif" },
        { field: "tiroir_ant", op: "is", value: "Positif" },
        { field: "episodes_entorse", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" },
        { field: "gonflement_rapide", op: "is", value: "Positif" },
        { field: "flags_instabilite", op: "is", value: "Positif" },
        { field: "age", op: "lt", value: 45 }
      ],
      minMatch: 3
    },
    {
      id: "menisque_interne",
      name: "Lésion méniscale (interne le plus souvent)",
      weight: 3,
      criteria: [
        { field: "mcmurray", op: "is", value: "Positif" },
        { field: "thessaly", op: "is", value: "Positif" },
        { field: "palpation_interligne", op: "in", value: ["Interne", "Les deux"] },
        { field: "episode_blocage", op: "is", value: "Positif" },
        { field: "douleur_flexion_forcee", op: "is", value: "Positif" },
        { field: "apley_grinding", op: "is", value: "Positif" }
      ],
      minMatch: 3
    },
    {
      id: "femoro_patellaire",
      name: "Syndrome douloureux fémoro-patellaire",
      weight: 3,
      criteria: [
        { field: "douleur_localisation", op: "is", value: "Antérieure / patellaire" },
        { field: "douleur_escalier", op: "is", value: "Positif" },
        { field: "zohlen", op: "is", value: "Positif" },
        { field: "palpation_patella", op: "is", value: "Positif" },
        { field: "crepitement_patella", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Progressif" }
      ],
      minMatch: 4
    },
    {
      id: "instabilite_patellaire",
      name: "Instabilité patellaire (récidive de subluxation/luxation)",
      weight: 3,
      criteria: [
        { field: "apprehension_patella", op: "is", value: "Positif" },
        { field: "q_angle", op: "is", value: "Positif" },
        { field: "episodes_entorse", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Antérieure / patellaire" },
        { field: "age", op: "lt", value: 35 }
      ],
      minMatch: 3
    },
    {
      id: "lcm",
      name: "Entorse du ligament collatéral médial (LCM)",
      weight: 2.5,
      criteria: [
        { field: "stress_m_medial", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Interne" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" }
      ],
      minMatch: 2
    },
    {
      id: "lcl",
      name: "Entorse du ligament collatéral latéral (LCL)",
      weight: 2.5,
      criteria: [
        { field: "stress_lat", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Externe" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" }
      ],
      minMatch: 2
    },
    {
      id: "gonarthrose",
      name: "Gonarthrose",
      weight: 2.5,
      criteria: [
        { field: "crepitement_patella", op: "is", value: "Positif" },
        { field: "alignement", op: "is", value: "Positif" },
        { field: "age", op: "gt", value: 50 },
        { field: "mode_debut", op: "is", value: "Progressif" },
        { field: "amyotrophie_quad", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "in", value: ["Interne", "Externe", "Diffuse"] }
      ],
      minMatch: 4
    },
    {
      id: "tendinopathie_rotulien",
      name: "Tendinopathie rotulienne / quadricipitale",
      weight: 2,
      criteria: [
        { field: "palpation_tendon_rotulien", op: "is", value: "Positif" },
        { field: "douleur_localisation", op: "is", value: "Antérieure / patellaire" },
        { field: "douleur_escalier", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Progressif" }
      ],
      minMatch: 2
    },
    {
      id: "lcp",
      name: "Rupture du ligament croisé postérieur (LCP)",
      weight: 2.5,
      criteria: [
        { field: "tiroir_post", op: "is", value: "Positif" },
        { field: "mode_debut", op: "is", value: "Brutal (traumatique)" },
        { field: "flags_trauma", op: "is", value: "Positif" }
      ],
      minMatch: 2
    }
  ]
};
