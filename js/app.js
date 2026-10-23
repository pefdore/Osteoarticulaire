// App principale : routing hash, formulaires dynamiques, sauvegarde locale.
(function () {
  "use strict";

  const STORE_KEY = "bilan-clinique-sessions";
  const view = document.getElementById("view");
  const topnav = document.getElementById("topnav");
  const howtoDialog = document.getElementById("howto-dialog");
  const howtoContent = document.getElementById("howto-content");
  let currentForm = {};

  // ---------- utils ----------
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function mdLite(text) {
    const lines = esc(text).split("\n");
    let html = "";
    let inList = false;
    for (const line of lines) {
      const t = line.trim();
      if (t.startsWith("### ")) {
        if (inList) { html += "</ul>"; inList = false; }
        html += "<h4>" + t.slice(4) + "</h4>";
      } else if (t.startsWith("- ")) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += "<li>" + inline(t.slice(2)) + "</li>";
      } else if (t === "") {
        if (inList) { html += "</ul>"; inList = false; }
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        html += "<p>" + inline(t) + "</p>";
      }
    }
    if (inList) html += "</ul>";
    return html;
  }

  function inline(t) {
    return t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function getModule(id) {
    return window.MODULES[id];
  }

  function saveSessions(sessions) {
    localStorage.setItem(STORE_KEY, JSON.stringify(sessions));
  }

  function loadSessions() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
    catch (e) { return []; }
  }

  // ---------- navigation ----------
  function renderNav() {
    let html = "";
    for (const id in window.MODULES) {
      const m = window.MODULES[id];
      html += `<a href="#/${id}" data-nav="${id}">${m.icon} ${esc(m.name)}</a>`;
    }
    html += `<a href="#/bilans" data-nav="bilans">📋 Bilans</a>`;
    topnav.innerHTML = html;
    const hash = location.hash || "#/";
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.remove("active"));
    const id = hash.replace("#/", "");
    const link = document.querySelector(`[data-nav="${id}"]`);
    if (link) link.classList.add("active");
  }

  function route() {
    const hash = location.hash || "#/";
    const parts = hash.replace("#/", "").split("/");
    const mod = getModule(parts[0]);
    if (mod && parts.length === 1) return renderExam(mod);
    if (mod && parts[1] === "resultats") return renderResults(mod);
    if (parts[0] === "bilans") return renderSaved();
    renderHome();
  }

  // ---------- home ----------
  function renderHome() {
    let cards = "";
    for (const id in window.MODULES) {
      const m = window.MODULES[id];
      cards += `<a class="home-card" href="#/${m.id}">
        <span class="icon">${m.icon}</span>
        <span class="name">${esc(m.name)}</span>
        <span class="desc">${esc(m.desc)}</span>
      </a>`;
    }
    view.innerHTML = `
      <h1>Bilan clinique par problématique</h1>
      <p class="subtitle">Choisissez une région, saisissez l'examen clinique et obtenez une orientation diagnostique. Les rappels « comment faire » accompagnent chaque point.</p>
      <div class="grid-home">${cards}</div>
      <div class="card" style="margin-top:1.5rem">
        <h3>✔️ 100 % hors ligne</h3>
        <p style="font-size:0.9rem;color:var(--muted)">Cette application fonctionne sans connexion internet. Ajoutez-la à votre écran d'accueil (mobile : menu → « Ajouter à l'écran d'accueil ») pour l'utiliser comme une app. Les bilans sont enregistrés uniquement sur cet appareil.</p>
      </div>
    `;
  }

  // ---------- form rendering ----------
  function fieldHTML(f) {
    const howto = f.howto ? `<button class="howto-btn" data-howto="${esc(f.id)}" data-label="${esc(f.label)}">❓ Comment faire</button>` : "";
    let input = "";
    switch (f.type) {
      case "text":
        input = `<input type="text" data-field="${f.id}">`;
        break;
      case "number":
        input = `<input type="number" data-field="${f.id}" ${f.min !== undefined ? `min="${f.min}"` : ""} ${f.max !== undefined ? `max="${f.max}"` : ""}>`;
        break;
      case "select":
        input = `<select data-field="${f.id}">
          <option value="">—</option>
          ${f.options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}
        </select>`;
        break;
      case "tri":
        input = `<div class="options">
          <button class="chip tri" data-field="${f.id}" data-value="Positif"><span class="state"></span></button>
          <button class="chip tri" data-field="${f.id}" data-value="Négatif"><span class="state"></span></button>
        </div>`;
        break;
    }
    return `<div class="field"><label>${esc(f.label)}${howto}</label>${input}</div>`;
  }

  function renderExam(mod) {
    currentForm = { _module: mod.id };
    const flags = mod.flagsFields || Engine.GENERIC_FLAGS;
    let sections = "";
    for (const s of mod.sections) {
      sections += `<h2>${esc(s.title)}</h2><div class="card">${s.fields.map(fieldHTML).join("")}</div>`;
    }
    const flagsHTML = flags.map(f =>
      `<button class="chip" data-flags="${f.field}">${esc(f.label)}</button>`
    ).join("");
    view.innerHTML = `
      <a href="#/" class="btn secondary small">← Accueil</a>
      <h1>${mod.icon} ${esc(mod.name)}</h1>
      <p class="subtitle">${esc(mod.desc)}</p>
      <h2>🚩 Drapeaux rouges</h2>
      <div class="card">
        <p style="font-size:0.85rem;color:var(--muted);margin-top:0">Cochez tout élément présent. Un drapeau rouge impose une prudence diagnostique (imagerie, avis spécialisé) avant tout traitement mécanique.</p>
        <div class="options" id="flags">${flagsHTML}</div>
      </div>
      ${sections}
      <h2>👤 Patient</h2>
      <div class="card">
        <div class="field"><label>Nom / identifiant (optionnel)</label><input type="text" data-field="_patient"></div>
        <div class="field"><label>Notes libres</label><textarea data-field="_notes" rows="3" style="width:100%;border:1px solid var(--border);border-radius:8px;padding:0.5rem;font-family:inherit"></textarea></div>
      </div>
      <div class="actions">
        <button class="btn" id="btn-eval">📊 Orientation diagnostique</button>
        <button class="btn secondary" id="btn-save">💾 Enregistrer</button>
        <button class="btn danger" id="btn-reset">Effacer</button>
      </div>
    `;
    bindExam(mod);
  }

  function bindExam(mod) {
    view.querySelectorAll(".chip.tri").forEach(btn => {
      btn.addEventListener("click", () => {
        const fid = btn.dataset.field;
        const val = btn.dataset.value;
        if (currentForm[fid] === val) {
          delete currentForm[fid];
          btn.classList.remove("selected", "pos", "neg");
        } else {
          currentForm[fid] = val;
          view.querySelectorAll(`.chip.tri[data-field="${fid}"]`).forEach(b => b.classList.remove("selected", "pos", "neg"));
          btn.classList.add("selected", val === "Positif" ? "pos" : "neg");
        }
      });
    });
    view.querySelectorAll(".chip[data-flags]").forEach(btn => {
      btn.addEventListener("click", () => {
        const fid = btn.dataset.flags;
        if (btn.classList.contains("selected")) {
          currentForm[fid] = "Négatif";
          btn.classList.remove("selected");
        } else {
          currentForm[fid] = "Positif";
          btn.classList.add("selected");
        }
      });
    });
    view.querySelectorAll("[data-field]:not(.chip)").forEach(el => {
      el.addEventListener("input", () => { currentForm[el.dataset.field] = el.value; });
      el.addEventListener("change", () => { currentForm[el.dataset.field] = el.value; });
    });
    view.querySelectorAll(".howto-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const fid = btn.dataset.howto;
        const section = mod.sections.flatMap(s => s.fields).find(f => f.id === fid);
        if (section && section.howto) {
          howtoContent.innerHTML = `<h4>${esc(btn.dataset.label)}</h4>${mdLite(section.howto)}`;
          howtoDialog.showModal();
        }
      });
    });
    document.getElementById("btn-eval").addEventListener("click", () => {
      saveCurrent(mod);
      location.hash = `#/${mod.id}/resultats`;
    });
    document.getElementById("btn-save").addEventListener("click", () => {
      saveCurrent(mod);
      location.hash = "#/bilans";
    });
    document.getElementById("btn-reset").addEventListener("click", () => {
      if (confirm("Effacer toutes les données de ce bilan ?")) {
        currentForm = { _module: mod.id };
        renderExam(mod);
      }
    });
  }

  function saveCurrent(mod) {
    const sessions = loadSessions();
    const idx = sessions.findIndex(s => s._id === currentForm._id);
    const record = {
      ...currentForm,
      _module: mod.id,
      _moduleName: mod.name,
      _date: new Date().toISOString(),
      _id: currentForm._id || (Date.now() + "-" + Math.random().toString(36).slice(2, 8))
    };
    if (idx >= 0) sessions[idx] = record; else sessions.push(record);
    currentForm = record;
    saveSessions(sessions);
  }

  // ---------- results ----------
  function renderResults(mod) {
    const form = currentForm._module === mod.id ? currentForm : restoreLast(mod.id);
    const flags = Engine.checkRedFlags(form, mod.flagsFields);
    const results = Engine.evaluate(form, mod);

    let flagsHTML = "";
    if (flags.length > 0) {
      flagsHTML = `<div class="alert red"><strong>🚩 Drapeaux rouges présents :</strong> ${flags.map(esc).join(" · ")}.<br>Orientation à revoir : imagerie et/ou avis spécialisé recommandés avant toute hypothèse mécanique.</div>`;
    }

    let cards = "";
    if (results.length === 0) {
      cards = `<div class="card">Aucune orientation ne ressort : complétez l'examen (au moins les tests spécifiques) puis relancez l'analyse.</div>`;
    }
    results.slice(0, 6).forEach(r => {
      cards += `<div class="dx-card ${r.level}">
        <div class="dx-name">${esc(r.name)} <span class="dx-score">concordance ${r.pct}% · ${r.matched}/${r.total} critères</span></div>
        <div class="score-bar"><div style="width:${r.pct}%"></div></div>
        ${r.reasons.length ? `<ul class="dx-reasons">${r.reasons.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${r.note ? `<div class="dx-note">${esc(r.note)}</div>` : ""}
      </div>`;
    });

    view.innerHTML = `
      <a href="#/${mod.id}" class="btn secondary small">← Modifier l'examen</a>
      <h1>📊 Orientation — ${esc(mod.name)}</h1>
      <p class="subtitle">Hypothèses classées par concordance avec les signes saisis. Aide à l'orientation clinique — ne remplace pas le jugement du praticien.</p>
      ${flagsHTML}
      <h2>Hypothèses diagnostiques</h2>
      <div class="results">${cards}</div>
      <div class="actions">
        <button class="btn" id="btn-save-res">💾 Enregistrer ce bilan</button>
        <a class="btn secondary" href="#/bilans">📋 Bilans enregistrés</a>
      </div>
    `;
    document.getElementById("btn-save-res").addEventListener("click", () => {
      saveCurrent(mod);
      location.hash = "#/bilans";
    });
  }

  function restoreLast(modId) {
    const sessions = loadSessions().filter(s => s._module === modId);
    const last = sessions[sessions.length - 1];
    const restored = last || { _module: modId };
    currentForm = restored;
    return restored;
  }

  // ---------- saved list ----------
  function renderSaved() {
    const sessions = loadSessions().slice().sort((a, b) => (b._date || "").localeCompare(a._date || ""));
    let html = "";
    if (sessions.length === 0) {
      html = `<div class="card">Aucun bilan enregistré. Réalisez un examen puis « Enregistrer ».</div>`;
    }
    for (const s of sessions) {
      const date = s._date ? new Date(s._date).toLocaleString("fr-FR") : "—";
      html += `<div class="card saved-list-item">
        <div>
          <strong>${esc(s._moduleName || s._module)}</strong> — <span class="saved-meta">${esc(s._patient || "sans nom")}</span><br>
          <span class="saved-meta">${esc(date)}</span>
        </div>
        <div>
          <button class="btn small" data-open="${s._id}">Ouvrir</button>
          <button class="btn danger small" data-del="${s._id}">Supprimer</button>
        </div>
      </div>`;
    }
    view.innerHTML = `
      <a href="#/" class="btn secondary small">← Accueil</a>
      <h1>📋 Bilans enregistrés</h1>
      <p class="subtitle">Stockés uniquement sur cet appareil (localStorage).</p>
      <div class="saved-list">${html}</div>
    `;
    view.querySelectorAll("[data-open]").forEach(btn => {
      btn.addEventListener("click", () => {
        const s = loadSessions().find(x => x._id === btn.dataset.open);
        if (s) {
          currentForm = s;
          location.hash = `#/${s._module}/resultats`;
        }
      });
    });
    view.querySelectorAll("[data-del]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (confirm("Supprimer ce bilan ?")) {
          saveSessions(loadSessions().filter(x => x._id !== btn.dataset.del));
          renderSaved();
        }
      });
    });
  }

  // ---------- init ----------
  window.addEventListener("hashchange", () => { renderNav(); route(); });
  window.addEventListener("online", () => document.getElementById("offline-badge").hidden = true);
  window.addEventListener("offline", () => document.getElementById("offline-badge").hidden = false);

  if (!navigator.onLine) document.getElementById("offline-badge").hidden = false;
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  renderNav();
  route();
})();
