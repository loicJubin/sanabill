# sanabill

Site vitrine de [sanabill.ch](https://www.sanabill.ch), construit avec Jekyll (FR uniquement).

## Lancer le site en local

```sh
bundle install
bundle exec jekyll serve
```

## Structure

- `_data/*.yml` : tous les textes du site (un fichier par page, plus `header.yml` et `footer.yml`).
- `_includes/` : gabarits des pages (`index.html`, `services.html`, `zero.html`, `about.html`, `contact.html`) et composants partagés (`page-hero`, `section-head`, `cta`, `icon`, `sparkline`, `tally`).
- `_sass/` : design system.
  - `abstracts/_variables.scss` : couleurs, espacements et typographie.
  - `components/_zero-motif.scss` : l'anneau « 0 », signature visuelle de ZERO.
  - `components/_kpi.scss` : les cartes chiffrées au style du tableau de bord ZERO.
- `assets/fonts/` : police Inter, auto-hébergée (licence OFL).

## À valider avant d'activer

- Citations utilisateurs de ZERO : elles sont désactivées par défaut. Pour les afficher, passer `testimonial.enabled: true` dans `_data/zero.yml`, une fois les citations validées par les personnes concernées.
- Pages légales (`fr/mentions-legales.html`, `fr/protection-des-donnees.html`) : à faire valider par un·e juriste. Compléter les mentions légales avec le numéro IDE et le nom de la personne responsable si nécessaire. La mesure d'audience (Umami Cloud, région UE) est déclarée dans `fr/protection-des-donnees.html` : mettre à jour la déclaration si l'outil change.
