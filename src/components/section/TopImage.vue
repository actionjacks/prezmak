<template>
  <section class="content">
    <section class="baner" :style="image">
      <div class="top-content">
        <article>
          <p class="title">usługi budowlane koparko-ładowarką</p>
          <h1 class="heading">loremloremloremloremloremlorem</h1>
          <p class="text">
            loremloremloremloremloremloremloremloreml
          </p>
          <div class="link-wrapper">
            <a>lorem</a> <a>lorem</a>
          </div>
        </article>
      </div>

      <span class="bottom-content">
        <p>loremloremloremloremloremlorem</p>
        <a>facebook</a>
        <div class="phone-wrapper">
          <svg-icon class="icon" :fa-icon="faPhone" :size="24"></svg-icon>
          <a href="tel:+48987654321">tel + 48 99 999 999</a>
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
