async function f(){return(await caches.open("rta")).addAll(d)}var g=function(t){t.waitUntil(f)},b="rta",d=["/","/styles.css","/index.js","/icon/512.png"];self.addEventListener("install",g);
