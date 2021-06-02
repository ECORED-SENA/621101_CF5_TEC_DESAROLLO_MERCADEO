<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    // Muestras
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Segmentación de mercados
    .row.mb-5
      .col-lg-6
        p Los mercados tomados como una unidad integral, se harían demasiado heterogéneos, lo que haría más difícil su satisfacción. Por lo anterior, el proceso de segmentación trata de convertir estos amplios y heterogéneos mercados en segmentos con características similares u homogéneas, facilitando su planeación, desarrollo y control. En el mercado de consumidores hay diversidad de necesidades, gustos, preferencias, costumbres, hábitos, de los cuales podrían resultar segmentos atractivos para las empresas. Las compañías orientadas a los clientes deberán definir la mezcla de marketing correspondiente a cada segmento. (Prettel,2016)
          br
          br
          |Las personas tienen necesidades y deseos diferentes, la segmentación de mercados consiste en dividir a los compradores potenciales en grupos que tienen necesidades comunes y responden de manera similar a una acción de marketing. Cada uno de ellos es un conjunto más o menos homogéneo de compradores potenciales. 
          b Cada segmento del mercado está formado por personas en cierto modo similares entre sí en cuanto a su comportamiento como consumidores. 
          b-none La existencia de distintos segmentos de mercado ha hecho que las empresas apliquen diferentes estrategias de segmentación. (Kerin,2018)
      .col-lg-6
        figure.mb-5
          img(src="@/assets/curso/img1.svg", alt="Texto que describa la imagen")
    .cajon.color-secundario.p-4.mb-5
      .row
        .col-lg-2
          figure
            img(src="@/assets/curso/img2.svg", alt="Texto que describa la imagen")
        .col-lg-10.my-auto
            p Un ejemplo de segmentación es el universo de habitantes de un país, a partir de este se pueden crear subgrupos con características específicas, en Colombia existen diferentes regiones naturales 
              b Andina, Caribe, Pacifico, Orinoquia, Insular y Amazonia; 
              b-none estas regiones pertenecen a un segmento de mercado dentro del universo de Colombia. (Valiñas,2019)
    p.mb-5 Para Fernández (2019) las ventajas para las organizaciones al segmentar los mercados son las siguientes:
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img3.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Certidumbre en el tamaño del mercado:
          p.pe-5 al conocer el grupo podrá definir el tamaño del mercado;es   decir, el número aproximado de personas que conforman elmercado  disponible. Dicho de otra forma, el número aproximado depersonas  que pueden comprar nuestro producto.
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img4.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Claridad al establecer planes de acción: 
          p.pe-5 al conocer a los integrantes del mercado meta se tendrá claridad en los planes de acción a desarrollar.
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img5.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Identificación de los consumidores integrantes del mercado: 
          p.pe-5 conocer a nuestros consumidores nos dará certeza en las decisiones de mercado que se tomen.
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img6.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Reconocimiento de actividades y deseos del consumidor:  
          p.pe-5 las costumbres de los consumidores nos sirven para saber cómo satisfacer sus necesidades en forma oportuna.
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img7.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Simpliﬁcación en la estructura de marcas:
          p.pe-5 al conocer nuestro mercado podemos evitar la existencia de marcas no productivas en nuestro catálogo.
    .container-card-avatar.m-auto
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img8.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Facilidad para la realización de actividades promocionales: 
          p.pe-5 las actividades promocionales estarán dirigidas únicamente al grupo de interés, de modo tal que se cuidarán los recursos de la empresa y se tendrán resultados más efectivos.
    .container-card-avatar.m-auto.mb-5
      hr.hr-line
      .card-avatar
        img(src="@/assets/curso/img9.svg", alt="Texto que describa la imagen" style="width:120px").img-card-avatar.pe-4
        .text-card-avatar
          .h5 Simplicidad para planear: 
          p.pe-5 la planeación simplifica el conceptualizar las actividades para un grupo específico del mercado.
      hr.hr-line
    .h5 Criterios de segmentación
    p.mb-5 Philip Kotler (2016) define a continuación, los criterios fundamentales para segmentar un mercado:
    .tarjetas-ordenadas.m-auto.mb-5
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center Medible
          p.text-center Es posible medir el tamaño, el poder de compra y las características de los segmentos.
      .tarjeta--boton.color-secundario.p-4.m-3 
          img(src='@/assets/curso/img11.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center Sustancial
          p.text-center Los segmentos son grandes y lo suficientemente rentables como para atenderlos. Para que valga la pena dirigirse a un segmento mediante un programa de marketing adecuado, el segmento deberá ser el grupo homogéneo más grande posible. 
      .tarjeta--boton.color-secundario.p-4.m-3 
          img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center Accesible
          p.text-center Es posible llegar a los segmentos y atenderlos de manera eficaz.
      .tarjeta--boton.color-secundario.p-4.m-3 
          img(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center Diferenciable
          p.text-center Los segmentos pueden distinguirse conceptualmente y responder de manera específica a diferentes elementos y programas de la mezcla de marketing.
      .tarjeta--boton.color-secundario.p-4.m-3 
          img(src='@/assets/curso/img14.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center Procesable
          p.text-center Es posible formular programas eficaces para atraer y atender a los segmentos.
    p.mb-5 En la segmentación de mercados es indispensable que el segmento cumpla con estos cinco criterios para lograr una segmentación efectiva. 
    figure.mb-5
      img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen' style= "width: 720px").m-auto.mb-3
      figcaption Fuente: Autor.
    #t_1_1.titulo-segundo
      .h4 1.1 Segmento
    p.mb-5 Un segmento de mercado consiste en un grupo de consumidores que responden de manera similar a un conjunto determinado de esfuerzos de marketing. Las organizaciones deben enfocar sus esfuerzos en satisfacer las diferentes necesidades de segmentos de mercado individuales. El proceso de dividir un mercado en distintos grupos de compradores con diferentes necesidades, características y comportamientos, y quienes podrían requerir productos o programas de marketing separados, se llama segmentación de mercado. (Amstrong,2017)
    .h5 Pasos para segmentar el mercado.
    p.mb-5 Kerin (2018) determina los cinco pasos clave para segmentar y definir los mercados meta y vincular las necesidades del mercado de consumidores con el programa de marketing de la organización. 
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="PASO 1:")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen' style= "width: 200px")
          .col-xl-8
            p.pe-5.py-5 Agrupar clientes potenciales en segmentos, requiere identificar las características de los compradores potenciales en un mercado y luego asignarlos a un segmento.
      .tarjeta.color-secundario--borde.p-4(titulo="PASO 2:")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen' style= "width: 200px")
          .col-xl-8
            p.pe-5.py-5 Agrupar en categorías los productos que se van a vender, se debe encontrar una forma de agrupar los productos que se venden en categorías significativas es tan importante como aglutinar a los clientes en segmentos.
      .tarjeta.color-secundario--borde.p-4(titulo="PASO 3:")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen' style= "width: 200px")
          .col-xl-8
            p.pe-5.py-5 Estimación del tamaño del mercado determina cuantos consumidores se encuentran en determinado segmento de mercado.
      .tarjeta.color-secundario--borde.p-4(titulo="PASO 4:")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen' style= "width: 200px")
          .col-xl-8
            p.pe-5.py-5 Selección del mercado meta, es necesario seleccionar un mercado y enfocar sus estrategias.
      .tarjeta.color-secundario--borde.p-4(titulo="PASO 5:")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen' style= "width: 200px")
          .col-xl-8
            p.pe-5.py-5 Emprender acciones de marketing para ese mercado meta es necesario desarrollar y ejecutar un plan de acción teniendo en cuenta las variables de la mezcla de mercadeo. 
    p.mb-5 Estos pasos se integran en tres acciones básicas identificación de las necesidades en donde se deben agrupar a los clientes potenciales en segmentos junto con las categorías de los productos y servicios a vender, la segunda acción es determinar las acciones de marketing en donde se estima el tamaño del mercado y se selecciona el mercado meta y por último se emprenden acciones de marketing para su ejecución teniendo en cuenta las estrategias para cada una de las variables de la mezcla de mercadeo.
    figure.mb-5
      img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen' style= "width: 720px").m-auto.mb-3
      figcaption Fuente: Autor.
    .h5 Variables de segmentación
    p.mb-5 Kerin (2018) presenta cuatro variables de segmentación: segmentación geográfica, basada en dónde viven o trabajan los posibles clientes; la segmentación demográfica, se apoya en cierto atributo como género, raza, edad o ingresos de los posibles clientes; la segmentación psicográfica, basada en atributos mentales o emocionales subjetivos como la personalidad, aspiraciones o estilo de vida de los prospectos de clientes; y la segmentación conductual basada en ciertas acciones o actitudes observables de los consumidores prospectos, como dónde compran, cuáles beneficios buscan, con cuánta frecuencia y por qué compran.
      br
      br
      |En el siguiente cuadro comparativo Vélez (2014) compara las variables de segmentación.
    .tabla-a.color-primario.mb-5 
      table
        caption Fuente: Velez,2014
        thead
          tr
            th Tipo de variable
            th Aspectos generales cuantitativos
            th Aspectos generales cualitativos
            th Especificidades con relación al producto
        tbody
          tr
            td Geográfica
            td Ubicación geográfica, clima, coordenadas geopolíticas. 
            td Interpretación desde la cultura.
            td Identificación de la región, país, clima, tamaño.
          tr
            td Demográfica
            td Edad, sexo, religión, etnias, ingresos, nivel ocupacional, sector económico, país de procedencia.
            td Interpretación desde la cultura.
            td Identificación de la región, del país, del clima, del tamaño.
          tr
            td Psicográfica
            td Bajo enfoques y metodologías de sistematización, a través de la identificación de categorías.
            td Estilos de vida, mitos e imaginarios culturales, hábitos, valores y simbolismos, necesidades o presiones. de grupos de pares.
            td Clase social y grupos de pertenencia y aspiración. Utilización del tiempo libre, conceptos de ocio, creencias y manifestaciones. espirituales, patrones de estética y ética, estilo de vida y personalidad.
          tr
            td Conductual
            td Bajo enfoques y metodologías de sistematización, a través de la identificación de categorías.
            td Rituales de consumo, rituales de transición, estatus.
            td Ocasiones de compra, beneficios esperados, tasa de usos y estatus del consumidor.
    .h5 Segmentación geográfica
    .row 
      .col-lg-6 
        figure.mb-5.p-4
          img(src='@/assets/curso/img22.jpg', alt='Texto que describa la imagen')

      .col-lg-6 
        p.p-4 La segmentación geográfica divide el mercado en unidades geográficas, como naciones, estados, regiones, provincias, ciudades o vecindarios. La organización puede operar en una o en varias áreas, o bien puede hacerlo en todas, pero poniendo atención a las variaciones locales. De esa manera, es capaz de ajustar los programas de marketing a las necesidades y los deseos de los grupos locales de clientes en las áreas comerciales, los vecindarios e incluso en tiendas individuales. (Kotler,2016)
    p.mb-3 Fernández (2009) explica que la segmentación geográfica también se refiere a las variables ambientales que dan origen a las diferencias en la personalidad de comunidades por su estructura geográﬁca, en este grupo encontramos variables como:
    ul.lista-ul.mb-5
        li 
          i.lista-ul__vineta
          p
            b Unidad geográﬁca: 
            b-none el lugar donde vive la gente y que tiene características similares en cuanto a forma de gobierno, cultura, religión, costumbres, etc., de tal modo que podemos definir unidades pgeográﬁcas de diferentes tamaños. Tales como:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="País")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b País: 
              b-none es un territorio con características geográficas y culturales propias. Ej. Colombia
      .tarjeta.color-secundario--borde.p-4(titulo="Región")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Región: 
              b-none «porción de territorio» con ciertas características comunes como el clima, la topografía, etnia o la administración. También puede referirse a las «características geográficas, históricas, culturales y sociales»  de una nación. Ejemplo. En Colombia la región andina
      .tarjeta.color-secundario--borde.p-4(titulo="Departamento")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Departamento: 
              b-none son unidades territoriales de primer nivel los cuales son gobernados desde sus respectivas ciudades capitales Ej. En Colombia existen 32 departamentos.
      .tarjeta.color-secundario--borde.p-4(titulo="Municipio")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Municipio: 
              b-none son unidades territoriales de segundo nivel de administración territorial que mediante agrupación conforman los departamentos. Ej. El municipio de Apartadó en el departamento de Antioquia. 
    ul.lista-ul.mb-3
        li 
          i.lista-ul__vineta
          p
            b Condiciones geográﬁcas: 
            b-none es importante considerar las condiciones geográﬁcas de la región donde viven las personas que forman nuestro mercado meta como el clima, y el relieve. 
    ul.lista-ul.mb-3
        li 
          i.lista-ul__vineta
          p
            b Raza: 
            b-none Las razas humanas se determinan como grupos de la especie humana que presentan diferencias en el color de la piel, la forma del cráneo, etcétera. Ej. Asiáticos, latinos, árabes, nórdicos, afroamericanos, afrocolombianos, negros y blancos. 
    ul.lista-ul.mb-3
        li 
          i.lista-ul__vineta
          p
            b Tipo de población: 
            b-none se refiere a las condiciones de densidad de población de las comunidades donde pretendemos comercializar nuestros productos; Ej. Megalópolis, urbana, suburbana y rural.
    .h5 Segmentación demográfica 
    .row 
      .col-lg-6 
        figure.mb-5.p-4
          img(src='@/assets/curso/img27.jpg', alt='Texto que describa la imagen')

      .col-lg-6 
        p.p-4 Una de las razones por las que las variables demográficas, como edad, tamaño de la familia, ciclo de vida de la familia, género, ingresos, ocupación, escolaridad, religión, raza, generación, nacionalidad y clase social son tan populares entre los especialistas en marketing es que muchas veces están asociadas con necesidades y deseos de los consumidores, otra es que son fáciles de medir (Kotler,2016).
          br
          br
          |Las variables demográﬁcas tienen la característica particular de ser las únicas que se pueden medir en forma estadística. Cada país realiza actividades de levantamiento de información con una periodicidad determinada (censos), a partir de las cuales es posible tener datos estadísticos contables (Fernández,2009). Ejemplo, en Colombia se encuentra el DANE (Departamento administrativo nacional de estadística), entidad responsable de la planeación, levantamiento, procesamiento, análisis y difusión de las estadísticas oficiales de Colombia.
        figure.mb-5.p-4
          img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
          figcaption Fuente: https://www.dane.gov.co/ 
    p.mb-5 Dentro de este grupo encontramos variables como:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="Edad")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Edad: 
              b-none  a partir de la edad es posible determinar algunos de los hábitos y costumbres de compra. Generalmente, los niños no toman decisiones de compra muy importantes. Por su parte, los adolescentes compran algunos productos que responden a situaciones de impulso. En tanto que los adultos jóvenes racionalizan las compras, mientras que los adultos mayores se convierten en los consumidores más racionales. En cambio, los de la tercera edad toman decisiones de compra en pocas ocasiones por la disminución de su poder adquisitivo. (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Sexo")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Sexo: 
              b-none La segmentación por sexo nos permite determinar cuántos y cuáles productos podemos dirigir a hombres y a mujeres, de esa forma se puede continuar con el diseño del perfil del consumidor. (Fernández,2009). 
      .tarjeta.color-secundario--borde.p-4(titulo="Nivel socioeconómico")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Nivel socioeconómico: 
              b-none  el nivel socioeconómico (NSE), permite identificar el poder adquisitivo de nuestros futuros consumidores, de esta forma sabremos si tienen o no la posibilidad de comprar nuestro producto. (Fernández,2009) Cada país tiene una clasificación diferente en cuanto al nivel socioeconómico, en Colombia para el DANE los estratos socioeconómicos se clasifican en viviendas o predios denominados de la siguiente manera: 
              br
              b - 1. Bajo-bajo - 2. Bajo - 3. Medio-bajo - 4. Medio - 5. Medio-alto   
              br
              b - 6. Alto 
      .tarjeta.color-secundario--borde.p-4(titulo="Estado civil")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Estado civil: 
              b-none está determinado por el matrimonio, esto quiere decir que existen sólo dos estados civiles: casado y soltero; sin embargo, para fines de segmentación se considera dentro del estado civil a los solteros, casados, unión libre, separados, segundas nupcias, divorciados y viudos. El estado civil de las personas incide directamente en su costumbre de compra, en la distribución de su ingreso, así como en la cantidad destinada al ahorro, de forma tal que, para determinados productos, el estado civil será una variable de segmentación de vital importancia. (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Nivel académico")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Nivel académico: 
              b-none se refiere al grado escolar alcanzado por la población de un país o de una región geográﬁca especifica. Este dato es relevante para entender por qué algunos productos tienen mayor nivel de venta que otros, así como para entender cómo afecta la preparación académica en la conducta que sigue el consumidor al realizar alguna compra. (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Religión")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img34.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Religión: 
              b-none  la religión es una variable demográﬁca, pero es también una variable psicográﬁca, esto debido a que tiene características de mensurabilidad, pero el comportamiento del consumidor de acuerdo con la religión tiene connotaciones de tipo psicográﬁco. (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Características de vivienda")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Características de vivienda: 
              b-none  Otra de las variables que combina aspectos demográﬁcos y psicográﬁcos es la de vivienda. (Fernández,2009)
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Tipo de vivienda: particular, rentada, ocupada.
                li 
                  i.lista-ul__vineta
                  | Tipo de servicios: agua entubada, drenaje, energía eléctrica
                li 
                  i.lista-ul__vineta
                  | Tipo de construcción: ladrillo, madera, adobe, cartón, lámina.
                li 
                  i.lista-ul__vineta
                  | Promedio de ocupantes por vivienda.
                li 
                  i.lista-ul__vineta
                  | Promedio de habitaciones por vivienda.
    .h5 Segmentación psicográfica
    .row.mb-5
      .col-lg-6 
        figure
          img(src='@/assets/curso/img36.jpg', alt='Texto que describa la imagen' style="width: 550px")

      .col-lg-6 
        p La psicografía es la ciencia que utiliza la psicología y la demografía para entender mejor a los consumidores. En la segmentación psicográfica, los compradores se dividen en diferentes grupos con base en sus características psicológicas y de personalidad, su estilo de vida o sus valores. (Kotler,2016)
          br
          br
          |Las variables psicográﬁcas han tenido una influencia total en los motivos y decisiones de compra del consumidor, no son claramente perceptibles y no siempre pueden medirse; sin embargo, representan un excelente medio para posicionar y comercializar los productos de una empresa, por lo que merecen ser estudiadas con detenimiento. (Fernández,2009) 
    p.mb-5 Las variables psicográﬁcas son las siguientes:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="Grupos de referencia")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen' style= "width: 224px").m-auto
          .col-xl-8
            p.pe-5.my-5
              b Grupos de referencia: 
              b-none  un grupo es un conjunto de personas que se reúnen bajo la influencia de un líder y que comparten normas, valores y objetivos. Un grupo de referencia se conceptualiza como el conjunto de personas que ejercen influencia en la conducta, hábitos y valores de un individuo. Por ejemplo: familia, amigos natales, compañeros escolares, amigos, compañeros de trabajo, grupos deportivos y religiosos. (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Clase social")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen' style= "width: 224px").m-auto
          .col-xl-8
            p.pe-5
              b Clase social: 
              b-none  no existen parámetros diferenciales que permitan identificar a una persona como miembro de una clase y que estos mismos parámetros la excluyan de otras. Sin embargo, se consideran cuatro factores para poder determinar la clase social: propiedades materiales, nivel de ingresos, ocupación, educación y cultura. Las clases sociales se clasifican en clase alta, clase media y clase baja (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Personalidad")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen' style= "width: 224px").m-auto
          .col-xl-8
            p.pe-5
              b Personalidad: 
              b-none  la personalidad se determina con base en el tipo de actitudes que la persona demuestra a través del tiempo, de tal forma que puede ser calificada como terca, agresiva, ambiciosa, reservado, sereno, humilde, tímido, práctico, astuto, etc.,(Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Cultura")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen' style= "width: 224px").m-auto
          .col-xl-8
            p.pe-5
              b Cultura: 
              b-none  se refiere a toda una serie de conocimientos, creencias, artes, costumbres y tradiciones que un grupo de personas, generalmente un pueblo, adquiere y practica a través del tiempo. La cultura es, pues, un concepto que debe ser aplicado de forma generalizada a un grupo de personas; sin embargo, algunas de esas personas tienen un mayor nivel de cultura porque se preocupan por conocer el origen y razón de las diferentes expresiones culturales de su grupo, mientras que otros únicamente practican las costumbres y tradiciones originadas por la cultura de su pueblo (Fernández,2009).
      .tarjeta.color-secundario--borde.p-4(titulo="Ciclo de vida familiar")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen' style= "width: 224px").m-auto
          .col-xl-8
            p.pe-5
              b Ciclo de vida familiar: 
              b-none   a partir del concepto de familia como el conjunto de personas que cohabitan bajo un mismo techo, surge el concepto de ciclo de vida familiar, que se refiere a las características de las personas que viven en el hogar en diferentes etapas de la vida familiar. Estas etapas son: joven soltero, matrimonio sin hijos, matrimonio con hijos, padres solteros, solteros, solteros mayores (Fernández,2009).

    .h5 Segmentación conductual
    .row.mb-5
      .col-lg-6 
        figure
          img(src='@/assets/curso/img42.jpg', alt='Texto que describa la imagen' style="width: 550px")

      .col-lg-6 
        p En la segmentación conductual los especialistas en marketing dividen a los compradores en grupos con base en sus conocimientos de un producto, así como en su actitud, uso y respuesta hacia el producto (Kotler,2016).
          br
          br
          |Se refiere a la disposición que tiene el consumidor ante la posible compra de un producto; es decir, dentro del segmento de mercado. Estas variables se clasifican en:
    .h5 Frecuencia de uso
    .row
      .col-lg-6
        p Se refiere principalmente a la posición del usuario respecto a la oportunidad con que utiliza o consume el producto o servicio. Ricardo Fernández Vallinas (2009) las dividen en:
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Usuario regular: ").p-3
            p persona que es consumidora del producto, ya sea porque lo considera el adecuado para satisfacer sus necesidades o por ser el producto que tiene más al alcance.
          div(titulo="No usuario:").p-3
            p persona que no consume nuestro producto, ya sea porque no lo considera el óptimo para la satisfacción de sus necesidades o por no encontrarse disponible en su lugar de consumo
          div(titulo="Ex usuario:").p-3
            p consumidor que debe ser analizado con detenimiento, pues utilizó nuestro producto y luego dejó de hacerlo por alguna razón, si fue por un mal servicio, percepción de mala calidad o porque un producto nuevo superó los beneficios que le brindaba nuestro producto, entonces estamos en serios problemas, ya que estos consumidores transmitirán una imagen negativa del producto. 
          div(titulo="Usuario potencial:").p-3
            p persona que en la actualidad no es nuestro consumidor pero que en el futuro puede serlo; esto puede ser por diferentes razones: una de ellas es que en la actualidad consuma otros productos y no conozca los beneficios del nuestro o no tenga las características de edad, estado civil o alguna otra que adquirirá en el futuro.
          div(titulo="Usuario por primera vez: ").p-3
            p consumidor que está haciendo uso de nuestro producto por primera vez. La calidad del servicio, la satisfacción que reciba y la percepción que tenga en este primer consumo determinará que se conviertan en usuario.  
    .h5 Ocasión de uso: 
    .row
      .col-lg-6
        p La ocasión de uso es básicamente la temporalidad de compra del producto, los consumidores compran los productos en eventos específicos, ya sea por su costumbre de uso o por la temporalidad misma del producto, Ricardo Fernández (2009) las divide en:
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Usuario frecuente:").p-3
            p consumen el producto con regularidad, son consumidores convencidos de las ventajas que les brinda el producto y lo prefieren a productos de la competencia.
          div(titulo="Usuario irregular: ").p-3
            p no tiene una preferencia definida por una marca, en ocasiones compra nuestro producto y en otras compras el de la competencia. Este usuario es fácilmente manipulable con promociones.
          div(titulo="Usuario de ocasiones especiales: ").p-3
            p compra determinados productos en fechas especiales. Ej. Navidad, día de la madre.
    .h5 Tasa de uso: 
    p.mb-5 Hace una clasificación de los consumidores de acuerdo con la cantidad de producto que consumen en un periodo determinado; esto es útil para poder reconocer y clasificar las necesidades de los mismos; en este grupo encontramos los siguientes: Usuario grande, mediano y pequeño. (Fernández, 2009)
    .h5 Lealtad: 
    .row
      .col-lg-6
        p Se refiere a la fidelidad que tiene un consumidor a determinada marca que depende de la variedad de productos que existen, precio o facilidad para encontrarlo. Ricardo Fernández (2009) los divide en: 
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Usuarios leales:").p-3
            p consumidores del producto que utilizan en forma exclusiva una marca, no hacen uso de otras marcas bajo ninguna circunstancia, estos consumidores se caracterizan por tener un posicionamiento positivo del producto y de transmitirlo a la gente que les rodea, generalmente rechazan promociones y pruebas con otros productos.
          div(titulo="Usuarios de lealtad compartida:").p-3
            p consumidores que reparten su lealtad de compra en dos o más marcas; por ejemplo, una persona tiene lealtad a la Coca-Cola, sin embargo, no le importa si es Pepsi-Cola. Este grupo de consumidores aceptan promociones y pruebas con otros productos, siempre y cuando tengan las características que ellos buscan.
          div(titulo="Usuarios sin preferencias específicas: ").p-3
            p consumen cualquier producto, generalmente su compra está influida por promociones, comparación de precios, comodidad para la compra de productos, etc.
    .h5 Disposición de compra: 
    .row
      .col-lg-6
        p Hace referencia a la actitud de compra del consumidor respecto a un producto, y la disposición de compra que genera esa actitud. Ricardo Fernández (2009) considera los siguientes usuarios:: 
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Usuarios dispuestos a la compra:").p-3
            p consumidores que ante ciertos productos o circunstancias presentan una total disposición para adquirir los mismos.
          div(titulo="Usuarios indecisos:").p-3
            p consumidores que generalmente duda mucho antes de realizar una compra; aun con productos para los que exista una necesidad.
          div(titulo="Usuarios no dispuestos a la compra: ").p-3
            p personas conscientes de sus motivos para no comprar, generalmente son muy ordenados en sus compras, no gastan en créditos y no se dejan influir por promociones o situaciones como un precio bajo.
    .tabla-d.color-acento-botones.mb-5 
      table
        caption Fuente: Autor. 
        thead
          tr
            th 
              b Criterios conductuales
            th Segementos
        tbody
          tr.tabla-gris
            td 
              b Tipo de usuario
            td Regular, potencial, no usuario.
          tr
            td 
              b Frecuencia de uso
            td Diaria, mensual, ocasional.
          tr.tabla-gris
            td 
              b Ocasión de compra
            td Fin de semana, viajes, celebraciones.
          tr
            td 
              b Condiciones de compra
            td Contado, crédito, por catálogo, por internet.
          tr.tabla-gris
            td 
              b Forma de compra
            td Racional, por impulso, por ocasión.
          tr
            td 
              b Tasa de uso
            td Pequeño usuario, mediano usuario, gran usuario.
          tr.tabla-gris
            td 
              b Lealtad a la marca
            td Usuario leal, usuario eventual.
    .h5 Micro segmentación
    figure.mb-5
      img(src='@/assets/curso/img43.jpg', alt='Texto que describa la imagen' )
    p.mb-5 El objetivo de la micro segmentación consiste en analizar la diversidad de las necesidades de los clientes en forma más detallada dentro de cada uno de los mercados, y con ello, identificar grupos de clientes que buscan el mismo paquete de beneficios en el producto. Esto puede llevar a una estrategia de diferenciación para obtener una ventaja competitiva sobre los rivales al satisfacer las necesidades del cliente de mejor manera (Lambin, 2009).
      br
      br
      |Lambin, describe que la microsegmentación, busca cubrir “segmentos” de clientes dentro de cada mercado previamente identificado. La microsegmentación puede implementarse de cuatro maneras diferentes:
    .row.mb-5
      .col-lg-6
        .cajon.cajonh.color-secundario.p-4.mb-4
          p 
            b Segmentación descriptivada
            b-none , que se basa en las características sociodemográficas del cliente, más allá de la categoría del producto. Las personas que tienen distintos perfiles sociodemográficos también tienen diferentes necesidades y expectativas respecto de los productos y servicios.
        .cajon.cajonh.color-secundario.p-4.mb-4
          p 
            b Segmentación por estilo de vida
            b-none , que se basa en características socioculturales del cliente, más allá de la categoría del producto. Agregando elementos tales como actividades, actitudes, intereses, opiniones, percepciones y preferencias, para obtener un perfil más completo del consumidor. Intenta dibujar un retrato de los consumidores al agregar detalles a los niveles menos obvios de motivación y personalidad.
      .col-lg-6
        .cajon.cajonh.color-secundario.p-4.mb-4
          p 
            b Segmentación por beneficios buscados
            b-none , que considera explícitamente la categoría del producto y el sistema de valores de la persona. Dos personas idénticas, en términos de perfiles sociodemográficos, pueden tener sistemas de valores muy distintos. Además, la misma persona que tiene diferentes experiencias con los productos puede valorar de diferente manera cada producto que compra.
        .cajon.cajonh.color-secundario.p-4.mb-4
          p 
            b Segmentación comportamental
            b-none , que clasifica a los clientes por su comportamiento actual de compra en el mercado. Los criterios que más comúnmente se utilizan son los del uso del producto, el volumen comprado y el estatus de lealtad.
    .h5  Macro segmentación
    figure.mb-5
      img(src='@/assets/curso/img44.jpg', alt='Texto que describa la imagen' )
    p.mb-5 En la mayoría de los mercados, es casi imposible satisfacer a todos los clientes con un único producto o servicio. Los distintos consumidores tienen deseos e intereses variados, que son resultado de diversas prácticas de compra y diferencias básicas de las necesidades de los clientes, así como de los beneficios que buscan en los productos. Por lo tanto, las empresas consideran esencial moverse del marketing masivo al marketing estratégico focalizado prestando atención a un grupo particular de clientes. (Lambin,2009)
      br      
      br      
      |Para lograr un proceso de macrosegmentación primero se debe realizar un análisis de la segmentación es necesario identificando las necesidades de los clientes, reagruparlas por cada uno de los segmentos y describir el perfil de cada segmento, segundo la elección del mercado meta en el cual se evalúan los atractivos del segmento, se mide la competitividad y se seleccionan los segmentos objetivos, tercero se realiza el posicionamiento de mercado en donde se evalúan las posiciones competitivas, se construyen ventajas diferenciales y se desarrolla un propuesta de valor, por último se desarrolla un programa de marketing, se evalúa la rentabilidad por cada segmento y se adapta a la organización de marketing. (Lambin,2009)
      br
      br
      |En el siguiente grafico Jean-Jacques Lambin muestra los pasos en un proceso de macrosegmentación. 
    figure.mb-5
      img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen' )
      figcaption Fuente: (Lambin,2009)
    .h5 Estrategias de segmentación
    figure.mb-5
      img(src='@/assets/curso/img46.jpg', alt='Texto que describa la imagen' )
    p.mb-5 Las estrategias de segmentación de mercados son alternativas de acciones que tienen las organizaciones para aplicar al segmento de mercado o mercado meta seleccionado.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Estrategia indiferenciada:")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Estrategia indiferenciada:
            p La organización realiza para todos sus productos una mezcla de mercadeo similar, utiliza los mismos canales de distribución, la misma estrategia de precios y las mismas herramientas promocionales para todos sus productos; adicionalmente la empresa ignora las diferencias entre los segmentos de mercado y realiza la misma oferta de productos para todos ellos. Esta estrategia está basada en la economía de costos, la empresa que la aplica ahorra grandes sumas de dinero ya que la labor de planeación e investigación de mercados es prácticamente nula. (Fernández,2009)
          .col-md-5
            figure
              img(src='@/assets/curso/img47.jpg', alt='Texto que describa la imagen' style='width: 340px').m-auto
      .py-4.py-md-5(titulo="Estrategia diferenciada:")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Estrategia diferenciada:
            p La organización establece diferentes mezclas de mercadeo para cada una de sus líneas de producto o para cada uno de sus productos para dirigirlos a diferentes segmentos de mercado determinados de acuerdo con las variables de segmentación, la empresa tiene una variedad de productos que le permiten llegar a un mayor número de segmentos del mercado, alcanzando así una mayor cobertura y un mejor posicionamiento. Debido a la planeación y la investigación de mercados requiere costos adicionales de modificaron de productos, de producción, de inventarios y de promoción. (Fernández,2009)
          .col-md-5
            figure
              img(src='@/assets/curso/img48.jpg', alt='Texto que describa la imagen' style='width: 340px').m-auto
      .py-4.py-md-5(titulo="Estrategia concentrada:")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Estrategia concentrada:
            p Con esta estrategia la organización busca posicionarse en grupos pequeños a través de la comercialización de productos que satisfacen sus necesidades de manera general y no especifica. Busca costos de producción, administrativos, de producto y de mercadeo bajos, se debe tener cuidado porque el mercado puede cambiar sus gustos, o simplemente puede ser que los productos no sean del gusto de todos los segmentos a los que se pretende llegar y no se tiene la cobertura esperada. (Fernández,2009)
          .col-md-5
            figure
              img(src='@/assets/curso/img49.jpg', alt='Texto que describa la imagen' style='width: 340px').m-auto
      .py-4.py-md-5(titulo="Estrategia de posicionamiento:")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Estrategia de posicionamiento:
            p La adecuada elección del segmento del mercado junto con una estrategia de cobertura adecuada permite definir el posicionamiento del producto. El posicionamiento no sólo es un lugar en la mente del consumidor, comprende un concepto generalizado que tiene el consumidor, tanto positivo como negativo, sobre un producto. Para posicionar un producto en la mente del consumidor, la empresa debe tener bien definido su perfil, conocer sus gustos y preferencias y saber qué es lo que espera al comprar o consumir el producto; con esta información se puede iniciar una estrategia de posicionamiento. (Fernández,2009)
          .col-md-5
            figure
              img(src='@/assets/curso/img50.jpg', alt='Texto que describa la imagen' style='width: 340px').m-auto
      .py-4.py-md-5(titulo="Estrategia de micro marketing: ")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Estrategia de micro marketing: 
            p Es la práctica de adaptar los productos y programas de marketing a los gustos de individuos y lugares específicos. En vez de ver un cliente en cada individuo, ven al individuo que hay en cada cliente. Este tipo de marketing incluye el marketing local y el marketing individual. (Kotler,2017) Ej. Adidas con las camisas del equipo de futbol real Madrid personaliza los nombres dependiendo de los gustos y preferencias de los consumidores. 
          .col-md-5
            figure
              img(src='@/assets/curso/img51.jpg', alt='Texto que describa la imagen' style='width: 340px').m-auto
              figcaption Fuente: https://shop.realmadrid.com/ 
    #t_1_2.titulo-segundo
      .h4 1.2 Mercado
    p.mb-5 Un mercado se puede definir como la suma de compradores reales y potenciales con necesidades y deseos diferentes que se deben satisfacer. Para que los mercados se puedan definir como demandantes, aparte de la necesidad del bien o servicio, deben tener capacidad económica para comprar (Prettel,2016).
      br
      br
      |A continuación, se clasifica bajo la perspectiva de demanda los tipos de mercado:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="Mercado disponible")
        .row
          .col-xl-4
            figure
              img(src='@/assets/curso/img52.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Mercado disponible:
              b-none son todos aquellos consumidores que tienen una necesidad específica y cuentan con las características necesarias para consumir un producto. Ej. consumidores que tienen la necesidad de un jabón líquido para manos y el poder adquisitivo para comprarlo. (Fernandez,2009)
      .tarjeta.color-secundario--borde.p-4(titulo="Mercado real")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Mercado real:
              b-none son todos aquellos consumidores del mercado disponible que compran un producto específico. Ej. Todos aquellos consumidores que compran el jabón líquido. (Fernandez,2009)
              br
              br
              |El mercado real es un subgrupo más reducido del mercado meta que tiene rasgos distintivos y que buscan una mezcla especial de beneficios que hemos logrado captar y son nuestro grupo estratégico a corto plazo. (Prieto,2009)
      .tarjeta.color-secundario--borde.p-4(titulo="Mercado potencial")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img54.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Mercado potencial:
              b-none es el conjunto de consumidores que no forman parte del mercado real, pero en ocasiones sí pueden formar parte del mercado disponible. Este grupo no consume el producto específico, debido a que no tiene las características del segmento o porque consume otro producto. (Fernandez,2009)
              br
              br
              |El mercado potencial está compuesto por las personas del mercado total que además de tener una necesidad están en condiciones de adquirir un producto o servicio para satisfacerlas y que son de interés para la empresa en el largo plazo. (Prieto,2009)
      .tarjeta.color-secundario--borde.p-4(titulo="Mercado meta o mercado objetivo")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Mercado meta o mercado objetivo:
              b-none puede definirse como el conjunto de consumidores que pertenecen al mercado disponible, que pueden formar parte del mercado real y potencial, y al cual se dirigen todos los esfuerzos y acciones de mercadeo, con la finalidad de que se conviertan en consumidores reales del producto. (Fernandez,2009)
              br
              br
              |El mercado meta es un conjunto de compradores o usuarios del mercado potencial que tienen necesidades o características comunes, a los cuales la empresa decide atender en el corto plazo. (Prieto,2009)
      .tarjeta.color-secundario--borde.p-4(titulo="Mercado total")
        .row
          .col-xl-4
            figure.my-5
              img(src='@/assets/curso/img56.svg', alt='Texto que describa la imagen' style= "width: 200px").m-auto
          .col-xl-8
            p.pe-5.py-5 
              b Mercado total:
              b-none el mercado total está compuesto por el universo de personas que tienen una necesidad que debe satisfacer un producto o servicio. (Prieto,2009)

    .h5 Mercado potencial y target
    p.mb-5 A continuación, podrá abordar los conceptos de mercado potencial (tocado en el punto anterior) y el target.
    .h5 Mercado potencial
    .row.mb-5
      .col-lg-6 
        figure
          img(src='@/assets/curso/img57.jpg', alt='Texto que describa la imagen' style="width: 550px")

      .col-lg-6 
        p Los mercados potenciales son mercados que pueden desarrollarse, muchas empresas han realizado gran cantidad de actividades para desarrollar esos mercados en forma exitosa y convertir a los consumidores potenciales en consumidores reales. Ej. Los bancos con las cuentas bancarias para niños. La estrategia es simple: si los niños empiezan a posicionar a determinado banco como “su banco”, entonces cuando sean mayores de edad y empiecen a manejar instrumentos de inversión más interesantes elegirán “su banco”. (Fernández, 2009)
          br
          br
          |Después de que la organización ha definido sus segmentos de mercado puede entrar en uno o varios de ellos. La selección de mercado meta implica evaluar el atractivo de cada segmento y elegir uno o más segmentos a los cuales atender. La empresa debería elegir los segmentos en los que pueda generar el mayor valor del cliente y mantenerlo en el tiempo de manera rentable. (Amstrong,2017)
    .h5 Target o mercado meta
    .row.mb-5
      .col-lg-6 
        figure
          img(src='@/assets/curso/img58.jpg', alt='Texto que describa la imagen' style="width: 550px")

      .col-lg-6 
        p Mercado meta, segmento objetivo o target es el grupo de mercado al que se va a satisfacer con un producto y que se ha seleccionado entre todas las opciones que presenta el entorno a través de la evaluación interna de la compañía, se ha comprobado que se tienen los recursos para lograr su satisfacción. Todos los compradores de un producto pueden tener razones distintas para comprar; poseen necesidades, deseos, preferencias o razones de uso diferentes. Estos comportamientos pueden formar grupos pequeños o grandes de mercado, los que se denominan segmentos. Las compañías evaluarán la conveniencia o los recursos con que cuentan y se decidirán por uno o varios de estos grupos, los denominarán segmento meta o segmento objetivo, y les diseñarán la mezcla de marketing correspondiente (Prettel, 2016).
    p.mb-5 Es un conjunto de clientes bien definido cuyas necesidades la compañía planea satisfacer y hacia el que la organización trata de orientar su esfuerzo de mercadeo. La selección cuidadosa y la definición precisa del mercado objetivo o mercado meta son esenciales para el desarrollo de una mezcla efectiva de mercadeo. Para llegar al mercado objetivo se debe realizar una segmentación del mercado, primero en forma global los segmentos, se escoge uno en particular; pero aún este segmento del mercado puede ser muy grande para que la compañía pueda atenderlo, en tal caso se sigue con la sub-segmentación y se elige el mejor, este mercado objetivo puede conformar la ambición total de la compañía o puede ser visto como un cojín de lanzamiento para una posterior expansión hacia otros segmentos del mercado. (Céspedes,2008)
      br
      br
      |Entender el consumidor ayuda a las organizaciones a determinar cuáles grupos de consumidores son blancos adecuados para dirigir sus tácticas de marketing y en qué se distinguen los usuarios frecuentes de los usuarios no frecuentes de un producto para determinar su mercado meta o target. También deben identificar quién tiende a participar en decisiones de adquisición, uso y desecho (Hoyer,2018).
    .h5 Nicho
    p.mb-5 Fisher (2017), define nicho de mercado como un grupo de clientes dispuestos a casarse con sus organizaciones proveedoras, siempre y cuando éstas estén dispuestas a atenderlos plenamente en sus expectativas cada día más específicas.
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img59.jpg', alt='Texto que describa la imagen' style="width: 550px")
      .col-lg-6 
          p Esta estrategia comprende dar servicio a uno o más segmentos que, aunque no son los más grandes, están conformados por números importantes de clientes que buscan beneficios un tanto   especializados de un producto o servicio. Esta estrategia está diseñada para evitar la competencia directa con empresas más grandes que buscan los segmentos mayores (Mullins, 2007).
            br
            br
            | Cada día aparecen nuevos nichos de mercado. La tercera edad, los homosexuales, los metrosexuales, las parejas con doble ingreso y sin hijos son, por ejemplo, nuevos consumidores con un mayor  nivel de venta, con nuevas necesidades y que no se encuentran lo suficientemente atendidos. (Schnarch,2017)
    p.mb-5 Fisher (2017) describe algunos nichos de mercados emergentes:
    figure.mb-5 
      img(src='@/assets/curso/img60.svg', alt='Texto que describa la imagen')
      figcaption Fuente: Autor.
    .h5 Consumidor
    p.mb-5 Los consumidores son personas naturales que adquieren bienes y servicios para su satisfacción personal. Son compradores de alimentos, vestuario, productos para el aseo personal y para su hogar, educación, recreación, entre otros. Precisamente debido a la magnitud que toman estos mercados, se hacen muy heterogéneos; cada consumidor desea satisfacer su necesidad de manera diferente. Toda esta compleja situación de mercado, exige una mayor gestión de la gerencia de marketing y su grupo para diseñar un producto o servicio capaz de ofrecerle a cada uno el beneficio esperado. Los consumidores, de acuerdo con el segmento al que pertenecen, así mismo se comportan frente al consumo de bienes y servicios. (Prettel,2016).
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img61.jpg', alt='Texto que describa la imagen' style="width: 550px")
      .col-lg-6 
          p Esta estrategia comprende dar servicio a uno o más segmentos que, aunque no son los más grandes, están conformados por números importantes de clientes que buscan beneficios un tanto   especializados de un producto o servicio. Esta estrategia está diseñada para evitar la competencia directa con empresas más grandes que buscan los segmentos mayores (Mullins, 2007).
            br
            br
            | Cada día aparecen nuevos nichos de mercado. La tercera edad, los homosexuales, los metrosexuales, las parejas con doble ingreso y sin hijos son, por ejemplo, nuevos consumidores con un mayor  nivel de venta, con nuevas necesidades y que no se encuentran lo suficientemente atendidos. (Schnarch,2017)
    p.mb-5 Actualmente existe un tipo de consumidor en auge y es el consumidor On-line, Irureta (2015) menciona que el cliente on-line se vuelve exigente; con el tiempo, va conociendo las estrategias que utilizan las empresas y usa las redes sociales para dar y contrastar opiniones. Comparte contenidos y transmite juicios sobre los comercios y sus productos, por ello es importante que las empresas estudien su comportamiento y consideren sus opiniones. Crear en el cliente un hábito de compra resulta rentable por los siguientes motivos:
    .cajon.color-secundario.p-4.mb-4
          p 
            b Crear en el cliente un hábito de compra 
            b-none ya que repite su compra con pedidos de más volumen, debido a la satisfacción experimentada con las anteriores compras y a que va adquiriendo confianza y seguridad en ese comercio.
    .cajon.color-secundario.p-4.mb-4
          p 
            b Un cliente contento con su compra 
            b-none recomienda este comercio a las personas de su entorno, lo que significa publicidad gratuita para la empresa, que amplía de este modo su círculo de clientes.
    .cajon.color-secundario.p-4.mb-5
          p 
            b La fidelización de clientes
            b-none es mucho más barata que la captación de nuevos clientes por otros medios. Es importante priorizar a sus clientes.
    .h5 Comportamiento
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/img62.svg', alt='Texto que describa la imagen' style="width: 140px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p 
              b “El comportamiento del consumidor refleja todas las decisiones de los consumidores respecto a la adquisición, consumo y disposición o desecho de bienes, servicios, actividades, experiencias, personas e ideas en unidades de toma de decisiones humanas en un tiempo” (Hoyer,2018) 
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img63.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p El comportamiento del consumidor es un proceso dinámico, la secuencia de adquisición, consumo y disposición o desecho ocurre al paso del tiempo en un orden dinámico: horas, días, semanas, meses o años. Suponga que una familia acaba de adquirir y usa un automóvil nuevo. El uso le proporciona a la familia información acerca del automóvil se conduce bien y es confiable, los miembros se desharán del automóvil vendiéndolo, intercambiándolo o desechándolo, pero el transporte siempre es necesario para la familia y quizás afectará el comportamiento de adquirir en el futuro otro automóvil. (Hoyer,2018)
    p.mb-5 El comportamiento del consumidor no refleja necesariamente la acción de una sola persona. Un grupo de amigos, algunos compañeros de trabajo o toda una familia pueden planear una fiesta de cumpleaños o decidir dónde acudir a almorzar, intercambiando ideas en persona, por teléfono, a través de redes sociales, por correo electrónico o mensajes de texto. Además, las personas que participan en un comportamiento de consumo pueden desempeñar una o más funciones. Por ejemplo, en el caso de la compra de un automóvil, uno o más miembros de la familia pueden desempeñar la función de recabar información investigando diferentes modelos. Otros pueden desempeñar la de influir e intentar afectar el resultado de una decisión. Uno o más miembros desempeñan la función del comprador al pagar el automóvil, y algunos otros, o todos, pueden ser sus usuarios. Por último, varios miembros de la familia pueden participar en desechar el automóvil. (Hoyer,2018)
      br
      br
      |Para Philip Kotler (2016) El comportamiento de compra del consumidor se ve influido por factores culturales, sociales y personales. De éstos, los factores culturales ejercen la influencia más amplia y profunda. 
    .h5 Factores culturales
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img64.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p La cultura, la subcultura y la clase social a la que se pertenece son influencias particularmente importantes para determinar el comportamiento de compra del cliente. La cultura es el determinante fundamental de los deseos y la conducta de las personas. (Kotler,2016)
            br
            br
            |Es indudable que la cultura es uno de los grandes determinantes del comportamiento humano, ya que subyace en la toma de decisiones humanas, en su conducta y condiciona la forma de vida de cualquier sociedad. (Rivas,2017). 
            br
            br
            |Para Alonso Rivas (2017) la cultura tiene las siguientes características en el estudio del comportamiento de consumidor.
    LineaTiempoD.color-secundario.mb-5
    .h5 Factores sociales
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img65.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p Los grupos de referencia, la familia, los roles sociales y el estatus social afectan nuestro comportamiento de compra. 
            br
            br
            |Los grupos de referencia se dividen en grupos de pertenencia primarios que son las personas que interactúan continuamente y de manera informal, como la familia, amigos, vecinos y compañeros de trabajo y grupos de permanencia secundarios que son grupos religiosos, profesionales y sindicales que tienden a ser más formales y requieren de una interacción menos continua. Los grupos de referencia influyen en sus miembros al menos de tres maneras: exponen al individuo a nuevas conductas y estilos de vida; influyen en las actitudes y el auto concepto y crean presiones de conformidad que pueden afectar las elecciones de productos y marcas. La gente recibe también la influencia de grupos a los que no pertenece. Los grupos de aspiración son aquellos a los que a la persona le gustaría pertenecer; los grupos disociativos son grupos cuyos valores o comportamiento son rechazados por el individuo. Cuando la influencia del grupo de referencia es fuerte, los especialistas en marketing deben determinar cómo llegar a los líderes de opinión del grupo y de qué manera influir en ellos. (Kotler,2016)
    .h5 Factores sociales
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img66.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p Las características personales que influyen en la decisión del comprador incluyen la edad y la etapa del ciclo de vida, la ocupación y las circunstancias económicas, la personalidad y el auto concepto, el estilo de vida y los valores. (Kotler,2016)
          br
          br
          |La personalidad se refiere a los comportamientos o respuestas constantes de la persona ante situaciones recurrentes. Aunque existen muchas teorías de la personalidad, casi todas identifican rasgos clave, características perdurables de la persona o de su relación con otras. Algunos rasgos son asertividad, extroversión, cumplimiento, predominio y agresión, entre otros. Estas características se heredan o bien se forman en una etapa inicial y cambian poco con los años. Ej. Los tipos agresivos usan maquinillas de afeitar (rastrillos) y no rasuradoras eléctricas. (Kerin,2018)
          br
          br
          |En el siguiente grafico Philip Kotler (2016) consolida los factores que influyen en el comportamiento del consumidor.
    .tarjetas-ordenadas.m-auto.mb-5
      .tarjeta--boton.color-secundario.tj.p-4.m-3
          img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center CULTURALES
          .listado
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Cultura
              li 
                i.fas.fa-angle-right
                | Subcultura
              li 
                i.fas.fa-angle-right
                | Clase social
      .tarjeta--boton.color-secundario.tj.p-4.m-3
          img(src='@/assets/curso/img68.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center SOCIALES
          .listado
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Grupos de referencia
              li 
                i.fas.fa-angle-right
                | Familia
              li 
                i.fas.fa-angle-right
                | Roles y estatus
      .tarjeta--boton.color-secundario.tj.p-4.m-3
          img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center PERSONALES
          .listado
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Ciclo de vida
              li 
                i.fas.fa-angle-right
                | Ocupación
              li 
                i.fas.fa-angle-right
                | Situación económica
              li 
                i.fas.fa-angle-right
                | Estilo de vida
              li 
                i.fas.fa-angle-right
                | Personalidad y autoconcepto
      .tarjeta--boton.color-secundario.tj.p-4.m-3
          img(src='@/assets/curso/img70.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          .h5.text-center PSÍCOLOGICOS
          .listado
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Motivación
              li 
                i.fas.fa-angle-right
                | Percepción
              li 
                i.fas.fa-angle-right
                | Aprendizaje
              li 
                i.fas.fa-angle-right
                | Creencias
              li 
                i.fas.fa-angle-right
                |  Actitudes
    figcaption.mb-5 Fuente: (Kotler,2016)
    .h5 Proceso de toma de decisiones de compra
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img71.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p Wayne Hoyer (2018) determina que el proceso de toma de decisiones de consumo incluye cuatro etapas: Identificación del problema, búsqueda de información, toma de decisiones, y evaluación posterior a la compra y las valida a continuación con el siguiente caso.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Identificación del problema y búsqueda de información. ").p-3
            p Se produce cuando el consumidor nota que tiene una necesidad no satisfecha. Por ejemplo, Jason se dio cuenta que necesitaba unas vacaciones. Su siguiente búsqueda de información le dio una idea del lugar que podría visitar, cuánto costarían las vacaciones, cuándo podría viajar y cuál es su situación financiera, una vez que Jason se da cuenta de que necesita unas vacaciones comienza con su búsqueda, queda expuesto a la información, le presta atención y la percibe, la clasifica y comprende, formando actitudes y recuerdos. 
          div(titulo="Evaluación y toma de decisiones. ").p-3
            p La decisión de Jason se caracteriza como una decisión de alto esfuerzo, lo cual significa que está dispuesto a invertir en ella mucho tiempo, así como energía mental y emocional. Identifica varios criterios que serán importantes en su decisión. El viaje será divertido, emocionante, seguro, educativo y accesible. No todas las decisiones suponen gran cantidad de esfuerzo. Jason también enfrenta decisiones de bajo esfuerzo, como cuál marca de crema dental llevar al viaje. Puede tener recuerdos perdurables acerca de la información, puesto que ha pensado mucho en ella. Los consumidores no siempre son conscientes de lo que piensan y de cómo toman sus decisiones, así que Jason quizá no sea capaz de explicar lo que afectó su elección.
          div(titulo="Evaluaciones posteriores a la toma de decisiones. ").p-3
            p Este paso le permite al consumidor evaluar si la decisión que tomó fue la correcta, y si compraría de nuevo esa oferta. Cuando vuelva de sus vacaciones, Jason quizás evaluará el resultado de sus decisiones. Si sus expectativas se cumplieron, y las vacaciones fueron todo lo que pensó que serían, se sentirá satisfecho. Si las vacaciones superaron sus expectativas, estará encantado. Si no estuvieron a la altura de sus expectativas, se sentirá insatisfecho. 
    .h5 Papeles representativos en la toma de decisiones de compra.
    p.mb-5 El comprador de un producto no siempre es el consumidor del mismo, como tampoco el consumidor es siempre el decisor de la compra. Realizar un análisis de los participantes del proceso de decisión de compra es muy importante para poder identificar el mercado meta. Los participantes pueden ser una o muchas personas, dependiendo del rol y del producto. (Fernández,2009)
      br
      br
      |Alonso y Grande (2012) distinguen cinco papeles representativos en el proceso de decisión de compra. 
    .px-5.mx-5.mb-5
      .row.mb-5
        .col-12
          hr
        .row
          .col-1
            figure
                img(src='@/assets/curso/img72.svg', alt='Texto que describa la imagen')  
          .col-11
            .h5 Iniciador:
            p Es la persona que sugiere la idea de comprar un servicio o un bien en particular
        .col-12
          hr
        .row
          .col-1
            figure
                img(src='@/assets/curso/img73.svg', alt='Texto que describa la imagen')  
          .col-11
            .h5 Influenciador:
            p Es la persona cuyo punto de vista tiene incidencia en la toma de la decisión final
        .col-12
          hr
        .row
          .col-1
            figure
                img(src='@/assets/curso/img74.svg', alt='Texto que describa la imagen')  
          .col-11
            .h5 Decisor:
            p Es la persona que decide sobre alguno de los elementos de la decisión de compra
        .col-12
          hr
        .row
          .col-1
            figure
                img(src='@/assets/curso/img75.svg', alt='Texto que describa la imagen')  
          .col-11
            .h5 Comprador:
            p Es la persona que lleva a cabo la compra
        .col-12
          hr
        .row
          .col-1
            figure
                img(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen')  
          .col-11
            .h5 Usuario:
            p Es la persona que consume o utiliza el bien o servicio
    .h5 Disonancia cognitiva
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img77.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p La disonancia cognitiva posventa, es un fenómeno que cualquier consumidor experimenta, y consiste en la insatisfacción mental que se genera entre gastar dinero en un producto y la posible utilidad del mismo. Por ejemplo, una persona que invierte sus ahorros en la compra de un automóvil, una vez cerrada la operación puede generar un sentimiento de insatisfacción por la compra, al dudar si el automóvil era o no el idóneo. Para evitar que esto suceda, es necesario dar al consumidor elementos para que sienta satisfacción por su compra, tales como: servicio, garantías, beneficios adicionales, etcétera. La disonancia es un fenómeno común, lo importante es que el consumidor tenga esta sensación la menor cantidad de tiempo posible, para ello es indispensable reconocer en el mismo las variables que determinan su personalidad, su cultura, su estatus social, etc.; es decir, su comportamiento. (Fernández,2009)
    .h5 Conductas
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img78.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p Actitudes similares conducen, sistemáticamente, a las mismas conductas. Sin embargo, a pesar de su consistencia, las actitudes no son permanentes, y pueden cambiar ya sea de manera frecuente o muy rara vez. Por lo general, esperamos que el comportamiento de los consumidores sea congruente con sus actitudes (Schiffman,2015).
            br
            br
            |Las conductas de compra se entienden como la forma en que compran los consumidores finales, bienes y servicios para su consumo personal (Vivar, 2009). En toda conducta de compra y consumo hay tres aspectos básicos que dan sentido a la misma:
    .cajon.color-secundario.p-4.mb-4
          p 
            b Definición del objeto de consumo:
            b-none son los productos y servicios suministrados con el fin de obtener una ganancia económica.
    .cajon.color-secundario.p-4.mb-4
          p 
            b Unidades de consumo: 
            b-none los individuos y grupos de consumo (familia, organizaciones, instituciones públicas o privadas, el gobierno, etc.).
    .cajon.color-secundario.p-4.mb-4
          p 
            b Fases de conducta:
            b-none  actividades, procesos y roles en la conducta de compra.
    .h5.mb-5 Jerarquía de necesidades de Maslow
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img79.svg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p 
            b Una necesidad 
            b-none es un estado interno de tensión provocado por un desequilibrio entre el estado ideal o deseado y el estado real. Por ejemplo, en ciertos momentos del día, su estómago comienza a sentirse incómodo. Se da cuenta de que es momento de comer algo, y está motivado a dirigir su comportamiento para el logro de ciertos resultados (como abrir el refrigerador). Comer satisface su necesidad y elimina la tensión, en este caso el hambre. Una vez que se siente motivado para satisfacer una necesidad específica, los objetos no relacionados con esa necesidad le parecen menos atractivos (Hoyer, 2018).
            br
            br
            |El marketing se configura como un conjunto de actividades dirigidas a conseguir objetivos a partir del impulso de los intercambios, sus productos deben conectar adecuadamente con las necesidades del consumidor. Las empresas deben identificar sus necesidades y crear productos para satisfacerlas. Sólo así alcanzarán el éxito en el mercado (Rivas, 2017).
    p.mb-5 Maslow (1943), psicólogo estadounidense elaboró una teoría basada en la idea de que el consumidor elige el producto que adquiere a partir de una jerarquía de necesidades. Ello significa que su comportamiento de compra se produce a medida que se satisfacen necesidades, y la pirámide elaborada en función de estas coincide con las etapas del desarrollo humano. (Soria,2017)
      br
      br
      |La teoría afirma que los individuos buscan satisfacer las necesidades de bajo nivel antes de ocuparse de las de nivel más elevado. Las necesidades insatisfechas de nivel más bajo son las que generan la motivación conductual de las personas. Cuando una necesidad queda satisfecha en términos generales, el individuo se motiva para cubrir una necesidad del siguiente nivel de la jerarquía, cuando se satisface esta necesidad, la necesidad del nivel siguiente se convierte en el motivador principal, y así sucesivamente. Sin embargo, si una persona experimenta de nuevo la urgencia de satisfacer una necesidad que ya había cubierto antes, esa necesidad se convierte en el factor dominante de su motivación, aunque sea por algún tiempo.
    .cajon.color-secundario.p-4.mb-5
          p 
            b Por ejemplo, digamos que una persona tiene un buen estilo de vida y está dedicada, por lo tanto, a satisfacer sus necesidades de reconocimiento. Si en ese momento el sujeto en cuestión pierde su empleo, tendrá que “echar marcha atrás” para tratar de satisfacer sus necesidades de seguridad; si entonces obtiene un nuevo trabajo por el que le pagan muy bien, sus necesidades de seguridad quedarán satisfechas y podrá “moverse” de nuevo a un nivel más ele-vado de la jerarquía. (Schiffman,2015)
    figure.mb-5
      img(src='@/assets/curso/img80.svg', alt='Texto que describa la imagen' style='width:550px' ).m-auto
    p.mb-5 Según este modelo se describen a continuación, los cinco niveles que motivan la conducta del consumidor:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Fisiológicas").p-3
        p Según Maslow, las necesidades fisiológicas constituyen el primer nivel de necesidades humanas y el más básico. Se trata de necesidades primarias, cuya satisfacción es imprescindible parconservar la existencia biológica; entre ellas están el alimento, el agua, el aire, el refugio, la ropa y el sexo, todas las cuales son necesidades biogénicas. De acuerdo con Maslow, lanecesidades fisiológicas son dominantes cuando se mantienen crónicamente insatisfechas: “Para el ser humano que tiene mucha hambre, no existe otro interés más allá de alimentarse. Sueñcomida, recuerda la comida, piensa en comida, actúa guiado únicamente por la comida, lo único que percibe es comida, y lo único que quiere es comida” (Schiffman,2015) 
      div(titulo="Seguridad").p-3
        p  En este punto el consumidor ya ha satisfecho sus necesidades inmediatas, por lo que busca sentirse seguro en el entorno que le rodea. (Soria,2017) Las necesidades de seguridad protección se convierten en la fuerza que impulsa la conducta del individuo. Estas necesidades no sólo tienen que ver con la seguridad física, sino también con el orden, la estabilidad, lrutina, la familiaridad y el control sobre la propia vida y el entorno. Ej. La salud y la disponibilidad de atención médica, las cuentas de ahorro, las pólizas de seguro, la educación y lcapacitación para el trabajo son medios a través de los cuales el individuo satisface la necesidad de seguridad. (Schiffman,2015)
      div(titulo="Sociales").p-3
        p Una vez que se siente seguro en su entorno, comienza a relacionarse y, por lo tanto, tener otras necesidades derivadas de este proceso de socialización. (Soria,2017) Ej. el amor, eafecto, la pertenencia y la aceptación.
      div(titulo="Estima").p-3
        p El consumidor es más adulto, se siente seguro, felizmente relacionado y siente que tiene éxito en el entorno que le rodea. (Soria,2017) Las necesidades orientadas al interior reflejan lnecesidad del individuo por gozar de auto aceptación, autoestima, éxito, independencia y satisfacción personal y las necesidades orientadas al exterior incluyen la necesidad de prestigioreputación, estatus y reconocimiento por parte de los demás. (Schiffman,2015)
      div(titulo="Autorrealización.").p-3
        p Se refieren al deseo del individuo por explotar todo su potencial, es decir, por convertirse en todo lo que es capaz de llegar a ser. Ej. un artista plástico tendría necesidad de expresarse a través de un lienzo. (Schiffman,2015) Es el último escalón de la pirámide, según Maslow, un estrato difícil de alcanzar. El consumidor nunca se sentirá satisfecho y en este punto se vuelve sensible ante cualquier reclamo publicitario. (Soria,2017)
    .h5 Hábitos de compra
    .row.mb-5
      .col-lg-6 
          figure
            img(src='@/assets/curso/img81.jpg', alt='Texto que describa la imagen' )
      .col-lg-6 
          p El hábito, el impulso constante y casi universal del hombre a repetir el mismo acto, es uno de los factores más vitales del mercado. Las compras pueden ser impulsivas, razonadas o habituales, pero en la mayoría de los casos pertenecen a esta última categoría. Los hábitos de compra profundamente arraigados son difíciles de modificar o cambiar. En todo estudio de mercado hay que descubrir lo usual y acostumbrado. Ej. En ciudades frías son preferidas las camisetas con cuello y mangas largas; en la costa, sin cuello y sin mangas. Pero los hábitos en las compras no conciernen únicamente al tipo de producto que se acostumbra comprar. Afectan también a la cantidad o unidad de producto comprado, cuándo se efectúa la compra, y dónde se hará. Se dice a menudo que, si un artículo contribuye a mejorar la apariencia personal, la comodidad o la salud de la persona que lo compra, su apego por él es mucho mayor que por algún otro artículo de más utilidad poseído. 
    .cajon.color-secundario.p-4.mb-5
          p 
            b Es difícil convencer a un hombre para que deje de usar una marca o una forma de camisa que le satisface. Es mucho más fácil convencerle para que use una nueva marca de loción. Indudablemente, cada detalle de los hábitos en la compra que afectan el artículo o sus usos es importante cuando se estudia el mercado. (Céspedes,2008)
    p.mb-5 Una meta importante del marketing es modificar los hábitos de los consumidores e inducirlos a cambiar a la marca de la empresa. Como el consumidor habitual no tiene fuerte preferencia por una marca, esta meta es más fácil de alcanzar que cuando se trata de consumidores leales a la marca. Para inducir el cambio de marca, las empresas emplean técnicas de promoción de ventas, como demostraciones (en línea o en persona), rebajas, cupones, muestras gratuitas y obsequios, y todas tienen la finalidad de capturar la atención de los consumidores y hacerlos probar la nueva marca. Una vez que se ha roto con un viejo hábito, los consumidores pueden continuar comprando la marca nueva, ya sea debido a que les gusta o porque han desarrollado un hábito nuevo. Las empresas también pueden romper hábitos cuando introducen un beneficio nuevo y único que satisface las necesidades de los consumidores, mejor que las marcas existentes. Después, esta ventaja diferenciadora requiere una gran cantidad de publicidad para difundir su noticia entre los consumidores. Las empresas no desean que sus clientes de compras reiteradas rompan sus hábitos de consumo. Como los consumidores habituales son susceptibles a las promociones de los competidores, las empresas deben ofrecer promociones comparables para retener a sus clientes. (Hoyer,2018)
    figure.mb-5
      img(src='@/assets/curso/img82.svg', alt='Texto que describa la imagen' )
    .h5 Stakeholders (Grupo Interés)
    p.mb-5 Para Prettel (2016) los grupos de interés o definidos también como stakeholders o públicos, tienen de alguna manera influencia en una organización. Entre los grupos de interés se pueden identificar:
    .tarjetas-ordenadas.m-auto.mb-5
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img83.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          p.text-center Las instituciones financieras, accionistas que influyen en la economía y crecimiento de las organizaciones.
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img84.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          p.text-center Las asociaciones de profesionales: arquitectos, economistas, ingenieros, médicos, entre otras.
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img85.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          p.text-center Los medios de comunicación que llegan a tener influencia sobre las empresas, a través de la información que suministran, noticias e informes editoriales. 
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img86.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          p.text-center El gobierno es uno de los públicos de mayor influencia en las organizaciones. Es necesario estar pendientes de las nuevas disposiciones gubernamentales, a fin de no generar inconvenientes en el funcionamiento de las compañías.
      .tarjeta--boton.color-secundario.p-4.m-3
          img(src='@/assets/curso/img87.svg', alt='Texto que describa la imagen' style= "width: 80px").m-auto.mb-3
          p.text-center Los grupos internos de la empresa son de gran importancia a la hora de tomar decisiones: los directivos, empleados, hacen parte de este público.
    figure
      img(src='@/assets/curso/img88.svg', alt='Texto que describa la imagen').m-auto.mb-3




        










</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
