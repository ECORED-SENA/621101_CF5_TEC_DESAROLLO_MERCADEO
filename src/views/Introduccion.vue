<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    p.mb-5 A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del informe de segmentación de mercados y del plan de distribución para su idea de negocio o proyecto productivo.
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Texto que describa la imagen")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
