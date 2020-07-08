!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="PpeS")}({Bxln:function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},PpeS:function(e,t,n){"use strict";n.r(t);n("xwD5");const s=[],r={get:()=>s,add(e){s.push(...e)}};n("Bxln");const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),o={updateDetails:e=>{(e=>{for(const t of Object.keys(a))e(t)})(t=>{"string"==typeof e[t]&&(a[t]=e[t])})},getGoogleAnalyticsName:e=>e||c(a.googleAnalytics),getPrecacheName:e=>e||c(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||c(a.runtime),getSuffix:()=>a.suffix},i=e=>{return new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},h=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}const u=new Set;const f=(e,t)=>e.filter(e=>t in e),p=async({request:e,mode:t,plugins:n=[]})=>{const s=f(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)"string"==typeof(r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}))&&(r=new Request(r));return r},d=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await p({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},g={put:async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await p({plugins:r,request:t,mode:"write"});if(!n)throw new l("cache-put-with-no-response",{url:i(c.url)});const o=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(!(r=await s.call(t,{request:e,response:r,event:n})))break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!o)return;const h=await self.caches.open(e),g=f(r,"cacheDidUpdate"),y=g.length>0?await d({cacheName:e,matchOptions:a,request:c}):null;try{await h.put(c,o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of u)await e()}(),e}for(const t of g)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:y,newResponse:o,request:c})},match:d},y={fetch:async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=f(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new l("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let o;o="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(o=await e.fetchDidSucceed.call(e,{event:n,request:c,response:o}));return o}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}}};let w;async function m(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(a,r)}const R="__WB_REVISION__";function v(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set(R,t),{cacheKey:s.href,url:r.href}}class _{constructor(e){this._cacheName=o.getPrecacheName(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=v(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e="Workbox is precaching URLs without revision "+`info: ${t.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});return await Promise.all(o),{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let o,i=await y.fetch({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:s,request:c,response:i}):i.status<400))throw new l("bad-precaching-response",{url:t,status:i.status});i.redirected&&(i=await m(i)),await g.put({event:s,plugins:r,response:i,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const n=await this.matchPrecache(t);if(n)return n;throw new l("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new l("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let U;const x=()=>(U||(U=new _),U);const L=(e,t)=>{const n=x().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const c=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(a,t);if(yield c.href,n&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=n,yield e.href}if(s){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}},q=({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=o.getPrecacheName();self.addEventListener("fetch",a=>{const c=L(a.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!c)return void 0;let o=self.caches.open(r).then(e=>e.match(c)).then(e=>e||fetch(c));a.respondWith(o)})};let T=!1;const b=e=>{const t=x(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},K=e=>{const t=x();e.waitUntil(t.activate())};var N;(function(e){x().addToCacheList(e),e.length>0&&(self.addEventListener("install",b),self.addEventListener("activate",K))})([{'revision':'55dc5a569020ef5b8683e0e19b4f5a08','url':'index.html'},{'revision':'a743f0691d99306422d6e2b8f037c50d','url':'main.e6afb046f1ec28c76f21.js'}]),function(e){T||(q(e),T=!0)}(N),workbox.precaching.precacheAndRoute(self.__precacheManifest),workbox.routing.registerRoute(/https:\/\/api\.exchangeratesapi\.io\/latest/,new workbox.strategies.NetworkFirst({cacheName:"currencies",plugins:[new workbox.expiration.Plugin({maxAgeSeconds:600})]})),addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&skipWaiting()})},xwD5:function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}}});
//# sourceMappingURL=sw.js.map