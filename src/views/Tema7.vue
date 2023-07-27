<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Crisis
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-auto.pe-md-0.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema7/img1.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
      .col
        p.mb-0 Una crisis psicológica en términos de salud mental, no se refiere necesariamente a un evento traumático o una situación, sino a la reacción que puede tener una persona ante un evento. Una persona puede verse profundamente afectada profundamente por un evento mientras que otra persona sufre pocos o ningún efecto adverso.
    p.mb-5(data-aos="fade-right") Existen varias definiciones y enfoques del concepto de crisis, dependiendo del tiempo:
    .row.justify-content-center.bg-c12.mb-5(data-aos="fade-left")
      .col-lg-10
        .p-5
          LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    p.mb-5(data-aos="fade-right") A veces, las crisis son fáciles de identificar, como cuando un individuo pierde su trabajo, se divorcia o se ve involucra en algún tipo de accidente. En otros casos, una dificultad personal puede ser menos dificultosa, pero aún puede llevar a cambios trágicos en el comportamiento y el estado de ánimo.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img2.svg', style="width: 450px" ,alt='Imagen decorativa').m-auto
      .col-lg-7(data-aos="fade-left")
        p Los signos que pueden ayudar a identificar si una perona se encuentra en crisis, son:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Cambios de peso.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Decremento del rendimiento en el colegio o el trabajo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Cambios trascendentales en los hábitos de sueño.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Abandono de la higiene personal.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Cambios inesperados de humor.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Desanimo de las actividades que solía disfrutar.
    p.mb-5(data-aos="fade-right") Es posible pensar en una crisis como un desastre insospechado e inesperado, como un accidente automovilístico, un desastre natural u otro evento catastrófico. Sin embargo, las dificultades pueden variar sustancialmente en tipo y gravedad, entre ellas se encuentran:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Crisis del desarrollo
              p.text-center A veces una dificultad es una parte predecible del ciclo de vida, como las dificultades descritas en las etapas de desarrollo psicosocial de Erikson. Ocurren como parte del proceso de incremento y desarrollo a lo largo de varios períodos de la vida.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Crisis existenciales
              p.text-center Las dificultades internas están involucradas con cosas como el propósito, la dirección y la espiritualidad de la vida. Una crisis de la mediana edad es un ejemplo de una crisis que a menudo tiene sus raíces en el desahogo existencial.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img5.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center Crisis situacionales
              p.text-center Estas crisis inesperadas incluyen accidentes y desastres naturales. Tener un accidente automovilístico, sufrir un terremoto o una inundación, ser víctima de un delito, o enfrentarte a un problema en el ámbito profesional, son solo algunos tipos de crisis situacionales.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 A veces, una crisis puede ser suficientemente obvia, como cuando una persona pierde su trabajo, se divorcia o se ve involucrada en algún tipo de accidente. En otros casos, una crisis personal puede ser menos aparente, pero aún puede conducir a cambios dramáticos en el comportamiento y el estado de ánimo.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1961',
        texto:
          'Según Caplan (1961): ”las personas se encuentran en un estado de crisis cuando se enfrentan a un obstáculo para alcanzar objetivos importantes en la vida, y un obstáculo que, durante un tiempo, es insuperable mediante el uso de métodos habituales de resolución de problemas". ',
        icono: require('@/assets/curso/tema7/img2.png'),
      },
      {
        titulo: '1978',
        texto:
          'Según Lillibridge y Klukken (1978): "un trastorno en el equilibrio por el fracaso del enfoque tradicional de resolución de problemas que resulta en desorganización, desesperanza, tristeza, confusión y pánico". ',
        icono: require('@/assets/curso/tema7/img3.png'),
      },
      {
        titulo: '2001',
        texto:
          'Según James y Gilliland (2001): "la crisis es una percepción o experiencia de un evento o situación como una dificultad intolerable que excede los recursos actuales y los mecanismos de afrontamiento de la persona". ',
        icono: require('@/assets/curso/tema7/img4.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
