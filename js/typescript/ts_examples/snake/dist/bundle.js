!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,o=e(9341),i=e(9207),a=o("forEach"),s=i("forEach");t.exports=a&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,n,e){"use strict";var r=e(9974),o=e(7908),i=e(3411),a=e(7659),s=e(7466),c=e(6135),u=e(1246);t.exports=function(t){var n,e,f,l,p,d,h=o(t),v="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,g=void 0!==b,x=u(h),m=0;if(g&&(b=r(b,y>2?arguments[2]:void 0,2)),null==x||v==Array&&a(x))for(e=new v(n=s(h.length));n>m;m++)d=g?b(h[m],m):h[m],c(e,m,d);else for(p=(l=x.call(h)).next,e=new v;!(f=p.call(l)).done;m++)d=g?i(l,b,[f.value,m],!0):f.value,c(e,m,d);return e.length=m,e}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),a=function(t){return function(n,e,a){var s,c=r(n),u=o(c.length),f=i(a,u);if(t&&e!=e){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,n,e){var r=e(9974),o=e(8361),i=e(7908),a=e(7466),s=e(5417),c=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(h,v,y,b){for(var g,x,m=i(h),w=o(m),k=r(v,y,3),S=a(w.length),L=0,E=b||s,O=n?E(h,S):e||p?E(h,0):void 0;S>L;L++)if((d||L in w)&&(x=k(g=w[L],L,m),t))if(n)O[L]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:c.call(O,g)}else switch(t){case 4:return!1;case 7:c.call(O,g)}return l?-1:u||f?f:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},9207:function(t,n,e){var r=e(9781),o=e(7293),i=e(6656),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,n){if(i(s,t))return s[t];n||(n={});var e=[][t],u=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:c,l=i(n,1)?n[1]:void 0;return s[t]=!!e&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,f,l)}))}},5417:function(t,n,e){var r=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},3411:function(t,n,e){var r=e(9670),o=e(9212);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){throw o(t),n}}},7072:function(t,n,e){var r=e(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),i=e(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:a?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,n){for(var e=o(n),s=a.f,c=i.f,u=0;u<e.length;u++){var f=e[u];r(t,f)||s(t,f,c(n,f))}}},8544:function(t,n,e){var r=e(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,n,e){"use strict";var r=e(3383).IteratorPrototype,o=e(30),i=e(9114),a=e(8003),s=e(7497),c=function(){return this};t.exports=function(t,n,e){var u=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),a(t,u,!1,!0),s[u]=c,t}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(7593),o=e(3070),i=e(9114);t.exports=function(t,n,e){var a=r(n);a in t?o.f(t,a,i(0,e)):t[a]=e}},654:function(t,n,e){"use strict";var r=e(2109),o=e(4994),i=e(9518),a=e(7674),s=e(8003),c=e(8880),u=e(1320),f=e(5112),l=e(1913),p=e(7497),d=e(3383),h=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,y=f("iterator"),b="keys",g="values",x="entries",m=function(){return this};t.exports=function(t,n,e,f,d,w,k){o(e,n,f);var S,L,E,O=function(t){if(t===d&&A)return A;if(!v&&t in H)return H[t];switch(t){case b:case g:case x:return function(){return new e(this,t)}}return function(){return new e(this)}},_=n+" Iterator",j=!1,H=t.prototype,T=H[y]||H["@@iterator"]||d&&H[d],A=!v&&T||O(d),R="Array"==n&&H.entries||T;if(R&&(S=i(R.call(new t)),h!==Object.prototype&&S.next&&(l||i(S)===h||(a?a(S,h):"function"!=typeof S[y]&&c(S,y,m)),s(S,_,!0,!0),l&&(p[_]=m))),d==g&&T&&T.name!==g&&(j=!0,A=function(){return T.call(this)}),l&&!k||H[y]===A||c(H,y,A),p[n]=A,d)if(L={values:O(g),keys:w?A:O(b),entries:O(x)},k)for(E in L)(v||j||!(E in H))&&u(H,E,L[E]);else r({target:n,proto:!0,forced:v||j},L);return L}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),a=e(1320),s=e(3505),c=e(9920),u=e(4705);t.exports=function(t,n){var e,f,l,p,d,h=t.target,v=t.global,y=t.stat;if(e=v?r:y?r[h]||s(h,{}):(r[h]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!u(v?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},7065:function(t,n,e){"use strict";var r=e(3099),o=e(111),i=[].slice,a={},s=function(t,n,e){if(!(n in a)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";a[n]=Function("C,a","return new C("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),a=function(){var r=e.concat(i.call(arguments));return this instanceof a?s(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(a.prototype=n.prototype),a}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},1246:function(t,n,e){var r=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,a=e(8536),s=e(7854),c=e(111),u=e(8880),f=e(6656),l=e(5465),p=e(6200),d=e(3501),h=s.WeakMap;if(a){var v=l.state||(l.state=new h),y=v.get,b=v.has,g=v.set;r=function(t,n){return n.facade=t,g.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return b.call(v,t)}}else{var x=p("state");d[x]=!0,r=function(t,n){return n.facade=t,u(t,x,n),n},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:function(t,n,e){var r=e(5112),o=e(7497),i=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=s[a(t)];return e==u||e!=c&&("function"==typeof n?r(n):!!n)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},9212:function(t,n,e){var r=e(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},3383:function(t,n,e){"use strict";var r,o,i,a=e(9518),s=e(8880),c=e(6656),u=e(5112),f=e(1913),l=u("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||c(r,l)||s(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},7497:function(t){t.exports={}},133:function(t,n,e){var r=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:function(t,n,e){var r,o=e(9670),i=e(6048),a=e(748),s=e(3501),c=e(490),u=e(317),f=e(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=r?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=u("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var e=a.length;e--;)delete d.prototype[a[e]];return d()};s[f]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[f]=t):e=d(),void 0===n?e:i(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3070),i=e(9670),a=e(1956);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=a(n),s=r.length,c=0;s>c;)o.f(t,e=r[c++],n[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),a=e(7593),s=Object.defineProperty;n.f=r?s:function(t,n,e){if(i(t),n=a(n,!0),i(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),a=e(5656),s=e(7593),c=e(6656),u=e(4664),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=a(t),n=s(n,!0),u)try{return f(t,n)}catch(t){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},9518:function(t,n,e){var r=e(6656),o=e(7908),i=e(6200),a=e(8544),s=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,a=e(3501);t.exports=function(t,n){var e,s=o(t),c=0,u=[];for(e in s)!r(a,e)&&r(s,e)&&u.push(e);for(;n.length>c;)r(s,e=n[c++])&&(~i(u,e)||u.push(e));return u}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},7674:function(t,n,e){var r=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),a=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(a(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),a=e(3505),s=e(2788),c=e(9909),u=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,n,e,s){var c,u=!!s&&!!s.unsafe,p=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(c=f(e)).source||(c.source=l.join("string"==typeof n?n:""))),t!==r?(u?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},8003:function(t,n,e){var r=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:function(t,n,e){var r=e(9958),o=e(4488),i=function(t){return function(n,e){var i,a,s=String(o(n)),c=r(e),u=s.length;return c<0||c>=u?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),a=e(9711),s=e(133),c=e(3307),u=o("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){return i(u,t)||(s&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},9554:function(t,n,e){"use strict";var r=e(2109),o=e(8533);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1038:function(t,n,e){var r=e(2109),o=e(8457);r({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},4812:function(t,n,e){e(2109)({target:"Function",proto:!0},{bind:e(7065)})},9070:function(t,n,e){var r=e(2109),o=e(9781);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(3070).f})},8783:function(t,n,e){"use strict";var r=e(8710).charAt,o=e(9909),i=e(654),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,n=c(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},4747:function(t,n,e){var r=e(7854),o=e(8324),i=e(8533),a=e(8880);for(var s in o){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(t){u.forEach=i}}},2564:function(t,n,e){var r=e(2109),o=e(7854),i=e(8113),a=[].slice,s=function(t){return function(n,e){var r=arguments.length>2,o=r?a.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})},6820:function(t,n,e){"use strict";var r=e(3645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #fffae8;\n}\n#app {\n  position: relative;\n  width: 360px;\n  height: 420px;\n  padding: 10px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 18px solid #000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 25px;\n}\n#app #stage {\n  position: relative;\n  width: 304px;\n  height: 304px;\n  border: 2px solid #000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#app #stage #snake > div {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#app #stage #food {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  position: absolute;\n  width: 15px;\n  height: 15px;\n}\n#app #stage #food > div {\n  width: 6px;\n  height: 6px;\n  background-color: #000;\n  border: 1px solid transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#app #score-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 30px;\n  font-family: 'courier new';\n  font-size: 20px;\n  font-weight: bold;\n}\n#app #info-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 165px;\n  height: 100%;\n  text-align: left;\n  -webkit-transform: translate(120%, 0);\n          transform: translate(120%, 0);\n}\n#app #info-panel #state {\n  padding: 10px 20px;\n  background-color: #e0edd3;\n  font-size: 20px;\n  font-weight: bold;\n  color: #52c41a;\n  border-radius: 8px;\n}\n#app #info-panel #operation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 20px;\n  background-color: #e0edd3;\n  border-radius: 8px;\n  font-size: 18px;\n  color: #40a9ff;\n  line-height: 30px;\n}\n#app #info-panel #control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 20px;\n  background-color: #e0edd3;\n  border-radius: 8px;\n  font-size: 18px;\n  color: #40a9ff;\n  line-height: 30px;\n}\n",""]),n.Z=o},3645:function(t){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},3379:function(t,n,e){"use strict";var r,o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function a(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],o=0;o<t.length;o++){var s=t[o],c=n.base?s[0]+n.base:s[0],u=e[c]||0,f="".concat(c," ").concat(u);e[c]=u+1;var l=a(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:v(p,n),references:1}),r.push(f)}return r}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,f=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function l(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,h=0;function v(t,n){var e,r,o;if(n.singleton){var i=h++;e=d||(d=c(n)),r=l.bind(null,e,i,!1),o=l.bind(null,e,i,!0)}else e=c(n),r=p.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=a(e[r]);i[o].references--}for(var c=s(t,n),u=0;u<e.length;u++){var f=a(e[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}e=c}}}}},n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t,n=e(3379),r=e.n(n),o=e(6820);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,e(4812),e(9070),e(2564),e(9554),e(1038),e(8783),e(4747),function(t){t[t.Up=1]="Up",t[t.Right=2]="Right",t[t.Down=3]="Down",t[t.Left=4]="Left"}(t||(t={}));var i,a=t;!function(t){t[t.Running=0]="Running",t[t.Paused=1]="Paused",t[t.End=2]="End"}(i||(i={}));var s=i;function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;c(this,t),this.direction=a.Right,this.element=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.element.getElementsByTagName("div"),this.statusLen=this.head.offsetWidth,this.stageLen=n,this.state=s.Running}var n,e;return n=t,(e=[{key:"grow",value:function(){this.element.insertAdjacentHTML("beforeend",'<div style="display: none;"></div>')}},{key:"moveUp",value:function(){var t={x:this.Head_X,y:this.Head_Y};if(this.Head_Y=this.Head_Y-this.statusLen,this.Head_Y<0)throw this.Head_Y=this.Head_Y+this.statusLen,this.state=s.End,new Error("GAME OVER!");this.testHitSelf(a.Up),this.state==s.Running&&this.moveBody(t),this.state==s.Running&&(this.bodies[this.bodies.length-1].style.display="block")}},{key:"moveRight",value:function(){var t={x:this.Head_X,y:this.Head_Y};if(this.Head_X=this.Head_X+this.statusLen,this.Head_X>this.stageLen-this.statusLen)throw this.Head_X=this.Head_X-this.statusLen,this.state=s.End,new Error("GAME OVER!");Array.from(this.bodies),this.testHitSelf(a.Right),this.state==s.Running&&this.moveBody(t),this.state==s.Running&&(this.bodies[this.bodies.length-1].style.display="block")}},{key:"moveDown",value:function(){var t={x:this.Head_X,y:this.Head_Y};if(this.Head_Y=this.Head_Y+this.statusLen,this.Head_Y>this.stageLen-this.statusLen)throw this.Head_Y=this.Head_Y-this.statusLen,this.state=s.End,new Error("GAME OVER!");Array.from(this.bodies),this.testHitSelf(a.Down),this.state==s.Running&&this.moveBody(t),this.state==s.Running&&(this.bodies[this.bodies.length-1].style.display="block")}},{key:"moveLeft",value:function(){var t={x:this.Head_X,y:this.Head_Y};if(this.Head_X=this.Head_X-this.statusLen,this.Head_X<0)throw this.Head_X=this.Head_X+this.statusLen,this.state=s.End,new Error("GAME OVER!");Array.from(this.bodies),this.testHitSelf(a.Left),this.state==s.Running&&this.moveBody(t),this.state==s.Running&&(this.bodies[this.bodies.length-1].style.display="block")}},{key:"testHitSelf",value:function(t){if(this.hitSnake({x:this.Head_X,y:this.Head_Y})){switch(t){case a.Up:this.Head_Y=this.Head_Y+this.statusLen;break;case a.Right:this.Head_X=this.Head_X-this.statusLen;break;case a.Down:this.Head_Y=this.Head_Y-this.statusLen;break;case a.Left:this.Head_X=this.Head_X+this.statusLen}throw this.state=s.End,new Error("GAME OVER!")}}},{key:"moveBody",value:function(t){Array.from(this.bodies).forEach((function(n,e){if(0!=e){var r=n,o={x:r.offsetLeft,y:r.offsetTop},i=[t.y+"px",t.x+"px"];r.style.top=i[0],r.style.left=i[1];var a=[o.x,o.y];t.x=a[0],t.y=a[1]}}))}},{key:"hitSnake",value:function(t){var n=!1;return Array.from(this.bodies).forEach((function(e,r){if(0!=r){var o=e;t.x==o.offsetLeft&&t.y==o.offsetTop&&(n=!0)}})),n}},{key:"Head_X",get:function(){return this.head.offsetLeft},set:function(t){this.head.style.left=t+"px"}},{key:"Head_Y",get:function(){return this.head.offsetTop},set:function(t){this.head.style.top=t+"px"}}])&&u(n.prototype,e),t}();function l(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;l(this,t),this.element=document.getElementById("food"),this.statusLen=e,this.cellsLen=Math.round(n/e),this.position={x:0,y:0},this.move()}var n,e;return n=t,(e=[{key:"move",value:function(){var t=Math.round(Math.random()*(this.cellsLen-1))*this.statusLen,n=Math.round(Math.random()*(this.cellsLen-1))*this.statusLen;return this.element.style.top=n+"px",this.element.style.left=t+"px",this.position={x:t,y:n},this.position}},{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"positionXY",get:function(){return this.position}}])&&p(n.prototype,e),t}();function h(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;h(this,t),this.score=0,this.level=1,this.maxLevel=n,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}var n,e;return n=t,(e=[{key:"scored",value:function(){this.score++,this.scoreEle.innerHTML=t.ScoreStr+this.score,0!=this.score&&this.score%10==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel&&(this.level++,this.levelEle.innerHTML=t.LevelStr+this.level)}}])&&v(n.prototype,e),t}();y.ScoreStr="SCORE: ",y.LevelStr="LEVEL: ";var b=y;function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function x(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=new(function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;g(this,t),this.id=-1,this.snake=new f,this.food=new d,this.scorePanel=new b,this.initIndex=n,this.difficultIndex=e}var n,e;return n=t,(e=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"keydownHandler",value:function(t){switch(t.key){case"Up":case"ArrowUp":case"w":case"8":this.snake.direction!=a.Down&&(this.snake.direction=a.Up);break;case"Right":case"ArrowRight":case"d":case"6":this.snake.direction!=a.Left&&(this.snake.direction=a.Right);break;case"Down":case"ArrowDown":case"s":case"2":this.snake.direction!=a.Up&&(this.snake.direction=a.Down);break;case"Left":case"ArrowLeft":case"a":case"4":this.snake.direction!=a.Right&&(this.snake.direction=a.Left);break;case"p":this.pause();break;case"u":this.unpause();break;case"r":this.restart()}}},{key:"start",value:function(){var t=this;this.id=window.setInterval((function(){try{switch(t.snake.direction){case a.Up:t.snake.state===s.Running&&t.snake.moveUp();break;case a.Right:t.snake.state===s.Running&&t.snake.moveRight();break;case a.Down:t.snake.state===s.Running&&t.snake.moveDown();break;case a.Left:t.snake.state===s.Running&&t.snake.moveLeft()}}catch(e){var n=document.getElementById("state");n.innerHTML="<span>GAME OVER</span>",n.style.color="rgb(255, 77, 79)",t.snake.state=s.End}if(t.snake.Head_X===t.food.positionXY.x&&t.snake.Head_Y===t.food.positionXY.y)for(t.scorePanel.scored(),t.snake.grow();t.snake.hitSnake(t.food.move()););}),this.initIndex-(this.scorePanel.level-1)*this.difficultIndex)}},{key:"pause",value:function(){var t=document.getElementById("state");t.innerHTML="Paused",t.style.color="rgb(250, 173, 20)",this.snake.state=s.Paused}},{key:"unpause",value:function(){var t=document.getElementById("state");t.innerHTML="Running...",t.style.color="rgb(82, 196, 26)",this.snake.state=s.Running}},{key:"restart",value:function(){window.location.reload()}}])&&x(n.prototype,e),t}());m.init(),m.start()}()}();