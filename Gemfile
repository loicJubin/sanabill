source "https://rubygems.org"

# Le site est publié par GitHub Pages, qui compile avec ses propres versions
# (Jekyll 3.10, ancien compilateur Ruby Sass, plugins figés). La gem
# `github-pages` installe exactement ces versions en local : ce qui compile
# ici compile aussi en ligne. Avec Jekyll 4 (Dart Sass), certaines
# écritures acceptées localement faisaient échouer le build de GitHub Pages.
# Versions utilisées par GitHub Pages : https://pages.github.com/versions/
# Mise à jour : `bundle update github-pages`.
#
# Les plugins jekyll-seo-tag et jekyll-sitemap (déclarés dans _config.yml)
# sont inclus dans github-pages.
gem "github-pages", "~> 232", group: :jekyll_plugins

# Serveur web requis par `jekyll serve` depuis Ruby 3
gem "webrick", "~> 1.8"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
