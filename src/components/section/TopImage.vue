<template>
  <section class="content">
    <section class="baner" :style="image">
      <div class="top-content">
        <article>
          <p class="title">Usługi ziemne</p>
          <h1 class="heading">Usługi budowlane
            <br>
            koparko-ładowarką
          </h1>
          <p class="text">
            Działamy sprawnie i dokładnie realizując usługę w założonym terminie.
            <br>
            Rozładunek i załadunek palet, melioracja terenu, fundamenty, równanie terenu.
          </p>
          <div class="link-wrapper">
            <a>Wasilków, Prezmak</a> <a>Kontakt</a>
          </div>
        </article>
      </div>

      <span class="bottom-content">
        <p>W sposób szybki i fachowy realizujemy powierzone nam zadania</p>
        <a>facebook</a>
        <div class="phone-wrapper">
          <svg-icon class="icon" :fa-icon="faPhone" :size="24"></svg-icon>
          <a href="tel:+48518120285">tel +(48) 518 120 285</a>
        </div>
      </span>
    </section>
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SvgIcon from "vue3-icon";

export default defineComponent({
  components: { SvgIcon },
  setup() {

    return {
      image: { backgroundImage: "url(assets/top_baner.webp)" },
      SvgIcon,
      faPhone
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/top_image.scss" scoped>
</style>
