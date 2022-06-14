<template>
  <section id="oferta" class="middle-wrapper">
    <div class="text-wrapper">
      <h2 class="text">Oferowane usługi</h2>
    </div>

    <div class="services-container">
      <div v-for="box in serviceBoxs" class="box" :key="box.id">
        <ServiceBox :image="box.src" :title="box.title" />
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
      { id: 1, title: 'Wykop pod fundamenty', src: { backgroundImage: 'url(assets/id_1.webp)' } },
      { id: 2, title: 'Wykop sieci kanalizacyjne', src: { backgroundImage: 'url(assets/id_2.webp)' } },
      { id: 3, title: 'Szamba i oczyszczalnie', src: { backgroundImage: 'url(assets/id_3.webp)' } },
      { id: 4, title: 'Niwelacja terenu, rozbiórki', src: { backgroundImage: 'url(assets/id_4.webp)' } },
      { id: 5, title: 'Wykopy pod stawy', src: { backgroundImage: 'url(assets/id_5.webp)' } },
      { id: 6, title: 'Wyburzenia, transport', src: { backgroundImage: 'url(assets/id_6.webp)' } }
    ])

    return {
      serviceBoxs
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/middle.scss" scoped>
</style>