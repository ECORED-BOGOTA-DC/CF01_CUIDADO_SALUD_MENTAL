<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Familia
    .row.bg-c1(data-aos="fade-down")
      .col-12
        .p-5
          p.mb-5 El siguiente video presenta una breve explicación del concepto de familia y lo importante que es para la salud mental del ser humano.
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/RGDr78oYEgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Al momento de referirse a familia, es importante identificar la clase, estructura y su función social:
    .tarjeta.tarjeta--verde.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Clases]
              p Cuando se habla de #[b familia nuclear] se quiere significar que se tienen en cuenta, a nivel estructural, exclusivamente a los padres e hijo; la #[b familia extensa] incluye otras personas con las que se tiene un parentesco (consanguíneo y/o por afinidad), como abuelos, cuñados, primos etc.
              p.mb-0 La familia como sistema es diferente a cada uno de sus miembros, las acciones de uno de éstos afectarán a los demás como al sistema mismo.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img1.png', style="width: 500px" ,alt='Imagen decorativa').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Estructura]
              p La estructura de la familia se modifica a medida que cambia la sociedad de la que forma parte.
              p Hoy en día existe más libertad para decidir con quién quiero estar para fundar o iniciar una familia, debido a que en el pasado en algunas sociedades esta decisión era tomada por los padres.
              p En el período de la civilización también ha sufrido modificaciones pasando de una familia tradicional a una industrial y a la post industrial La familia industrial estructuralmente era numerosa y extensa; generalmente se encontraba en ella una unidad económica (productiva y de consumo).
              p La familia industrial es nuclear, menos numerosa y con ella se logra una mayor igualdad en los derechos de la mujer y el hombre.
              p.mb-0 En la familia post industrial, las labores domésticas, el trabajo, la educación de los hijos etc., son tareas compartidas entre el hombre y la mujer.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img2.png', style="width: 500px" ,alt='Imagen decorativa').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Estructura]
              p La familia además de estar conformada estructuralmente, cumple diversas funciones, que también se modifican en forma paralela de acuerdo a los cambios sociales.
              p Son tres las funciones básicas que se cumplen dentro del núcleo familia, las cuales se equiparan a los propósitos de familia:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 Propagar la vida o crear nuevas personas.
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 Favorecer el desarrollo integral de todos los miembros familiares (adultos y niños).
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 Propagar la cultura.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img3.png', style="width: 500px" ,alt='Imagen decorativa').m-auto
    .row(data-aos="fade-right")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img1.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p Existen algunos factores de riesgo asociados a la familia y que inciden en la salud mental:
              p.mb-4 #[b Factores de riesgo]
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=s_DM5SaTgwA" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Ver video
                i.fas.fa-file-download(style="color: #12263F !important")

</template>

<script>
export default {
  name: 'Tema5',
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
