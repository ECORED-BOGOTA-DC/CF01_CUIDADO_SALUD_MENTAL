<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Trastornos mentales prevalentes
    .row.bg-c1(data-aos="fade-right")
      .col-12
        .p-5
          p.mb-5 En el siguiente video podrá identificar los trastornos mentales prevalentes, según salud mental:
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ZDy1oIMM_Fs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-down") Con base en lo anterior se puede tener claridad sobre los trastornos prevalentes, pero no hay que olvidar que a raíz del Covid-19, aparecieron o se intensificaron enfermedades de tipo mental, como lo señala el siguiente artículo, donde se destaca la importancia que tiene la salud mental para el gobierno nacional, no solo con el enfoque para el individuo, sino también para las familias y la sociedad.
    .row(data-aos="fade-left")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema8/img1.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p A raíz del Covid-19, aparecieron o se intensificaron enfermedades de tipo mental, como en el siguiente artículo:
              p.mb-4 #[b Salud mental, uno de los principales retos de la pandemia]
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/Paginas/Salud-mental-uno-de-los-principales-retos-de-la-pandemia.aspx" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Ver enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    Separador
    #t_8_1
    .titulo-segundo.color-acento-contenido
      h2 8.1 Signos de alarma
    .row.align-items-center.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Un problema de salud mental se transforma en enfermedad cuando los signos y síntomas dejan de ser transitorios, se instalan de manera permanente, generan situaciones de confusión e inciden en la capacidad para funcionar de manera ajustada en la sociedad.
        p Un trastorno de salud mental o una enfermedad mental, tiene que ver con múltiples afecciones mentales, como por ejemplo aquellas que afectan el estado de ánimo como: tristeza, melancolía sin motivo aparente, baja estima, entre otras situaciones. Así también pueden provocar distorsiones de pensamiento al tener pensamientos e ideas negativas constantes, que generan un alto sentimiento de persecución o deseos de hacer algo que atente en contra de otras u otras personas, como la propia vida.
        p.mb0 Los comportamientos de aislamiento, descuido en la apariencia personal, pueden ser signos de depresión, de trastornos de ansiedad, de trastornos de la alimentación y de adicciones.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img1.png', style="width: 280px" ,alt='Imagen decorativa').m-auto
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-md-3.pe-0.bg-c9
        .p-4
          h3.mb-0 Pero… ¿cómo se identifican estos signos y síntomas de alarma?
      .col
        p.mb-0 Se hace necesario identificar cambios en los pensamientos, sentimientos y emociones, porque ellos varían de acuerdo al trastorno o enfermedad mental que el individuo está desarrollando; a continuación se relacionan algunos síntomas y signos que son fácilmente identificables y para los cuales no se hace necesario ser experto en el área de la psicología o la psiquiatría, en ocasiones basta con tener capacidad de observación y autoobservación si se trata de uno mismo.
    .row.justify-content-center.align-items-center.bg-c13.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema8/img2.svg', style="width: 400px" ,alt='Imagen decorativa').m-auto
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Problemas de sueño.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Falta de energía.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Sensación de profunda tristeza.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Pérdida de la capacidad para organizar las ideas y concentrarse.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Miedo excesivo sin causa alguna.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Preocupación excesiva por creer escuchar voces que nadie más oye.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Ver personas o cosas que nadie más ve (alucinaciones visuales y auditivas).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Incapacidad para resolver problemas de la vida cotidiana.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Consumo de alcohol o sustancias, ideas suicidas.
    p.mb-5(data-aos="fade-right") Es relevante mencionar que en ocasiones estas afecciones en la salud mental aparecen como síntomas físicos, dolores musculares, dolores de estómago, dolor de cabeza, afecciones del sistema digestivo, sensación de ahogamiento, es lo que se conoce como somatización.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b.txt-c1 ¿Cuándo debe consultarse al médico o especialista?]
              br
              | Siempre que el individuo logre realizar un proceso de auto observación adecuado y pueda verificar uno o más de los signos y síntomas anteriormente mencionados es importante consultar a su médico.
    p.mb-0(data-aos="fade-right") En Colombia existe la atención primaria en salud, y el personal vinculado a esta atención se encuentra entrenado para reconocer una situación problémica de salud mental para derivarlo al profesional especializado correspondiente, es importante comprender que estas afecciones no sanan por sí solas y necesitan de un plan o manejo especial que incluya el diagnóstico tratamiento y monitoreo adecuado.
    Separador
    #t_8_2
    .titulo-segundo.color-acento-contenido
      h2 8.2 Conductas asociadas
    p.mb-5(data-aos="fade-right") Las personas cambian su comportamiento según su estado de ánimo. Cada ser humano varía día a día, dependiendo de las circunstancias. Sin embargo, un gran cambio repentino en la personalidad o en la conducta en particular, si no está relacionado con algún acontecimiento, este indica un problema. Estos cambios de comportamiento se pueden clasificar en alguno de los siguientes:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-6.col-lg.m-2
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema8/img15.svg', style="width: 80px" ,alt='').m-auto
          .col.bg-c14(style="z-index: 1")
            .p-4
              p.mb-0.ms-1 #[b Confusión.]
      .col-md-6.col-lg.m-2
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema8/img16.svg', style="width: 80px" ,alt='').m-auto
          .col.bg-c14(style="z-index: 1")
            .p-4
              p.mb-0.ms-1 #[b Delirio.]
      .col-md-6.col-lg.m-2
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema8/img17.svg', style="width: 80px" ,alt='').m-auto
          .col.bg-c14(style="z-index: 1")
            .p-4
              p.mb-0.ms-1 #[b Alucinaciones.]
      .col-md-6.col-lg.m-2
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema8/img18.svg', style="width: 80px" ,alt='').m-auto
          .col.bg-c14(style="z-index: 1")
            .p-4
              p.mb-0.ms-1 #[b Ánimo extremo.]
    p.mb-0(data-aos="fade-right") Estas categorías no son trastornos. Para estos síntomas los profesionales de la salud mental organizan diferentes tipologías al detectar estos pensamientos, discursos y conductas anormales del paciente. Una persona afectada puede presentar más de un tipo de cambio. Por ejemplo, las personas que presentan confusión debido a interacciones entre fármacos presentan a menudo alucinaciones o delirios persistentes.
    Separador
    #t_8_3
    .titulo-segundo.color-acento-contenido
      h2 8.3 Intervención primaria
    .row.align-items-center.mb-3
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema8/img7.png', style="width: 310px" ,alt='Imagen decorativa').m-auto
      .col-lg-8(data-aos="fade-left")
        p Se requiere trabajar en la promoción de la salud mental y la prevención de los problemas y trastornos mentales, y desarrollar una estrategia que promueva la resiliencia y el bienestar emocional en los individuos, familias y comunidades. Además, la promoción de la salud mental es vital en países en desarrollo como Colombia, abocados a graves problemáticas psicosociales, debido al largo conflicto armado interno y las frecuentes situaciones de emergencias sociales y naturales que en los últimos años han afectado al país.
        p Las investigaciones desarrolladas en temas de trastornos mentales durante las pasadas décadas han transformado notablemente la práctica psiquiátrica, ofreciendo una mayor calidad de vida a millones de pacientes en todo el mundo. Permitiendo el desarrollo de nuevos antidepresivos y antipsicóticos, con menos efectos secundarios y de más rápida acción, para que las personas puedan retornar al trabajo o estudio.
        p.mb-0 Los síndromes parecidos al Parkinson son menos frecuentes, los pacientes ya no son tan estigmatizados y las personas afectadas por los trastornos psicóticos pueden ser tratadas sin hospitalización, o con cortas permanencias en unidades de salud mental.
    p.mb-5(data-aos="fade-right") Se tiene como objetivo en la promoción de la salud y la prevención de la enfermedad: #[b.txt-c1 “Disminuir el riesgo de contraer alguna enfermedad”]. En este nivel se toman todas las medidas para mantener la salud mental de la persona.
    .row.justify-content-center.align-items-center.bg-c15.mb-5
      .col-lg-7(data-aos="fade-right")
        p Las acciones deben centrarse en transformar los factores de riesgo de la comunidad. Algunas actuaciones serían sobre:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Atención de la mujer y el niño durante el embarazo y el nacimiento.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Embarazo en la adolescencia.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Retraso escolar.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Trastorno en el desarrollo del lenguaje.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Antecedentes de patología psiquiátrica en los padres.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Maltrato infantil.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Trastornos del comportamiento alimentario.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FF8182")
            |
            p.mb-0 Acoso escolar.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img4.svg', style="width: 400px" ,alt='Imagen decorativa').m-auto
    p.mb-5(data-aos="fade-right") A continuación se relacionan algunas enfermedades mentales identificadas como prevalentes para nuestro país:
    TabsA.color-acento-contenido.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4(titulo="Depresión unipolar")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Trastorno depresivo caracterizado por la aparición de más de un episodio de depresión. En la depresión unipolar, el estado de ánimo se asemeja a la tristeza cotidiana o la que se observa en un duelo. Ese estado de ánimo es menos invasivo que el apagamiento emocional, pues permite al afectado interesarse un poco más en realizar ciertas actividades y se dan momentos en que la tristeza pasa a un segundo plano. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img6.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Trastorno bipolar")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p El trastorno bipolar hace referencia a los dos extremos o polos que se presentan en los trastornos del estado de ánimo: depresión y manía La mayoría de los trastornos bipolares pueden clasificarse en:
            p #[b Trastorno bipolar I]: la persona ha sufrido al menos un episodio maníaco en toda regla (uno que le impide funcionar normalmente o que incluye delirios) y por lo general episodios depresivos.
            p #[b Trastorno bipolar II]: caracterizado por la presencia de episodios depresivos mayores y por lo menos un episodio más leve de manía (hipomanía), pero sin episodios graves de manía.
            p.mb-0 Hay episodios que se pueden clasificar como trastorno bipolar no especificado o trastorno ciclotímico por tener características leves.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img7.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Esquizofrenia")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 La esquizofrenia es un trastorno mental caracterizado por la existencia de pérdida de contacto con la realidad (psicosis), alucinaciones (por lo general consistentes en oír voces), falsas creencias firmemente sostenidas (delirios), alteraciones del pensamiento y de la conducta, reducción en la expresión emocional, disminución de la motivación, deterioro de la función mental (cognición) y problemas para desenvolverse en la vida de cada día, incluyendo el deterioro del trabajo, las relaciones sociales y el cuidado de uno mismo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img8.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Epilepsia")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Consiste en una  crisis convulsiva, es una descarga eléctrica anormal desordenada que sucede en el interior de la sustancia gris cortical cerebral e interrumpe transitoriamente la función encefálica normal. En los casos típicos, una crisis produce una alteración de la conciencia, sensaciones anormales, movimientos involuntarios focales o convulsiones (la contracción involuntaria violenta y difusa de los músculos voluntarios).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img9.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Consumo problemático de alcohol y otras sustancias psicoactivas")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Existen muchas formas de clasificar las sustancias psicoactivas dependiendo de su abordaje. A continuación, tres grandes grupos:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Según sus efectos en el cerebro pueden ser depresoras o estimulantes del sistema nervioso, o pueden ser alucinógenas.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Según su origen pueden ser naturales, sintéticas o semisintéticas.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Según la normatividad pueden ser ilegales o legales, por ejemplo, la cocaína es ilegal pero las bebidas alcohólicas son legales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img10.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Alzheimer y otras demencias")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p La enfermedad de Alzheimer es la forma más común de demencia entre las personas mayores. La demencia es un trastorno cerebral que afecta gravemente la capacidad de una persona de llevar a cabo sus actividades diarias.
            p.mb-0 El Alzheimer comienza lentamente. Primero afecta las partes del cerebro que controlan el pensamiento, la memoria y el lenguaje. Las personas con el mal pueden tener dificultades para recordar cosas que ocurrieron en forma reciente o los nombres de personas que conocen. Un problema relacionado, el deterioro cognitivo leve, causa más problemas de memoria que los normales en personas de la misma edad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img11.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Trastorno obsesivo compulsivo")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p El trastorno obsesivo-compulsivo (TOC) es una afección mental que consiste en presentar pensamientos (obsesiones) y rituales (compulsiones) una y otra vez. Estos interfieren con su vida, pero no puede controlarlos ni detenerlos.
            p.mb-0 En general, el trastorno obsesivo-compulsivo comienza en la adolescencia o cuando se es adulto joven. A menudo, los niños desarrollan TOC a una edad más temprana que las niñas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema8/img12.svg', style="width: 250px" ,alt='Imagen decorativa').m-auto
    p.mb-5(data-aos="fade-right") Y existen otros trastornos que ya son reconocidos como enfermedades mentales prevalentes:
    TabsB.color-acento-contenido(data-aos="fade-left")
      .py-4.py-md-5(titulo="Trastornos por estrés postraumático" :icono="require('@/assets/curso/tema8/img13.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Es una afección de salud mental que algunas personas desarrollan tras experimentar o ver algún evento traumático. Este episodio puede poner en peligro la vida, como la guerra, un desastre natural, un accidente automovilístico o una agresión sexual. Pero a veces el evento no es necesariamente peligroso. Por ejemplo, la muerte repentina e inesperada de un ser querido también puede causar TEPT.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema8/img8.png', style="width: 550px" ,alt='Imagen decorativa').m-auto
      .py-4.py-md-5(titulo="Trastorno de pánico e insomnio primario" :icono="require('@/assets/curso/tema8/img14.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Aproximadamente, el 70% de los pacientes con trastorno de pánico se quejan de insomnio de mantenimiento o de inicio, de pobre calidad de sueño o de sueño fragmentado. El ataque de pánico se puede presentar durante el sueño y en pacientes que sufren ataques nocturnos de pánico. Esta característica de la enfermedad puede predisponer al paciente a sufrir una privación crónica de sueño, debido a que desarrolla una ansiedad anticipatoria, con miedo a la hora de ir a dormir.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema8/img9.png', style="width: 550px" ,alt='Imagen decorativa').m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
