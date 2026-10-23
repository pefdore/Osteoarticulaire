# 🩺 Bilan Clinique — Osteoarticulaire

Web app **100 % hors ligne** de bilan clinique par problématique : saisie de l'examen clinique, rappels « comment faire » pour chaque test, et **orientation diagnostique** automatique.

## Modules disponibles
- 🦴 **Scapulalgies** — coiffe, conflit, capsulite, instabilité, dyskinésie scapulaire…
- 🦵 **Gonalgies** — LCA/LCP, ménisques, fémoro-patellaire, gonarthrose…
- 🦶 **Douleurs de cheville** — entorses, tendinopathies, instabilité, conflit antérieur…
- 🧍 **Lombalgies** — lombalgie commune, lombosciatique, spondyloarthrite, sacro-iliaques…
- 🧠 **Cervicalgies** — cervicalgie commune, discoradiculalgie, whiplash, céphalées cervicogéniques…

## Fonctionnalités
- Saisie structurée : anamnèse, inspection/palpation, amplitudes articulaires, manœuvres dynamiques, testing neuro-musculaire
- Rappel « ❓ Comment faire » pour chaque test (Neer, Lachman, McMurray, Lasègue, Spurling, Schober…)
- Drapeaux rouges par module avec alerte immédiate
- Orientation diagnostique : hypothèses classées par concordance, avec critères déclencheurs et notes cliniques
- Bilans enregistrés localement (localStorage) — aucune donnée envoyée
- PWA installable : « Ajouter à l'écran d'accueil » puis utilisable en mode avion

## Utilisation
Ouvrez simplement l'URL GitHub Pages du dépôt. Aucun serveur, aucune inscription, aucune donnée transmise : tout reste sur l'appareil.

> ⚠️ Outil d'aide à l'orientation clinique — ne remplace pas le jugement du praticien.

## Tech
HTML/CSS/JS vanilla, aucun framework, aucune dépendance. Service worker pour le cache offline.
