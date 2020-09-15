/**
 * This file is part of deep-tree-walker.

 * Foobar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * Foobar is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 */

const {document, NodeFilter} = self;

export function* createDeepTreeWalkerIterator(root, whatToShow = NodeFilter.SHOW_ELEMENT, acceptNodeFilter = () => NodeFilter.FILTER_ACCEPT ) {
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
