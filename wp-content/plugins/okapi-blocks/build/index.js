!function(){"use strict";var e,t={250:function(){var e=window.wp.blocks,t=window.React,r=(window.wp.i18n,window.wp.blockEditor),n=JSON.parse('{"u2":"create-block/test-block"}');(0,e.registerBlockType)(n.u2,{edit:function(){return(0,t.createElement)("div",{...(0,r.useBlockProps)()},(0,t.createElement)("form",{class:"newsletter-form",target:"_blank",action:"https://myokapi.com/newsletter-form",method:"GET"},(0,t.createElement)("input",{name:"email",placeholder:"Enter your email"}),(0,t.createElement)("button",{type:"submit"},"Join us")))},save:function(){return(0,t.createElement)("div",{...r.useBlockProps.save()},(0,t.createElement)("form",{class:"newsletter-form",target:"_blank",action:"https://myokapi.com/newsletter-form",method:"GET"},(0,t.createElement)("input",{name:"email",placeholder:"Enter your email"}),(0,t.createElement)("button",{type:"submit"},"Join us")))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkokapi_blocks=self.webpackChunkokapi_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(250)}));o=n.O(o)}();