<template>
  <div class="content">
    <Header />
    <Section />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/header/HeaderComponent.vue'
import Section from '@/components/section/SectionComponent.vue'
import Footer from '@/components/footer/FooterComponent.vue'

export default defineComponent({
  components: { Header, Section, Footer },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.content {
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 100vw;
}
</style>