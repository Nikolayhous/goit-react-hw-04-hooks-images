(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1HxQw",Modal:"Modal_Modal__XsFNB"}},17:function(e,t,a){e.exports={image:"Skeleton_image__2T8zr",text:"Skeleton_text__1EG7o"}},28:function(e,t,a){e.exports={container:"Container_container__1f4CI"}},29:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2m34_"}},30:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2TOH3",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__2JoMl"}},31:function(e,t,a){e.exports={LoaderContainer:"Loader_LoaderContainer__2tW6a"}},33:function(e,t,a){e.exports={Button:"Button_Button__nC1UK"}},34:function(e,t,a){e.exports={IconButton:"IconButton_IconButton__1fr5p"}},40:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Search_Searchbar__3Lojk",SearchForm:"Search_SearchForm__3Vjx_",SearchFormBtn:"Search_SearchFormBtn__2dcD6",SearchFormBtnLabel:"Search_SearchFormBtnLabel__39f0u",SearchFormInput:"Search_SearchFormInput__1ki09"}},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(40),a(6)),i=a.n(l),s=a(18),u=a(12),m=a(4),j=a(13),b=(a(42),a(15)),d=a.n(b),h="22607866-39f004f28173cdb15c56bee0e";function f(){return f=Object(u.a)(i.a.mark((function e(t){var a,n,r,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,d.a.get("?&q=".concat(t,"&page=").concat(a,"&key=").concat(h,"&per_page=12"));case 4:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),f.apply(this,arguments)}d.a.defaults.baseURL="https://pixabay.com/api/";var p=function(e){return f.apply(this,arguments)},O=a(28),g=a.n(O),x=a(1);var v=function(e){var t=e.children;return Object(x.jsx)("div",{className:g.a.container,children:t})},_=a(7),y=a.n(_);var S=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("header",{className:y.a.Searchbar,children:Object(x.jsxs)("form",{className:y.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return Object(j.b)("Enter a name for the picture!");t(c),o("")},children:[Object(x.jsx)("button",{type:"submit",className:y.a.SearchFormBtn,children:Object(x.jsx)("span",{className:y.a.SearchFormBtnLabel,children:"Search"})}),Object(x.jsx)("input",{className:y.a.SearchFormInput,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value.toLowerCase())}})]})})})},w=a(29),I=a.n(w),k=a(30),F=a.n(k),B=a.p+"static/media/error.b3f3063a.jpg";var C=function(e){var t=e.onModal,a=e.webformatURL,n=void 0===a?B:a,r=e.tags,c=void 0===r?"photo":r,o=e.image;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("li",{className:"ImageGalleryItem",children:Object(x.jsx)("img",{onClick:function(){t(o)},src:n,alt:c,className:F.a.ImageGalleryItem__image})})})};var L=function(e){var t=e.onModal,a=e.pixaBayImages;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("ul",{className:I.a.ImageGallery,children:a.map((function(e){return Object(x.jsx)(C,{onModal:t,tags:e.tags,webformatURL:e.webformatURL,image:e},e.id)}))})})},M=a(31),N=a.n(M),E=a(32),G=a.n(E),R=(a(82),function(){return Object(x.jsx)("div",{className:N.a.LoaderContainer,children:Object(x.jsx)(G.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:5e3})})}),U=a(33),P=a.n(U);var T=function(e){var t=e.onClick;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("button",{type:"button",onClick:t,className:P.a.Button,children:"Load more"})})},H=a(19),J=a(35),D=a(34),Q=a.n(D),q=["children","onModal"],z=function(e){var t=e.children,a=e.onModal,n=Object(J.a)(e,q);return Object(x.jsx)("button",Object(H.a)(Object(H.a)({type:"button",onClick:a,className:Q.a.IconButton},n),{},{children:t}))};z.defaultProps={onModal:function(){return null},children:null};var K,V=z,W=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Y(e,t){var a=e.title,r=e.titleId,c=A(e,W);return n.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,K||(K=n.createElement("g",{stroke:"currentColor"},n.createElement("circle",{cx:5.5,cy:6.5,r:5,fill:"white"}),n.createElement("path",{strokeLinecap:"round",d:"M3.5 8.5l4-4m0 4l-4-4"}))))}var Z=n.forwardRef(Y),$=(a.p,a(16)),ee=a.n($);var te=function(e){var t=e.onModal,a=e.children;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};window.addEventListener("keydown",e),window.removeEventListener("keydown",e)}),[t]),Object(c.createPortal)(Object(x.jsx)("div",{className:ee.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(x.jsxs)("div",{className:ee.a.Modal,children:[a,Object(x.jsx)(V,{onClick:t,"aria-label":"close modal",children:Object(x.jsx)(Z,{width:"35",height:"35"})})]})}),document.getElementById("modalRoot"))},ae=a(17),ne=a.n(ae);function re(){return Object(x.jsxs)("div",{role:"alert",children:[Object(x.jsx)("img",{src:B,width:"500",alt:"photo_error",className:ne.a.image}),Object(x.jsx)("p",{className:ne.a.text,children:"Sorry, no results were found!"})]})}var ce=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};var oe=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),l=o[0],b=o[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),f=h[0],O=h[1],g=Object(n.useState)(!1),_=Object(m.a)(g,2),y=_[0],w=_[1],I=Object(n.useState)([]),k=Object(m.a)(I,2),F=k[0],B=k[1],C=Object(n.useState)({}),M=Object(m.a)(C,2),N=M[0],E=M[1];Object(n.useEffect)((function(){if(l){w(!0);var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(l,a);case 3:t=e.sent,B((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),1!==a&&ce(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[a,l]);var G=function(){O(!f)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(S,{onSubmit:function(e){b(e),r(a),B([])}}),Object(x.jsxs)(v,{children:[0!==F.length?Object(x.jsx)(L,{onModal:function(e){E(e),G()},pixaBayImages:F}):""!==l&&Object(x.jsx)(re,{}),y&&Object(x.jsx)(R,{}),0!==F.length&&Object(x.jsx)(T,{onClick:function(){w(!y),r((function(e){return e+1})),w(y)}}),f&&Object(x.jsxs)(te,{onModal:G,children:[y&&Object(x.jsx)(R,{}),Object(x.jsx)("img",{src:N.largeImageURL,alt:N.tags})]})]})]})};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(oe,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.1a829d46.chunk.js.map