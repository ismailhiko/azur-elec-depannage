# Azur Elec Dépannage — Site vitrine

Site vitrine statique pour **Azur Elec Dépannage** (EI Jean Payen), électricien dépannage et petits travaux dans les Alpes-Maritimes (06).

## Structure

```
site/
├── index.html           # Page d'accueil
├── mentions-legales.html
├── css/style.css
├── js/main.js
└── assets/
    └── logo.png
```

## Prévisualisation locale

Ouvrir `index.html` dans un navigateur, ou lancer un serveur local :

```bash
cd site
python -m http.server 8080
```

Puis ouvrir http://localhost:8080

## Contact

La section contact propose des liens directs :
- **Appel** : `tel:+33652658183`
- **SMS** : ouvre la messagerie du téléphone
- **E-mail** : `mailto:jeanpayen6@gmail.com`

La carte Google Maps affiche la zone d'intervention (Alpes-Maritimes). Pour centrer sur une adresse précise, modifier l'URL de l'iframe dans `index.html`.

## Mise en ligne

### GitHub Pages

Le dépôt parent contient un workflow qui déploie ce dossier (`site/`) sur chaque push vers `main`. Après le premier push, activer **Settings → Pages → Source : GitHub Actions** sur le dépôt GitHub.

### Autre hébergement

1. Héberger le dossier `site/` (Netlify, Vercel, OVH, etc.)
2. Configurer un nom de domaine (ex. `azurelec-depannage.fr`)
3. Mettre à jour la section hébergement dans `mentions-legales.html`

## Tarifs affichés (particuliers)

| Prestation | Prix |
|---|---|
| Dépannage (déplacement + 1ʳᵉ heure) | 125 € TTC |
| Heure supplémentaire | 40 € TTC |
| Fournitures | Sur devis |
| Majoration week-end | * Sur demande |
