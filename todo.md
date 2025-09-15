# Site Animé Comique - Exorcisme MVP

## Fonctionnalités principales:
1. Scène d'exorcisme avec archevêque, homme aux cheveux roux, et économe
2. Animations CSS pour les personnages
3. Interactions comiques (boutons pour déclencher l'exorcisme)
4. Effets visuels (particules, tremblements, etc.)

## Fichiers à créer:
1. **src/pages/Index.tsx** - Page principale avec la scène d'exorcisme
2. **src/components/Archbishop.tsx** - Composant archevêque avec animations
3. **src/components/RedheadMan.tsx** - Composant homme aux cheveux roux
4. **src/components/Economist.tsx** - Composant économe avec outils
5. **src/components/ExorcismScene.tsx** - Scène principale avec interactions
6. **src/styles/animations.css** - Animations CSS personnalisées
7. **index.html** - Mise à jour du titre

## Relations:
- Index.tsx importe ExorcismScene
- ExorcismScene orchestre Archbishop, RedheadMan, et Economist
- Chaque personnage a ses propres animations et états
- animations.css contient toutes les animations CSS