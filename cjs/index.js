"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const{document:e,NodeFilter:t}=self;exports.createDeepTreeWalkerIterator=function*o(r,d=t.SHOW_ELEMENT,l=(()=>t.FILTER_ACCEPT)){const s=[],c={acceptNode:e=>(e.shadowRoot&&s.push(e.shadowRoot),l(e))},a=e.createTreeWalker(r,d,c);let n=a.nextNode();for(;n;)yield n,n=a.nextNode();for(let e=0;e<s.length;e++)yield*o(s[e],d,l)};
