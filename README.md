# Canvas

**Canvas** é um elemento HTML utilizado para **representar** forma **geométricas** simples. É semelhante ao elemento img, entretanto, apenas possui os atributos **width** e **height**. O canvas **suporta** apenas a forma **retângulo**, sendo assim, todas as outras são criadas a partir de uma combinação de um ou mais caminhos (paths).

Assim como a maioria dos elementos HTML, o **canvas** pode conter **margem**, **borda** e **cor de fundo**, entretanto, essas propriedades não afetam a forma geométrica interna.

## Conteúdo alternativo

Navegadores antigos podem não suportar o canvas, dessa forma, há como informar um **conteúdo alternativo** que será exibido quando o elemento não puder ser renderizado. Este conteúdo alternativo, deve ser **inserido entre a tag de abertura e fechamento** do canvas.

Exemplo
```html
<canvas id='identificador' width='150' height='150'>
    Conteúdo alternativo aqui
</canvas>
```

## Contexto de renderização

O contexto de renderização consiste na definição **dimensional** da forma que desejamos exibir, podendo ser **2d** ou **3d**. Vejamos abaixo como utilizar o contexto de renderização.

Exemplo
```js
const canvasName = document.getElementById('identificador')
const canvasContext = canvas.getContext('2d')
```

Primeiro devemos **selecionar** o elemento **canvas** na árvore DOM. Depois, definimos seu contexto usando o método **getContext()**.