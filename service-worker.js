"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3cbb587e97d5f4998ee6517c8fd33f4b"],["/static/css/main.0e24d0b3.css","836bb8cfd00b322dda0c4b7b05b375a6"],["/static/js/main.3915eaec.js","060b67d19944646fff25904cf4d686b0"],["/static/media/logo-altimetrikcollider.2332c91e.png","2332c91ed41609205719e8a277e2cd71"],["/static/media/logo-ambassador.dd0decaa.png","dd0decaa5f4210acfdbc3f7ee4961f40"],["/static/media/logo-ashanderie.8dde6288.png","8dde62888e9735970d5a8310f39f6822"],["/static/media/logo-assembler-labs.fbba7412.png","fbba7412c96947d2354b22dfb7bc6295"],["/static/media/logo-autobooks.8299d010.svg","8299d010dc31e8af6aa80eea53b1b557"],["/static/media/logo-backstagecapital.e4b08c4b.png","e4b08c4bca5ba2d18d5f91d2cb4e21ce"],["/static/media/logo-bamboo.88e43c21.jpg","88e43c215844a9b6df68a51c6df591c0"],["/static/media/logo-benzinga.7a774878.png","7a77487803f72a45f82a956c9efe4169"],["/static/media/logo-deephow.8609f252.png","8609f252e9bbd3317d893bcbeeb30e02"],["/static/media/logo-distilnetworks.33e3b3eb.png","33e3b3eb79f81fb6fe8553b1f2123a95"],["/static/media/logo-duo.3e0dd59c.png","3e0dd59c2e17351f05129a64fb064a9b"],["/static/media/logo-entrypoint.f08c8acb.png","f08c8acb2558792d2c9159c24451fc4e"],["/static/media/logo-eos-detroit.6afcfccb.png","6afcfccba088019220c01e5b690a929c"],["/static/media/logo-genomenon.59086ea2.png","59086ea212d11f35b701dd87802267df"],["/static/media/logo-grandcircus.9ce8a4ec.png","9ce8a4ecbad2e468d44f892ecbcfb5b3"],["/static/media/logo-grandventures.4ea542bf.png","4ea542bf93b9c33648d65541cde369d0"],["/static/media/logo-hackerfellows.b78b9b83.png","b78b9b8390ef087a1222c5d1aa1d3f86"],["/static/media/logo-healthyrootsdolls.8e0d2c33.png","8e0d2c33dfbd3bb38721cae86f0dacad"],["/static/media/logo-idventures.b8b28612.png","b8b2861269ff8cb11a07965c321f22e9"],["/static/media/logo-kyybaventures.febd7036.png","febd7036098cba33986c0805a18b8f28"],["/static/media/logo-mapbox.b96e838c.png","b96e838c077735197d1452e833f47f03"],["/static/media/logo-mightyai.be321964.svg","be321964ba413df2adaebfe49cc6be6c"],["/static/media/logo-mvca.a77937bf.png","a77937bf5f66efc7ea0714e4e5e1421c"],["/static/media/logo-myswimpro.bff49520.png","bff495203affb2bd276d58dbe0390c2a"],["/static/media/logo-optimize.f9d272ad.png","f9d272ad8c344cbb22d1714a8d73c916"],["/static/media/logo-planetm.adee7503.jpg","adee7503d1cdfacadfe0703797f152fe"],["/static/media/logo-purposejobs.04fd4380.png","04fd4380b6e6f8f7855e549bd05c7eea"],["/static/media/logo-redventures.49220685.png","4922068539beef2b6589df05bfa7e736"],["/static/media/logo-rizzarr.5cc11157.png","5cc1115719b1ac27668b82fbae693234"],["/static/media/logo-saganworks.140158da.png","140158da34040af99003f4fb9a72cffa"],["/static/media/logo-sift.f9547286.png","f95472862b94e3c0e0e7e9f34a42279f"],["/static/media/logo-skillo.3ee9a85b.png","3ee9a85bc6163e0ed53369c1669e2dba"],["/static/media/logo-skyspecs.90c2db6a.png","90c2db6aee6fa29f5ff26fedded28c9b"],["/static/media/logo-spothero.5490a752.png","5490a7520dcb49ad52d5854ce33dcf9f"],["/static/media/logo-startupboost.b14e1609.png","b14e1609dfe029dd8b1343d15dcf1fa7"],["/static/media/logo-stockx.1459a27e.jpg","1459a27e33200b45df8879c2653ef93f"],["/static/media/logo-sweet.3815b935.svg","3815b935ce08d985ee80a770f3c1b40c"],["/static/media/logo-techtown.8c42facb.png","8c42facb6d6b039908fee4e5893b729d"],["/static/media/logo-todoolie.cac6a40a.png","cac6a40a619e51a5a1e47ba14f1a5150"],["/static/media/logo-trucks.4de17e0b.png","4de17e0b4ee2a7be436e530f2967e4b5"],["/static/media/logo-venturecatalysts.39bdcabe.png","39bdcabee5d6e102c18ae07a952bfae6"],["/static/media/logo-vfa.fe4f3301.png","fe4f330146d8b2123d14438a9ceef5e1"],["/static/media/logo-waymark.5a6d3ca5.png","5a6d3ca57385ddb7fdd5de1e932f1b04"],["/static/media/logo-wework.9a2d0626.jpg","9a2d0626a93a15ce1259364e0f3b96fc"],["/static/media/logo-wsu.79529539.jpg","79529539bec76c28eb8296b453c6448b"],["/static/media/logo-xrds.e14d5bd9.png","e14d5bd97ea8cd39f1beab63894f5f03"],["/static/media/skyline.71df05f8.jpg","71df05f89f3a86af3fef9ecdbf306600"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});