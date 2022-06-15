<template>
  <section class="content">
    <section class="baner" :style="image">
      <div class="top-content">
        <article>
          <p class="title">Usługi ziemne prezmak</p>
          <h1 class="heading">Usługi budowlane
            <br>
            koparko - ładowarką
          </h1>
          <p class="text">
            Działamy sprawnie i dokładnie realizując usługę w założonym terminie.
            <br>
            Rozładunek i załadunek palet, melioracja terenu, fundamenty, równanie terenu.
          </p>
          <div class="link-wrapper">
            <a
              href="https://www.google.com/search?q=us%C5%82ugi%20koparko%20%C5%82adowark%C4%85&oq=usu%C5%82ugi+koparko+%C5%82adowaka&aqs=chrome.0.69i59j0i13l9.3234j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsbSfsknii5G3z-J-Uwaz0pLXAbXEA:1655321074820&rflfq=1&num=10&rldimm=5212523169154439206&lqi=Cht1c8WCdWdpIGtvcGFya28gxYJhZG93YXJrxIVaHSIbdXPFgnVnaSBrb3BhcmtvIMWCYWRvd2Fya8SFkgEUY29uc3RydWN0aW9uX2NvbXBhbnmqASMQASofIht1c8WCdWdpIGtvcGFya28gxYJhZG93YXJrxIUoCw&ved=2ahUKEwjDkp3Fl7D4AhVvxosKHTpIDhEQvS56BAhcEAE&sa=X&rlst=f#rlfi=hd:;si:5212523169154439206,l,Cht1c8WCdWdpIGtvcGFya28gxYJhZG93YXJrxIVaHSIbdXPFgnVnaSBrb3BhcmtvIMWCYWRvd2Fya8SFkgEUY29uc3RydWN0aW9uX2NvbXBhbnmqASMQASofIht1c8WCdWdpIGtvcGFya28gxYJhZG93YXJrxIUoCw;mv:[[53.2437155,23.3069182],[53.0712244,23.046775699999998]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1">PREZMAK</a>
            <a href="mailto:lorem@o2.pl">Kontakt</a>
          </div>
        </article>
      </div>

      <span class="bottom-content">
        <p>W sposób szybki i fachowy realizujemy powierzone nam zadania</p>
        <a href="https://www.facebook.com/Prezmak-Przemyslaw-Kownacki-361223257702291/">facebook</a>
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
