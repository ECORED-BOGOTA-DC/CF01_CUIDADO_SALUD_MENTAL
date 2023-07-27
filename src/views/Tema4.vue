<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Riesgo
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 550px" ,alt='Imagen decorativa').m-auto
      .col-lg-7(data-aos="fade-left")
        p Aunque hemos definido inicialmente el riesgo en salud mental, en términos de la probabilidad relativa es cuando ocurre un desenlace negativo en salud mental. Por ende, la evaluación del riesgo debe enfocarse en examinar y analizar, más que en simplemente cuantificar dicha probabilidad.
        p.mb-0 En el estudio del riesgo es posible encontrar:
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Factor de riesgo
    p.mb-5(data-aos="fade-down") Son aquellas características, variables o circunstancias que, cuando están presentes en una persona, hacen más probable que sufra un trastorno en comparación con otra persona que no los presenta. Los factores de riesgo pueden ser:
    .row.mb-5(data-aos="fade-left")
      .col-lg.bg-c10.m-2
        .p-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img2.png', style="width: 50px" ,alt='').m-auto
            .col
              p #[b Biológicos]
              p.mb-0 sexo, edad, cociente intelectual, temperamento, genética.
      .col-lg.bg-c11.m-2
        .p-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema4/img3.png', style="width: 50px" ,alt='').m-auto
            .col
              p #[b Ambientales]
              p.mb-0 factores perinatales, nivel de educación, familia y relaciones sociales y acontecimientos estresantes.
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Factor protector
    p(data-aos="fade-right") Los factores protectores en salud mental son recursos o condiciones con los que cuentan las personas como mecanismo de defensa ante las situaciones de riesgo o vulnerabilidad emocional, favoreciendo el manejo de emociones, la regulación del estrés y permitiéndoles potencializar sus capacidades humanas (Amar Amar, 2013).
    p.mb-5(data-aos="fade-left") La siguiente tabla presenta los factores de riesgo y de protección más frecuentes en trastornos psiquiátricos:
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Tabla 1]. Factores de riesgo y de protección
    .tabla-a.color-secundario.mb-5(data-aos="fade-down")
      table
        thead
          tr
            th
            th.text-white Factor de riesgo
            th.text-white Factor protector
        tbody
          tr
            td(colspan="3") #[b Ambientales]
          tr
            td(style="vertical-align: initial") Factores perinatales
            td(style="vertical-align: initial") Tóxicos, fármacos o enfermedades durante el embarazo. Complicaciones en el parto. Bajo peso al nacer. Prematuridad. Malnutrición. Enfermedades en el primer año de vida.
            td(style="vertical-align: initial") Embarazo, parto y primer año de vida sin complicaciones significativas.
          tr
            td(style="vertical-align: initial") Nivel de educación
            td(style="vertical-align: initial") Bajo. Fracaso académico
            td(style="vertical-align: initial") Normal-alto. Buen rendimiento académico.
          tr
            td Acontecimientos estresantes
            td Sí (a mayor número, más riesgo).
            td No.
          tr
            td(style="vertical-align: initial") Respuesta ante un estresante
            td(style="vertical-align: initial") Ignora el problema. Evita afrontarlo. Solo pide alivio para la angustia o la tristeza.
            td(style="vertical-align: initial") Afronta los problemas, buena estrategia de resolución de conflictos. Lo asume y se adapta.
          tr
            td(style="vertical-align: initial") Familia y amigos
            td(style="vertical-align: initial") Bajo apoyo social. Retraimiento social. Negligencia en el cuidado por parte de las figuras de referencia. Abuso, acoso. Estilo educativo sobreprotector u hostil.
            td(style="vertical-align: initial") Ofrecen apoyo y seguridad. Buena comunicación. Cuidan y estimulan. Buen rendimiento académico. Estilo educativo democrático o asertivo
          tr
            td(style="vertical-align: initial") Circunstancias sociodemográficas
            td(style="vertical-align: initial") Pobreza. Marginación, desigualdad. Falta de recursos socio sanitarios básicos. Falta de recursos de la comunidad. Inseguridad (conflictos, guerras).
            td(style="vertical-align: initial") Integración y justicia social. Ambiente que proporciona el crecimiento. Pertenencia a un grupo o una comunidad.
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Determinantes sociales
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img4.png', style="width: 250px" ,alt='Imagen decorativa').m-auto
      .col-lg-8(data-aos="fade-left")
        p Existen determinantes estructurales como la educación, el ingreso, la cohesión social, la etnia o el género, y otros determinantes intermedios como las condiciones de vida y de trabajo, el acceso a los alimentos, los comportamientos de las personas y las barreras para adoptar estilos de vida saludables.
        p.mb-0 La Organización Mundial de la Salud define los determinantes sociales de la salud (DSS) como #[b.txt-c1 "las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen, incluido el conjunto más amplio de fuerzas y sistemas que influyen sobre las condiciones de la vida cotidiana"].
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img8.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c7(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 Riesgo psicosocial
    p(data-aos="fade-right") Provienen de las fallas en el diseño, el ordenamiento y la gestión del trabajo, así como de un limitado contexto social del trabajo, y pueden producir resultados físicos, sociales y psicológicos de forma negativa, como el agotamiento, la depresión y el estrés laboral.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El riesgo psicosocial puede afectar la salud física y mental del trabajador y la productividad y efectividad en la misma. Se considera hablar de riesgo psicosocial cuando el individuo posee niveles de estrés que le impiden desempeñar sus funciones de manera adecuada, es importante no confundir riesgo psicosocial con factores de riesgo psicosocial:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 #[b Riesgo psicosocial]: está relacionado específicamente a los aspectos del diseño, la planeación, la organización y la dirección de la actividad laboral que puede llegar a causar deterioro psíquico, social o físico en la salud del trabajador.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 #[b Factores de riesgo psicosocial]: se refiere a las condiciones que hacen presencia en una condición laboral específica que depende de la organización y puede lesionar el estado de salubridad físico y mental del individuo o individuos que laboran en la organización.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img5.png', style="width: 550px" ,alt='Imagen decorativa').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width: 450px" ,alt='Imagen decorativa').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Contenido del trabajo")
            .col-12
              .p-4
                p.mb-0 Tiene que ver con el diseño y ejecución de las tareas que el trabajador debe cumplir.
          .row(titulo="Carga y ritmo de trabajo (desempeño)")
            .col-12
              .p-4
                p.mb-0 Se refiere a la calidad, cantidad y el ritmo de trabajo por ejemplo la sobrecarga laboral, plazos para ejecutar las tareas que no son viables entre otros.
          .row(titulo="Tiempo de trabajo (registro de la jornada laboral)")
            .col-12
              .p-4
                p.mb-0 Hace referencia a la distribución de la jornada laboral y los descansos, así como también a la conciliación entre lo familiar y lo laboral, ejemplo, en pandemia aumentó el trabajo remoto desde casa, pero también las jornadas laborales porque los trabajadores terminaron siendo 24/7 para la empresa.
          .row(titulo="Participación y control")
            .col-12
              .p-4
                p.mb-0 Tiene que ver a la autonomía que tiene el trabajador en relación con la organización, planeación y ejecución de las actividades, lo que puede generar niveles de estrés elevados que deterioran su salud mental y física.
          .row(titulo="Desarrollo profesional")
            .col-12
              .p-4
                p.mb-0 Está relacionada a la satisfacción que el trabajador tiene con el plan de incentivos que posee la organización para que pueda crecer profesionalmente dentro de la empresa a la reciprocidad entre lo que aporta para la organización y lo que esta le da.
          .row(titulo="Relaciones interpersonales/apoyo social")
            .col-12
              .p-4
                p.mb-0 Tiene que ver con las relaciones que se dan en el ambiente laboral y las situaciones en que estas suceden, se refieren a aquellas que dan lugar en el sitio de trabajo como con los compañeros, jefes o subalternos y con actores externos como los proveedores y clientes de la empresa de estas relaciones es que surgen situaciones como por ejemplo el acoso laboral, el acoso sexual y de cómo son gestionadas por la empresa.
          .row(titulo="Equipos de trabajo y exposición a otros riesgos")
            .col-12
              .p-4
                p.mb-0 Se refiere a los equipos maquinarias, elementos de trabajo que posee el trabajador para desempeñar su labor, por ejemplo, un trabajador de oficina que no posee una silla ergonómica puede generar deterioro en su salud.
          .row(titulo="Roles en el equipo de trabajo")
            .col-12
              .p-4
                p.mb-0 Está relacionado a la asignación de funciones y tareas dentro de la organización y a las responsabilidades específicas.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En Colombia se cuenta con normatividad específica asociada al riesgo psicosocial del trabajador la cual está contemplada en #[b.txt-c1 “La Resolución 2646 de 2008”] del Ministerio de Protección Social, que establece la definición de responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente a la exposición de factores de riesgos psicosociales en el trabajo.

</template>

<script>
export default {
  name: 'Tema4',
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
