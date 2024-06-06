"use strict";(self.webpackChunkdm_knowledgebase=self.webpackChunkdm_knowledgebase||[]).push([[8401],{1243:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var s=t(8215),a=t(7559),i=t(4142),o=t(9169),l=t(8774),r=t(1312),c=t(6025),d=t(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(l.A,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function x(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function f(){const e=(0,i.OF)(),n=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(x,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},6011:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var s=t(6540),a=t(1213),i=t(9532),o=t(4848);const l=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(l.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(8215),m=t(4581),h=t(7719);function v(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var b=t(1878),x=t(4267),f=t(7559),p=t(2053),g=t(4336);function j(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(n||t||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(p.A,{tags:a})})}),l&&(0,o.jsx)(g.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var A=t(1422),C=t(5195),L=t(1312);const N={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function _(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",N.tocCollapsibleButton,!n&&N.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const k={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function T(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,A.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(k.tocCollapsible,!i&&k.tocCollapsibleExpanded,t),children:[(0,o.jsx)(_,{collapsed:i,onClick:l}),(0,o.jsx)(A.N,{lazy:!0,className:k.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(C.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_ITEo"};function M(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(T,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,H.tocMobile)})}var w=t(7763);function y(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(w.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var I=t(1107),E=t(1544);function B(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(I.A,{as:"h1",children:t})}),(0,o.jsx)(E.A,{children:n})]})}var O=t(1243),V=t(996);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function G(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,o.jsx)(M,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(y,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&S.docItemCol),children:[s&&(0,o.jsx)(V.A,{}),(0,o.jsx)(b.A,{}),(0,o.jsxs)("div",{className:S.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(O.A,{}),(0,o.jsx)(x.A,{}),t.mobile,(0,o.jsx)(B,{children:n}),(0,o.jsx)(j,{})]}),(0,o.jsx)(v,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function P(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(G,{children:(0,o.jsx)(t,{})})]})})}},7719:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(1312),a=t(9022),i=t(4848);function o(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(8215),a=t(1312),i=t(7559),o=t(2252),l=t(4848);function r(e){let{className:n}=e;const t=(0,o.r)();return t.badge?(0,l.jsx)("span",{className:(0,s.A)(n,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},1878:(e,n,t)=>{t.d(n,{A:()=>x});t(6540);var s=t(8215),a=t(4586),i=t(8774),o=t(1312),l=t(8295),r=t(7559),c=t(5597),d=t(2252),u=t(4848);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function v(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:t,onClick:s,children:(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,l.HW)(o),x=m??(f=b).docs.find((e=>e.id===f.mainDocId));var f;return(0,u.jsxs)("div",{className:(0,s.A)(n,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:n}=e;const t=(0,d.r)();return t.banner?(0,u.jsx)(b,{className:n,versionMetadata:t}):null}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(8215),a=t(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(4848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:r})})}},5195:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(6540),a=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:l,...h})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var s=t(8215),a=t(1312),i=t(5260),o=t(4848);function l(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);