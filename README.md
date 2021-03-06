![Tree](./header.jpg)
<sup>_Social Media Photo by [Stanislav Kondratiev](https://unsplash.com/@technobulka) on [Unsplash](https://unsplash.com/photos/RVvMv7KpZJg)_</sup>

# Deep Tree Walker

<p align="center">
  <img alt="Formato de exportación: UMD, CJS, ESM" src="https://img.shields.io/badge/fomat-umd%20cjs%20esm-yellowgreen" />
  <img alt="Distribución: Npm, Unpackage" src="https://img.shields.io/badge/%F0%9F%93%A6-npm%20unpk-yellowgreen" />
  <img alt="Licencia: GPL 3.0" src="https://img.shields.io/badge/GPL 3.0-license-yellowgreen" />
</p>

## Uso

Esta herramienta se exporta en los formatos CommonJs, IFFIE, ESM. Puedes descargarlo o instalarlo a través de NPM o desde Unpkg.

**Npm**
```sh
npm install --save deep-tree-walker
```

**Unpkg**
```javascript
import {createDeepTreeWalkerIterator} from 'https://unpkg.com/deep-tree-walker?module'
```

## # createDeepTreeWalkerIterator()

Esta función permite recorrer por todos los elementos del DOM, examentamente igual que [TreeWalker]() con el añadido que también accede a los elmenentos del [Shadow Tree](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#High-level_view).

El recorrido de los nodos se realiza siguiendo el esquema de [Busqueda en anchura (anchura-primero)](https://es.wikipedia.org/wiki/Recorrido_de_%C3%A1rboles). Además la ejecución es [perezosa](https://es.wikipedia.org/wiki/Evaluaci%C3%B3n_perezosa); para mejorar el rendimiento; por lo que se expone un [iterador](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) para ir recorriendo el DOM según la necesidad.

### __Sintaxis__
```javascript
createDeepTreeWalkerIterator(nodeRoot, [whatToShow[, filter]]);
```

### _Parámentros_

* **nodeRoot**: Nodo raíz a partir del cual se comienza a explorar
* **whatToShow** (_opcional_): Es un valod de tipo `unsigned long` que se utilizar para especesifivar el típo de nodos que se quiere recorrer ([ver especificación](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)). El valor por defecto es *NodeFilter.SHOW_ELEMENT*
* **filter** (_opcional_): Objeto con la interfáz de [NodeFilter](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter)

### _Valor devuelto_

Devuelve un nuevo objeto [iterador](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)

### Ejemplo

```html
<div id="box">
  <my-component><my-component> <!-- CustomElement con ShadowDom -->
  <a href="#">link</a>
</div>
<script type="module">
  import {createDeepTreeWalkerIterator} from 'deep-tree-walker-iterator';

  let gen;
  const root = document.querySelector('#box');
  // Uso básico
  gen = createDeepTreeWalkerIterator(root);
  console.group('Uso básico');
  console.log(gen.next().value); // <my-component><my-component>
  console.log(gen.next().value); // <a href="#"></a>
  console.log(gen.next().value); // undefined
  console.groupEnd();

  // filtrando por el tipo de nodo
  gen = createDeepTreeWalkerIterator(root, NodeFilter.SHOW_COMMENT);
  console.group('filtrando por el tipo de nodo');
  console.log(gen.next().value); // <!-- CustomElement con ShadowDom -->
  console.log(gen.next().value); // undefined
  console.groupEnd();

  // filtrando usando una función propia
  gen = createDeepTreeWalkerIterator(root, NodeFilter.SHOW_ELEMENT, (node) => 
      node.tagName === 'A' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP);
  console.group('filtrando usando una función propia');
  console.log(gen.next().value); // <a href="#"></a>
  console.log(gen.next().value); // undefined
  console.groupEnd();
</script>
```

### __Enlaces de Interes__

* [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)
* [TreeWalker Polyfill](https://gist.github.com/kindy/eb7e2581265fb80aae11ab50f668ec20)
* [Interface NodeFilter](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)