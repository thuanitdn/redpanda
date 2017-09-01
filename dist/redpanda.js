!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/Content/",e(e.s=28)}([function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(11),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},function(t,e,r){t.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(18),o=r(19),i=r(21),a=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=n(o),a=r(1),s=n(a),u=r(9),f=n(u),c=function(){function t(e,r){(0,i.default)(this,t),e.forEach(function(e){if(e instanceof t)throw Error("[RedPanda RequestSequence] Can not stack another sequence inside.")}),this.net=r,this.resolveStack=[],this.rejectStack=[],this.items=e,this.promises=[]}return(0,s.default)(t,[{key:"createPromises",value:function(){var t=this;return this.items.map(function(e){return new Promise(function(e,r){t.resolveStack.push(e),t.rejectStack.push(r)})})}},{key:"nextRequest",value:function(){var t=this;if(this.next(),this.valid()){var e=this.key,r=this.resolveStack[e],n=this.rejectStack[e],o=this.current();this.net.send(o).then(function(e){r(e),t.nextRequest()}).catch(function(t){return n(t)})}}},{key:"next",value:function(){this.key++}},{key:"stack",value:function(){return new f.default(this.promises)}},{key:"rewind",value:function(){this.key=-1}},{key:"current",value:function(){return this.items[this.key]}},{key:"count",value:function(){return this.items.length}},{key:"valid",value:function(){return this.key>=0&&this.key<this.count()}},{key:"start",value:function(){return this.resolveStack=[],this.rejectStack=[],this.promises=this.createPromises(),this.rewind(),this.nextRequest(),this.stack()}}]),t}();e.default=c},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=n(o),a=r(1),s=n(a),u=function(){function t(e){(0,i.default)(this,t),this.items=e}return(0,s.default)(t,[{key:"get",value:function(e){return this.items[e]instanceof Promise||this.items[e]instanceof t?this.items[e]:Promise.reject(new Error("[RedPanda PromiseCollection] No promise found for index "+e))}},{key:"count",value:function(){return this.items.length}},{key:"first",value:function(){return this.get(0)}},{key:"last",value:function(){return this.get(this.count()-1)}},{key:"all",value:function(){return Promise.all(this.items.map(function(e){return e instanceof t?e.all():e}))}},{key:"then",value:function(t){return this.items=this.items.map(function(e){return e.then(t)}),this}},{key:"catch",value:function(t){return this.items=this.items.map(function(e){return e.catch(t)}),this}}]),t}();e.default=u},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=n(o),a=r(1),s=n(a),u=r(23),f=n(u),c=r(9),l=n(c),h=r(8),y=n(h),d=function(){function t(){var e=this;(0,i.default)(this,t);var r=new f.default;this.get=function(t){return r.get(t)},this.set=function(t,n){return r.set(t,n),e},this.flatten=function(t){return r.flatten(t)}}return(0,s.default)(t,[{key:"send",value:function(t){var e=this,r=this.flatten(t).map(function(t){return t instanceof y.default?new y.default(t.items,e).start():fetch(t.url,t)});return new l.default(r)}},{key:"sequence",value:function(t){return new y.default(this.flatten(t),this)}},{key:"resolve",value:function(t){return Promise.resolve(t)}},{key:"reject",value:function(t){return Promise.reject(t)}},{key:"waitAll",value:function(t){return Promise.all(t)}}]),t}();e.default=d},function(t,e,r){t.exports={default:r(12),__esModule:!0}},function(t,e,r){r(13);var n=r(5).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e,r){var n=r(14);n(n.S+n.F*!r(2),"Object",{defineProperty:r(6).f})},function(t,e,r){var n=r(4),o=r(5),i=r(15),a=r(17),s=function(t,e,r){var u,f,c,l=t&s.F,h=t&s.G,y=t&s.S,d=t&s.P,p=t&s.B,b=t&s.W,m=h?o:o[e]||(o[e]={}),v=m.prototype,w=h?n:y?n[e]:(n[e]||{}).prototype;h&&(r=e);for(u in r)(f=!l&&w&&void 0!==w[u])&&u in m||(c=f?w[u]:r[u],m[u]=h&&"function"!=typeof w[u]?r[u]:p&&f?i(c,n):b&&w[u]==c?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):d&&"function"==typeof c?i(Function.call,c):c,d&&((m.virtual||(m.virtual={}))[u]=c,t&s.R&&v&&!v[u]&&a(v,u,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(16);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(6),o=r(22);t.exports=r(2)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(3);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(2)&&!r(7)(function(){return 7!=Object.defineProperty(r(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(3),o=r(4).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(3);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=n(o),a=r(1),s=n(a),u=r(8),f=n(u),c=r(24),l=function(){function t(){(0,i.default)(this,t),this.items={}}return(0,s.default)(t,[{key:"set",value:function(t,e){if("array"!==c(e)&&"object"!==c(e))throw new Error("[RedPanda Registry] Only array and object value is accepted");if("string"!==c(t))throw new Error("[RedPanda Registry] Only array and object value is accepted");return this.items[t]=e,this}},{key:"get",value:function(t,e){var r=this,n=c(t);if("object"===n)return e?this.applyInherits(t):[this.applyInherits(t)];if("array"===n)return t.map(function(t){return r.get(t,!0)});if("string"!==n)throw Error("[RedPanda Registry] invalid key");return"array"===c(this.items[t])?this.items[t].map(function(t){return r.get(t,!0)}):e?this.applyInherits(this.items[t]):[this.applyInherits(this.items[t])]}},{key:"applyInherits",value:function(t){if("object"!==c(t))throw new Error("[RedPanda Registry] item must be object to inherit");return"array"===c(t.inherits)?Object.assign({},this.join(t.inherits),t):t}},{key:"has",value:function(t){return void 0!==this.items[t]}},{key:"join",value:function(t){var e=this;return t.map(function(t){return e.getRaw(t)}).reduce(function(t,e){return Object.assign({},t,e)})}},{key:"getRaw",value:function(t){var e=this,r=c(t),n=c(this.items[t]);if("object"===r)return t;if("array"===r)return t.map(function(t){return e.getRaw(t)});if("string"!==r)throw Error("[RedPanda Registry] invalid key for getRaw");return"array"===n?this.items[t].map(function(t){return e.getRaw(t)}):this.items[t]}},{key:"flatten",value:function(t,e){var r=this,n=e||[];return this.get(t).forEach(function(t){if(t instanceof f.default)return n.push(t);switch(c(t)){case"array":r.flatten(t,n);break;case"object":n.push(t);break;default:throw Error("[RedPanda Registry] invalid type to flatten")}}),n}}]),t}();e.default=l},function(t,e){function r(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var n=Object.prototype.toString;t.exports=function(t){var e=typeof t;return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(e=n.call(t),"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":r(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object")}},function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,u=n(t),f=1;f<arguments.length;f++){r=Object(arguments[f]);for(var c in r)i.call(r,c)&&(u[c]=r[c]);if(o){s=o(r);for(var l=0;l<s.length;l++)a.call(r,s[l])&&(u[s[l]]=r[s[l]])}}return u}},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function f(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&w(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!j(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}function y(t,e){e=e||{};var r=e.body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function p(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},j=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},l.call(y.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];b.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=y,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new y(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},,function(t,e,r){t.exports=r(29)},function(t,e,r){"use strict";var n=r(10),o=function(t){return t&&t.__esModule?t:{default:t}}(n);Object.assign=r(25),r(26),window.RedPanda=o.default}]);
//# sourceMappingURL=redpanda.js.map