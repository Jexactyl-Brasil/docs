"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5443],{3905:(e,a,o)=>{o.d(a,{Zo:()=>s,kt:()=>g});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),p=function(e){var a=t.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},s=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return o?t.createElement(g,i(i({ref:a},s),{},{components:o})):t.createElement(g,i({ref:a},s))}));function g(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3503:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=o(7462),n=(o(7294),o(3905));const r={sidebar_position:2},i="Aceite pagamentos com PayPal",l={unversionedId:"Jexactyl/Extras/Adicional/paypal",id:"Jexactyl/Extras/Adicional/paypal",title:"Aceite pagamentos com PayPal",description:"*",source:"@site/docs/Jexactyl/Extras/2 - Adicional/paypal.md",sourceDirName:"Jexactyl/Extras/2 - Adicional",slug:"/Jexactyl/Extras/Adicional/paypal",permalink:"/docs/Jexactyl/Extras/Adicional/paypal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Jexactyl/Extras/2 - Adicional/paypal.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurar Discord 0Auth para Jexactyl",permalink:"/docs/Jexactyl/Extras/Adicional/configura\xe7\xe3o"},next:{title:"Aceitando pagamentos com a Stripe API",permalink:"/docs/Jexactyl/Extras/Adicional/stripe"}},c={},p=[{value:"Obtenha o ID do cliente e o segredo do cliente",id:"obtenha-o-id-do-cliente-e-o-segredo-do-cliente",level:3},{value:"1. Fa\xe7a login no console do desenvolvedor do PayPal",id:"1-fa\xe7a-login-no-console-do-desenvolvedor-do-paypal",level:3},{value:"2. V\xe1 para o painel e crie um novo aplicativo",id:"2-v\xe1-para-o-painel-e-crie-um-novo-aplicativo",level:3},{value:"3. Crie seu aplicativo do PayPal",id:"3-crie-seu-aplicativo-do-paypal",level:3},{value:"4. Obtenha o ID e o segredo do cliente",id:"4-obtenha-o-id-e-o-segredo-do-cliente",level:3},{value:"5. Adicionar ID e Segredo do Cliente ao Jexactyl",id:"5-adicionar-id-e-segredo-do-cliente-ao-jexactyl",level:3},{value:"6. Ative o gateway do PayPal nas configura\xe7\xf5es",id:"6-ative-o-gateway-do-paypal-nas-configura\xe7\xf5es",level:3},{value:"7. Teste sua configura\xe7\xe3o",id:"7-teste-sua-configura\xe7\xe3o",level:3}],s={toc:p},d="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(d,(0,t.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aceite-pagamentos-com-paypal"},"Aceite pagamentos com PayPal"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Este guia mostrar\xe1 como come\xe7ar facilmente a usar o PayPal com Jexactyl\npara processar compras a cr\xe9dito."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Este sistema foi implementado na ",(0,n.kt)("inlineCode",{parentName:"p"},"v3.1.0"),". Verifique se voc\xea est\xe1 executando esta vers\xe3o\nou mais recente para usar o sistema PayPal.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"obtenha-o-id-do-cliente-e-o-segredo-do-cliente"},"Obtenha o ID do cliente e o segredo do cliente"),(0,n.kt)("p",null,"Voc\xea precisar\xe1 primeiro criar um novo 'App' com o PayPal para obter um ID de cliente e um segredo\npara uso com Jexactyl."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-fa\xe7a-login-no-console-do-desenvolvedor-do-paypal"},"1. Fa\xe7a login no console do desenvolvedor do PayPal"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.knowband.com/blog/wp-content/uploads/2019/02/Paypal-login-PayPal-client-Id.png",alt:"image"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://www.knowband.com/blog/wp-content/uploads/2019/02/2.gif",alt:"image"})),(0,n.kt)("h3",{id:"2-v\xe1-para-o-painel-e-crie-um-novo-aplicativo"},"2. V\xe1 para o painel e crie um novo aplicativo"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Certifique-se de que a altern\xe2ncia na parte superior da p\xe1gina esteja definida para o modo AO VIVO, n\xe3o Sandbox.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.knowband.com/blog/wp-content/uploads/2019/02/5.png",alt:"image"})),(0,n.kt)("h3",{id:"3-crie-seu-aplicativo-do-paypal"},"3. Crie seu aplicativo do PayPal"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.knowband.com/blog/wp-content/uploads/2019/02/6.png",alt:"image"})),(0,n.kt)("h3",{id:"4-obtenha-o-id-e-o-segredo-do-cliente"},"4. Obtenha o ID e o segredo do cliente"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.knowband.com/blog/wp-content/uploads/2019/02/2021-04-21.gif",alt:"image"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-adicionar-id-e-segredo-do-cliente-ao-jexactyl"},"5. Adicionar ID e Segredo do Cliente ao Jexactyl"),(0,n.kt)("p",null,"Em seguida, voc\xea precisar\xe1 colocar essas chaves em seu arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," para permitir o login do Jexactyl."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/jexactyl\nnano .env\n\n# Preencha os campos PAYPAL_CLIENT_ID e PAYPAL_CLIENT_SECRET\n")),(0,n.kt)("h3",{id:"6-ative-o-gateway-do-paypal-nas-configura\xe7\xf5es"},"6. Ative o gateway do PayPal nas configura\xe7\xf5es"),(0,n.kt)("admonition",{title:"Certifique-se de que a configura\xe7\xe3o 'PayPal' esteja definida como 'Habilitado'.",type:"info"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(113).Z,width:"1695",height:"275"})),(0,n.kt)("h3",{id:"7-teste-sua-configura\xe7\xe3o"},"7. Teste sua configura\xe7\xe3o"),(0,n.kt)("p",null,"V\xe1 at\xe9 a Jexactyl Storefront e clique na guia 'Carteira'. Quando estiver l\xe1, tente comprar cr\xe9ditos ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," com o PayPal.\nSe a p\xe1gina redirecionar para um portal de compras do PayPal, parab\xe9ns! Voc\xea configurou e configurou com sucesso o PayPal."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Se voc\xea tiver problemas ao come\xe7ar a usar o PayPal, informe-nos no nosso ",(0,n.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://discord.gg/8r7n7mU33R"},"Discord"))))}u.isMDXComponent=!0},113:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/store_admin-cbdcb17e2e33eca3dba168f73611248d.png"}}]);