'use strict';
const {document, NodeFilter} = self;

function* createDeepTreeWalkerIterator(root, whatToShow = NodeFilter.SHOW_ELEMENT, acceptNodeFilter = () => NodeFilter.FILTER_ACCEPT ) {
  const acc = [];
  const nodeFilter = {
    acceptNode(node) {
      if(node.shadowRoot) acc.push(node.shadowRoot);
      return acceptNodeFilter(node);
    }
  }
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
exports.createDeepTreeWalkerIterator = createDeepTreeWalkerIterator
