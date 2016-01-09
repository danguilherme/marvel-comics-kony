/*eslint-disable */
kony.print("BLITZ INIT");
"use strict";(function(){setTimeout=function(){var t=0;return function(e,n){var o="blitz.timeout."+ ++t;return kony.timer.schedule(o,e,n,!1),o}}(),clearTimeout=function(t){try{kony.timer.cancel(trmb.Constants.timer.KEEP_ALIVE)}catch(e){}},Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(void 0!==o&&null!==o){o=Object(o);for(var r=Object.keys(Object(o)),i=0,s=r.length;s>i;i++){var u=r[i],a=Object.getOwnPropertyDescriptor(o,u);void 0!==a&&a.enumerable&&(e[u]=o[u])}}}return e}}),function(t){function e(t,e){return function(){t.apply(e,arguments)}}function n(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],a(t,e(r,this),e(i,this))}function o(t){var e=this;return null===this._state?void this._deferreds.push(t):void l(function(){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return void(e._state?t.resolve:t.reject)(e._value);var o;try{o=n(e._value)}catch(r){return void t.reject(r)}t.resolve(o)})}function r(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void a(e(n,t),e(r,this),e(i,this))}this._state=!0,this._value=t,s.call(this)}catch(o){i.call(this,o)}}function i(t){this._state=!1,this._value=t,s.call(this)}function s(){for(var t=0,e=this._deferreds.length;e>t;t++)o.call(this,this._deferreds[t]);this._deferreds=null}function u(t,e,n,o){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=o}function a(t,e,n){var o=!1;try{t(function(t){o||(o=!0,e(t))},function(t){o||(o=!0,n(t))})}catch(r){if(o)return;o=!0,n(r)}}var l="function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)},c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};n.prototype["catch"]=function(t){return this.then(null,t)},n.prototype.then=function(t,e){var r=this;return new n(function(n,i){o.call(r,new u(t,e,n,i))})},n.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new n(function(e,n){function o(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var u=s.then;if("function"==typeof u)return void u.call(s,function(t){o(i,t)},n)}t[i]=s,0===--r&&e(t)}catch(a){n(a)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},n.resolve=function(t){return t&&"object"==typeof t&&t.constructor===n?t:new n(function(e){e(t)})},n.reject=function(t){return new n(function(e,n){n(t)})},n.race=function(t){return new n(function(e,n){for(var o=0,r=t.length;r>o;o++)t[o].then(e,n)})},n._setImmediateFn=function(t){l=t},"undefined"!=typeof module&&module.exports?module.exports=n:t.Promise||(t.Promise=n)}(this)}).call(this);var blitz={};!function(){blitz={version:"0.1.0"}}(),function(){function t(t,e){var n,o=e||0;this.length=0;for(var r=0;r<t.length&&(n=t[r]);r++){var i=n.split(":");2==i.length&&(o=Number(i[0]),n=i[1]),this[this[n]=o++]=n,this.length++}}function e(t,e){return function(){return e.apply(this,[t].concat(Array.prototype.slice.call(arguments)))}}function n(t){return Array.prototype.slice.call(t)}blitz.utils={Enum:t,wrap:e,args2array:n}}(),function(){function t(t,e,r){o>=t&&("object"==typeof r&&(r=JSON.stringify(r)),kony.print("["+n[t]+"]["+e+"] "+r))}var e="blitz.logger",n=new blitz.utils.Enum(["NONE","ERROR","INFO","VERBOSE","DEBUG"],1),o=n.INFO;blitz.logger={levels:n,error:function(e,o){o instanceof Error?t(n.ERROR,e,o.message+"\n"+o.stack):t(n.ERROR,e,o)},info:function(e,o){t(n.INFO,e,o)},verbose:function(e,o){t(n.VERBOSE,e,o)},debug:function(e,o){t(n.DEBUG,e,o)},setActiveLevel:function(t){t>0&&t<=n.length&&(o=t,this.info(e,"Log level set to "+o))}}}(),function(){function t(){this.getEventListeners=function(){return this.eventListeners||(this.eventListeners={}),this.eventListeners},this.on=function(t,e){return this.getEventListeners()[t]=this.getEventListeners()[t]||[],e&&"function"==typeof e?(this.getEventListeners()[t].push(e),!0):!1},this.off=function(t,e){var n=this.getEventListeners()[t];if(n&&0!=n.length)for(var o=0;o<n.length;o++)if(n[o]===e){n.splice(o,1);break}},this.trigger=function(t,e){var n=this.getEventListeners()[t];if(n&&0!=n.length){for(var o,r=0;r<n.length&&(o=n[r].call(this,e),o!==!1);r++);return o}}}blitz.EventEmitter=t}(),function(t){var e="blitz.application";blitz.application=function(){var n={};return n.preInit=function(){n.trigger("preinit")},n.init=function(){n.trigger("init")},n.postInit=function(){n.trigger("postinit")},kony.application.setApplicationCallbacks({onbackground:function(){blitz.logger.verbose(e,"onbackground"),n.broadcast("background")},onforeground:function(){blitz.logger.verbose(e,"onforeground"),n.broadcast("foreground")},onlowmemory:function(){blitz.logger.verbose(e,"onlowmemory"),n.broadcast("lowmemory")}}),n.getCurrentForm=function(){var e=kony.application.getCurrentForm();return"string"==typeof e&&(e=t[e]),e},Object.assign(n,new blitz.EventEmitter),n.broadcast=n.trigger,n}()}(this),function(){function t(t,e){var n=new kony.net.HttpRequest;return n.open(t,e),n.setRequestHeader("User-Agent",blitz.application.appName+"/"+blitz.application.appVersion),n}function e(t){var e=new kony.net.FormData;for(var n in t)t.hasOwnProperty(n)&&e.append(n,t[n]);return e}function n(t,e){var n=this;return function(){var o=+n.readyState,r=+n.status;blitz.logger.debug(i,"Request readyState changed: "+o+"/"+constants.HTTP_READY_STATE_DONE),o===constants.HTTP_READY_STATE_DONE&&(r>=200&&299>=r?(blitz.logger.verbose(i,"Request successfully performed."),blitz.logger.info(i,"HTTP "+r),t(n.response)):(blitz.logger.verbose(i,"Request failed."),blitz.logger.info(i,"HTTP "+r),e(n)))}}function o(e){return new Promise(function(o,r){var s=t(constants.HTTP_METHOD_GET,e);s.onReadyStateChange=n.call(s,o,r),blitz.logger.info(i,"GET "+e),s.send()})}function r(o,r){return new Promise(function(s,u){var a=t(constants.HTTP_METHOD_POST,o);a.onReadyStateChange=n.call(a,s,u),blitz.logger.info(i,"POST "+o),a.send(r?e(r):null)})}var i="blitz.http";blitz.http={get:o,post:r}}(),function(t){function e(t){void 0===r.modules[t]&&(r.modules[t]={},r.modules[t].model=void 0,r.modules[t].views={},r.modules[t].controller=void 0)}function n(){var t={};return Object.assign(t,new blitz.EventEmitter),t.set=function(e,n){return blitz.logger.debug(o,"ViewBag add item; "+e+" = "+(n?JSON.stringify(n):n)),t[e]=n,t},t.get=function(e){return t[e]},t.remove=function(e){return delete t[e],t},t.notifyChanges=function(){return t.trigger("change"),t},t}var o="blitz.mvc",r={modules:{}};blitz.logger.verbose(o,"[LOADING]");r.view=function(i,s,u){var a=n();u=Object.assign({},{statusBarColorCode:"#000000",init:function(){}},u);var l={moduleName:i,formId:s,form:function(){return t[l.formId]}};return Object.assign(l,new blitz.EventEmitter),e(i),r.modules[i].views[s]=l,l.init=function(){blitz.logger.verbose(o,l.formId+": init"),l.navigateBack&&(l.form().onDeviceBack=l.navigateBack),l.form().preShow=l.onPreShow.bind(l),l.form().postShow=l.onPostShow.bind(l),l.form().onHide=l.onHide.bind(l),l.form().onDestroy=l.onDestroy.bind(l),u.init&&u.init.call(l),l.trigger("ready")},l.onPreShow=function(){blitz.logger.debug(o,l.formId+": onPreShow"),u.onPreShow&&u.onPreShow.call(this),l.trigger("beforeshow")},l.onPostShow=function(){blitz.logger.debug(o,l.formId+": onPostShow"),u.onPostShow&&u.onPostShow.call(this),l.trigger("show")},l.onHide=function(){blitz.logger.debug(o,l.formId+": onHide"),u.onHide&&u.onHide.call(this),l.trigger("hide")},l.onDestroy=function(){blitz.logger.debug(o,l.formId+": onDestroy"),u.onDestroy&&u.onDestroy.call(this),l.trigger("destroy")},l.open=function(){l.form().show()},l.openForm=function(t){var e=r.modules[i].views[t];e.open.apply(e,blitz.utils.args2array(arguments).splice(1))},l.setStatusBarColor=function(t){l.statusBarColorCode=t||l.statusBarColorCode,blitz.logger.info(o,l.formId+": setting StatusBar color to  "+l.statusBarColorCode),kony.os.deviceInfo().version.substr(0,1)>=5&&StatusBar.setColor(l.statusBarColorCode),blitz.animation.animate(l.form(),{duration:1e-8,steps:{100:{backgroundColor:l.statusBarColorCode}}})},l.data=function(t,e){return 1===arguments.length?a.get(t):a.set(t,e)},a.on("change",function(){return l.updateView()}),l.isActive=function(){return blitz.application.getCurrentForm().id===l.formId},l},r.model=function(t){if(0===arguments.length)throw new Error("Module name is mandatory");var n={set:function(e,n){blitz.logger.verbose(o,t+": storing value for '"+e+"'"),kony.store.setItem(t+"."+e,JSON.stringify(n))},get:function(e){blitz.logger.verbose(o,t+": getting value for '"+e+"'");var n=kony.store.getItem(t+"."+e);return void 0==n?n:JSON.parse(n)}};return e(t),r.modules[t].model=n,n},blitz.mvc=r}(this);
kony.print("BLITZ END");