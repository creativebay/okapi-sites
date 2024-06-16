import{s as o,_ as e}from"./default-i18n.Bd0Z306Z.js";import{g as i}from"./vue.esm-bundler.CWQFYt9y.js";import{q as c,u,r}from"./links.DERf9LZO.js";const t="all-in-one-seo-pack",m=()=>{const n=c(),s=u(),a={weveGotWorkToDo:o(e("We've got some%1$swork to do!",t),"<br>"),needsImprovement:o(e("Needs%1$sImprovement!",t),"<br>"),veryGood:e("Very Good!",t),excellent:e("Excellent!",t),toSeeYourSiteScore:e("to see your Site Score.",t),toAnalyzeCompetitorSite:e("to analyze a competitor site.",t),enterLicenseKey:e("A valid license key is required",t),anErrorOccurred:e("An error occurred while analyzing your site.",t),criticalIssues:e("Important Issues",t),warnings:e("Warnings",t),recommendedImprovements:e("Recommended Improvements",t),goodResults:e("Good Results",t),completeSiteAuditChecklist:e("Complete Site Audit Checklist",t)};return{errorObject:i(()=>{if(s.aioseo.data.isLocal)return{description:e("It looks like you are accessing our analyzer from a local install. Our SEO analyzer does not work on local installs because we are unable to access it. Please try again once the site has been published.",t),buttons:[{text:e("Learn More",t),type:"blue",tag:"a",url:r.getDocUrl("seoAnalyzer")}]};switch(n.analyzeError){case"invalid-token":return{description:o(e("Your site is currently not connected to %1$s. In order to analyze your site, you must first connect to our server. Please connect to %1$s and try again.",t),"AIOSEO"),buttons:[{text:e("Connect to AIOSEO",t),type:"blue"}]};case"invalid-html":case"missing-content":case"outbound-request-failed":return{description:o(e("We are unable to retrieve the content for your site. This could be due to a number of reasons, but most likely the connection timed out while our analyzer was trying to access it. Please try again soon.",t),"AIOSEO"),buttons:[{text:e("Try Again",t),type:"blue",runAgain:!0},{text:e("Learn More",t),type:"gray",tag:"a",url:r.getDocUrl("seoAnalyzer")}]};default:return{description:e("The SEO analysis failed due to an unknown error. Please wait a moment and try again. If the issue continues to occur, then please contact our support team.",t),buttons:[{text:e("Learn More",t),type:"blue",tag:"a",url:r.getDocUrl("seoAnalyzer")}]}}}),strings:a}},g={computed:{connectWithAioseo(){return this.$t.sprintf(this.$t.__("Connect with %1$s",this.$td),"AIOSEO")},description(){return 25>=this.score?this.strings.weveGotWorkToDo:50>=this.score?this.strings.needsImprovement:75>=this.score?this.strings.veryGood:this.strings.excellent}}};export{g as S,m as u};
