<template>
  <div id="section-2" class="bottom-section">
    <div class="background" :style="image"></div>
    <div class="top-content">
      <article>
        <p class="title">usługi budowlane koparko-ładowarką</p>
        <h1 class="heading">loremloremloremloremloremlorem</h1>
        <p class="text">
          loremloremloremloremloremloremloremloreml loremloremloremloremloremloremloremloreml
          loremloremloremloremloremloremloremloreml loremloremloremloremloremloremloremloreml
          loremloremloremloremloremloremloremloreml
        </p>
      </article>
    </div>
    <div class="bottom-content">
      <article>
        <p class="title">usługi budowlane koparko-ładowarką</p>
        <h1 class="heading">loremloremloremloremloremlorem</h1>
        <p class="text">
          loremloremloremloremloremloremloremloreml loremloremloremloremloremloremloremloreml
          loremloremloremloremloremloremloremloreml loremloremloremloremloremloremloremloreml
          loremloremloremloremloremloremloremloreml
        </p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      image: { backgroundImage: "url(assets/koparka-2-1.webp)" }
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/bottom.scss" scoped>
</style>