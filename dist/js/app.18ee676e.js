(function(){"use strict";var t={150:function(t,e,o){var n=o(963),l=o(252);function r(t,e,o,n,r,s){const i=(0,l.up)("headerTop");return(0,l.wg)(),(0,l.j4)(i)}const s={class:"relative h-screen"},i=(0,l._)("div",{class:"bg-green-950 lg:h-20 sm:h-16 pl-36"},[(0,l._)("h3",{class:"font-pop font-bold text-3xl text-white lg:pt-6 sm:pb-4 sm:pt-4"},"Linkify")],-1),c={class:"lg:flex lg:items-center"},u={class:"lg:mt-16 lg:ml-32 sm:mt-8 sm:ml-12"},a=["src"],p={class:"sm:ml-6 sm:mt-8"},f=(0,l._)("h2",{class:"font-pop font-bold lg:text-6xl sm:text-3xl lg:ml-8 text-green-950 sm:ml-6 whitespace-nowrap"},"Enter the original url",-1),g=(0,l._)("h4",{class:"lg:ml-8 font-pop lg:text-xl lg:mt-2 sm:text-md font-bold sm:ml-6 sm:mt-2"},"convert long urls to tiny urls for easy sharing",-1),h={class:"flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4"},m={key:0,class:"flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4"},d=(0,l._)("i",{class:"fas fa-copy"},null,-1),w=[d],v={key:1,class:"items-center justify-center flex text-green-500 font-pop font-bold"},b=(0,l._)("div",{class:"absolute bottom-0 h-16 w-full pt-4 bg-green-950 flex justify-center"},[(0,l._)("h2",{class:"text-white font-pop"},[(0,l.Uk)("© Linkify 2023. Made by "),(0,l._)("a",{href:"https://www.github.com/ikotun-dev ",class:"text-green-200"},"Collins")])],-1);function x(t,e,r,d,x,y){return(0,l.wg)(),(0,l.iD)("div",s,[i,(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("img",{class:"sm:h-72 lg:h-100",src:o(0)},null,8,a)]),(0,l._)("div",p,[f,g,(0,l._)("div",h,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>x.long_url=t),class:"lg:w-76 sm:w-64 focus:outline-none py-2 px-2 font-pop",placeholder:"url",type:"text"},null,512),[[n.nr,x.long_url]]),(0,l._)("div",{onClick:e[1]||(e[1]=(...t)=>y.shorten_url&&y.shorten_url(...t)),class:"pt-2 pl-4 bg-green-800 w-12 text-xl font-bold text-white hover:text-white"}," → ")]),x.short_url?((0,l.wg)(),(0,l.iD)("div",m,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>x.url=t),class:"lg:w-76 sm:w-64 focus:outline-none py-2 px-2 bg-gray-100",type:"text"},null,512),[[n.nr,x.url]]),(0,l._)("div",{onClick:e[3]||(e[3]=(...t)=>y.copyUrl&&y.copyUrl(...t)),class:"pt-2 pl-4 bg-green-800 w-12 text-xl text-white font-bold hover:text-white"},w)])):(0,l.kq)("",!0),x.isCopied?((0,l.wg)(),(0,l.iD)("div",v," Copied! ")):(0,l.kq)("",!0)])]),b])}var y=o(154),_={data(){return{short_url:!1,url:"",long_url:"",isCopied:!1}},methods:{async shorten_url(){const t=await y.Z.post("https://linkify-production-54b1.up.railway.app/api/shortenurl/",{url:this.long_url});200==t.status?(console.log("login was successful"),this.url=t.data.short_url,console.log(this.url),this.short_url=!0):console.log(t.errors)},copyUrl(){navigator.clipboard.writeText(this.url).then((()=>{console.log("URL copied to clipboard"),this.url="Copied!"})).catch((t=>{console.error("Failed to copy URL: ",t)}))}}},k=o(744);const O=(0,k.Z)(_,[["render",x]]);var j=O,C={name:"App",components:{headerTop:j}};const U=(0,k.Z)(C,[["render",r]]);var T=U;(0,n.ri)(T).mount("#app")},0:function(t,e,o){t.exports=o.p+"img/3918929.4a5db648.jpg"}},e={};function o(n){var l=e[n];if(void 0!==l)return l.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,l,r){if(!n){var s=1/0;for(a=0;a<t.length;a++){n=t[a][0],l=t[a][1],r=t[a][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(a--,1);var u=l();void 0!==u&&(e=u)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[n,l,r]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/linkify-ui/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,r,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(c)var a=c(o)}for(e&&e(n);u<s.length;u++)r=s[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(a)},n=self["webpackChunklinkify"]=self["webpackChunklinkify"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(150)}));n=o.O(n)})();
//# sourceMappingURL=app.18ee676e.js.map