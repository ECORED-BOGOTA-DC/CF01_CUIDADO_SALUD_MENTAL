<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Afrontamiento y factor protector
    .row.align-items-center.mb-3
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema9/img1.png', style="width: 280px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8(data-aos="fade-left")
        p Cuando se habla de afrontamiento o estrategia de afrontamiento es importante tener en cuenta que en la medida en que el individuo, posea habilidades, destrezas y recursos psíquicos para actuar frente a un evento estresor que se le pueda presentar a lo largo de la vida, esta se convierte en un factor protector o en un factor de riesgo que incide de manera directa en la salud mental del individuo; de tal forma, que el afrontamiento se convierte en el conjunto de esfuerzos de tipo cognitivo y conductual que cambia de manera constante y que se desenvuelve para responder al manejo de las exigencias puntuales, extrínsecas y/o intrínsecas, que son examinadas como excesos y que se desbordan a partir de los recursos del sujeto.
        p.mb-0 Es importante para el individuo desarrollar destrezas para crear estrategias de acuerdo a los eventos que más niveles de estrés le provocan, con el fin de responder de manera adaptativa sin llegar a un desajuste importante en su salud mental.
    p.mb-5(data-aos="fade-right") Según Valverde, López y Ring (2004), Lazarus y Folkman (1982), existen dos grandes tipos de estrategias de afrontamiento:
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-9.col-md-5.col-lg.m-2
        .row
          .col-12.px-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema9/img2.png', style="width: 650px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c19(style="z-index:1")
            .p-4
              p #[b La resolución de problemas]
              p.mb-0 Que está encaminada a tratar o a variar el problema que provoca el malestar.
      .col-9.col-md-5.col-lg.m-2
        .row
          .col-12.px-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema9/img3.png', style="width: 650px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c19(style="z-index:1")
            .p-4
              p #[b La regulación emocional]
              p.mb-0 Que tiene que ver con la metodología que se dirige a normalizar la respuesta emocional ante el problema.
    p.mb-5(data-aos="fade-right") Existen algunos factores que pueden llegar a determinar los mecanismos de afrontamiento:
    ul.lista-ul.mb-5(data-aos="fade-down")
      li.d-flex
        i.fas.fa-check(style="color: #FF8182")
        |
        p.mb-0 Los recursos relacionados con el estado de salud o la energía física con la que se cuenta.
      li.d-flex
        i.fas.fa-check(style="color: #FF8182")
        |
        p.mb-0 Los recursos relacionados con las creencias existenciales que se posean, sean religiosos o no.
      li.d-flex
        i.fas.fa-check(style="color: #FF8182")
        |
        p.mb-0 Los recursos relacionados con las creencias generales que se relacionan con el control y que se pueden ejercer sobre el entorno y sobre nosotros mismos.
      li.d-flex
        i.fas.fa-check(style="color: #FF8182")
        |
        p.mb-0 Los recursos relacionados con el apoyo social y los recursos materiales.
      li.d-flex
        i.fas.fa-check(style="color: #FF8182")
        |
        p.mb-0 Los recursos relacionados con la motivación, la habilidad para la solución de problemas y las habilidades sociales.
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='Texto que describa la imagen')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Estilos de afrontamiento y factor protector
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Se refiere a las predisposiciones personales para hacer frente a las situaciones, y son los responsables de las preferencias individuales en el uso de uno u otro tipo de estrategias de afrontamiento, así como de su estabilidad temporal y situacional; en tanto que las estrategias son los procesos concretos en cada contexto y pueden ser altamente cambiantes dependiendo de la situación que lo desencadene.
        p.mb-0 En la siguiente figura 1 se observa con detenimiento los estilos de afrontamiento y cómo se comportan ante un evento estresor.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema9/img4.png', style="width: 550px" ,alt='Texto que describa la imagen').m-auto
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      p.mb-0 #[b Figura 1]. Estilos de afrontamiento.
    figure(data-aos="fade-left")
      img(src='@/assets/curso/tema9/img1.svg', style="width: 1050px" ,alt='Texto que describa la imagen').m-auto

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
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
