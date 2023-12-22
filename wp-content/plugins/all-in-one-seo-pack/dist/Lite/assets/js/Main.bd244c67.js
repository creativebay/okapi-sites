import{j as d}from"./links.7c59a081.js";import{R as l,a as f}from"./RequiresUpdate.b27af265.js";import{a as h}from"./addons.b148ccf0.js";import{C as g}from"./Index.23b4bfe4.js";import{o as e,c as n,x,k as _,l as $,q as v}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as o}from"./_plugin-vue_export-helper.abeb2ae0.js";import b from"./Redirects.c17ede05.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.ab8f4241.js";import"./RequiresUpdate.2f11ff81.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./license.6b332f88.js";import"./allowed.84696446.js";/* empty css             */import"./params.f0608262.js";import"./Ellipse.f3da1d66.js";import"./index.43a192b7.js";import"./Caret.02d7c74a.js";import"./Header.ecbf8628.js";import"./ScrollAndHighlight.7d665dcb.js";import"./LogoGear.49550bdb.js";import"./AnimatedNumber.5b54d9b9.js";import"./numbers.c7cb4085.js";import"./Logo.0d9f9e6e.js";import"./Support.af6a4f04.js";import"./Tabs.0f534f75.js";import"./TruSeoScore.b474bf15.js";import"./Information.8e84b099.js";import"./Slide.7ee1d0f1.js";import"./Url.a9144d27.js";import"./Date.b699f705.js";import"./constants.238e5b7b.js";import"./Exclamation.367f8687.js";import"./Gear.ba945e96.js";import"./Redirects.60b70e06.js";import"./Index.28950478.js";import"./JsonValues.870a4901.js";import"./strings.da852d37.js";import"./isString.b49e85a4.js";import"./ProBadge.07a48e27.js";import"./External.7626a9d9.js";import"./Checkbox.257a03d8.js";import"./Checkmark.aaedf5f6.js";import"./Tooltip.bcf420d9.js";import"./Plus.72df22c9.js";import"./Blur.647f62cf.js";import"./Card.d20cb042.js";import"./Table.08a8d42c.js";import"./Index.03e7c6f4.js";import"./Row.dbbe567c.js";import"./RequiredPlans.197cbabd.js";import"./AddonConditions.b641d411.js";const y={};function S(t,r){return e(),n("div")}const R=o(y,[["render",S]]),A={};function w(t,r){return e(),n("div")}const B=o(A,[["render",w]]),C={};function k(t,r){return e(),n("div")}const E=o(C,[["render",k]]),L={};function T(t,r){return e(),n("div")}const q=o(L,[["render",T]]),M={};function U(t,r){return e(),n("div")}const N=o(M,[["render",U]]);const j={setup(){return{redirectsStore:d()}},components:{CoreMain:g,FullSiteRedirect:R,ImportExport:B,Logs:E,Logs404:q,Redirects:b,Settings:N},mixins:[l,f],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){var r,m,a,s,i,c,p,u;const t=h.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return(a=(m=(r=this.redirectsStore.options)==null?void 0:r.logs)==null?void 0:m.log404)!=null&&a.enabled||t.push("logs-404"),(!((c=(i=(s=this.redirectsStore.options)==null?void 0:s.logs)==null?void 0:i.redirects)!=null&&c.enabled)||((u=(p=this.redirectsStore.options)==null?void 0:p.main)==null?void 0:u.method)==="server")&&t.push("logs"),t}}};function D(t,r,m,a,s,i){const c=x("core-main");return e(),_(c,{"page-name":s.strings.pageName,"show-save-button":i.showSaveButton,"exclude-tabs":i.excludeTabs},{default:$(()=>[(e(),_(v(t.$route.name)))]),_:1},8,["page-name","show-save-button","exclude-tabs"])}const Ft=o(j,[["render",D]]);export{Ft as default};
