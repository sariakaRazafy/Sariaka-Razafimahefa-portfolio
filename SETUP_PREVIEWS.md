# 📸 Configuration des Aperçus de Projets

Excellent! J'ai ajouté la fonctionnalité de prévisualisation des projets à votre portfolio. Voici comment ça fonctionne:

## 🎯 Fonctionnalités Implémentées

### 1. Composant PreviewModal (`components/PreviewModal.tsx`)

- Modal responsive avec galerie d'images
- Navigation Précédent/Suivant entre les images
- Fermeture avec le bouton X
- Compteur d'images (ex: "2 / 3")
- Fond sombre avec effet blur pour focus sur l'image

### 2. Bouton Aperçu

- Nouveau bouton "📸 Aperçu" sur chaque carte de projet
- Stylisé avec la palette bleue de votre portfolio
- N'apparaît que si des images sont configurées

### 3. Dossier de Prévisualisation

- Créé: `/public/previews/`
- Pour organiser les images d'interface de vos projets

## 📋 Prochaines Étapes

### Étape 1: Préparer vos Images

1. Prenez des captures d'écran de chacun de vos projets
2. Nommez-les selon ce modèle:
   - **Flowtalk**: `flowtalk-1.png`, `flowtalk-2.png`, `flowtalk-3.png`
   - **Medipass**: `medipass-1.png`, `medipass-2.png`, `medipass-3.png`
   - **Eagle-AI**: `eagle-ai-1.png`, `eagle-ai-2.png`, `eagle-ai-3.png`

### Étape 2: Placer les Images

1. Placez les images PNG/JPG dans `/public/previews/`
2. Les chemins doivent correspondre exactement à ce qui est configuré dans `lib/constants.ts`

### Étape 3: Vérifier la Configuration

La configuration est déjà en place dans `lib/constants.ts`:

```typescript
previewImages: [
  "/previews/flowtalk-1.png",
  "/previews/flowtalk-2.png",
  "/previews/flowtalk-3.png",
];
```

## 🎨 Recommandations pour les Images

| Propriété      | Valeur                                         |
| -------------- | ---------------------------------------------- |
| **Format**     | PNG ou JPG                                     |
| **Taille**     | 1200x800px (ratio 3:2)                         |
| **Résolution** | 72 DPI minimum                                 |
| **Contenu**    | Captures d'écran de l'interface                |
| **Nombre**     | 2-4 images par projet (vous avez 3 par projet) |

## 🔧 Personnalisation

### Ajouter plus d'images à un projet

Modifiez `lib/constants.ts`:

```typescript
previewImages: [
  "/previews/flowtalk-1.png",
  "/previews/flowtalk-2.png",
  "/previews/flowtalk-3.png",
  "/previews/flowtalk-4.png", // Image supplémentaire
];
```

### Changer le nombre d'images par défaut

Modifiez les configurations dans `projectsConfig` en fonction de votre besoin.

### Masquer le bouton pour un projet

Supprimez ou videz la propriété `previewImages` pour ce projet.

## 📱 Comportement

**Ordinateur de bureau:**

- Image affichée en taille maximale avec contrainte de hauteur
- Navigation avec boutons "Précédent" et "Suivant"
- Modal centré sur l'écran

**Mobile:**

- Modal responsive et plein écran
- Images adaptées à la taille de l'écran
- Navigation tactile facile

## ✅ Vérification

Les fichiers modifiés/créés:

1. ✅ `/app/page.tsx` - Ajout du state et du bouton aperçu
2. ✅ `/components/PreviewModal.tsx` - Nouveau composant modal
3. ✅ `/public/previews/` - Nouveau dossier pour les images
4. ✅ `/lib/constants.ts` - Configuration des previewImages (déjà en place)

## 🚀 Prêt à l'emploi!

Le code est prêt. Une fois que vous ajoutez les images PNG dans `/public/previews/`, les boutons "Aperçu" seront automatiquement fonctionnels!
