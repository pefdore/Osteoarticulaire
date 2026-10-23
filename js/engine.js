// Moteur d'orientation diagnostique.
// Une problématique (module) définit :
//  - sections : [{id, title, fields:[field]}]
//  - fields   : {id, label, type: "text"|"number"|"select"|"multi"|"tri",
//                options?: [..], unit?, min?, max?, howto: string (markdown simplé)}
//  - rules    : [{id, name, weight (base), note?, criteria: [clause...], minMatch?}]
// Une clause : {field, op: "is"|"isNot"|"in"|"notIn"|"any"|"none"|"filled"|"lt"|"gt", value}
//   - multi/tri : "is"/"in" => l'option est présente ; "any" => au moins une option cochée
//   - nombre    : "lt"/"gt" comparaison numérique ; "filled" => renseigné
// Score : chaque règle matchée rapporte weight * (matched/total avec bonus exhaustivité),
// normalisé en %. Règles avec minMatch non atteint => ignorées.

const Engine = (() => {

  function fieldValue(form, fieldId) {
    return form[fieldId];
  }

  function clauseMatches(form, clause) {
    const v = fieldValue(form, clause.field);
    const op = clause.op || "is";
    switch (op) {
      case "is": case "in":
        if (Array.isArray(v)) return v.includes(clause.value);
        return v === clause.value;
      case "isNot": case "notIn":
        if (Array.isArray(v)) return !v.includes(clause.value);
        return v !== clause.value;
      case "any":
        return Array.isArray(v) ? v.length > 0 : (v !== undefined && v !== null && v !== "");
      case "none":
        return Array.isArray(v) ? v.length === 0 : (v === undefined || v === null || v === "");
      case "filled":
        return v !== undefined && v !== null && v !== "";
      case "empty":
        return v === undefined || v === null || v === "";
      case "lt":
        return v !== undefined && v !== null && v !== "" && Number(v) < Number(clause.value);
      case "gt":
        return v !== undefined && v !== null && v !== "" && Number(v) > Number(clause.value);
      case "gte":
        return v !== undefined && v !== null && v !== "" && Number(v) >= Number(clause.value);
      case "lte":
        return v !== undefined && v !== null && v !== "" && Number(v) <= Number(clause.value);
      default:
        return false;
    }
  }

  function evaluateRule(form, rule) {
    const clauses = rule.criteria;
    let matched = 0;
    const reasons = [];
    for (const c of clauses) {
      if (clauseMatches(form, c)) {
        matched++;
        if (c.reason) reasons.push(c.reason);
      }
    }
    const minMatch = rule.minMatch || 1;
    if (matched < minMatch) return null;
    const ratio = matched / clauses.length;
    // score de 0.5 (seulement minMatch atteint) à 1.0 (toutes clauses)
    const base = rule.minMatch && rule.minMatch >= clauses.length
      ? 1
      : 0.5 + 0.5 * ((matched - minMatch) / Math.max(1, clauses.length - minMatch));
    const score = Math.round(rule.weight * Math.min(base, ratio + 0.5) * 100) / 100;
    return { id: rule.id, name: rule.name, note: rule.note || "", matched, total: clauses.length, reasons, score };
  }

  function evaluate(form, module) {
    const results = [];
    for (const rule of module.rules) {
      const r = evaluateRule(form, rule);
      if (r) results.push(r);
    }
    const maxScore = Math.max(...results.map(r => r.score), 1);
    results.sort((a, b) => b.score - a.score);
    return results.map(r => {
      const pct = Math.round((r.score / maxScore) * 100);
      const level = pct >= 70 ? "strong" : pct >= 45 ? "moderate" : "weak";
      return { ...r, pct, level };
    });
  }

  // Drapeaux rouges transversaux (douleur non mécanique)
  const GENERIC_FLAGS = [
    { field: "flags_fievre", label: "Fièvre / frissons" },
    { field: "flags_perte_poids", label: "Perte de poids inexpliquée" },
    { field: "flags_nocturne", label: "Douleur nocturne non mécanique / au repos" },
    { field: "flags_trauma", label: "Traumatisme récent important" },
    { field: "flags_neuro", label: "Déficit neurologique d'installation rapide" },
    { field: "flags_inflam", label: "Signes inflammatoires (rougeur, chaleur, œdème)" }
  ];

  function checkRedFlags(form, extraFields) {
    const hits = [];
    const fields = extraFields || GENERIC_FLAGS;
    for (const f of fields) {
      const v = form[f.field];
      if (v === true || v === "oui" || v === "Positif" || (Array.isArray(v) && v.length > 0 && f.list)) {
        hits.push(f.label);
      }
    }
    return hits;
  }

  return { evaluate, checkRedFlags, GENERIC_FLAGS };
})();
