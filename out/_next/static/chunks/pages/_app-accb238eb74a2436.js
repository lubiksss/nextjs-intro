(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(4116)}])},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,h=a.disabled||!g,i=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(i.current&&(i.current(),i.current=void 0),!h&&!l)return o&&o.tagName&&(i.current=j(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==i.current||i.current(),i.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,h,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver,h=new Map,i=[];function j(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),h.delete(e);var b=i.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&i.splice(b,1)}}}function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=i.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=h.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},i.push(c),h.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},4116:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return m}});var e=c(5893),f=c(536),g=c.n(f),h=c(1664),i=c.n(h),j=c(1163);function k(){var a=(0,j.useRouter)();return(0,e.jsxs)("nav",{className:"jsx-f2c548fce7aa70b",children:[(0,e.jsx)("img",{src:"/movie.png",alt:"",className:"jsx-f2c548fce7aa70b"}),(0,e.jsxs)("div",{className:"jsx-f2c548fce7aa70b",children:[(0,e.jsx)(i(),{href:"/",children:(0,e.jsx)("a",{className:"jsx-f2c548fce7aa70b "+(("/"===a.pathname?"active":"")||""),children:"Home"})}),(0,e.jsx)(i(),{href:"/about",children:(0,e.jsx)("a",{className:"jsx-f2c548fce7aa70b "+(("/about"===a.pathname?"active":"")||""),children:"About"})})]}),(0,e.jsx)(g(),{id:"f2c548fce7aa70b",children:"nav.jsx-f2c548fce7aa70b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:20px;padding-bottom:10px;-webkit-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;-moz-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px}img.jsx-f2c548fce7aa70b{max-width:100px;margin-bottom:5px}nav.jsx-f2c548fce7aa70b a.jsx-f2c548fce7aa70b{font-weight:600;font-size:18px}.active.jsx-f2c548fce7aa70b{color:tomato}nav.jsx-f2c548fce7aa70b div.jsx-f2c548fce7aa70b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}"})]})}function l(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k,{}),(0,e.jsx)("div",{children:b})]})}function m(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(l,{children:(0,e.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c))})})}c(906)},906:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},7822:function(a,b,c){var d=c(3454);!function(){"use strict";var b={583:function(a){a.exports=function(a){for(var b=5381,c=a.length;c;)b=33*b^a.charCodeAt(--c);return b>>>0}},590:function(a,b,c){b.__esModule=!0,b.computeId=function(a,b){if(!b)return"jsx-"+a;var c=String(b),d=a+c;return f[d]||(f[d]="jsx-"+(0,e.default)(a+"-"+c)),f[d]},b.computeSelector=function(a,b){if("undefined"==typeof window){var c;b=(c=b).replace(/\/style/gi,"\\/style")}var d=a+b;return f[d]||(f[d]=b.replace(/__jsx-style-dynamic-selector/g,a)),f[d]};var d,e=(d=c(583),d&&d.__esModule?d:{default:d}),f={}},503:function(a,b){function c(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}b.__esModule=!0,b.default=void 0;var e=void 0!==d&&d.env&&!0,f=function(a){return"[object String]"===Object.prototype.toString.call(a)},g=function(){function a(a){var b=void 0===a?{}:a,c=b.name,d=void 0===c?"stylesheet":c,g=b.optimizeForSpeed,i=void 0===g?e:g,j=b.isBrowser,k=void 0===j?"undefined"!=typeof window:j;h(f(d),"`name` must be a string"),this._name=d,this._deletedRulePlaceholder="#"+d+"-deleted-rule____{}",h("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._isBrowser=k,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var b,d,g,i=a.prototype;return i.setOptimizeForSpeed=function(a){h("boolean"==typeof a,"`setOptimizeForSpeed` accepts a boolean"),h(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=a,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var a=this;if(h(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(e||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(b,c){return"number"==typeof c?a._serverSheet.cssRules[c]={cssText:b}:a._serverSheet.cssRules.push({cssText:b}),c},deleteRule:function(b){a._serverSheet.cssRules[b]=null}}},i.getSheetForTag=function(a){if(a.sheet)return a.sheet;for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].ownerNode===a)return document.styleSheets[b]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(a,b){if(h(f(a),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof b&&(b=this._serverSheet.cssRules.length),this._serverSheet.insertRule(a,b),this._rulesCount++;if(this._optimizeForSpeed){var c=this.getSheet();"number"!=typeof b&&(b=c.cssRules.length);try{c.insertRule(a,b)}catch(d){return e||console.warn("StyleSheet: illegal rule: \n\n"+a+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var g=this._tags[b];this._tags.push(this.makeStyleTag(this._name,a,g))}return this._rulesCount++},i.replaceRule=function(a,b){if(this._optimizeForSpeed||!this._isBrowser){var c=this._isBrowser?this.getSheet():this._serverSheet;if(b.trim()||(b=this._deletedRulePlaceholder),!c.cssRules[a])return a;c.deleteRule(a);try{c.insertRule(b,a)}catch(d){e||console.warn("StyleSheet: illegal rule: \n\n"+b+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),c.insertRule(this._deletedRulePlaceholder,a)}}else{var f=this._tags[a];h(f,"old rule at index `"+a+"` not found"),f.textContent=b}return a},i.deleteRule=function(a){if(!this._isBrowser){this._serverSheet.deleteRule(a);return}if(this._optimizeForSpeed)this.replaceRule(a,"");else{var b=this._tags[a];h(b,"rule at index `"+a+"` not found"),b.parentNode.removeChild(b),this._tags[a]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(a){return a&&a.parentNode.removeChild(a)}),this._tags=[]):this._serverSheet.cssRules=[]},i.cssRules=function(){var a=this;return this._isBrowser?this._tags.reduce(function(b,c){return c?b=b.concat(Array.prototype.map.call(a.getSheetForTag(c).cssRules,function(b){return b.cssText===a._deletedRulePlaceholder?null:b})):b.push(null),b},[]):this._serverSheet.cssRules},i.makeStyleTag=function(a,b,c){b&&h(f(b),"makeStyleTag accepts only strings as second parameter");var d=document.createElement("style");this._nonce&&d.setAttribute("nonce",this._nonce),d.type="text/css",d.setAttribute("data-"+a,""),b&&d.appendChild(document.createTextNode(b));var e=document.head||document.getElementsByTagName("head")[0];return c?e.insertBefore(d,c):e.appendChild(d),d},b=a,d=[{key:"length",get:function(){return this._rulesCount}}],c(b.prototype,d),g&&c(b,g),a}();function h(a,b){if(!a)throw Error("StyleSheet: "+b+".")}b.default=g},449:function(a,b,c){b.__esModule=!0,b.default=j;var d,e=(d=c(522),d&&d.__esModule?d:{default:d}),f=c(147),g=c(590),h=e.default.useInsertionEffect||e.default.useLayoutEffect,i="undefined"!=typeof window?(0,f.createStyleRegistry)():void 0;function j(a){var b=i||(0,f.useStyleRegistry)();return b?"undefined"==typeof window?(b.add(a),null):(h(function(){return b.add(a),function(){b.remove(a)}},[a.id,String(a.dynamic)]),null):null}j.dynamic=function(a){return a.map(function(a){var b=a[0],c=a[1];return(0,g.computeId)(b,c)}).join(" ")}},147:function(a,b,c){b.__esModule=!0,b.createStyleRegistry=l,b.StyleRegistry=function(a){var b=a.registry,c=a.children,d=(0,e.useContext)(k),f=(0,e.useState)(function(){return d||b||l()})[0];return e.default.createElement(k.Provider,{value:f},c)},b.useStyleRegistry=function(){return(0,e.useContext)(k)},b.StyleSheetContext=b.StyleSheetRegistry=void 0;var d,e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=h();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(522)),f=(d=c(503),d&&d.__esModule?d:{default:d}),g=c(590);function h(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return h=function(){return a},a}var i=function(){function a(a){var b=void 0===a?{}:a,c=b.styleSheet,d=void 0===c?null:c,e=b.optimizeForSpeed,g=void 0!==e&&e,h=b.isBrowser,i=void 0===h?"undefined"!=typeof window:h;this._sheet=d||new f.default({name:"styled-jsx",optimizeForSpeed:g}),this._sheet.inject(),d&&"boolean"==typeof g&&(this._sheet.setOptimizeForSpeed(g),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=i,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var b=a.prototype;return b.add=function(a){var b=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(a.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(a,b){return a[b]=0,a},{}));var c=this.getIdAndRules(a),d=c.styleId,e=c.rules;if(d in this._instancesCounts){this._instancesCounts[d]+=1;return}var f=e.map(function(a){return b._sheet.insertRule(a)}).filter(function(a){return -1!==a});this._indices[d]=f,this._instancesCounts[d]=1},b.remove=function(a){var b=this,c=this.getIdAndRules(a).styleId;if(j(c in this._instancesCounts,"styleId: `"+c+"` not found"),this._instancesCounts[c]-=1,this._instancesCounts[c]<1){var d=this._fromServer&&this._fromServer[c];d?(d.parentNode.removeChild(d),delete this._fromServer[c]):(this._indices[c].forEach(function(a){return b._sheet.deleteRule(a)}),delete this._indices[c]),delete this._instancesCounts[c]}},b.update=function(a,b){this.add(b),this.remove(a)},b.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},b.cssRules=function(){var a=this,b=this._fromServer?Object.keys(this._fromServer).map(function(b){return[b,a._fromServer[b]]}):[],c=this._sheet.cssRules();return b.concat(Object.keys(this._indices).map(function(b){return[b,a._indices[b].map(function(a){return c[a].cssText}).join(a._optimizeForSpeed?"":"\n")]}).filter(function(a){return Boolean(a[1])}))},b.styles=function(a){var b,c;return b=this.cssRules(),void 0===(c=a)&&(c={}),b.map(function(a){var b=a[0],d=a[1];return e.default.createElement("style",{id:"__"+b,key:"__"+b,nonce:c.nonce?c.nonce:void 0,dangerouslySetInnerHTML:{__html:d}})})},b.getIdAndRules=function(a){var b=a.children,c=a.dynamic,d=a.id;if(c){var e=(0,g.computeId)(d,c);return{styleId:e,rules:Array.isArray(b)?b.map(function(a){return(0,g.computeSelector)(e,a)}):[(0,g.computeSelector)(e,b)]}}return{styleId:(0,g.computeId)(d),rules:Array.isArray(b)?b:[b]}},b.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(a,b){return a[b.id.slice(2)]=b,a},{})},a}();function j(a,b){if(!a)throw Error("StyleSheetRegistry: "+b+".")}b.StyleSheetRegistry=i;var k=(0,e.createContext)(null);function l(){return new i}b.StyleSheetContext=k},522:function(a){a.exports=c(7294)}},e={};function f(a){var c=e[a];if(void 0!==c)return c.exports;var d=e[a]={exports:{}},g=!0;try{b[a](d,d.exports,f),g=!1}finally{g&&delete e[a]}return d.exports}f.ab="//";var g,h,i,j,k={};(g=k).__esModule=!0,g.style=g.useStyleRegistry=g.createStyleRegistry=g.StyleRegistry=void 0,h=f(147),g.StyleRegistry=h.StyleRegistry,g.createStyleRegistry=h.createStyleRegistry,g.useStyleRegistry=h.useStyleRegistry,i=(j=f(449),j&&j.__esModule?j:{default:j}),g.style=i.default,a.exports=k}()},536:function(a,b,c){a.exports=c(7822).style},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])