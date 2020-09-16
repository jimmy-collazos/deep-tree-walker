(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.createDeepTreeWalkerIterator = {}));
}(this, (function (exports) { 'use strict';

  const {document, NodeFilter} = self;

  function* createDeepTreeWalkerIterator(root, whatToShow = NodeFilter.SHOW_ELEMENT, acceptNodeFilter = () => NodeFilter.FILTER_ACCEPT ) {
    const acc = [];
    const nodeFilter = {
      acceptNode(node) {
        if(node.shadowRoot) acc.push(node.shadowRoot);
        return acceptNodeFilter(node);
      }
    };
    const treeWalker = document.createTreeWalker(root, whatToShow, nodeFilter);
    let currentNode = treeWalker.nextNode();

    while(currentNode) {
      yield currentNode;
      currentNode = treeWalker.nextNode();
    }

    for (let i = 0; i < acc.length; i++) {
      yield* createDeepTreeWalkerIterator(acc[i], whatToShow, acceptNodeFilter);
    }
  }

  exports.createDeepTreeWalkerIterator = createDeepTreeWalkerIterator;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
