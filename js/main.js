const sidebarFn=()=>{const e=document.getElementById("toggle-menu"),t=document.getElementById("sidebar-menus"),n=document.getElementById("menu-mask"),o=document.body;function i(){o.style.overflow="",o.style.paddingRight="",utils.fadeOut(n,.5),t.classList.remove("open")}e.addEventListener("click",(function(){utils.sidebarPaddingR(),o.style.overflow="hidden",utils.fadeIn(n,.5),t.classList.add("open")})),n.addEventListener("click",(e=>{t.classList.contains("open")&&i()})),window.addEventListener("resize",(n=>{utils.isHidden(e)&&t.classList.contains("open")&&i()}))},scrollFn=function(){const e=window.innerHeight,t=document.getElementById("page-header");if(!t||document.body.scrollHeight<=e)return;let n=0;window.addEventListener("scroll",utils.throttle((function(e){const o=window.scrollY||document.documentElement.scrollTop,i=function(e){const t=e>n;return n=e,t}(o);o>0?(i?t.classList.contains("nav-visible")&&t.classList.remove("nav-visible"):t.classList.contains("nav-visible")||t.classList.add("nav-visible"),t.classList.add("nav-fixed")):t.classList.remove("nav-fixed","nav-visible"),percent()}),200))},percent=()=>{let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100),o=document.querySelector("#percent"),i=window.scrollY+document.documentElement.clientHeight,c=t-e;(document.getElementById("post-comment")||document.getElementById("footer")).offsetTop<i||n>90?(document.querySelector("#nav-totop").classList.add("long"),o.innerHTML="返回顶部"):(document.querySelector("#nav-totop").classList.remove("long"),n>=0&&(o.innerHTML=n+""));let a=document.querySelectorAll(".needEndHide");c<100?a.forEach((function(e){e.classList.add("hide")})):a.forEach((function(e){e.classList.remove("hide")})),window.onscroll=percent},showTodayCard=()=>{const e=document.getElementById("todayCard"),t=document.getElementsByClassName("topGroup")[0];e&&t&&t.addEventListener("mouseleave",(()=>{e.classList.remove("hide")}))},changeTimeFormat=()=>{const e=document.getElementsByTagName("time"),t=GLOBAL_CONFIG.lang.time;for(let n=0;n<e.length;n++){const o=e[n].getAttribute("datetime"),i=new Date(o),c=utils.timeDiff(i,new Date);let a;a=0===c?t.recent:1===c?t.yesterday:2===c?t.berforeyesterday:c<=7?c+t.daybefore:i.getFullYear()!==(new Date).getFullYear()?i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate():i.getMonth()+1+"/"+i.getDate(),e[n].textContent=a}},initObserver=()=>{let e=document.getElementById("post-comment"),t=document.getElementById("pagination");if(e&&t){new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?(t.classList.add("show-window"),GLOBAL_CONFIG.comment.commentBarrage&&(document.querySelector(".comment-barrage").style.bottom="-200px")):(t.classList.remove("show-window"),GLOBAL_CONFIG.comment.commentBarrage&&(document.querySelector(".comment-barrage").style.bottom="0px"))}))})).observe(e)}};class toc{static init(){const e=document.getElementById("card-toc");if(!e||!e.querySelector(".toc a"))return void(e.style.display="none");const t=document.querySelectorAll(".toc a");t.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(("toc-text"===e.target.className?e.target.parentNode.hash:e.target.hash).replace("#","")))),300)}))})),this.active(t)}static active(e){const t=document.getElementById("article-container"),n=document.getElementById("toc-content"),o=t.querySelectorAll("h1,h2,h3,h4,h5,h6");let i="";const c=t=>{if(0===t)return!1;let c="";if(o.forEach(((e,n)=>{t>utils.getEleTop(e)-80&&(c=n)})),i===c)return;i=c,document.querySelectorAll(".toc .active").forEach((e=>{e.classList.remove("active")}));const a=e[i];if(a){a.classList.add("active"),(e=>{const t=e.getBoundingClientRect().top,o=n.scrollTop;t>document.documentElement.clientHeight-100&&(n.scrollTop=o+150),t<100&&(n.scrollTop=o-150)})(a);let e=a.parentNode;for(;!e.matches(".toc");)e.matches("li")&&e.classList.add("active"),e=e.parentNode}};window.tocScrollFn=utils.throttle((()=>{const e=window.scrollY||document.documentElement.scrollTop;c(e)}),100),window.addEventListener("scroll",tocScrollFn)}}let lastSayHello="",wleelw_musicPlaying=!1,sco={card_welcome:function(){if(ipLoacation=window.saveToLocal.get("ipLocation"),!ipLoacation){let e=document.createElement("script"),t=`https://apis.map.qq.com/ws/location/v1/ip?key=${txkey}&output=jsonp`;e.src=t,window.QQmap=function(t){ipLoacation=t,window.saveToLocal.set("ipLocation",ipLoacation,1),document.body.removeChild(e),delete window.QQmap},document.body.appendChild(e)}showWelcome()},card_history:function(){if(document.getElementById("history-container")){(async function(){let e=new Date,t=e.getMonth()+1,n=e.getDate(),o=t<10?"0"+t:""+t,i="S"+o+(n<10?"0"+n:""+n),c=`https://cdn.meuicat.com/gh/Zfour/Butterfly-card-history@2.08/${o}.json`,a=await fetch(c);return(await a.json())[i]})().then((e=>{let t=e.map((e=>`\n            <div class="swiper-slide history_slide">\n                <span class="history_slide_time">A.D.${e.year}</span>\n                <span class="history_slide_link">${e.title}</span>\n            </div>\n        `)).join("");!function(e,t){let n=document.createElement("div");n.innerHTML=t;let o=document.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);e.appendChild(o)}(document.getElementById("history_container_wrapper"),t);let n=new Swiper(".history_swiper-container",{passiveListeners:!0,spaceBetween:30,effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!1},loop:!0,direction:"vertical",autoplay:{disableOnInteraction:!0,delay:5e3},mousewheel:!1}),o=document.getElementById("history-container");o.onmouseenter=function(){n.autoplay.stop()},o.onmouseleave=function(){n.autoplay.start()}}))}},hideCookie:function(){setTimeout((()=>{const e=document.getElementById("cookies-window");e&&(e.classList.add("cw-hide"),setTimeout((()=>{e.style.display="none"}),1e3))}),3e3)},scrollTo:function(e){const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-80,n=window.pageYOffset,o=e-n;let i=null;window.requestAnimationFrame((function e(t){i=i||t;const c=t-i,a=Math.min(c/0,1),s=a<.5?2*a*a:(4-2*a)*a-1;window.scrollTo(0,n+o*s),c<600&&window.requestAnimationFrame(e)}))}},switchCommentBarrage:function(){let e=document.querySelector(".comment-barrage");e&&("flex"===window.getComputedStyle(e).display?(e.style.display="none",document.querySelector(".menu-commentBarrage-text").textContent="显示热评",document.querySelector("#consoleCommentBarrage").classList.remove("on"),localStorage.removeItem("commentBarrageSwitch")):(e.style.display="flex",document.querySelector(".menu-commentBarrage-text").textContent="关闭热评",document.querySelector("#consoleCommentBarrage").classList.add("on"),localStorage.setItem("commentBarrageSwitch","false")))},switchHideAside:function(){const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",1):saveToLocal.set("aside-status","hide",1),e.toggle("hide-aside"),e.contains("hide-aside")?document.querySelector("#consoleHideAside").classList.add("on"):document.querySelector("#consoleHideAside").classList.remove("on")},initConsoleState:function(){document.documentElement.classList.contains("hide-aside")?document.querySelector("#consoleHideAside").classList.add("on"):document.querySelector("#consoleHideAside").classList.remove("on")},changeSayHelloText:function(){const e=["🤖️ 数码科技爱好者","🔍 分享与热心帮助","🏠 智能家居小能手","🔨 设计开发一条龙","🤝 专修交互与设计","🏃 脚踏实地行动派","🧱 团队小组发动机","💢 壮汉人狠话不多"],t=document.getElementById("author-info__sayhi");let n=e[Math.floor(Math.random()*e.length)];for(;n===lastSayHello;)n=e[Math.floor(Math.random()*e.length)];t.textContent=n,lastSayHello=n},switchDarkMode:function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(document.documentElement.setAttribute("data-theme","dark"),saveToLocal.set("theme","dark",.02),utils.snackbarShow(GLOBAL_CONFIG.lang.theme.dark,!1,2e3),document.querySelector(".menu-darkmode-text").textContent="深色模式"):(document.documentElement.setAttribute("data-theme","light"),saveToLocal.set("theme","light",.02),utils.snackbarShow(GLOBAL_CONFIG.lang.theme.light,!1,2e3),document.querySelector(".menu-darkmode-text").textContent="浅色模式")},hideTodayCard:function(){document.getElementById("todayCard").classList.add("hide")},toTop:function(){utils.scrollToDest(0)},showConsole:function(){let e=document.getElementById("console");e.classList.contains("show")||e.classList.add("show")},hideConsole:function(){const e=document.getElementById("console");e.classList.contains("show")&&e.classList.remove("show")},lightbox:function(){window.ViewImage&&window.ViewImage.init("#article-container img:not(.flink-avatar), .bber-content-img img, #album_detail img, #equipment img, #twikoo .tk-content img:not(.tk-owo-emotion)")},initTheme:function(){let e=window.matchMedia("(prefers-color-scheme: dark)").matches;const t=saveToLocal.get("theme");if(void 0===t){const t=e?"dark":"light";document.documentElement.setAttribute("data-theme",t),saveToLocal.set("theme",t,.2)}else document.documentElement.setAttribute("data-theme",t)},reflashEssayWaterFall:function(){document.getElementById("waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},addRuntime:function(){let e=document.getElementById("runtimeshow");e&&GLOBAL_CONFIG.runtime&&(e.innerText=utils.timeDiff(new Date(GLOBAL_CONFIG.runtime),new Date)+GLOBAL_CONFIG.lang.time.runtime)},lazyloadImg:function(){window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src",callback_error:e=>{e.setAttribute("src",GLOBAL_CONFIG.lazyload.error)}})},toTalk:function(e){const t=["#wl-edit",".el-textarea__inner"];for(let n=0;n<t.length;n++){let o=document.querySelector(t[n]);null!=o&&(o.dispatchEvent(new Event("input",{bubble:!0,cancelable:!0})),o.value="> "+e.replace(/\n/g,"\n> ")+"\n\n",utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),o.focus(),o.setSelectionRange(-1,-1))}const n=document.querySelector("#comment-tips");n&&n.classList.add("show")},initbbtalk:function(){if(document.querySelector("#bber-talk")){new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})}},addPhotoFigcaption:function(){document.querySelectorAll("#article-container img").forEach((e=>{const t=e.parentNode,n=e.getAttribute("alt");if(n){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}}))},downloadImage:function(e,t="photo"){if(rm.downloadimging)return void utils.snackbarShow("有正在进行中的下载，请稍后再试");rm.hideRightMenu(),rm.downloadimging=!0,utils.snackbarShow("正在下载中，请稍后",!1,1e4);let n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){let e=document.createElement("canvas");e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0,n.width,n.height);let o=e.toDataURL("image/png"),i=document.createElement("a");i.download=t,i.href=o;let c=new MouseEvent("click");i.dispatchEvent(c),utils.snackbarShow("图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1},n.src=e},musicToggle:function(){const e=document.querySelector("#nav-music"),t=document.querySelector("meting-js"),n=document.getElementById("consoleMusic"),o=document.getElementById("menu-music-toggle");wleelw_musicPlaying=!wleelw_musicPlaying,e.classList.toggle("playing",wleelw_musicPlaying),n.classList.toggle("on",wleelw_musicPlaying),wleelw_musicPlaying?(t.aplayer.play(),o.innerHTML='<i class="scoicon sco-pause-fill"></i><span>暂停音乐</span>'):(t.aplayer.pause(),o.innerHTML='<i class="scoicon sco-play-fill"></i><span>播放音乐</span>'),rm.hideRightMenu()},musicSkipBack:function(){document.querySelector("meting-js").aplayer.skipBack(),rm.hideRightMenu()},musicSkipForward:function(){document.querySelector("meting-js").aplayer.skipForward(),rm.hideRightMenu()},musicGetName:function(){return Array.from(document.querySelectorAll(".aplayer-title")).map((e=>e.innerText))[0]},scrollToComment:function(){utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300)},setTimeState:function(){const e=document.getElementById("author-info__sayhi");if(e){const t=(new Date).getHours(),n=GLOBAL_CONFIG.lang.sayhello,o=[{start:0,end:5,text:n.goodnight},{start:6,end:10,text:n.morning},{start:11,end:14,text:n.noon},{start:15,end:18,text:n.afternoon},{start:19,end:24,text:n.night}];for(let n of o)if(t>=n.start&&t<=n.end){e.innerText=n.text;break}}},tagPageActive:function(){const e=window.location.pathname,t=decodeURIComponent(e);if(/\/tags\/.*?\//.test(t)){const e=t.split("/").slice(-2,-1)[0];if(document.getElementById("#tag-page-tags")){document.querySelectorAll("a").forEach((e=>{e.classList.remove("select")}));const t=document.getElementById(e);t&&t.classList.add("select")}}},categoriesBarActive:function(){const e=document.querySelector("#category-bar"),t=window.location.pathname,n=decodeURIComponent(t);if(e){document.querySelectorAll(".category-bar-item").forEach((e=>{e.classList.remove("select")}))}if("/"===n){if(e){document.getElementById("category-bar-home").classList.add("select")}}else if(/\/categories\/.*?\//.test(n)){let t=n.split("/").slice(-2,-1)[0];if(t=t.charAt(0).toUpperCase()+t.slice(1),e){const e=document.getElementById(t);e&&e.classList.add("select")}}},scrollCategoryBarToRight:function(){let e,t=document.getElementById("category-bar-items"),n=document.getElementById("category-bar-next"),o=t.clientWidth;t&&(t.scrollLeft+t.clientWidth>=t.scrollWidth-8?t.scroll({left:0,behavior:"smooth"}):t.scrollBy({left:o,behavior:"smooth"}),t.addEventListener("scroll",(function o(){clearTimeout(e),e=setTimeout((function(){t.scrollLeft+t.clientWidth>=t.scrollWidth-8?n.style.transform="rotate(180deg)":n.style.transform="",t.removeEventListener("scroll",o)}),150)})))},openAllTags:function(){document.querySelectorAll(".card-allinfo .card-tag-cloud").forEach((function(e){e.classList.add("all-tags")}));let e=document.getElementById("more-tags-btn");e&&e.parentNode.removeChild(e)},listenToPageInputPress:function(){const e=document.getElementById("toPageText"),t=document.getElementById("toPageButton");if(!e)return;const n=document.querySelectorAll(".page-number");if(1===+n[n.length-1].textContent){const e=document.querySelector(".toPageGroup");e&&e.remove()}e.addEventListener("keydown",(e=>{13===e.keyCode&&(sco.toPage(),pjax.loadUrl(t.href))})),e.addEventListener("input",(()=>{""===e.value||"0"===e.value?t.classList.remove("haveValue"):t.classList.add("haveValue");const n=document.querySelectorAll(".page-number"),o=+n[n.length-1].textContent;+e.value>o&&(e.value=o)}))},addNavBackgroundInit:function(){if(0!==(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)){var e=document.getElementById("page-header");e&&e.classList.add("nav-fixed","nav-visible");var t=document.getElementById("cookies-window");t&&(t.style.display="none")}},initAdjust:function(e=!1){const t=document.getElementById("site-name");let n=t&&t.offsetWidth;const o=document.querySelector("#menus .menus_items");let i=o&&o.offsetWidth;const c=document.querySelector("#search-button");let a=c&&c.offsetWidth;e&&(n=t&&t.offsetWidth,i=o&&o.offsetWidth,a=c&&c.offsetWidth);const s=document.getElementById("nav");let l;l=window.innerWidth<768||n+i+a>s?.offsetWidth-120,l?s?.classList.add("hide-menu"):s?.classList.remove("hide-menu"),document.getElementById("nav")?.classList.add("show")},toPage:function(){const e=document.querySelectorAll(".page-number"),t=parseInt(e[e.length-1].innerHTML),n=document.getElementById("toPageText"),o=parseInt(n.value);if(!isNaN(o)&&o>0&&o<=t){const e=window.location.href.replace(/\/page\/\d+\/$/,"/");let t;t=1===o?e:e+(e.endsWith("/")?"":"/")+"page/"+o+"/",document.getElementById("toPageButton").href=t}},addRandomCommentInfo:function(){const e=`${GLOBAL_CONFIG.comment.randomInfoStart[Math.floor(Math.random()*GLOBAL_CONFIG.comment.randomInfoStart.length)]}${GLOBAL_CONFIG.comment.randomInfoEnd[Math.floor(Math.random()*GLOBAL_CONFIG.comment.randomInfoEnd.length)]}`,t=["#author","input[name='comname']","#inpName","input[name='author']","#ds-dialog-name","#name","input[name='nick']","#comment_author"].map((e=>document.querySelector(e))).filter(Boolean),n=["#mail","#email","input[name='commail']","#inpEmail","input[name='email']","#ds-dialog-email","input[name='mail']","#comment_email"].map((e=>document.querySelector(e))).filter(Boolean);t.forEach((t=>{t.value=e,t.dispatchEvent(new Event("input"))})),n.forEach((e=>{e.value="donotreply@examp.com",e.dispatchEvent(new Event("input"))}))}};class hightlight{static createEle(e,t){const n=document.createDocumentFragment(),o=document.createElement("div");o.className="highlight-tools",o.innerHTML='<i class="scoicon sco-arrow-down expand"></i>'+e+'<i class="scoicon sco-copy-fill"></i>';let i=!0;o.children[0].addEventListener("click",(e=>{i?(o.children[0].classList.add("closed"),s.setAttribute("style","display:none"),0!==l.length&&l[0].setAttribute("style","display:none")):(o.children[0].classList.remove("closed"),s.setAttribute("style","display:block"),0!==l.length&&l[0].setAttribute("style","display:block"),a<200?s.setAttribute("style","height: auto"):(s.setAttribute("style","height:200px"),c.classList.remove("expand-done"))),i=!i})),o.children[2].addEventListener("click",(e=>{utils.copy(s.querySelector(".code").innerText)}));const c=document.createElement("div");n.appendChild(o);const a=t.clientHeight,s=t.querySelector("table"),l=t.getElementsByClassName("code-expand-btn");GLOBAL_CONFIG.hightlight.limit&&a>GLOBAL_CONFIG.hightlight.limit+30&&(s.setAttribute("style",`height: ${GLOBAL_CONFIG.hightlight.limit}px`),c.className="code-expand-btn",c.innerHTML='<i class="scoicon sco-show-line" style="font-size: 1.2rem"></i>',c.addEventListener("click",(e=>{s.setAttribute("style",`height: ${a}px`),e.target.classList.add("expand-done")})),n.appendChild(c)),t.insertBefore(n,t.firstChild)}static init(){const e=document.querySelectorAll("figure.highlight"),t=this;e.forEach((function(e){let n=e.getAttribute("class").split(" ")[1];"plaintext"!==n&&void 0!==n||(n="Code");const o=`<div class="code-lang">${n.toUpperCase()}</div>`;t.createEle(o,e)}))}}class tabs{static init(){this.clickFnOfTabs(),this.backToTop()}static clickFnOfTabs(){document.querySelectorAll("#article-container .tab > button").forEach((function(e){e.addEventListener("click",(function(e){const t=this,n=t.parentNode;if(!n.classList.contains("active")){const e=n.parentNode.nextElementSibling,o=utils.siblings(n,".active")[0];o&&o.classList.remove("active"),n.classList.add("active");const i=t.getAttribute("data-href").replace("#","");[...e.children].forEach((e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")}))}}))}))}static backToTop(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(e){e.addEventListener("click",(function(){utils.scrollToDest(utils.getEleTop(e.parentElement.parentElement.parentNode),300)}))}))}}window.refreshFn=()=>{sco.initAdjust(),scrollFn(),sidebarFn(),changeTimeFormat(),initObserver(),sco.addRuntime(),sco.hideCookie(),sco.addPhotoFigcaption(),sco.setTimeState(),sco.tagPageActive(),sco.categoriesBarActive(),sco.listenToPageInputPress(),sco.addNavBackgroundInit(),GLOBAL_CONFIG.rightside.enable&&addRightMenuClickEvent(),GLOBAL_CONFIG.lazyload.enable&&sco.lazyloadImg(),GLOBAL_CONFIG.lightbox&&sco.lightbox(""),GLOBAL_CONFIG.randomlinks&&randomLinksList(),PAGE_CONFIG.comment&&initComment(),PAGE_CONFIG.toc&&toc.init(),(PAGE_CONFIG.is_post||PAGE_CONFIG.is_page)&&(GLOBAL_CONFIG.hightlight.enable&&hightlight.init()||tabs.init()),PAGE_CONFIG.is_home&&(showTodayCard()||sco.initbbtalk()),GLOBAL_CONFIG.covercolor&&coverColor(),sco.initConsoleState(),document.getElementById("history-baidu")&&sco.card_history(),document.getElementById("welcome-info")&&sco.card_welcome(),GLOBAL_CONFIG.comment.commentBarrage&&PAGE_CONFIG.comment&&initializeCommentBarrage(),document.body.setAttribute("data-type",PAGE_CONFIG.page),"music"===PAGE_CONFIG.page&&scoMusic.init(),scoMusic&&document.removeEventListener("keydown",scoMusic.setKeydown)},sco.initTheme(),document.addEventListener("DOMContentLoaded",(function(){window.refreshFn()})),window.onkeydown=function(e){123===e.keyCode&&utils.snackbarShow("开发者模式已打开，请遵循GPL协议",!1,3e3)};