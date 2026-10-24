// Carte corporelle interactive : clic sur la zone douloureuse → module d'examen.
window.BODYMAP = (() => {

  const zone = (x, y, rx, ry, mod, label) =>
    `<g class="zone" data-module="${mod}">
       <ellipse class="hotzone" cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"></ellipse>
       <text class="zone-label" x="${x}" y="${y + ry + 11}" text-anchor="middle">${label}</text>
     </g>`;

  const silhouette = (view) => `
    <g class="body">
      <circle cx="100" cy="30" r="17" class="limb"/>
      <rect x="92" y="46" width="16" height="10" rx="3" class="limb"/>
      <path d="M70,60 L130,60 Q141,60 142,74 L137,120 Q135,131 126,132 L74,132 Q65,131 63,120 L58,74 Q59,60 70,60 Z" class="limb"/>
      <path d="M62,74 C50,92 46,120 47,152 C48,170 50,180 49,190" class="limb arm"/>
      <path d="M138,74 C150,92 154,120 153,152 C152,170 150,180 151,190" class="limb arm"/>
      <path d="M85,130 C81,175 81,225 84,268 L83,320 C83,330 80,338 79,346" class="limb leg"/>
      <path d="M115,130 C119,175 119,225 116,268 L117,320 C117,330 120,338 121,346" class="limb leg"/>
      <ellipse cx="76" cy="352" rx="12" ry="6" class="limb foot"/>
      <ellipse cx="124" cy="352" rx="12" ry="6" class="limb foot"/>
      <path d="M74,132 L126,132" class="limb" style="stroke-width:0"/>
    </g>`;

  const face = `
    <svg viewBox="0 0 200 375" role="img" aria-label="Bonhomme vue de face — cliquez la zone douloureuse">
      ${silhouette("face")}
      ${zone(66, 70, 15, 11, "scapulalgies", "Épaule")}
      ${zone(134, 70, 15, 11, "scapulalgies", "Épaule")}
      ${zone(83, 205, 13, 15, "gonalgies", "Genou")}
      ${zone(117, 205, 13, 15, "gonalgies", "Genou")}
      ${zone(82, 322, 11, 13, "cheville", "Cheville")}
      ${zone(118, 322, 11, 13, "cheville", "Cheville")}
    </svg>`;

  const back = `
    <svg viewBox="0 0 200 375" role="img" aria-label="Bonhomme vue de dos — cliquez la zone douloureuse">
      ${silhouette("back")}
      ${zone(100, 57, 13, 10, "cervicalgies", "Cervical")}
      ${zone(66, 78, 15, 12, "scapulalgies", "Scapula")}
      ${zone(134, 78, 15, 12, "scapulalgies", "Scapula")}
      ${zone(100, 112, 21, 18, "lombalgies", "Lombaire")}
      ${zone(100, 133, 17, 10, "lombalgies", "Sacro-iliaque")}
    </svg>`;

  return { face, back };
})();
