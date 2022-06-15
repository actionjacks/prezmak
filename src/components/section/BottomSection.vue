<template>
  <div id="prezmak" class="bottom-section">
    <div class="background" :style="image"></div>
    <div class="top-content">
      <article>
        <p class="title">usługi koparko - ładowarką</p>
        <h1 class="heading">wasilków i okolice</h1>
        <p class="text">
          <svg-icon class="icon" :fa-icon="faHammer" :size="16"></svg-icon>Wykopy pod fundamenty
          <br>
        </p>
        <p class="text">
          <svg-icon class="icon" :fa-icon="faHammer" :size="16"></svg-icon>Niwelacja terenu, profilowaniem terenu
          <br>
        </p>
        <p class="text">
          <svg-icon class="icon" :fa-icon="faHammer" :size="16"></svg-icon>Drenaże i odwodnienia
          <br>
        </p>
        <p class="text">
          <svg-icon class="icon" :fa-icon="faHammer" :size="16"></svg-icon>Przygotowanie terenu pod usługi brukarskie
          <br>
        </p>
        <p class="text">
          <svg-icon class="icon" :fa-icon="faHammer" :size="16"></svg-icon>Wykopy pod oczka wodne i stawy
          <br>
        </p>
      </article>
    </div>
    <div class="bottom-content">
      <article>
        <p class="title">Usługi budowlane koparko-ładowarką</p>
        <h1 class="heading">na terenie Wasilków, okolice</h1>
        <p class="text">
          Oferujemy usługi koparko-ładowarką, które wykonujemy rzetelnie, precyzyjnie i terminowo. Na zamówienie
          naszych Klientów przeprowadzamy kompleksowe roboty ziemne koparką, ładowarką. Co więcej,
          jesteśmy w stanie dopasować się do ich indywidualnych wymagań zarówno odnośnie do charakteru samego
          zlecenia, jak i czasu jego realizacji.
          <br>
          <br>
          wyburzanie garaży i komórek,
          wywóz gruzu, wywóz śmieci budowlanych,
          wycinka drzew, wyrywanie karp,
          wymiana gruntu,
          niwelacja terenu, korytowanie, utwardzanie terenu,
          wykopy pod budynek mieszkalny,
          wykopy fundamentów pod budynki,
          wykopy pod szamba różnego rodzaju,
          wykopy stawów,
          wykopy basenów.
        </p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import SvgIcon from "vue3-icon";

export default defineComponent({
  components: { SvgIcon },
  setup() {
    return {
      SvgIcon,
      faHammer,
      image: { backgroundImage: "url(assets/koparka-2-1.webp)" }
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/bottom.scss" scoped>
</style>