# Azur Elec Dépannage — site web

Dépôt du site vitrine statique. Les fichiers publics sont dans le dossier [`site/`](site/).

## Prévisualisation locale

```powershell
cd site
python -m http.server 8080
```

Ouvrir http://localhost:8080

## Publication GitHub Pages

Le workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publie automatiquement le contenu de `site/` à chaque push sur `main` (le site public est dans `site/`, pas à la racine du dépôt).

### Option rapide (GitHub CLI)

```powershell
cd "c:\Users\isham\Documents\jean meca"
gh auth login
.\publish-github.ps1
```

### Option manuelle

1. Créer un dépôt vide sur GitHub (sans README).
2. Lier le dépôt local et pousser :

```powershell
cd "c:\Users\isham\Documents\jean meca"
git remote add origin https://github.com/VOTRE_COMPTE/NOM_DU_REPO.git
git branch -M main
git push -u origin main
```

3. Sur GitHub : **Settings → Pages** — la source doit être **GitHub Actions** (configuré par le workflow).

Voir aussi [`site/README.md`](site/README.md) pour la structure du site et la mise en ligne sur un hébergeur classique.
