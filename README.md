# Canvas

**Canvas** é um elemento HTML utilizado para **desenhar** gráficos e animações. Ele apenas possui os atributos **width** e **height**. 

O canvas **suporta** apenas a forma geométrica **retângulo**, sendo assim, todas as outras formas geométricas são criadas a partir de uma combinação de uma ou mais formas.

Assim como a maioria dos elementos HTML, o **canvas** pode conter **margem**, **borda** e **cor de fundo**, entretanto, essas propriedades não afetam a forma geométrica interna. Além disso, é prefível definir sua largura e altura diretamente no elemento html. Caso isto seja feito através de CSS, a imagem pode chegar a distorcer.

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
const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext('2d')
```

Primeiro devemos **selecionar** o elemento **canvas**. Depois, definimos seu contexto usando o método **getContext()**.