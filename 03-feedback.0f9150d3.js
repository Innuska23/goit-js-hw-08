function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=v();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function w(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function x(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},x.flush=function(){return void 0===f?a:w(v())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),O=JSON.parse(localStorage.getItem("feedback-form-state"));O&&(S.value=O.email||"",j.value=O.textarea||"");const w=e(t)(((e,t)=>{const n={...JSON.parse(localStorage.getItem("feedback-form-state")),[t]:e};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500);S.addEventListener("input",(e=>w(e.target.value,"email"))),j.addEventListener("input",(e=>w(e.target.value,"textarea"))),y.addEventListener("submit",(e=>{const t=new FormData(y);e.preventDefault(),y.reset(),localStorage.removeItem("feedback-form-state"),console.log(Object.fromEntries(t))}));
//# sourceMappingURL=03-feedback.0f9150d3.js.map