<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Lograr un bienestar mental, permite afrontar de manera equilibrada las dificultades que se presentan a lo largo de la vida de cada persona, aprender a manejar situaciones individuales y colectivas es determinante para trabajar de la mejor manera y sostener vínculos de calidad con la comunidad con la que se convive, por lo que se hace necesario conocer las políticas vigentes nacionales, al igual que manejar las diferencias en los determinantes sociales en salud, los trastornos mentales prevalentes y lo que se debe tener en cuenta con el fin de proteger la salud mental.
    p.mb-5 A través del siguiente mapa, se resume de manera puntual los diversos temas abordados en el componente formativo, esto es:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La gráfica representa la síntesis del componente formativo,  teniendo como centro cuidados de la salud mental en el entorno, teniendo en cuenta la familia, la violencia, la crisis y el riesgo; también la salud mental, salud mental en Colombia, Política nacional salud mental, trastornos mentales prevalentes y afrontamiento y factor protector.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
