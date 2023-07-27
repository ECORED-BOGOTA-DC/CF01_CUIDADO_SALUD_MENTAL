<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Política Nacional de Salud Mental
    p.mb-5(data-aos="fade-right") La Política Nacional de Salud Mental tiene como objetivo promover la salud mental como elemento integral de la garantía del derecho a la salud de todas las personas, familias y comunidades, entendidos como sujetos individuales y colectivos, para el desarrollo integral y la reducción de riesgos asociados a los problemas y trastornos mentales, el suicidio, las violencias interpersonales y la epilepsia.
    .row.mb-5(data-aos="fade-down")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width: 220px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              p La política puede ser consultada en el siguiente enlace:
              p.mb-4 #[b Política Nacional de Salud Menta]
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-nacional-salud-mental.pdf" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Ver enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    p.mb-5(data-aos="fade-right") Para comprender mejor la política, se explican dos principales ejes: las afectaciones en salud mental y los enfoques, los cuales se estudiarán a continuación.
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='Texto que describa la imagen')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Afectaciones en salud mental
    .row.align-items-center.mb-4(data-aos="fade-left")
      .col-md-auto.pe-md-0.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
      .col
        p.mb-0 Las afectaciones en salud mental en Colombia atentan especialmente a niños, adolescentes y adultos jóvenes, situación que empeora en gran medida el pronóstico, la productividad académica y económica de la población y en últimas, el capital global, que incluye los factores personales, simbólicos, culturales y relacionales.
    p.mb-5(data-aos="fade-right") En Colombia las afectaciones más relevantes son:
    TabsA.color-acento-contenido.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4(titulo="Problemas y trastornos mentales")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Actualmente no existe una forma biológicamente conocida de hacer la distinción entre normalidad y anormalidad mental, ni se conocen todas las causas de los desequilibrios en este campo. Sin embargo, se aceptan dos clasificaciones de problemas mentales y sus trastornos (CIE-10 y DSM-V) que orientan a los especialistas en la definición del diagnóstico y la identificación del cuadro clínico.
            p.mb-0 Los problemas y trastornos mentales más conocidos en el mundo son: la depresión unipolar, trastorno bipolar, esquizofrenia, epilepsia, consumo problemático de alcohol y otras sustancias psicoactivas, Alzheimer y otras demencias, como el insomnio primario, trastorno obsesivo compulsivo, trastornos por estrés postraumático y trastorno de pánico, estas personas presentan niveles elevados de mortalidad y de discapacidad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img2.png', style="width: 350px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Conducta suicida")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p La conducta suicida es un conjunto de eventos complejos, que pueden afectar a cualquier ser humano sin importar su rango de edad y madurez; cuando se manifiesta como el suicidio consumado, tiene consecuencias desastrosas para la persona, su familia y comunidad y sus efectos son duraderos.
            p.mb-0 Las personas que sufren trastornos mentales y del comportamiento y aquellas que tienen trastornos por consumo de alcohol u otras sustancias psicoactivas, tienen una mayor probabilidad de presentar un comportamiento suicida, al igual que quienes han tenido eventos delicados en su vida.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img3.png', style="width: 350px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Consumo de sustancias psicoactivas")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Los orígenes del consumo de sustancias psicoactivas son múltiples, se asocia a factores económicos, sociales, biológicos, psicológicos y culturales, de orden comunitario, familiar e individual. El consumo sustancias psicoactivas en la infancia y adolescencia daña el desarrollo cerebral, así mismo, su uso es una causa de riesgo considerable para la salud, lo cual se refleja principalmente en la pérdida de años vividos sin salud, en la mortalidad asociada a eventos como la violencia, enfermedades infecciosas (VIH/SIDA, hepatitis B y C) y crónicas como cirrosis, afecciones cardiovasculares, cáncer enfermedades mentales, entre otras, con efectos desproporcionados en poblaciones específicas como gestantes, habitantes de calle, personas privadas de la libertad y personas que se inyectan drogas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img4.png', style="width: 350px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Violencia y convivencia social")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p La violencia se organiza en tres categorías según el acto violento:
            ul.lista-ul
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Violencia dirigida contra uno mismo.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Violencia interpersonal, que incluye la violencia intrafamiliar.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Violencia colectiva.
            p.mb-0 De lo anterior se infiere que existen varias relaciones entre la violencia y la salud mental. Los problemas y trastornos mentales se reconocen como posibles causas de la violencia. La segunda relación señala que algunas de las víctimas de violencia por lo general presentan trastornos emocionales y psicológicos agudos como depresión, ansiedad, como estrés postraumático.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img5.png', style="width: 350px" ,alt='Imagen decorativa').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Epilepsia")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Los orígenes del consumo de sustancias psicoactivas son múltiples, se asocia a factores económicos, sociales, biológicos, psicológicos y culturales, de orden comunitario, familiar e individual. El consumo sustancias psicoactivas en la infancia y adolescencia daña el desarrollo cerebral, así mismo, su uso es una causa de riesgo considerable para la salud, lo cual se refleja principalmente en la pérdida de años vividos sin salud, en la mortalidad asociada a eventos como la violencia, enfermedades infecciosas (VIH/SIDA, hepatitis B y C) y crónicas como cirrosis, afecciones cardiovasculares, cáncer enfermedades mentales, entre otras, con efectos desproporcionados en poblaciones específicas como gestantes, habitantes de calle, personas privadas de la libertad y personas que se inyectan drogas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img6.png', style="width: 350px" ,alt='Imagen decorativa').m-auto
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='Texto que describa la imagen')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Enfoques
    p.mb-4(data-aos="fade-right") Las políticas públicas deben revelar las pretensiones de una sociedad, por lo que la Política Nacional de Salud Mental se apoya en la necesidad de garantizar los derechos y libertades de todos los colombianos.
    .row.align-items-center.mb-4(data-aos="fade-left")
      .col-md-3.pe-0.bg-c9
        .p-4
          h3.mb-0 La salud mental es un derecho que se debe exigir.
      .col
        p.mb-0 La Política Nacional de Salud Mental exhorta a las instituciones y profesionales que prestan servicios en el campo de la salud mental, a beneficiar programas de atención basados en la comunidad y a permitir la integración de las personas al medio social al que pertenecen. Este tipo de abordajes tendrá prioridad sobre cualquier otro.
    p.mb-5(data-aos="fade-right") Los diferentes enfoques son:
    TabsB.color-acento-contenido(data-aos="fade-left")
      .py-4.py-md-5(titulo="Derechos" :icono="require('@/assets/curso/tema3/img3.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p Reconoce y da interpretación de los sujetos individuales y colectivos como titulares de derechos. Examina el desarrollo de capacidades en las personas, familias y comunidades para el alcance de su bienestar físico, mental y social, ampliando sus libertades y posibilidades de elección para durar una vida plena de sentido, según el momento de curso de vida en el que se desarrolla, las características y condiciones poblacionales que los reconoce, y los territorios específicos que habitan y construyen subjetivamente. asegurando, para todo ser humano, libertad, bienestar y dignidad.
            p El despliegue fundamentado en derechos humanos tiene una estrecha relación con la salud mental, toda vez que dicho sin convenientes afectan la esperanza de vida, los años de instrucción esperados y el Ingreso Nacional Bruto per cápita, provocando resultados negativos y consecuencias de la pobreza; por otra parte, las personas con dificultades mentales deben conf
            p.mb-0 las conveniencias de empleo y otras fuentes de concepción de ingresos, debido a la señalización, exclusión y discriminación que históricamente han vivido.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img7.png', style="width: 150px" ,alt='Imagen decorativa').m-auto
      .py-4.py-md-5(titulo="Ciclo de vida" :icono="require('@/assets/curso/tema3/img4.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Deduce del vínculo trazado entre desarrollo y derechos, el encausamiento de curso de vida se considera importante desde la aprobación de las trayectorias de vida, los sucesos y transiciones en el vivir de los seres humanos. Admite a su vez, registrando ventanas de oportunidad que inciden en la vida cotidiana de los sujetos en el marco de sus relaciones, la toma de decisiones y su proyecto de vida. Al extender en vínculo con los derechos, y la aceptación del curso de vida de los sujetos individuales y colectivos, constituye un apoyo clave para la comprensión y abordaje tanto de la promoción y sostenimiento de la salud mental como el abordaje de los problemas e inconvenientes mentales; toda vez que es sabido que una misma patología puede originar sintomatología de variadas características en niños, niñas y adolescentes, adultos, o adultos mayores, como ocurre en la depresión o en el riesgo suicida.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img8.png', style="width: 150px" ,alt='Imagen decorativa').m-auto
      .py-4.py-md-5(titulo="Género" :icono="require('@/assets/curso/tema3/img5.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p Es una distribución social que define la construcción de roles, apreciaciones, estándares e imaginarios asociados a lo masculino y lo femenino, y los enlaces de poder que de éstos se desatan con otras formas de desigualdad. Estas edificaciones sociales difieren entre sociedades, culturas y se transforman en el tiempo y parten de probabilidades colectivas de género que se modifican dependiendo de la condición de clase. Los apartamientos por razones de género permean las estructuras sociales, culturales, económicas y políticas; y tienen impactos individuales, comunitarios y colectivos. Se destaca el requerimiento de que en la atención en salud mental se reconozcan las identidades de género y las orientaciones sexuales, como también los roles de género desde una perspectiva de igualdad.
            p.mb-0 Las obligaciones en salud mental son desiguales cuando se examina este enfoque. Es así que en Colombia el mayor riesgo de depresión, ansiedad y conducta suicida lo exponen las mujeres, en tanto que el riesgo de consumo de sustancias psicoactivas y el suicidio consumado es mayor para los hombres.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img9.png', style="width: 150px" ,alt='Imagen decorativa').m-auto
      .py-4.py-md-5(titulo="Diferencial" :icono="require('@/assets/curso/tema3/img6.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p Perceptibilidad de la importancia de las individualidades de los sujetos, considerando su situación, y su contexto con las variables culturales, sociales y políticas que les son inherentes. Implica el conocimiento de condiciones constitutivas de discapacidad, edad, etnia, así como sociales, culturales, religiosas, políticas y económicas, las afectaciones por violencias (social y política), de ubicación geográfica y la condición legal, entre otras. Del mismo modo, fomentar la totalidad de los derechos, lo multicultural, lo étnico y promueve la lectura en contexto. En este sentido, al orientar el enfoque diferencial observa la importancia de la relación población – territorio, como categorías que promueven la formulación, implementación y evaluación de políticas que tengan como punto de inicio a las personas de forma individual o colectiva de derechos, como las condiciones poblacionales y territoriales.
            p.mb-0 Junto con el desarrollo del enfoque diferencial, se requiere el enfoque interseccional entendido como la comprensión de los procesos complejos que derivan de la interacción de factores políticos, sociales, culturales, económicos y simbólicos en cada contexto.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img10.png', style="width: 150px" ,alt='Imagen decorativa').m-auto
      .py-4.py-md-5(titulo="Psicosocial" :icono="require('@/assets/curso/tema3/img7.svg')")
        .row.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Se adopta el enfoque psicosocial como una herramienta de la atención en salud en la Política Nacional de Salud Mental permitiendo examinar la integralidad de las personas teniendo en cuenta el entorno en el que se han desarrollado, el significado que les han dado a estas actividades, lo vivido, el padecimiento que han experimentado y las fortalezas con las que cuentan las personas para recuperarse y materializar sus proyectos de vida. Este planteamiento se materializa en la humanización de la atención en salud mental, para la cual es indispensable la sensibilidad frente a las diferencias de edad, género, cultura e idioma.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img11.png', style="width: 150px" ,alt='Imagen decorativa').m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
