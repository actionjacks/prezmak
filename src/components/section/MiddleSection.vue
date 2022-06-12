<template>
  <section id="section-1" class="middle-wrapper">
    <div class="text-wrapper">
      <h2 class="text">Oferowane usługi</h2>
    </div>

    <div class="services-container">
      <div v-for="box in serviceBoxs" class="box" :key="box.id">
        <ServiceBox :image="box.src" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ServiceBox from '@/components/section/ServicesBox.vue'

export default defineComponent({
  components: { ServiceBox },
  setup() {
    const serviceBoxs = ref([
      { id: 1, src: { backgroundImage: 'url(assets/id_1.webp)' } },
      { id: 2, src: { backgroundImage: 'url(assets/id_2.webp)' } },
      { id: 3, src: { backgroundImage: 'url(assets/id_3.webp)' } },
      { id: 4, src: { backgroundImage: 'url(assets/id_4.webp)' } },
      { id: 5, src: { backgroundImage: 'url(assets/id_5.webp)' } },
      { id: 6, src: { backgroundImage: 'url(assets/id_6.webp)' } }
    ])

    return {
      serviceBoxs
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/middle.scss" scoped>
</style>