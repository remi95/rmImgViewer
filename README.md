# rmImgViewer

_Développé par [Rémi Mafat](http://www.remimafat.fr)._  
Vous pouvez voir un [exemple basique](http://www.remimafat.fr/projet/rm-img-viewer) sur mon site web.

[English version](#rmimgviewer-english)

Ce plugin Javascript permet simplement de transformer une galerie d'image en diaporama manuel plein écran.  

## Utilisation 

### Pour l'utilisateur

Rien de plus simple : cliquez sur l'image de votre choix parmis celles de la galerie à laquelle est affectée le plugin, puis faites défiler les images avec les flèches. Pour quitter le diaporama, cliquez sur la zone d'arrière-plan.

### Prérequis

Vous aurez besoin de **jQuery** pour utiliser ce plugin. Vous pouvez utilisez un _cdn_ comme suit, ou bien [télécharger](https://jquery.com/download/) un fichier, comme vous préférerez.   
Pensez à bien importer le **CSS** et le fichier **JS**.

```html
<link rel="stylesheet" type="text/css" href="css/rm-img-viewer.css">
...
<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/rm-img-viewer.js"></script>
```

### Utilisation simple

Ensuite, il vous suffit d'appliquer le plugin sur l'élément parent de vos images.

```html
<div id="gallery">
	<img src="img/img_1.jpeg">
	<img src="img/img_2.jpeg">
	<img src="img/img_3.jpeg">
	...
	<img src="img/img_10.jpeg">
</div>
```
```javascript
$('#gallery').rmImgViewer();
```

### Paramètres

Sachez qu'il est possible de personnaliser certains éléments du **rmImgViewer**.  
Plus précisemment vous pouvez modifier :  
- Le temps de défilement des images
- La couleur du fond
- Le curseur de la souris qui devient `pointer` au survol de vos images, ou non
- Les images utilisées pour les boutons de droite et de gauche
- Le curseur de la souris au survol du fond du diaporama

Par **défaut**, les paramètres sont les suivants.

```javascript
$('#gallery').rmImgViewer({
	slideTime: 500,		// (int) temps en millisecondes
	bgColor: '0, 0, 0, 0.7',	// (string) format rgba()
	pointerOnImg: true,		// (boolean) 'pointer' par défaut
	imgBtnLeft: 'https://image.flaticon.com/icons/svg/226/226170.svg',	// (string) Url de l'image
	imgBtnRight: 'https://image.flaticon.com/icons/svg/226/226171.svg', // (string) Url de l'image
	cursorExit: 'pointer',		// (string) type de curseur
});
```

Merci à [Flaticon](https://www.flaticon.com/) à qui j'emprunte les images des flèches. 

# rmImgViewer - English

_Developed by [Rémi Mafat](http://www.remimafat.fr)._  
You can see a [basic example](http://www.remimafat.fr/projet/rm-img-viewer) on my website.

This Javascript plugin simply turn your image gallery into a full-screen slideshow.

## How to use it

### For users

Really easy : click on the image you want from the gallery, then slide by clicking on the arrows. For close the slideshow, just click on the background.

### Requirements

You need **jQuery** to use this plugin. you can use the _cdn_ like me or [download](https://jquery.com/download/) a file, as you want.   
Don't forget to import **CSS** and **JS** files.

```html
<link rel="stylesheet" type="text/css" href="css/rm-img-viewer.css">
...
<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/rm-img-viewer.js"></script>
```

### Easy use

Just apply the plugin on the parent element of your images.

```html
<div id="gallery">
	<img src="img/img_1.jpeg">
	<img src="img/img_2.jpeg">
	<img src="img/img_3.jpeg">
	...
	<img src="img/img_10.jpeg">
</div>
```
```javascript
$('#gallery').rmImgViewer();
```

### Parameters

You can custom some elements of **rmImgViewer**.  
More precisely, you can edit :  
- Duration of slides animation
- Background color
- Cursor is a `pointer` on hover images or not
- Images using for left and right buttons
- Cursor on hover the background 

By **default**, parameters are next.

```javascript
$('#gallery').rmImgViewer({
	slideTime: 500,		// (int) temps en millisecondes
	bgColor: '0, 0, 0, 0.7',	// (string) format rgba()
	pointerOnImg: true,		// (boolean) 'pointer' par défaut
	imgBtnLeft: 'https://image.flaticon.com/icons/svg/226/226170.svg',	// (string) Url de l'image
	imgBtnRight: 'https://image.flaticon.com/icons/svg/226/226171.svg', // (string) Url de l'image
	cursorExit: 'pointer',		// (string) type de curseur
});
```

Thanks to [Flaticon](https://www.flaticon.com/) for the images of arrows.