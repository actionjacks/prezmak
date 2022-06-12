<template>
  <TopImageSection />
  <MiddleSection />
  <BottomSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopImageSection from '@/components/section/TopImage.vue'
import MiddleSection from '@/components/section/MiddleSection.vue'
import BottomSection from '@/components/section/BottomSection.vue'

export default defineComponent({
  components: { TopImageSection, MiddleSection, BottomSection },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" src="@/styles/section/section.scss" scoped>
</style>
