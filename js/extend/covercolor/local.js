function coverColor(){var e=document.getElementById("post-cover")?.src;if(void 0!==e){var t=new Image;t.crossOrigin="Anonymous",t.src=e,t.onload=function(){var e=document.createElement("canvas");e.width=this.width,e.height=this.height;var t=e.getContext("2d");t.drawImage(this,0,0);for(var o=t.getImageData(0,0,this.width,this.height).data,n=0,r=0,c=0,m=0;m<o.length;m+=20)n+=o[m],r+=o[m+1],c+=o[m+2];n=Math.floor(n/(o.length/4/5)),r=Math.floor(r/(o.length/4/5)),c=Math.floor(c/(o.length/4/5));var a="#"+n.toString(16)+r.toString(16)+c.toString(16);"light"==getContrastYIQ(a)&&(a=LightenDarkenColor(colorHex(a),-50)),document.documentElement.style.setProperty("--sco-main",a),document.documentElement.style.setProperty("--sco-main-op",a+"23"),document.documentElement.style.setProperty("--sco-main-op-deep",a+"dd"),document.documentElement.style.setProperty("--sco-main-none",a+"00"),initThemeColor(),document.getElementById("coverdiv").classList.add("loaded")}}else document.documentElement.style.setProperty("--sco-main","var(--sco-theme)"),document.documentElement.style.setProperty("--sco-main-op","var(--sco-theme-op)"),document.documentElement.style.setProperty("--sco-main-op-deep","var(--sco-theme-op-deep)"),document.documentElement.style.setProperty("--sco-main-none","var(--sco-theme-none)"),initThemeColor()}function colorHex(e){let t=e;if(/^(rgb|RGB)/.test(t)){return"#"+t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map((e=>{const t=Number(e).toString(16);return 1===t.length?"0"+t:t})).join("")}if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){const e=t.replace(/#/,"").split("");if(6===e.length)return t;if(3===e.length){return"#"+e.map((e=>e+e)).join("")}}return t}function colorRgb(e){if(!e||"string"!=typeof e)return e;const t=e.toLowerCase();let o="";if(t&&(/^#([0-9a-fA-f]{3})$/.test(t)||/^#([0-9a-fA-f]{6})$/.test(t))){o=4===t.length?t.replace(/^#(.)/g,"#$1$1"):t;const e=o.slice(1).match(/.{2}/g).map((e=>parseInt(e,16)));return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}return t}function LightenDarkenColor(e,t){let o=!1;"#"===e[0]&&(e=e.slice(1),o=!0);const n=parseInt(e,16),r=Math.min(255,Math.max(0,(n>>16)+t)),c=Math.min(255,Math.max(0,(n>>8&255)+t));return`${o?"#":""}${(Math.min(255,Math.max(0,(255&n)+t))|c<<8|r<<16).toString(16).padStart(6,"0")}`}function getContrastYIQ(e){var t,o=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t=299*o[1]+587*o[2]+114*o[3],(t/=255e3)>=.5?"light":"dark"}function initThemeColor(){let e;e=(window.scrollY||document.documentElement.scrollTop)>0?getComputedStyle(document.documentElement).getPropertyValue("--sco-card-bg"):PAGE_CONFIG.is_post?getComputedStyle(document.documentElement).getPropertyValue("--sco-main"):getComputedStyle(document.documentElement).getPropertyValue("--sco-background"),changeThemeColor(e)}function changeThemeColor(e){const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",e)}