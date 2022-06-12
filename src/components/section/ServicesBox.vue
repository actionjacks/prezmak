<template>
  <div class="service-box">
    <div class="service-bg" :style="src"></div>
    <div class="text-wrapper">
      <p class="text"> lorem lorem</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: { image: { type: Object as PropType<Record<string, string>>, required: true } },
  setup(props) {

    return {
      src: props.image
    }
  }
})
</script>
<style lang="scss" src="@/styles/section/service_box.scss" scoped>
</style>