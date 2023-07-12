<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Violencia
    .row.bg-c1
      .col-12
        .p-5
          p.mb-5 La violencia es un tema que incide directamente en la salud mental, en el siguiente video se puede conocer su definición:
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/YfNMsgU1cW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Algunos tipos de violencia son:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1").mb-5
      .row(titulo="Violencia física")
        .col-12
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Es aquella en la cual se puede evidenciar el abuso porque da lugar al daño físico, incluso a la muerte, es importante hacer claridad en que no siempre deja señales visibles (por ejemplo, el empujar a una persona es violencia física, o si por el contrario le dejan caer sobre la cara agua es un acto de violencia física). La violencia física también se puede presentar como el secuestro, los castigos físicos, impedir la movilidad del individuo, etc.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img1.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
      .row(titulo="Violencia psicológica")
        .col-12
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Esta forma de violencia es casi imposible descubrirla, debido a que es aquella que deteriora o causa daño emocional. Va acompañada de la violencia verbal, la cual es practicada por uno o más individuos sobre su semejante, en ocasiones empieza de forma muy tenue, pero permanece y se extiende en el tiempo hasta que llega a convertirse en un hecho de impacto altamente violento.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img3.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
      .row(titulo="Violencia sexual")
        .col-12
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 En ocasiones es difícil detectarla, porque de acuerdo con el contexto, se terminan normalizando situaciones en donde aparentemente se está seduciendo a la víctima. Es una de las formas de violencia donde la mayoría de las víctimas pertenecen al género femenino y los agresores al masculino. Este tipo de violencia va desde la aparente seducción, a través de mensajes con contenido sexual hasta el uso de la fuerza para acceder a la víctima, la manipulación psicológica y el miedo.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img2.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
      .row(titulo="Violencia económica y patrimonial")
        .col-12
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Esta afecta las propiedades de la misma víctima y cuando se mantiene en el tiempo, decanta en otro tipo de violencia, como la sexual o la física. Se evidencia con la sustracción de propiedades de la víctima o incluso quitándole la libertad y no dejándola trabajar o hacer alguna actividad de forma autónoma con el fin de ejercer control y amenazar su integridad.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img4.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
      .row(titulo="Violencia simbólica")
        .col-12
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Se manifiesta de manera indirecta en la sociedad, a través de estrategias que imponen estereotipos y estructuras mentales, que son reforzados por la repetición y terminan siendo naturalizados. Es una de los tipos de violencia más enmascarados que afecta a un gran número de personas a la vez. Por ejemplo, el estereotipo de la figura esbelta y extremadamente delgada que casi nadie es capaz de alcanzar puede llevar a trastornos físicos y psicológicos en quienes no pueden encajar en este modelo.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img5.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
    .tarjeta.tarjeta--verde.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Violencia doméstica]
              p Todos los integrantes de un núcleo familiar padecen los efectos de este tipo de violencia.
              p.mb-0 En estos casos la persona intenta ejercer control y poder sobre su pareja o compañero con el que se relaciona sentimentalmente, o también hace lo mismo a su familia. Generalmente se presentan diferentes tipos de abusos: financiero, físico, psicológico o emocional y sexual.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img6.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Institucional]
              p.mb-0 Este modo de violencia surge cuando las instituciones encargadas por el estado de preservar el orden, abusan de su poder y violentan a los individuos, ocasionando daño físico, emocional y psicológico e incluso hasta la muerte.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img7.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Laboral]
              p.mb-0 Tiene que ver con todas las actuaciones que se dan en el entorno laboral en donde exista abuso de poder de parte del empleador, o desde la jerarquía que se maneje en el mismo o de quien posea autoridad de cualquier tipo. Se manifiesta de manera espontánea o evasiva, de tal modo que dañan la dignidad e integridad del empleado por medio de amenazas, malos tratos, acoso, insultos entre otros.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img8.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Contra la libertad productiva]
              p.mb-0 Esta tiene que ver con las actuaciones que violen el derecho de la mujer a tener información oportuna para poder decidir de forma libre y responsable si desea tener hijos o no, en ese caso al número de veces que quiere estar embarazada, o a los espacios entre cada nacimiento, esta puede presentarse cuando su compañero le impide el uso de métodos anticonceptivos o contraceptivos, o cuando se impone un método en lugar de brindar la información pertinente para que la mujer pueda elegir de acuerdo a las diferentes alternativas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img9.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Obstétrica]
              p.mb-0 Se refiere al trato deshumanizado antes, durante y después del nacimiento del bebé. Así mismo se ejerce violencia en variadas ocasiones en la atención post aborto, donde no se procede de forma inmediata, con oportunidad en la atención y no se preserva la confidencialidad. En toda eventualidad el personal de salud está en la obligación de ejercer respeto en el trato hacia de la mujer, procurar por la confidencialidad del suceso guardando el secreto profesional, velar por su salud y preguntarle para tomar decisiones acerca de los pasos y tratamientos a realizar, de lo contrario, se considera un acto violento.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img10.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Mediática]
              p.mb-0 Tiene que ver con todo aquello que se publique o difunda directa e indirectamente, fomentando distintas formas de estereotipos o de explotación hacia las mujeres u otras poblaciones por su apariencia, que profieran injurias, difamaciones, discriminaciones o humillaciones que vayan en contra de su dignidad humana, a través de los medios de comunicaciones.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema6/img11.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
    p.mb-5 Dentro de las características de la violencia se pueden encontrar tres principales:
    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          figure.mb-4
            img(src='@/assets/curso/tema6/img12.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b La violencia no es natural]
          p.mb-0 Comúnmente se dice la frase #[b “somos violentos por naturaleza”], esto no es así, lo que provoca la violencia son las interacciones con los demás por las relaciones de subordinación y dominación que surgen entre los individuos.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          figure.mb-4
            img(src='@/assets/curso/tema6/img13.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b La violencia es dirigida e intencional]
          p.mb-0 Porque siempre que ocurre un hecho violento ya sea verbal, físico, o de cualquier otro tipo, va dirigido a una o a unas personas en específico y su intención siempre es la de lesionar o dañar al otro ejerciendo su poder y dominio.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          figure.mb-4
            img(src='@/assets/curso/tema6/img14.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b La violencia se basa en el abuso de poder]
          p.mb-0 Esta es la principal característica de la violencia, dado que las acciones violentas se dan hacia personas o grupos que tienen menos poder y sobre los cuales se ejerce la superioridad; tal es el caso de los niños, mujeres, adultos mayores, subordinados entre otros.

</template>

<script>
export default {
  name: 'Tema6',
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
