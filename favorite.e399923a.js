!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},r.parcelRequired7c6=a),a.register("iE7OH",(function(r,n){var t,a;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)o[r[n]]=e[r[n]]},a=function(e){var r=o[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),a.register("aNJCr",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=a[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=r),r}})),a("iE7OH").register(JSON.parse('{"StDo9":"favorite.e399923a.js","cwcOM":"dislike.6673e1b1.svg"}'));var o;o=a("aNJCr").getBundleURL("StDo9")+a("iE7OH").resolve("cwcOM");var c,i,s,d=document.querySelector(".favovite-card-container");console.log(d),function(){var e=document.querySelectorAll(".header__link"),r=document.querySelector("body").id,n=!0,t=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;i.dataset.active==r&&i.classList.add("current")}}catch(e){t=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(t)throw a}}}(),c=d,s=new URL(o),i=JSON.parse(localStorage.getItem("cardsInfo")).filter((function(e){return!0===e.isFavorite})).map((function(e,r){var n=e.isRead,t=e.img,a=e.title,o=e.text,c=e.date,i=e.category,d=e.readMoreLink;return e.isFavorite,'<div class = "card">\n          <div class = "card-img-wrapper">\n          <span class="card__read">'.concat(n?"Have read":"",'</span>\n          <span class="card__btn">Add to favorite\n          <img class="like" src=').concat(s,' alt="Add to favorite" width="16" height="16">\n\n          </span>\n          <span class="card__category">').concat(i,'</span>\n          <img class="card__img" src=').concat(t,' alt="" width="350px" height="500px">\n        </div>\n        <div class="card-description">\n          <h3 class="card__title">').concat(a,'</h3>\n          <p class="card__text">').concat(o,'</p>\n          <div class="card__date-creation">\n            <span class="card__date">').concat(c,'</span>\n            <a class="card-read-more" href="').concat(d,'" target="_blank" rel="noopener noreferrer">Read more</a>\n          </div>\n        </div>\n\n        </div>')})).join(""),c.innerHTML=i}();
//# sourceMappingURL=favorite.e399923a.js.map