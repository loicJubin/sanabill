# sanabill

Site vitrine de [sanabill.ch](https://www.sanabill.ch), construit avec Jekyll (FR uniquement).

## Lancer le site en local

```sh
bundle install
bundle exec jekyll serve
```

### Pourquoi la gem `github-pages` (et pas Jekyll 4)

Le site est publié par GitHub Pages, qui compile avec ses propres versions : Jekyll 3.10, l'ancien compilateur Ruby Sass 3.7 et des plugins figés (liste officielle : <https://pages.github.com/versions/>). Le `Gemfile` utilise la gem `github-pages`, qui installe exactement ces versions : si le site compile en local, il compile aussi en ligne.

Ce choix fait suite à un build GitHub Pages en échec (septembre 2026). Le site était développé avec Jekyll 4 (Dart Sass), qui acceptait `clamp(1.625rem, 1.2rem + 1.6vw, 2.375rem)`, alors que Ruby Sass tente de calculer `1.2rem + 1.6vw` et échoue (« Incompatible units: 'vw' and 'rem' »).

Conséquences pour l'écriture du SCSS :

- Dans un calcul qui mélange des unités (`rem`, `vw`, `%`…), utiliser `calc()` : `clamp(1.625rem, calc(1.2rem + 1.6vw), 2.375rem)`.
- Pas de syntaxe propre à Dart Sass (`@use`, `@forward`, `math.div`, `color.mix`…) : Ruby Sass ne la connaît pas.
- Mettre à jour avec `bundle update github-pages` quand GitHub publie une nouvelle version.
- Si Sass signale « Invalid US-ASCII character », le terminal n'est pas en UTF-8 : lancer avec `LANG=C.UTF-8`.

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
