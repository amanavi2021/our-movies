!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a);var r=a("jSj55");a("dh4R1"),a("kvC6y"),a("gdWjx"),a("5xtVg");var c=a("bpxeT"),o=a("2TvXO"),l=a("fdkM5"),d=a("26XG5"),u=a("7LPX0"),s=document.querySelector(".gallery"),v=document.querySelector(".pagination__box"),g=document.querySelector(".pagination__container");function f(e){var t=localStorage.getItem("".concat(e))||[];try{var n,i,a=JSON.parse(t),r=a.length;if(0===r)return s.innerHTML="",void l.clearPagination(v);"watched"===e&&(null===(n=document.querySelector('button[data-add="queque"]'))||void 0===n||n.addEventListener("click",(function(){v.removeEventListener("click",u),g.removeEventListener("click",_)}))),"queue"===e&&(null===(i=document.querySelector('button[data-add="watched"]'))||void 0===i||i.addEventListener("click",(function(){g.removeEventListener("click",_),v.removeEventListener("click",u)})));var c=Math.ceil(r/3);if(y(m(a,3,1)),c<=7&&c>=1){var o,d;function u(e){var t;if(e.preventDefault(),e.target.classList.contains("pagination__item")){var n=Number(e.target.textContent);l.clearPagination(v),p(n,a),l.displayPaginationSmall(c,v),null===(t=document.querySelector(".js-page-".concat(n)))||void 0===t||t.classList.add("pagination__item--select")}}return l.clearPagination(v),l.displayPaginationSmall(c,v),document.querySelector(".js-page-1").classList.add("pagination__item--select"),v.addEventListener("click",u),1===c&&l.clearPagination(v),"watched"===e&&(null===(o=document.querySelector('button[data-add="queue"]'))||void 0===o||o.addEventListener("click",(function(){g.removeEventListener("click",_),v.removeEventListener("click",u)}))),void("queue"===e&&(null===(d=document.querySelector('button[data-add="watched"]'))||void 0===d||d.addEventListener("click",(function(){g.removeEventListener("click",_),v.removeEventListener("click",u)}))))}l.clearPagination(v),l.displayPaginationBig(c,g,v),document.querySelector(".js-page-1").classList.add("pagination__item--select");var f=document.querySelector(".pagination__btnLeft");document.querySelector(".pagination__btnRight");function _(t){var n,i;if(t.preventDefault(),t.target.classList.contains("pagination__item")||t.target.classList.contains("pagination__btnLeft")||t.target.classList.contains("pagination__btnRight")){if(t.target.classList.contains("pagination__item")){var r=Number(t.target.textContent);p(r,a),L(c,r),l.activityArrows(r,c)}if(t.target.classList.contains("pagination__btnLeft")){var o=document.querySelector(".pagination__item--select"),d=Number(o.textContent)-1;p(d,a),L(c,d),l.activityOfLeftArrow(1)}if(t.target.classList.contains("pagination__btnRight")){var s=document.querySelector(".pagination__item--select"),f=Number(s.textContent)+1;p(f,a),L(c,f),l.activityOfRightArrow(c)}"watched"===e&&(null===(n=document.querySelector('button[data-add="queque"]'))||void 0===n||n.addEventListener("click",(function(){v.removeEventListener("click",u),g.removeEventListener("click",_)}))),"queue"===e&&(null===(i=document.querySelector('button[data-add="watched"]'))||void 0===i||i.addEventListener("click",(function(){g.removeEventListener("click",_),v.removeEventListener("click",u)})))}}f.disabled=!0,g.addEventListener("click",_)}catch(q){console.log("nothing are parsed")}}function m(e,t,n){s.innerHTML="";var i=t*(n-=1),a=i+t;return e.slice(i,a)}function p(e,t){s.innerHTML="",y(m(t,3,e))}function L(e,t){var n;l.clearPagination(v);var i=5-(Math.ceil(5/3)-2),a=e-4;t<i?l.displayPaginationBig(e,g,v):t>=i&&t<=a?l.displayPaginationBigMiddle(e,t,g,v):l.displayPaginationBigFinish(e,g,v),null===(n=document.querySelector(".js-page-".concat(t)))||void 0===n||n.classList.add("pagination__item--select")}function y(e){return _.apply(this,arguments)}function _(){return(_=e(c)(e(o).mark((function t(n){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.default)(n).then((function(e){return e}));case 3:i=e.sent,s.innerHTML=i,(0,u.default)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var q=a("fj34r");a("26XG5"),a("9VC5X"),a("gcjAE"),a("9eVwy"),f("watched"),document.querySelector(".my-gallery").addEventListener("click",r.default);var b=document.querySelector(".header__buttons-library"),h=document.querySelector('[data-add="queue"]'),k=document.querySelector('[data-add="watched"]');function S(e){e===h?(k.classList.remove("btn--active"),h.classList.add("btn--active")):(k.classList.add("btn--active"),h.classList.remove("btn--active"))}b.addEventListener("click",(function(e){var t=e.target;if(t===h)return q.default.load("queue")?(f("queue"),void S(t)):void S(t);if(t===k)return q.default.load("watched")?(f("watched"),void S(t)):void S(t)}))}();
//# sourceMappingURL=my-library.3b2b5190.js.map