var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i),i("gjiCh");var a=i("1fh5F"),o=i("8ykkE"),c=i("iyB0E");i("ccqIN");const r=document.querySelector(".gallery"),s=document.querySelector(".pagination__box"),l=document.querySelector(".pagination__container"),u=document.querySelector("#search-form");function d(t,e){a.clearPagination(s);const n=5-(Math.ceil(5/3)-2),i=t-4;e<n?a.displayPaginationBig(t,l,s):e>=n&&e<=i?a.displayPaginationBigMiddle(t,e,l,s):a.displayPaginationBigFinish(t,l,s),document.querySelector(`.js-page-${e}`)?.classList.add("pagination__item--select")}async function g(t){r.innerHTML="",c.default.pageNumber=t,(0,o.default)()}function f(t){t.target.classList.contains("pagination__item")&&(r.innerHTML="",c.default.pageNumber=Number(t.target.textContent),(0,o.default)(),document.querySelector(`.js-page-${currentPage}`).classList.add("pagination__item--select"))}i("1bQoE"),i("bTcpz"),i("kF8TM"),i("4S0r6"),i("01gbF"),i("9btTf"),async function(){const t=function(){const t=localStorage.getItem("currentFilms")||{};try{return JSON.parse(t).total_pages}catch{console.log("nothing")}}();if((0,o.default)(),t<=7&&t>=1){return a.displayPaginationSmall(t,s),document.querySelector(".js-page-1").classList.add("pagination__item--select"),s.addEventListener("click",f),void u.addEventListener("submit",(function(){s.removeEventListener("click",f),l.removeEventListener("click",n)}))}s.innerHTML="",a.displayPaginationBig(t,l,s),document.querySelector(".js-page-1").classList.add("pagination__item--select");const e=document.querySelector(".pagination__btnLeft");function n(e){if(e.preventDefault(),e.target.classList.contains("pagination__item")||e.target.classList.contains("pagination__btnLeft")||e.target.classList.contains("pagination__btnRight")){if(e.target.classList.contains("pagination__item")){const n=Number(e.target.textContent);g(n),d(t,n),a.activityArrows(n,t)}if(e.target.classList.contains("pagination__btnLeft")){const e=document.querySelector(".pagination__item--select"),n=Number(e.textContent)-1;g(n),d(t,n),a.activityOfLeftArrow(1)}if(e.target.classList.contains("pagination__btnRight")){const e=document.querySelector(".pagination__item--select"),n=Number(e.textContent)+1;g(n),d(t,n),a.activityOfRightArrow(t)}}}document.querySelector(".pagination__btnRight"),e.disabled=!0,l.addEventListener("click",n),u.addEventListener("submit",(function(){l.removeEventListener("click",n),s.removeEventListener("click",f)}))}();
//# sourceMappingURL=index.ac791d8c.js.map
