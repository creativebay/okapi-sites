!function(){"use strict";var e,n={250:function(){var e=window.wp.blocks,n=window.React,t=(window.wp.i18n,window.wp.blockEditor),r=JSON.parse('{"u2":"create-block/test-block"}');(0,e.registerBlockType)(r.u2,{edit:function(){return(0,n.createElement)("div",{...(0,t.useBlockProps)()},(0,n.createElement)("div",{className:"main-content"},(0,n.createElement)(t.InnerBlocks,null)),(0,n.createElement)("div",{className:"sidebar"},(0,n.createElement)(t.InnerBlocks,null)))},save:function(){return(0,n.createElement)("div",{...t.useBlockProps.save()},(0,n.createElement)("div",{className:"main-content"},(0,n.createElement)(t.InnerBlocks.Content,null)),(0,n.createElement)("div",{className:"sidebar"},(0,n.createElement)(t.InnerBlocks.Content,null)))}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return n[e](c,c.exports,r),c.exports}r.m=n,e=[],r.O=function(n,t,o,c){if(!t){var l=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],c=e[u][2];for(var i=!0,a=0;a<t.length;a++)(!1&c||l>=c)&&Object.keys(r.O).every((function(e){return r.O[e](t[a])}))?t.splice(a--,1):(i=!1,c<l&&(l=c));if(i){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[t,o,c]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,c,l=t[0],i=t[1],a=t[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(a)var u=a(r)}for(n&&n(t);s<l.length;s++)c=l[s],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(u)},t=self.webpackChunktest_block=self.webpackChunktest_block||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(250)}));o=r.O(o)}();