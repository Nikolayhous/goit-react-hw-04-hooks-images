(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,n){e.exports={ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__2JoMl"}},17:function(e,t,n){e.exports={Overlay:"Modal_Overlay__1HxQw",Modal:"Modal_Modal__XsFNB"}},18:function(e,t,n){e.exports={image:"Skeleton_image__2T8zr",text:"Skeleton_text__1EG7o"}},19:function(e,t,n){e.exports={btnToTop:"ButtonScrollTo_btnToTop__3RuPY",scroll__img:"ButtonScrollTo_scroll__img__1FjKz"}},30:function(e,t,n){e.exports={container:"Container_container__1f4CI"}},31:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__2m34_"}},32:function(e,t,n){e.exports={LoaderContainer:"Loader_LoaderContainer__2tW6a"}},34:function(e,t,n){e.exports={Button:"Button_Button__nC1UK"}},35:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__1fr5p"}},41:function(e,t,n){},7:function(e,t,n){e.exports={Searchbar:"Search_Searchbar__3Lojk",SearchForm:"Search_SearchForm__3Vjx_",SearchFormBtn:"Search_SearchFormBtn__2dcD6",SearchFormBtnLabel:"Search_SearchFormBtnLabel__39f0u",SearchFormInput:"Search_SearchFormInput__1ki09"}},84:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=(n(41),n(6)),l=n.n(i),s=n(20),u=n(12),j=n(4),b=n(13),m=(n(43),n(15)),h=n.n(m),d="22607866-39f004f28173cdb15c56bee0e";function f(){return f=Object(u.a)(l.a.mark((function e(t){var n,r,a,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,h.a.get("?&q=".concat(t,"&page=").concat(n,"&key=").concat(d,"&per_page=12"));case 4:return r=e.sent,a=r.data.hits,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),f.apply(this,arguments)}h.a.defaults.baseURL="https://pixabay.com/api/";var p=function(e){return f.apply(this,arguments)},O=n(30),g=n.n(O),x=n(1);var _=function(e){var t=e.children;return Object(x.jsx)("div",{className:g.a.container,children:t})},v=n(7),y=n.n(v);var S=function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],o=a[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("header",{className:y.a.Searchbar,children:Object(x.jsxs)("form",{className:y.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return Object(b.b)("Enter a name for the picture!");t(c),o("")},children:[Object(x.jsx)("button",{type:"submit",className:y.a.SearchFormBtn,children:Object(x.jsx)("span",{className:y.a.SearchFormBtnLabel,children:"Search"})}),Object(x.jsx)("input",{className:y.a.SearchFormInput,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value.toLowerCase())}})]})})})},w=n(31),I=n.n(w),k=n(16),F=n.n(k),B=n.p+"static/media/error.b3f3063a.jpg";var C=function(e){var t=e.onModal,n=e.webformatURL,r=void 0===n?B:n,a=e.tags,c=void 0===a?"photo":a,o=e.image;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("li",{className:F.a.ImageGalleryItem,children:Object(x.jsx)("img",{onClick:function(){t(o)},src:r,alt:c,className:F.a.ImageGalleryItem__image})})})};var N=function(e){var t=e.onModal,n=e.pixaBayImages;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("ul",{className:I.a.ImageGallery,children:n.map((function(e){return Object(x.jsx)(C,{onModal:t,tags:e.tags,webformatURL:e.webformatURL,image:e},e.id)}))})})},L=n(32),M=n.n(L),E=n(33),T=n.n(E),G=(n(83),function(){return Object(x.jsx)("div",{className:M.a.LoaderContainer,children:Object(x.jsx)(T.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:5e3})})}),R=n(34),P=n.n(R);var U=function(e){var t=e.onClick;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("button",{type:"button",onClick:t,className:P.a.Button,children:"Load more"})})},J=n(21),z=n(36),D=n(35),H=n.n(D),K=["children","onModal"],Q=function(e){var t=e.children,n=e.onModal,r=Object(z.a)(e,K);return Object(x.jsx)("button",Object(J.a)(Object(J.a)({type:"button",onClick:n,className:H.a.IconButton},r),{},{children:t}))};Q.defaultProps={onModal:function(){return null},children:null};var q,V=Q,W=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A(e,t){var n=e.title,a=e.titleId,c=Y(e,W);return r.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,q||(q=r.createElement("g",{stroke:"currentColor"},r.createElement("circle",{cx:5.5,cy:6.5,r:5,fill:"white"}),r.createElement("path",{strokeLinecap:"round",d:"M3.5 8.5l4-4m0 4l-4-4"}))))}var Z=r.forwardRef(A),$=(n.p,n(17)),ee=n.n($);var te=function(e){var t=e.onModal,n=e.children;return Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),Object(c.createPortal)(Object(x.jsx)("div",{className:ee.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(x.jsxs)("div",{className:ee.a.Modal,children:[n,Object(x.jsx)(V,{onClick:t,"aria-label":"close modal",children:Object(x.jsx)(Z,{width:"35",height:"35"})})]})}),document.getElementById("modalRoot"))},ne=n(18),re=n.n(ne);function ae(){return Object(x.jsxs)("div",{role:"alert",children:[Object(x.jsx)("img",{src:B,width:"500",alt:"photo_error",className:re.a.image}),Object(x.jsx)("p",{className:re.a.text,children:"Sorry, no results were found!"})]})}var ce=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},oe=n(19),ie=n.n(oe),le=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:ie.a.btnToTop,children:Object(x.jsx)("button",{children:Object(x.jsx)("img",{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},src:"https://img.icons8.com/nolan/50/circled-up-2.png",className:ie.a.scroll__img,alt:"icon-up-arrow"})})})})},se=function(e){var t=Object(r.useState)(e),n=Object(j.a)(t,2),a=n[0],c=n[1];return[a,function(){c((function(e){return!e}))}]};var ue=function(){var e=Object(r.useState)(1),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(j.a)(c,2),i=o[0],m=o[1],h=se(!1),d=Object(j.a)(h,2),f=d[0],O=d[1],g=Object(r.useState)(!1),v=Object(j.a)(g,2),y=v[0],w=v[1],I=Object(r.useState)([]),k=Object(j.a)(I,2),F=k[0],B=k[1],C=Object(r.useState)({}),L=Object(j.a)(C,2),M=L[0],E=L[1],T=Object(r.useState)(!1),R=Object(j.a)(T,2),P=R[0];return R[1],Object(r.useEffect)((function(){if(i){w(!0);var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(i,n);case 3:t=e.sent,B((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),1!==n&&ce(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n,i]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{}),Object(x.jsx)(S,{onSubmit:function(e){m(e),a(n),B([])}}),Object(x.jsxs)(_,{children:[0!==F.length?Object(x.jsx)(N,{onModal:function(e){E(e),O()},pixaBayImages:F}):""!==i&&Object(x.jsx)(ae,{}),y&&Object(x.jsx)(G,{}),0!==F.length&&Object(x.jsx)(U,{onClick:function(){w(!y),a((function(e){return e+1})),w(y)}}),P&&Object(x.jsx)(le,{}),F.length>12&&Object(x.jsx)(le,{}),f&&Object(x.jsxs)(te,{onModal:O,children:[y&&Object(x.jsx)(G,{}),Object(x.jsx)("img",{src:M.largeImageURL,alt:M.tags})]})]})]})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ue,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.6cc76522.chunk.js.map