if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let p={};const o=e=>a(e,c),r={module:{uri:c},exports:p,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),p)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/H8GvJRWrlECJcn4rTNoAv/_buildManifest.js",revision:"712222f2ae79039198b69695f609be13"},{url:"/_next/static/H8GvJRWrlECJcn4rTNoAv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-581f102fc68ef277.js",revision:"581f102fc68ef277"},{url:"/_next/static/chunks/main-affeea2dc4fd8bcd.js",revision:"affeea2dc4fd8bcd"},{url:"/_next/static/chunks/pages/_app-d7c146200b7418a8.js",revision:"d7c146200b7418a8"},{url:"/_next/static/chunks/pages/_error-82a61e6508dae5a8.js",revision:"82a61e6508dae5a8"},{url:"/_next/static/chunks/pages/index-22d8dcff665f903b.js",revision:"22d8dcff665f903b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/219e541cd2226d61.css",revision:"219e541cd2226d61"},{url:"/icons/apple-icon-180.png",revision:"6df299b835a24cc7f50cf784d197760b"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"90c0158536d15dc6182a0221efbc5e24"},{url:"/icons/apple-splash-1136-640.jpg",revision:"4fbb173cb8348da876cac3a9841d7340"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"f8a1b9cfdde25ea337b785951ef01a0a"},{url:"/icons/apple-splash-1179-2556.jpg",revision:"1497e836d0de2ba29582d65d2500a06c"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"819b187dd3d6d19d64e46eaf9c9aa766"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"d84131428b2aa9361588945e7081bff5"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"af1f54e002f2c2d2338f2d2462ce3514"},{url:"/icons/apple-splash-1290-2796.jpg",revision:"6be9338ee93bc07749a824a075e1afb0"},{url:"/icons/apple-splash-1334-750.jpg",revision:"eab33968b4d57683ce524accedf39d0b"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"a71aef221e428ff70827bdb2042bd103"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"b0b8449f28f60867fef77dab285dbaa7"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"6e96cdbe0940b3f7c0d5e75615ef6ebb"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"a6ce2f1f48ab355db6daebe47403670c"},{url:"/icons/apple-splash-1792-828.jpg",revision:"5d82f5fccb489de41b734e4c700aba83"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"995c9314568c85f36ea7b408e54e97b2"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"67e026700126a4cdbb22d11c1f11594a"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"ef51a01296e1649bb1130ffdf6b701fc"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"e89027626f0e2ea270b56658615a5f98"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"ac2c83f019c2c4fda55e424533471366"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"70fb6d3b0aaf903ba4622ccac4899da5"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"d8f4b2134792184537da87d7188c7c16"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"9d99550517b9f8ede95d3eb0c44e7866"},{url:"/icons/apple-splash-2556-1179.jpg",revision:"2b7cf0f5fbe202eab52bfe4596e678b7"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"991e352f5188703e5ba2b3515e45fc26"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"93d7cac8a3217af2edff9ec9413b294f"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"f9b5152eecef4436abbaf8a80e040ff0"},{url:"/icons/apple-splash-2796-1290.jpg",revision:"d733fd3b24d76006ea75cf8b0d77a0e6"},{url:"/icons/apple-splash-640-1136.jpg",revision:"805274cc7abbaf9a9e6675d8ea548fdb"},{url:"/icons/apple-splash-750-1334.jpg",revision:"8c536de285b181846c10110ba3acaf9c"},{url:"/icons/apple-splash-828-1792.jpg",revision:"36c66df94475c8206968dbdef6b14a9b"},{url:"/icons/manifest-icon-192.maskable.png",revision:"54c3f355be9ae5a7ca48fdf2d4ada689"},{url:"/icons/manifest-icon-512.maskable.png",revision:"3e73e9c5254e7882915a4910b87af046"},{url:"/manifest.json",revision:"64dea44f4794cd951609e9e1591dcba1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
