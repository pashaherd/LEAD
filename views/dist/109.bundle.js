/*! For license information please see 109.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklead=self.webpackChunklead||[]).push([[109],{4570:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(5349),i=n(5245),o=n(3001),a=n(7373);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const s=new Map,c=new WeakMap;let u=0;function h(e,t,n={},r=undefined){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){let t=function(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(c.has(n)||(u+=1,c.set(n,u.toString())),c.get(n)):"0"):e[t]}`;var n})).toString()}(e),n=s.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},s.set(t,n)}return n}(n);let l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),s.delete(i))}}const d=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}class m extends a.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),f(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=h(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!f(this.props)){const{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}const e=this.props,{children:t,as:n}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,d);return a.createElement(n||"div",l({ref:this.handleNode},r),t)}}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,i){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),l=new S(i||[]);return r(a,"_invoke",{value:N(e,n,l)}),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function d(){}function f(){}function m(){}var g={};s(g,o,(function(){return this}));var y=Object.getPrototypeOf,E=y&&y(y(O([])));E&&E!==t&&n.call(E,o)&&(g=E);var b=m.prototype=d.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function i(r,o,a,l){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==p(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,a,l)}),(function(e){i("throw",e,a,l)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return i("throw",e,a,l)}))}l(s.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function N(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=k(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return f.prototype=m,r(b,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=s(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(L.prototype),s(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new L(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),s(b,l,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function g(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,i)}const y=function(e){var t=e.handleScroll,n=e.scrollPosition,r=(0,a.useRef)(null),i=(0,a.useRef)(null),l=(0,a.useRef)(null),s=(0,a.useRef)();function c(e,t){switch(console.log(t),t.target.id){case"1":e&&t.target.classList.remove("fade-left");break;case"2":e&&t.target.classList.remove("fade-right")}}function u(){var e;return e=v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[t.current.value],console.log(n),!n[0].includes("@")){e.next=7;break}return e.next=5,fetch("/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return console.log(e.status)})).catch((function(e){return console.log(e)}));case 5:e.next=9;break;case 7:s.current.classList.add("on"),setTimeout((function(){s.current.classList.remove("on")}),2500);case 9:case"end":return e.stop()}}),e)})),u=function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){g(o,r,i,a,l,"next",e)}function l(e){g(o,r,i,a,l,"throw",e)}a(void 0)}))},u.apply(this,arguments)}return(0,a.useEffect)((function(){setTimeout((function(){r.current.classList.remove("hide-i")}),3e3);var e=function(){try{i.current.classList.add("scroll")}catch(e){console.log(e)}t()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),console.log(n),(0,a.useEffect)((function(){var e=Array.from(i.current.lastChild.children),t="";n<650?(e[0].firstChild.classList.add("highlight"),t=e[0].id):n>650&&n<1360?(e[1].firstChild.classList.add("highlight"),t=e[1].id):n>1360&&n<2e3?(e[2].firstChild.classList.add("highlight"),t=e[2].id):(e[3].firstChild.classList.add("highlight"),t=e[3].id,console.log(t)),e.filter((function(e){return e.id!==t})).forEach((function(e){return e.firstChild.classList.remove("highlight")}))}),[n]),a.createElement("div",{className:"infopage"},a.createElement("div",{className:"guide-i"},a.createElement("div",{ref:i,className:"nav-section"},a.createElement("h1",null,"Featured"),a.createElement("ul",null,a.createElement("li",{id:"b1"},a.createElement("button",{className:"btn-ip"},"A1")),a.createElement("li",{id:"b2"},a.createElement("button",{className:"btn-ip"},"A2")),a.createElement("li",{id:"b3"},a.createElement("button",{className:"btn-ip"},"A3")),a.createElement("li",{id:"b4"},a.createElement("button",{className:"btn-ip"},"A4"))))),a.createElement("div",{ref:r,className:"content-ip hide-i"},a.createElement("h2",null,"Recieve Free Guide"),a.createElement("button",{onClick:function(){r.current.classList.add("hide-i")},id:"shut"},a.createElement("img",{src:o,alt:"",id:"close-ip"})),a.createElement("div",null,a.createElement("input",{name:"emailForm",ref:l,placeholder:"Enter",type:"text",alt:""}),a.createElement("img",{src:"/images/email.png",alt:"",id:"email-ip"})),a.createElement("p",{className:"emailSubmit",ref:s},"Email Invalid"),a.createElement("p",null,"Get an in-depth & personalized business analysis "),a.createElement("button",{id:"submit-ip",onClick:function(){return function(e){return u.apply(this,arguments)}(l)}},"Submit")),a.createElement("div",{className:"cards-ip"},a.createElement("div",{className:"c-section"},a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},a.createElement("img",{src:"/images/flowchart.jpg",alt:"",id:"tech-ip"}),a.createElement("p",null,"Captivating Lead Strategy"),a.createElement("div",{className:"d d1"}),a.createElement("div",{className:"d d2"}))})),a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},a.createElement("h1",null,"How It Works"),a.createElement("div",{className:"blog-content-ip"},a.createElement("span",null,a.createElement("h2",null,"Initital Interaction"),a.createElement("p",null,"Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email. Upon Interaction, LEAD begins collecting valuble consumer data.")),a.createElement("span",null,a.createElement("h2",null,"Prompt Retargeting"),a.createElement("p",null,"Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information via Google & Twilio APIs")),a.createElement("span",null,a.createElement("h2",null,"Stored Data"),a.createElement("p",null,"LEAD then stores the data and repurposes it to automate tedious tasks (Appointment Setting, Creating Email Lists, Automatic Replies)"))))}))),a.createElement("div",{className:"c-section r2"},a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},a.createElement("img",{src:"/images/happyclient.jpg",alt:"",id:"tech-ip"}),a.createElement("p",null,"Building relationships & Exceeding expectations"),a.createElement("div",{className:"d d1"}),a.createElement("div",{className:"d d2"}))})),a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},a.createElement("h1",null,"Client Satisfaction"),a.createElement("div",{className:"blog-content-ip"},a.createElement("span",null,a.createElement("h2",null,"Happy Clients"),a.createElement("p",null,"Ensuring client satisfaction is a top priority for every business.LEAD ensures a great impression accross all client interactions to secure credibility without the need for human presence")),a.createElement("span",null,a.createElement("h2",null,"Accessible Assistance"),a.createElement("p",null,"Clients are also free to opt for a interaction with one of your representatives from your company. This allows LEAD to act as a saftey net for any client calls or attempts to reach out are effectively recovered."))))}))),a.createElement("div",{className:"c-section"},a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},a.createElement("img",{src:"/images/blogcover.jpg",alt:"",id:"tech-ip"}),a.createElement("p",null,"Give Potential Clients Clarity In The Market"),a.createElement("div",{className:"d d1"}),a.createElement("div",{className:"d d2"}))})),a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},a.createElement("h1",null,"Business Visibility"),a.createElement("div",{className:"blog-content-ip"},a.createElement("span",null,a.createElement("h2",null,"Stand Out"),a.createElement("p",null,"There are approximately 30 million active businesses in North America. The attributes that make your business unique are embedded in the services/product offering and how it is presented. Implementing LEAD as a co-pilot allows you to focus on what matters most")),a.createElement("span",null,a.createElement("h2",null,"Take Control"),a.createElement("p",null,"By taking control and partnering with our web services agency, you unlock the power to elevate your online presence and drive exceptional results. Our tailored strategies and cutting-edge solutions empower you to reach new heights, captivate your target audience, and outshine your competition."))))}))),a.createElement("div",{className:"c-section r4"},a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},a.createElement("img",{src:"/images/auto.jpg",alt:"",id:"tech-ip"}),a.createElement("p",null,"Time Is Money"),a.createElement("div",{className:"d d1"}),a.createElement("div",{className:"d d2"}))})),a.createElement(m,{onChange:c,threshold:.5},(function(e){e.inView;var t=e.ref;return a.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},a.createElement("h1",null,"Seamless Automation"),a.createElement("div",{className:"blog-content-ip"},a.createElement("span",null,a.createElement("h2",null,"Automate Everything"),a.createElement("p",null,"Embracing automation holds the key to unlocking unprecedented efficiency and productivity for your business. By implementing automated processes, you can streamline repetitive tasks, eliminate human error, and free up valuable time for your team to focus on strategic initiatives and creative problem-solving. Experience accelerated growth, improved scalability, and a competitive edge in today's fast-paced digital landscape by harnessing the transformative power of automation."))))})))))};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const b=function(){var e,t,n=(e=(0,a.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],l=n[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,null),a.createElement(y,{handleScroll:function(){var e=window.scrollY;l(e)},scrollPosition:o}),a.createElement(i.Z,null))}}}]);