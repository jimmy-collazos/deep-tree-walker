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

self.createDeepTreeWalkerIterator=function(e){"use strict";var r=regeneratorRuntime.mark(o),t=self,n=t.document,a=t.NodeFilter;function o(e){var t,c,s,u,i,d,l,f=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=f.length>1&&void 0!==f[1]?f[1]:a.SHOW_ELEMENT,c=f.length>2&&void 0!==f[2]?f[2]:function(){return a.FILTER_ACCEPT},s=[],u={acceptNode:function(e){return e.shadowRoot&&s.push(e.shadowRoot),c(e)}},i=n.createTreeWalker(e,t,u),d=i.nextNode();case 6:if(!d){r.next=12;break}return r.next=9,d;case 9:d=i.nextNode(),r.next=6;break;case 12:l=0;case 13:if(!(l<s.length)){r.next=18;break}return r.delegateYield(o(s[l],t,c),"t0",15);case 15:l++,r.next=13;break;case 18:case"end":return r.stop()}}),r)}return e.createDeepTreeWalkerIterator=o,e}({}).default;