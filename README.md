# Canvas

Canvas it is an HTML element used to draw shapes, animations and graphics. It is similar to the `img` tag with only the diference that it has no `src` and `alt` attributes. Its main attributes are `width` and `height`.

Canvas only supports two primitive shapes: rectangles and paths (lists of points connected by lines).

Like major HTML elements, canvas can contain `margin`, `border` and `background`, however, this properties do not affect the shapes within the canvas. Moreover, is preferable to set `width` and `height` directly in the HTML element. If these properties are applied through CSS, the canvas will be distorted.

## Fallback content

Navegadores antigos podem não suportar o canvas, dessa forma, há como informar um **conteúdo alternativo** que será exibido quando o elemento não puder ser renderizado. Este conteúdo alternativo, deve ser **inserido entre a tag de abertura e fechamento** do canvas.

Older browsers may not support canvas, therefore, to display some content if the the browser cannot load the canvas is a good choice.

Example
```html
<canvas id='canvas' width='150' height='150'>
    Fallback content
</canvas>
```

## Rendering context

The rendering context consists to set dimensions of the shapes we want. There are two contexts: `2d` and `3d`.

Example
```js
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
```

Firstly we must select the canvas element. After, we set its context using the `getContext()` method.

## Rectangle shapes

There are three ways to draw rectangles using Canvas API, through `fillRect()`, `strokeRect()` and `clearRect()`. These three functions expects 4 parameters: x, y, width and height. The first two parameters are coordinates that refers to the x position and y position at the cartesian plane. These two parameters are relative by default to the top left corner of the canvas. The last two parameters, refers to shapes width and height.

### Basic rectangle

The `fillRect()` function creates a rectangle shape with it's background filled by default.

Example
```js
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 50, 50);
```

### Transparent rectangle

The `strokeRect()` function creates a rectangle without background and only with border.

```js
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.strokeRect(10, 10, 50, 50);
```

### Clearing shapes background

The `clearRect()` function clears the rectangle's background.

```js
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.clearRect(15, 15, 40, 40);
```