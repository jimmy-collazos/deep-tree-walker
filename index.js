self.createDeepTreeWalkerIterator = (function (exports) {
  'use strict';

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(createDeepTreeWalkerIterator);

  var _self = self,
      document = _self.document,
      NodeFilter = _self.NodeFilter;
  function createDeepTreeWalkerIterator(root) {
    var whatToShow,
        acceptNodeFilter,
        acc,
        nodeFilter,
        treeWalker,
        currentNode,
        i,
        _args = arguments;
    return regeneratorRuntime.wrap(function createDeepTreeWalkerIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            whatToShow = _args.length > 1 && _args[1] !== undefined ? _args[1] : NodeFilter.SHOW_ELEMENT;
            acceptNodeFilter = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {
              return NodeFilter.FILTER_ACCEPT;
            };
            acc = [];
            nodeFilter = {
              acceptNode: function acceptNode(node) {
                if (node.shadowRoot) acc.push(node.shadowRoot);
                return acceptNodeFilter(node);
              }
            };
            treeWalker = document.createTreeWalker(root, whatToShow, nodeFilter);
            currentNode = treeWalker.nextNode();

          case 6:
            if (!currentNode) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return currentNode;

          case 9:
            currentNode = treeWalker.nextNode();
            _context.next = 6;
            break;

          case 12:
            i = 0;

          case 13:
            if (!(i < acc.length)) {
              _context.next = 18;
              break;
            }

            return _context.delegateYield(createDeepTreeWalkerIterator(acc[i], whatToShow, acceptNodeFilter), "t0", 15);

          case 15:
            i++;
            _context.next = 13;
            break;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  exports.createDeepTreeWalkerIterator = createDeepTreeWalkerIterator;

  return exports;

}({}).default);