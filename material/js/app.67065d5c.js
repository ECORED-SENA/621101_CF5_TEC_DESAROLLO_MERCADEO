(function(e){function a(a){for(var i,n,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,n=1;n<o.length;n++){var c=o[n];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"38277627","chunk-0206bfa0":"463c4a9c","chunk-0cfca828":"44242c00","chunk-13303073":"2c08a667","chunk-13a6037e":"98736c74","chunk-1479a341":"4a5dfc6d","chunk-1fb07a61":"b33bd91f","chunk-2c06842c":"005a314b","chunk-2d0dad62":"ba765496","chunk-2d208d90":"efcebf93","chunk-2d21d0e2":"61f2d594","chunk-2d22c123":"f8dbbd19","chunk-2e80bb9a":"26bb697e","chunk-4cdd78c0":"d7ac33f1","chunk-515a8379":"42f099cc","chunk-522cec8c":"e5d2c418","chunk-59974754":"f6097793","chunk-5a6377df":"91dc1dbb","chunk-7432e4d4":"143b7629","chunk-766a929b":"c616b3d0","chunk-c796899c":"e1bde27b",comple:"5a6ff500",creditos:"aea273ce",glosario:"6549d8a2",intro:"2cdc03f0",referencias:"50e0dd89",tema1:"247a86d2",tema2:"0843f9a4",tema3:"e4568311"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"e095d819","chunk-522cec8c":"99a35118","chunk-59974754":"1055a402","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"92cde18b","chunk-c796899c":"31d6cfe0",comple:"d1ec1b75",creditos:"e095d819",glosario:"ab98c283",intro:"0e433876",referencias:"bbb53ec1",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete n[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,o){i=r[e]=[a,o]}));a.push(i[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(o,i,function(a){return e[a]}.bind(null,i));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.0f3b944a.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view"),o("footer")],1)],1),o("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(o("cf25"),o("2877")),l=Object(s["a"])(c,n,r,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("8c4f")),m=o("ae58"),p=o("7e58");i["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=f,b=o("1c2c"),h=(o("becf"),o("7b17"),o("ab8b"),o("a3a0"),o("4bc7"),o("78df"),{global:{componenteFormativo:"Segmentación y plan de distribución",descripcionCurso:"A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del informe de segmentación de mercados y del plan de distribución para su idea de negocio o proyecto productivo.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Segmentación de mercados",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Segmento",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Mercado",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Marketing digital",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Plan de marketing digital",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Estrategia digital",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Social Media Marketing",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"E-business",hash:"t_2_4"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Distribución comercial",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Canales de distribución",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Intermediario",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Acuerdos comerciales",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Formatos comerciales",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Logística",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"Plan de distribución",hash:"t_3_6"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Nelftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Claudia Juliana León Pinto",cargo:"Experta temática ",centro:"Centro de Servicios Empresariales y Turísticos",regional:"Regional Santander"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:["Jorge Armando Villamizar Moreno","Juan Daniel Polanco Muñoz"],cargo:"Diseño web"},{nombre:["Carmen Alicia Martínez Torres","Daniela Muñoz Bedoya","Gilberto Junior Rodríguez Rodríguez","José Jaime Luis Tang Pinzón","Lina Marcela Pérez Manchego","María Carolina Tamayo López","Vícor Raúl Cárdenas Cáceres","Wilson Andrés Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Producción audiovisual"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo front-end"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación y vinculación en plataforma LMS "],centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Begoña. Trespalacios, Juan (2006). Estrategias de Distribución Comercial. Ediciones Paraninfo."},{referencia:"Carballar, J.A. (2018) Social Media. Marketing personal y profesional. México. Alfaomega."},{referencia:"Céspedes, A. (2008) Principios de mercadeo. Ed. 5. Bogotá. Ecoe Ediciones."},{referencia:"Chaffey, D. (2014) Marketing digital. Estrategia, implementación y práctica. Ed. 5. México. Pearson."},{referencia:"Fernández, R. (2009) Segmentación de mercados. Ed. 3. México. McGraw-Hill."},{referencia:"Ferré, J. (2003). Estrategias de Distribución. Fundamentos de Marketing. México. Editorial Océano."},{referencia:"Fisher, L. Espejo, J. (2017) Mercadotecnia. Ed. 5. México. McGraw-Hill."},{referencia:"Hernández, E. (2018) Manual del comercio electrónico. Barcelona. Marge Books."},{referencia:"Hoyer, W.; Mclnnis, D. (2018) Comportamiento del consumidor. Ed. 7. México. Cengage."},{referencia:"Gallo, M. A. (2016) Introducción a la logística, Tulua. Uceva."},{referencia:"Gutiérrez, A. (2013). Gestión de stocks en la logística de almacenes. Bogotá. Ediciones de la U."},{referencia:"Irureta, S. (2015) Comercio electrónico. Madrid. McGraw-Hill."},{referencia:"Kerin, R.; Harley, S. (2018). Marketing. Ed.13 México. McGraw Hill."},{referencia:"Kotler, P.; Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson."},{referencia:"Kotler, P.; Amstrong, G. (2017). Marketing. Ed.16. México. Pearson."},{referencia:"Lambin, J.J. (2009) Dirección de marketing. Gestión estratégica y operativa de mercado. Ed. 2. México. McGraw-Hill."},{referencia:"Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U."},{referencia:"Prieto, J. E. (2009). Investigación de mercados. Bogotá: Ecoe Ediciones."},{referencia:"Rivas, J.; Grande, I. (2017) Comportamiento del consumidor. Decisiones y estrategias de marketing. Ed. 8. Editorial ESIC."},{referencia:"Roldan, S. (2016) Community management 2.0. Gestión de comunidades virtuales. Bogotá. Ecoe Ediciones."},{referencia:"Schiffman, L. (2015) Comportamiento del consumidor. Ed. 11. México. Pearson."},{referencia:"Somalo, I. (2018) El comercio electrónico. Bogotá. Alfaomega."},{referencia:"Soria, M. (2017) Plan de marketing empresarial. Madrid. Editorial ECP."},{referencia:"Vélez, T. (2014) Logística empresarial, gestión eficiente del flujo de suministros. Bogotá. Ediciones de la U."},{referencia:"West, A. (2007). Gestión de la distribución comercial. Madrid: Díaz de Santos Casielles, Rodolfo. Álvarez."}],glosario:[{termino:"CANAL DE DISTRIBUCIÓN",significado:"Ruta que toma el producto o servicio para llegar desde el productor hasta el usuario final. El canal de distribución incluye las ventas directas, distribuidores mayoristas, vendedores independientes, correo directo y el comercio a detalle."},{termino:"COMUNICACIÓN EN LA DISTRIBUCIÓN",significado:"La estrategia en la comunicación en la distribución es un elemento estratégico de cooperación de los intermediarios hacia los clientes, que fortalece los canales de marketing."},{termino:"COMPORTAMIENTO DEL CONSUMIDOR",significado:"Forma que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios."},{termino:"DISTRIBUCIÓN FÍSICA O LOGÍSTICA INTEGRAL",significado:"La logística es el proceso de planear, implementar y controlar procedimientos para transportar y almacenar bienes y servicios de manera eficiente y efectiva, además de información relacionada desde el punto de origen hasta el punto de consumo, con el propósito de cumplir con los requerimientos del consumidor. "},{termino:"ESTRATEGIAS DE DISTRIBUCIÓN",significado:"Las estrategias de distribución deben tener en cuenta las estrategias corporativas y las de mercadeo. En cuanto a estas últimas, es preciso acotar que pueden determinarse estrategias de distribución con respecto a las diferentes variables que componen la mezcla de mercadeo."},{termino:"ESTRATEGIAS DE SEGMENTACIÓN",significado:"Las empresas son conscientes que los compradores no son todos iguales y tienen necesidades distintas, por lo que pueden llevar a cabo diferentes estrategias de segmentación: Estrategia indiferenciada, estrategia de diferenciación y estrategia concentrada o de concentración."},{termino:"FORMATOS COMERCIALES",significado:"Son aquellos lugares en donde se coloca un producto a disposición del cliente de tal manera que este logre conseguirlos a un buen precio. Los formatos comerciales por lo general suelen diferenciarse por su tamaño y por la diferencia de productos existentes."},{termino:"HÁBITO DE COMPRA",significado:"Modo acostumbrado de comportarse del comprador con respecto a los lugares de compra, desplazamientos, tipos de establecimientos visitados, frecuencia de compra, momento de la compra y clases de productos adquiridos, así como los criterios de elección que regularmente utiliza y las actitudes y opiniones que suele tener sobre los establecimientos comerciales."},{termino:"LOGÍSTICA",significado:"«Conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución». Es fundamental para el comercio. Las actividades logísticas conforman un sistema que es el enlace entre la producción y los mercados que están separados por el tiempo y la distancia."},{termino:"LOGÍSTICA INVERSA",significado:"Gestiona el retorno de las mercancías en la cadena de suministro, de la forma más efectiva y económica posible, se encarga de la recuperación y reciclaje de envases, embalajes y residuos peligrosos; así como de los procesos de retorno de excesos de inventario, devoluciones de clientes, productos, entre otros."},{termino:"MARKETING DIGITAL",significado:"Está caracterizado por la combinación y utilización de estrategias de comercialización en medios digitales."},{termino:"MERCADO",significado:"Grupo identificable de consumidores con cierto poder adquisitivo, que están dispuestos y disponibles para pagar por un producto o un servicio. La totalidad de los compradores potenciales y actuales de algún producto o servicio."},{termino:"MERCADO OBJETIVO",significado:"Segmento de ese mercado seleccionado por la empresa para ofrecer sus productos o servicios y a los cuales la empresa espera cumplir sus necesidades y sobre el cual se desarrollan todas las estrategias de comercialización, penetración y posicionamiento."},{termino:"NICHO DE MERCADO",significado:"Es un segmento de mercado relativamente pequeño."},{termino:"SEGMENTACIÓN DE MERCADO",significado:"Es la división de los mercados para formar grupos distintos, con base en características similares."},{termino:"SEGMENTACIÓN CONDUCTUAL",significado:"Divide a los compradores en grupos, con base a sus conocimientos sobre un producto, su actitud ante al mismo, el uso que le dan o la forma en que responden a un producto."},{termino:"SEGMENTACIÓN DEMOGRÁFICA",significado:"Es la división de grupos de consumidores en segmentos basada en características demográficas, como, edad, ingreso, género y ocupación."},{termino:"SEGMENTACIÓN PSICOGRÁFICA",significado:"Es la segmentación de los clientes por clase social, estilo de vida, características psicológicas, como las actitudes, los intereses, opiniones y valores."},{termino:"SEGMENTACIÓN GEOGRÁFICA",significado:"Es la división de grupos de consumidores en segmentos analizando el lugar donde éstos habitan."}],complementario:[{texto:"Carballar, J. A. (2018) Social Media.",tipo:"Libro",link:"https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/social-media-marketing-personal-y-profesional?location=1 "},{texto:"Céspedes, A. (2008) Principios de mercadeo.",tipo:"Libro",link:"http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/30027"},{texto:"Fernández, R. (2009) Segmentación de mercados.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=687&pg=1 "},{texto:"Fisher, L.; Espejo, J. (2017) Mercadotecnia.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4612&pg=1"},{texto:"Hernández E. (2018) Manual del comercio electrónico.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45158?page=1 "},{texto:"Hoyer, W.; Mclnnis, D. (2018) Comportamiento del consumidor.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7493&pg=1 "},{texto:"Irureta, S. (2015) Comercio electrónico.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5357&pg=1 "},{texto:"Kerin, R.; Harley, S. (2018). Marketing.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6261&pg=1 "},{texto:"Kotler, P. (2016) Dirección de marketing.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1 "},{texto:"Kotler, P.; Amstrong, G. (2017). Marketing.    ",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1 "},{texto:"Lambin, J.J. (2009) Dirección de marketing.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=515&pg=1 "},{texto:"Prettel, G. (2016) Marketing, una herramienta para el crecimiento.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1 "},{texto:"Prieto, J. E. (2009). Investigación de mercados.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69104?page=1 "},{texto:"Rivas, J.; Grande, I. (2017) Comportamiento del consumidor.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/119581?page=1 "},{texto:"Roldan, S. (2016) Community management 2.0.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3161&pg=1 "},{texto:"Schiffman, L. (2015) Comportamiento del consumidor.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3468&pg=1 "},{texto:"Somalo, I. (2018) El comercio electrónico.",tipo:"Libro",link:"https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/el-comercio-electronico?location=1 "},{texto:"Soria, M. (2017) Plan de marketing empresarial.",tipo:"Libro",link:"https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5214046&ppg=1 "},{texto:"Vélez, T. (2014) Logística empresarial.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5569&pg=1"}]});i["a"].prototype.$config=h;var v=o("9224");i["a"].prototype.$package=v,i["a"].config.productionTip=!1,new i["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.a478e07c.svg"},cf25:function(e,a,o){"use strict";o("fea6")},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.460f1ffa.png"},fea6:function(e,a,o){}});
//# sourceMappingURL=app.67065d5c.js.map