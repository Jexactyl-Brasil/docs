"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="Instalar ferramentas de compila\xe7\xe3o",i={unversionedId:"Jexactyl/Extras/Desenvolvimento/instala\xe7\xe3o",id:"Jexactyl/Extras/Desenvolvimento/instala\xe7\xe3o",title:"Instalar ferramentas de compila\xe7\xe3o",description:"*",source:"@site/docs/3 - Jexactyl/6 - Extras/3 - Desenvolvimento/instala\xe7\xe3o.md",sourceDirName:"3 - Jexactyl/6 - Extras/3 - Desenvolvimento",slug:"/Jexactyl/Extras/Desenvolvimento/instala\xe7\xe3o",permalink:"/docs/Jexactyl/Extras/Desenvolvimento/instala\xe7\xe3o",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configura\xe7\xe3o do Sistema de Renova\xe7\xe3o",permalink:"/docs/Jexactyl/Extras/Adicional/renova\xe7\xe3o"},next:{title:"Criando arquivos de front-end",permalink:"/docs/Jexactyl/Extras/Desenvolvimento/construindo"}},l={},c=[{value:"Instalando o NodeJS e o Yarn",id:"instalando-o-nodejs-e-o-yarn",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instalar-ferramentas-de-compila\xe7\xe3o"},"Instalar ferramentas de compila\xe7\xe3o"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Este guia ir\xe1 inform\xe1-lo sobre como come\xe7ar a construir e modificar o Jexactyl."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"instalando-o-nodejs-e-o-yarn"},"Instalando o NodeJS e o Yarn"),(0,o.kt)("p",null,"Em primeiro lugar, precisaremos instalar o pacote 'NodeJS' e tamb\xe9m adicionar o 'Yarn' para que possamos construir o front-end do Painel."),(0,o.kt)("p",null,"O script abaixo \xe9 uma vers\xe3o resumida do m\xe9todo de instala\xe7\xe3o do ",(0,o.kt)("a",{parentName:"p",href:"https://deb.nodesource.com/"},"NodeJS")," que originalmente instala o Node 20.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Instalador do NodeJS 16.x\ncurl -sL https://nextpanel.com.br/scripts/node-install.sh | sudo -E bash -\n")),(0,o.kt)("p",null,"Instale o 'Yarn' e as depend\xeancias necess\xe1rias para que o Jexactyl seja constru\xeddo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo npm i -g yarn\ncd /var/www/jexactyl\nsudo yarn # Installs building dependencies.\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Em seguida, consulte nosso guia de ",(0,o.kt)("a",{parentName:"p",href:"/docs/Jexactyl/Extras/Desenvolvimento/construindo"},"Build")," sobre como construir o frontend."))}u.isMDXComponent=!0}}]);