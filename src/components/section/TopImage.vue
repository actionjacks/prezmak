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
        <a>lorem</a>
        <p>tel + 48 99 999 999</p>
      </span>
    </section>
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

    return {
      image: { backgroundImage: "url(assets/top_baner.webp)" }
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/top_image.scss" scoped>
</style>
