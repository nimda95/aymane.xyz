(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1120:function(e,t){},1530:function(e,t,n){var i={"./":[217,9],"./ICanvasEffect":[983,7,7],"./ICanvasEffect.ts":[983,7,7],"./confetti":[399,9,0],"./confetti/":[399,9,0],"./confetti/index":[399,9,0],"./confetti/index.ts":[399,9,0],"./effect":[984,9,8],"./effect.ts":[984,9,8],"./fireworks":[400,9,1],"./fireworks/":[400,9,1],"./fireworks/index":[400,9,1],"./fireworks/index.ts":[400,9,1],"./index":[217,9],"./index.ts":[217,9],"./rainfall":[401,9,2],"./rainfall/":[401,9,2],"./rainfall/index":[401,9,2],"./rainfall/index.ts":[401,9,2],"./snowfall":[402,9,3],"./snowfall/":[402,9,3],"./snowfall/index":[402,9,3],"./snowfall/index.ts":[402,9,3],"./spaceinvaders":[403,9,4],"./spaceinvaders/":[403,9,4],"./spaceinvaders/index":[403,9,4],"./spaceinvaders/index.ts":[403,9,4],"./utils":[322,9],"./utils.ts":[322,9]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(i)},a.id=1530,e.exports=a},1560:function(e,t){},1562:function(e,t,n){"use strict";t.a=n.p+"i18n/languages.53fd6cb.json"},1564:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var i=n(83),a=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const o={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontWeight:"bold",isUp:!1,isLeft:!1};class c{constructor(e={}){a()(this,"browser",{ff:void 0!==window.InstallTrigger,opera:!!window.opera||navigator.userAgent.includes("Opera")}),a()(this,"params",void 0),a()(this,"canvas",void 0),a()(this,"baseImage",void 0),a()(this,"context",void 0),a()(this,"icons",void 0),a()(this,"isReady",!1),a()(this,"readyCb",()=>{}),this.params=r(r({},o),e),this.icons=c.getIcons(),this.canvas=document.createElement("canvas"),this.baseImage=document.createElement("img");const t=this.icons[this.icons.length-1];t.hasAttribute("href")?(this.baseImage.setAttribute("crossOrigin","anonymous"),this.baseImage.onload=()=>{this.canvas.height=this.baseImage.height>0?this.baseImage.height:32,this.canvas.width=this.baseImage.width>0?this.baseImage.width:32,this.context=this.canvas.getContext("2d"),this.ready()},this.baseImage.setAttribute("src",t.getAttribute("href"))):(this.canvas.height=this.baseImage.height=32,this.canvas.width=this.baseImage.width=32,this.context=this.canvas.getContext("2d"),this.ready())}reset(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height)}options(e,t){const n={n:"number"==typeof e?Math.abs(e):e,len:(""+e).length,x:.4,y:.4,w:.6,h:.6};return t.isUp&&(n.y<.6?n.y=n.y-.4:n.y=n.y-2*n.y+(1-n.w)),t.isLeft&&(n.x<.6?n.x=n.x-.4:n.x=n.x-2*n.x+(1-n.h)),n.x=this.canvas.width*n.x,n.y=this.canvas.height*n.y,n.w=this.canvas.width*n.w,n.h=this.canvas.height*n.h,n}circle(e,t){const n=r(r({},this.params),t),i=this.options(e,n);let a=!1;2===i.len?(i.x=i.x-.4*i.w,i.w=1.4*i.w,a=!0):i.len>=3&&(i.x=i.x-.65*i.w,i.w=1.65*i.w,a=!0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height),this.context.beginPath();const s=Math.floor(i.h*(i.n>99?.85:1))+"px";if(this.context.font=`${n.fontWeight} ${s} ${n.fontFamily}`,this.context.textAlign="center",a?(this.context.moveTo(i.x+i.w/2,i.y),this.context.lineTo(i.x+i.w-i.h/2,i.y),this.context.quadraticCurveTo(i.x+i.w,i.y,i.x+i.w,i.y+i.h/2),this.context.lineTo(i.x+i.w,i.y+i.h-i.h/2),this.context.quadraticCurveTo(i.x+i.w,i.y+i.h,i.x+i.w-i.h/2,i.y+i.h),this.context.lineTo(i.x+i.h/2,i.y+i.h),this.context.quadraticCurveTo(i.x,i.y+i.h,i.x,i.y+i.h-i.h/2),this.context.lineTo(i.x,i.y+i.h/2),this.context.quadraticCurveTo(i.x,i.y,i.x+i.h/2,i.y)):this.context.arc(i.x+i.w/2,i.y+i.h/2,i.h/2,0,2*Math.PI),this.context.fillStyle=n.bgColor,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.stroke(),this.context.fillStyle=n.textColor,"number"==typeof i.n&&i.n>999){const e=(i.n>9999?9:Math.floor(i.n/1e3))+"k+";this.context.fillText(e,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.2*i.h))}else this.context.fillText(""+i.n,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.15*i.h));this.context.closePath()}ready(){this.isReady||(this.isReady=!0,this.readyCb())}setIcon(t){e(()=>{this.setIconSrc(t.toDataURL("image/png"))})}setIconSrc(e){if(this.browser.ff||this.browser.opera){const t=this.icons[this.icons.length-1],n=window.document.createElement("link");this.icons=[n],n.setAttribute("rel","icon"),n.setAttribute("type","image/png"),window.document.getElementsByTagName("head")[0].appendChild(n),n.setAttribute("href",e),t.parentNode&&t.parentNode.removeChild(t)}else this.icons.forEach(t=>{t.setAttribute("href",e)})}badge(e,t){this.isReady?("string"==typeof e||e>0?this.circle(e,t):this.reset(),this.setIcon(this.canvas)):this.readyCb=()=>{this.badge(e,t)}}static getLinks(){const e=[],t=window.document.getElementsByTagName("head")[0].getElementsByTagName("link");for(let n=0;n<t.length;n++)/(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))&&e.push(t[n]);return e}static getIcons(){let e=c.getLinks();return 0===e.length&&(e=[window.document.createElement("link")],e[0].setAttribute("rel","icon"),window.document.getElementsByTagName("head")[0].appendChild(e[0])),e.forEach(e=>{e.setAttribute("type","image/png")}),e}}}).call(this,n(172).setImmediate)},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(13),a=n.n(i);async function s(e=""){""===e||e.endsWith("/")||(e+="/");const t=r(`${e}config.${document.domain}.json`),n=r(e+"config.json");try{const e=await t;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await n}}function r(e){return new Promise((function(t,n){a()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,i,a)=>{try{if(e||i.status<200||i.status>=300)return i&&(404==i.status||0==i.status&&""==a)&&t({}),void n({err:e,response:i});t(JSON.parse(a))}catch(e){n({err:e})}})}))}},429:function(e,t){},430:function(e,t){},623:function(e,t){},626:function(e,t){},81:function(e,t,n){"use strict";n.r(t),n.d(t,"rageshakePromise",(function(){return z})),n.d(t,"preparePlatform",(function(){return Q})),n.d(t,"setupLogStorage",(function(){return J})),n.d(t,"loadConfig",(function(){return Y})),n.d(t,"loadOlm",(function(){return X})),n.d(t,"loadLanguage",(function(){return Z})),n.d(t,"loadSkin",(function(){return ee})),n.d(t,"loadTheme",(function(){return te})),n.d(t,"loadApp",(function(){return ne})),n.d(t,"showError",(function(){return ie})),n.d(t,"showIncompatibleBrowser",(function(){return ae})),n.d(t,"_t",(function(){return se}));var i=n(1010),a=n(1011),s=n.n(a),r=n(146),o=n(82),c=n.n(o),l=n(84),d=n(89),u=n(83),h=n.n(u),p=n(274),g=n(1563),f=n(87),w=n(93),m=n(445),y=n(90),b=n(165),v=n(96),C=n(388),x=n(107),O=n(194),I=n(92),E=n(563),k=n(152),A=n(981),S=n(21),j=n(1564);class P extends p.e{constructor(...e){super(...e),h()(this,"_favicon",void 0)}async getConfig(){return Object(S.a)()}getHumanReadableName(){return"Vector Base Platform"}get favicon(){return this._favicon?this._favicon:this._favicon=new j.a}updateFavicon(){let e="#d00",t=this.notificationCount;this.errorDidOccur&&(t=t||"×",e="#f00"),this.favicon.badge(t,{bgColor:e})}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),this.updateFavicon())}setErrorStatus(e){this.errorDidOccur!==e&&(super.setErrorStatus(e),this.updateFavicon())}startUpdater(){}getDefaultDeviceDisplayName(){return Object(l.a)("Unknown device")}}var N=n(1);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}const D=window.electron,U=navigator.platform.toUpperCase().includes("MAC");function R(e){["call_state"].includes(e.action)&&D.send("app_onAction",e)}class L extends g.a{constructor(){super(),h()(this,"pendingIpcCalls",{}),h()(this,"nextIpcCallId",0),h()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void N.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void N.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),D.on("seshatReply",this.onIpcReply)}async ipcCall(e,...t){const n=++this.nextIpcCallId;return new Promise((i,a)=>{this.pendingIpcCalls[n]={resolve:i,reject:a},window.electron.send("seshat",{id:n,name:e,args:t})})}async supportsEventIndexing(){return this.ipcCall("supportsEventIndexing")}async initEventIndex(e,t){return this.ipcCall("initEventIndex",e,t)}async addEventToIndex(e,t){return this.ipcCall("addEventToIndex",e,t)}async deleteEvent(e){return this.ipcCall("deleteEvent",e)}async isEventIndexEmpty(){return this.ipcCall("isEventIndexEmpty")}async isRoomIndexed(e){return this.ipcCall("isRoomIndexed",e)}async commitLiveEvents(){return this.ipcCall("commitLiveEvents")}async searchEventIndex(e){return this.ipcCall("searchEventIndex",e)}async addHistoricEvents(e,t,n){return this.ipcCall("addHistoricEvents",e,t,n)}async addCrawlerCheckpoint(e){return this.ipcCall("addCrawlerCheckpoint",e)}async removeCrawlerCheckpoint(e){return this.ipcCall("removeCrawlerCheckpoint",e)}async loadFileEvents(e){return this.ipcCall("loadFileEvents",e)}async loadCheckpoints(){return this.ipcCall("loadCheckpoints")}async closeEventIndex(){return this.ipcCall("closeEventIndex")}async getStats(){return this.ipcCall("getStats")}async getUserVersion(){return this.ipcCall("getUserVersion")}async setUserVersion(e){return this.ipcCall("setUserVersion",e)}async deleteEventIndex(){return this.ipcCall("deleteEventIndex")}}class _ extends P{constructor(){super(),h()(this,"eventIndexManager",new L),h()(this,"pendingIpcCalls",{}),h()(this,"nextIpcCallId",0),h()(this,"ssoID",Object(O.b)(32)),h()(this,"onUpdateDownloaded",async(e,{releaseNotes:t,releaseName:n})=>{f.a.dispatch({action:I.a.CheckUpdates,status:p.d.Ready}),this.shouldShowUpdate(n)&&Object(E.b)(await this.getAppVersion(),n,t)}),h()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void N.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void N.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),f.a.register(R),D.on("check_updates",(e,t)=>{f.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:I.a.CheckUpdates},function(e){return!0===e?{status:p.d.Downloading}:!1===e?{status:p.d.NotAvailable}:{status:p.d.Error,detail:e}}(t)))}),D.on("before-quit",(function(){N.a.log("element-desktop closing"),m.b()})),D.on("ipcReply",this.onIpcReply),D.on("update-downloaded",this.onUpdateDownloaded),D.on("preferences",()=>{f.a.fire(I.a.ViewUserSettings)}),D.on("userDownloadCompleted",(e,{path:t,name:n})=>{const i="DOWNLOAD_TOAST_"+t;k.a.sharedInstance().addOrReplaceToast({key:i,title:Object(l.a)("Download Completed"),props:{description:n,acceptLabel:Object(l.a)("Open"),onAccept:()=>{D.send("userDownloadOpen",{path:t}),k.a.sharedInstance().dismissToast(i)},dismissLabel:Object(l.a)("Dismiss"),numSeconds:10},component:A.a,priority:99})}),Object(C.e)(C.b.NAVIGATION,{keybinds:[{modifiers:[C.a],key:C.c}],description:Object(l.b)("Switch to space by number")}),U?(Object(C.e)(C.b.NAVIGATION,{keybinds:[{modifiers:[C.d.COMMAND],key:x.a.COMMA}],description:Object(l.b)("Open user settings")}),Object(C.e)(C.b.NAVIGATION,{keybinds:[{modifiers:[C.d.COMMAND],key:x.a.SQUARE_BRACKET_LEFT},{modifiers:[C.d.COMMAND],key:x.a.SQUARE_BRACKET_RIGHT}],description:Object(l.b)("Previous/next recently visited room or community")})):Object(C.e)(C.b.NAVIGATION,{keybinds:[{modifiers:[C.d.ALT],key:x.a.ARROW_LEFT},{modifiers:[C.d.ALT],key:x.a.ARROW_RIGHT}],description:Object(l.b)("Previous/next recently visited room or community")}),this.ipcCall("startSSOFlow",this.ssoID)}async getConfig(){return this.ipcCall("getConfig")}getHumanReadableName(){return"Electron Platform"}supportsMultiLanguageSpellCheck(){return!U}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),D.send("setBadgeCount",e))}supportsNotifications(){return!0}maySendNotifications(){return!0}displayNotification(e,t,n,i){navigator.userAgent.includes("Linux")&&(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const a={body:t,silent:!0};n&&(a.icon=n);const s=new window.Notification(e,a);return s.onclick=()=>{f.a.dispatch({action:"view_room",room_id:i.roomId}),window.focus(),this.ipcCall("focusWindow")},s}loudNotification(e,t){D.send("loudNotification")}async getAppVersion(){return this.ipcCall("getAppVersion")}supportsAutoLaunch(){return!0}async getAutoLaunchEnabled(){return this.ipcCall("getAutoLaunchEnabled")}async setAutoLaunchEnabled(e){return this.ipcCall("setAutoLaunchEnabled",e)}supportsWarnBeforeExit(){return!0}async shouldWarnBeforeExit(){return this.ipcCall("shouldWarnBeforeExit")}async setWarnBeforeExit(e){return this.ipcCall("setWarnBeforeExit",e)}supportsAutoHideMenuBar(){return!U}async getAutoHideMenuBarEnabled(){return this.ipcCall("getAutoHideMenuBarEnabled")}async setAutoHideMenuBarEnabled(e){return this.ipcCall("setAutoHideMenuBarEnabled",e)}supportsMinimizeToTray(){return!U}async getMinimizeToTrayEnabled(){return this.ipcCall("getMinimizeToTrayEnabled")}async setMinimizeToTrayEnabled(e){return this.ipcCall("setMinimizeToTrayEnabled",e)}async canSelfUpdate(){const e=await this.ipcCall("getUpdateFeedUrl");return Boolean(e)}startUpdateCheck(){super.startUpdateCheck(),D.send("check_updates")}installUpdate(){D.send("install_update")}getDefaultDeviceDisplayName(){const e=w.a.get().brand;return Object(l.a)("%(brand)s Desktop (%(platformName)s)",{brand:e,platformName:navigator.userAgent.includes("Macintosh")?"macOS":navigator.userAgent.includes("FreeBSD")?"FreeBSD":navigator.userAgent.includes("OpenBSD")?"OpenBSD":navigator.userAgent.includes("SunOS")?"SunOS":navigator.userAgent.includes("Windows")?"Windows":navigator.userAgent.includes("Linux")?"Linux":"Unknown"})}screenCaptureErrorString(){return null}requestNotificationPermission(){return Promise.resolve("granted")}reload(){window.location.reload()}async ipcCall(e,...t){const n=++this.nextIpcCallId;return new Promise((i,a)=>{this.pendingIpcCalls[n]={resolve:i,reject:a},window.electron.send("ipcCall",{id:n,name:e,args:t})})}getEventIndexingManager(){return this.eventIndexManager}async setLanguage(e){return this.ipcCall("setLanguage",e)}setSpellCheckLanguages(e){this.ipcCall("setSpellCheckLanguages",e).catch(e=>{N.a.log("Failed to send setSpellCheckLanguages IPC to Electron"),N.a.error(e)})}async getSpellCheckLanguages(){return this.ipcCall("getSpellCheckLanguages")}async getAvailableSpellCheckLanguages(){return this.ipcCall("getAvailableSpellCheckLanguages")}getSSOCallbackUrl(e){const t=super.getSSOCallbackUrl(e);return t.protocol="element",t.searchParams.set("element-desktop-ssoid",this.ssoID),t}startSingleSignOn(e,t,n,i){super.startSingleSignOn(e,t,n,i),y.a.createTrackedDialog("Electron","SSO",b.a,{title:Object(l.a)("Go to your browser to complete Sign In"),description:c.a.createElement(v.a,null)})}navigateForwardBack(e){this.ipcCall(e?"navigateBack":"navigateForward")}navigateToSpace(e){f.a.dispatch({action:I.a.SwitchSpace,num:e})}onKeyDown(e){let t=!1;switch(e.key){case x.a.SQUARE_BRACKET_LEFT:case x.a.SQUARE_BRACKET_RIGHT:!U||!e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(this.navigateForwardBack(e.key===x.a.SQUARE_BRACKET_LEFT),t=!0);break;case x.a.ARROW_LEFT:case x.a.ARROW_RIGHT:U||!e.altKey||e.metaKey||e.ctrlKey||e.shiftKey||(this.navigateForwardBack(e.key===x.a.ARROW_LEFT),t=!0)}if(!t&&!d.b.getValue("showCommunitiesInsteadOfSpaces")&&e.code.startsWith("Digit")&&"Digit0"!==e.code&&Object(x.d)(e)){const n=e.code.slice(5);this.navigateToSpace(parseInt(n,10)),t=!0}return t}async getPickleKey(e,t){try{return await this.ipcCall("getPickleKey",e,t)}catch(e){return null}}async createPickleKey(e,t){try{return await this.ipcCall("createPickleKey",e,t)}catch(e){return null}}async destroyPickleKey(e,t){try{await this.ipcCall("destroyPickleKey",e,t)}catch(e){}}}var B=n(13),M=n.n(B),F=n(1565),W=n.n(F);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}class K extends P{constructor(){super(),h()(this,"pollForUpdate",()=>this.getMostRecentVersion().then(e=>{const t=this.getNormalizedAppVersion();return t!==e?(this.shouldShowUpdate(e)&&Object(E.b)(t,e),{status:p.d.Ready}):(Object(E.a)(),{status:p.d.NotAvailable})},e=>(N.a.error("Failed to poll for update",e),{status:p.d.Error,detail:e.message||e.status?e.status.toString():"Unknown Error"}))),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}getHumanReadableName(){return"Web Platform"}supportsNotifications(){return Boolean(window.Notification)}maySendNotifications(){return"granted"===window.Notification.permission}requestNotificationPermission(){return new Promise((function(e,t){window.Notification.requestPermission(t=>{e(t)})}))}displayNotification(e,t,n,i){const a={body:t,tag:"vector",silent:!0};n&&(a.icon=n);const s=new window.Notification(e,a);return s.onclick=function(){f.a.dispatch({action:"view_room",room_id:i.roomId}),window.focus(),s.close()},s}getMostRecentVersion(){return new Promise((function(e,t){M()({method:"GET",url:"version",qs:{cachebuster:Date.now()}},(n,i,a)=>{if(n||i.status<200||i.status>=300)return null===n&&(n={status:i.status}),void t(n);const s=a.trim();e(s)})}))}getNormalizedAppVersion(){let e="v1.9.6";return new RegExp("^v[0-9]+.[0-9]+.[0-9]+(-.+)?$").test("v1.9.6")&&(e="v1.9.6".substr(1)),e}getAppVersion(){return Promise.resolve(this.getNormalizedAppVersion())}startUpdater(){this.pollForUpdate(),setInterval(this.pollForUpdate,6e5)}async canSelfUpdate(){return!0}startUpdateCheck(){super.startUpdateCheck(),this.pollForUpdate().then(e=>{f.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:I.a.CheckUpdates},e))})}installUpdate(){window.location.reload()}getDefaultDeviceDisplayName(){const e=new URL(window.location.href),t=[e.host,e.pathname.replace(/\/$/,"")].join(""),n=new W.a,i=n.getBrowser().name||"unknown browser";let a=n.getOS().name||"unknown OS";return"Mac OS"===a&&(a="macOS"),Object(l.a)("%(appName)s (%(browserName)s, %(osName)s)",{appName:t,browserName:i,osName:a})}screenCaptureErrorString(){return"https:"!==window.location.protocol?Object(l.a)("You need to be using HTTPS to place a screen-sharing call."):null}reload(){window.location.reload()}}class H extends K{setNotificationCount(e){if(!navigator.setAppBadge)return super.setNotificationCount(e);this.notificationCount!==e&&(this.notificationCount=e,navigator.setAppBadge(e).catch(e=>{N.a.error("Failed to update PWA app badge",e)}))}}var G=n(122),q=n(237),$=n(443);window.mxSendRageshake=function(e,t){const n=w.a.get().bug_report_endpoint_url;n?(void 0===t&&(t=!0),e&&e.trim()?Object($.a)(n,{userText:e,sendLogs:t,progressCallback:N.a.log.bind(console)}).then(()=>{N.a.log("Bug report sent!")},e=>{N.a.error(e)}):N.a.error("Cannot send a rageshake without a message - please tell us what went wrong")):N.a.error("Cannot send a rageshake - no bug_report_endpoint_url configured")};const z=function(){const e=m.d(!1);return e.then(()=>{N.a.log("Initialised rageshake."),N.a.log("To fix line numbers in Chrome: Meatball menu → Settings → Ignore list → Add /rageshake\\.js$"),window.addEventListener("beforeunload",e=>{N.a.log("element-web closing"),m.b()}),m.a()},e=>{N.a.error("Failed to initialise rageshake: "+e)}),e}();function Q(){window.electron?(N.a.log("Using Electron platform"),G.a.set(new _)):window.matchMedia("(display-mode: standalone)").matches?(N.a.log("Using PWA platform"),G.a.set(new H)):(N.a.log("Using Web platform"),G.a.set(new K))}function J(){return w.a.get().bug_report_endpoint_url?m.e():(N.a.warn("No bug report endpoint set - logs will not be persisted"),Promise.resolve())}async function Y(){w.a.put(await G.a.get().getConfig()||{})}function X(){return s.a.init({locateFile:()=>i.a}).then(()=>{N.a.log("Using WebAssembly Olm")}).catch(e=>(N.a.log("Failed to load Olm: trying legacy version",e),new Promise((e,t)=>{const n=document.createElement("script");n.src="olm_legacy.js",n.onload=e,n.onerror=t,document.body.appendChild(n)}).then(()=>window.Olm.init()).then(()=>{N.a.log("Using legacy Olm")}).catch(e=>{N.a.log("Both WebAssembly and asm.js Olm failed!",e)})))}async function Z(){const e=d.b.getValue("language",null,!0);let t=[];e?t=[e]:l.e().forEach(e=>{t.push(...l.f(e))});try{await l.k(t),document.documentElement.setAttribute("lang",l.d())}catch(e){N.a.error("Unable to set language",e)}}async function ee(){N.a.log("Loading skin...");const[e,t]=await Promise.all([Promise.resolve().then(n.bind(null,105)),n.e(12).then(n.bind(null,1588))]);e.loadSkin(t),N.a.log("Skin loaded!")}async function te(){Object(q.h)()}async function ne(e){const t=await n.e(11).then(n.bind(null,1583));window.matrixChat=r.render(await t.loadApp(e),document.getElementById("matrixchat"))}async function ie(e,t){const i=(await n.e(13).then(n.bind(null,1584))).default;window.matrixChat=r.render(o.createElement(i,{title:e,messages:t}),document.getElementById("matrixchat"))}async function ae(e){const t=(await n.e(10).then(n.bind(null,1585))).default;window.matrixChat=r.render(o.createElement(t,{onAccept:e}),document.getElementById("matrixchat"))}const se=l.a}}]);
//# sourceMappingURL=init.js.map