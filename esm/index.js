const {document, NodeFilter} = self;

export function* createDeepTreeWalkerIterator(root, whatToShow = NodeFilter.SHOW_ELEMENT, ...args) {
  const treeWalker = document.createTreeWalker(root, whatToShow, ...args);
  let currentNode = treeWalker.nextNode();

  while(currentNode) {
    yield currentNode;
    if(currentNode.shadowRoot){
      yield* createDeepTreeWalkerIterator(currentNode.shadowRoot, whatToShow, ...args);
    }
    currentNode = treeWalker.nextNode();
  }
}
