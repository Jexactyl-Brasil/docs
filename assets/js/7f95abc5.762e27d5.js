"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4564],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>v});var r=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),d=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=t,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return o?r.createElement(v,i(i({ref:a},c),{},{components:o})):r.createElement(v,i({ref:a},c))}));function v(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<n;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4953:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=o(7462),t=(o(7294),o(3905));const n={},i="Migrar do Pterodactyl v1.x",s={unversionedId:"Jexactyl/Extras/Migra\xe7\xe3o/pterodactyl",id:"Jexactyl/Extras/Migra\xe7\xe3o/pterodactyl",title:"Migrar do Pterodactyl v1.x",description:"Este painel Modifica Arquivos raizes do Jexactyl e do pterodactyl, \xe9 fortemente recomendado o uso de um database Novo e Sem arquivos para melhor funcionamento.",source:"@site/docs/3 - Jexactyl/6 - Extras/1 - Migra\xe7\xe3o/pterodactyl.md",sourceDirName:"3 - Jexactyl/6 - Extras/1 - Migra\xe7\xe3o",slug:"/Jexactyl/Extras/Migra\xe7\xe3o/pterodactyl",permalink:"/docs/Jexactyl/Extras/Migra\xe7\xe3o/pterodactyl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrar do Jexactyl v2.x",permalink:"/docs/Jexactyl/Extras/Migra\xe7\xe3o/jexactyl"},next:{title:"Configurar Discord 0Auth para Jexactyl",permalink:"/docs/Jexactyl/Extras/Adicional/configura\xe7\xe3o"}},l={},d=[{value:"Fa\xe7a backup do seu painel!",id:"fa\xe7a-backup-do-seu-painel",level:3},{value:"Marcar painel como indispon\xedvel",id:"marcar-painel-como-indispon\xedvel",level:3},{value:"Baixar Jexactyl",id:"baixar-jexactyl",level:3},{value:"Atualizar as depend\xeancias do Composer",id:"atualizar-as-depend\xeancias-do-composer",level:3},{value:"Limpe o cache da interface do usu\xe1rio compilado",id:"limpe-o-cache-da-interface-do-usu\xe1rio-compilado",level:3},{value:"Atualizar migra\xe7\xf5es de banco de dados",id:"atualizar-migra\xe7\xf5es-de-banco-de-dados",level:3},{value:"Reatribuir permiss\xf5es do servidor web",id:"reatribuir-permiss\xf5es-do-servidor-web",level:3},{value:"Reiniciar os trabalhadores da fila",id:"reiniciar-os-trabalhadores-da-fila",level:3},{value:"Marcar painel como online",id:"marcar-painel-como-online",level:3}],c={toc:d},p="wrapper";function u(e){let{components:a,...o}=e;return(0,t.kt)(p,(0,r.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"migrar-do-pterodactyl-v1x"},"Migrar do Pterodactyl v1.x"),(0,t.kt)("admonition",{title:"Aviso dos Tradutores.",type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"Este painel Modifica Arquivos raizes do Jexactyl e do pterodactyl, \xe9 fortemente recomendado o uso de um database Novo e Sem arquivos para melhor funcionamento.")),(0,t.kt)("hr",null),(0,t.kt)("p",null,"Usando este guia, voc\xea poder\xe1 atualizar para Jexactyl de Pterodactyl v1.x."),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"O Pterodactyl v0.7 \xe9 EOL (fim da vida \xfatil) e n\xe3o \xe9 suportado para migra\xe7\xe3o pelo Jexactyl.\nSe voc\xea estiver executando a v0.7, atualize do Pterodactyl v0.7 para o Pterodactyl v1.0 antes\nseguindo este guia de migra\xe7\xe3o.")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"fa\xe7a-backup-do-seu-painel"},"Fa\xe7a backup do seu painel!"),(0,t.kt)("p",null,"Embora esta migra\xe7\xe3o seja projetada para ser o mais simples poss\xedvel, recomendamos fortemente que voc\xea fa\xe7a um backup\nde todos os dados, apenas para garantir que nada d\xea errado durante a migra\xe7\xe3o.\nVoc\xea pode fazer isso executando os seguintes comandos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Faz backup da estrutura do arquivo e da chave .env.\nsudo cp -R /var/www/pterodactyl /var/www/pterodactyl-backup\n\n# Despeje o banco de dados MySQL e salve-o no diret\xf3rio de backup.\nsudo mysqldump -u root -p panel > /var/www/pterodactyl-backup/panel.sql\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"marcar-painel-como-indispon\xedvel"},"Marcar painel como indispon\xedvel"),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Certifique-se de estar no diret\xf3rio ",(0,t.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"/var/www/pterodactyl")," antes de continuar.")),(0,t.kt)("p",null,'Enquanto a migra\xe7\xe3o ocorre, colocaremos o painel em um estado "indispon\xedvel" para que os usu\xe1rios n\xe3o possam\nacessar a interface do usu\xe1rio ou API. Podemos fazer isso executando o seguinte:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan down\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"baixar-jexactyl"},"Baixar Jexactyl"),(0,t.kt)("p",null,"Depois que seu backup for conclu\xeddo e o Painel estiver off-line, faremos o download dos arquivos Jexactyl\ne sobrescrever os arquivos Pterodactyl existentes."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Baixe a vers\xe3o mais recente do Jexactyl usando CURL.\nsudo curl -L -o panel.tar.gz https://github.com/Next-Panel/Jexactyl-BR/releases/latest/download/panel.tar.gz\n\n# Baixe os arquivos atualizados e exclua o arquivo compactado.\nsudo tar -xzvf panel.tar.gz && sudo rm -f panel.tar.gz\n")),(0,t.kt)("p",null,"Em seguida, configure as permiss\xf5es para que os arquivos do Painel possam ser acessados."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod -R 755 storage/* bootstrap/cache\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"atualizar-as-depend\xeancias-do-composer"},"Atualizar as depend\xeancias do Composer"),(0,t.kt)("p",null,"Ap\xf3s o download dos novos arquivos, voc\xea precisar\xe1 atualizar as depend\xeancias do PHP Composer\nque executam este Painel. Para fazer isso, use ",(0,t.kt)("inlineCode",{parentName:"p"},"composer")," para atualizar os pacotes:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Corre\xe7\xe3o tempor\xe1ria de erros.\nsudo composer require asbiin/laravel-webauthn\n\nsudo composer install --no-dev --optimize-autoloader\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"limpe-o-cache-da-interface-do-usu\xe1rio-compilado"},"Limpe o cache da interface do usu\xe1rio compilado"),(0,t.kt)("p",null,"Voc\xea tamb\xe9m deseja limpar o cache do painel para que o novo site apare\xe7a corretamente."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan optimize:clear\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"atualizar-migra\xe7\xf5es-de-banco-de-dados"},"Atualizar migra\xe7\xf5es de banco de dados"),(0,t.kt)("p",null,"Jexactyl inclui novos recursos e fun\xe7\xf5es que exigem que voc\xea migre para seu banco de dados.\nFelizmente, este \xe9 um processo simples que envolve apenas a execu\xe7\xe3o de um comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan migrate --seed --force\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"reatribuir-permiss\xf5es-do-servidor-web"},"Reatribuir permiss\xf5es do servidor web"),(0,t.kt)("p",null,"Devido \xe0 mudan\xe7a de arquivos na m\xe1quina, precisaremos permitir que o Apache/NGINX os leia\nnovos arquivos. Voc\xea pode fazer isso executando o comando espec\xedfico para o seu servidor web:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Se estiver usando NGINX ou Apache (n\xe3o no CentOS):\nsudo chown -R www-data:www-data /var/www/pterodactyl/*\n\n# Se estiver usando NGINX no CentOS:\nsudo chown -R nginx:nginx /var/www/pterodactyl/*\n\n# Se estiver usando o Apache no CentOS\nsudo chown -R apache:apache /var/www/pterodactyl/*\n")),(0,t.kt)("h3",{id:"reiniciar-os-trabalhadores-da-fila"},"Reiniciar os trabalhadores da fila"),(0,t.kt)("p",null,"Ap\xf3s cada atualiza\xe7\xe3o, voc\xea deve reiniciar o trabalhador da fila, para garantir que o novo c\xf3digo seja carregado e usado."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan queue:restart\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"marcar-painel-como-online"},"Marcar painel como online"),(0,t.kt)("p",null,"Agora que a migra\xe7\xe3o foi conclu\xedda, voc\xea pode colocar o Painel novamente online e disponibiliz\xe1-lo aos usu\xe1rios."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan up\n")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Parab\xe9ns! Voc\xea migrou para Jexactyl e tudo deve estar funcionando normalmente.\nSe voc\xea encontrar algum problema, informe-nos em nosso ",(0,t.kt)("a",{parentName:"p",href:"https://discord.gg/8r7n7mU33R"},"Discord"),".")))}u.isMDXComponent=!0}}]);