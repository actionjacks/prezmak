<template>
  <nav class="menu-wrapper">
    <Transition>
      <div v-if="showBurger" class="mobile-wrapper">
        <div id="menu">
          <div id="menu-bar" :class="{ change: activeClass }" @click="menuOnClick">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
          <nav class="nav" :class="{ change: activeClass }" id="nav">
            <ul>
              <li><a href="#section-1">Lorem</a></li>
              <li><a href="#section-2">Lorem</a></li>
              <li><a href="#section-3">Lorem</a></li>
            </ul>
          </nav>
        </div>
        <div class="menu-bg" :class="{ changeBg: activeClass }" id="menu-bg"></div>
      </div>

      <div v-else class="menu" :class="{ show }">
        <div v-if="show" class="e-mail">
          <p>lorem.lotem@o2.pl</p>
        </div>
        <ul>
          <li><a href="#section-1">Lorem</a></li>
          <li><a href="#section-2">Lorem</a></li>
          <li><a href="#section-3">Lorem</a></li>
        </ul>

      </div>

    </Transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue"

export default defineComponent({
  setup() {
    // todo Refactor code after finish !
    const show = ref<boolean>(false)
    const showBurger = ref<boolean>(false)
    const activeClass = ref<boolean>(false)

    function handleScroll() {
      if (window.scrollY > 180) {
        show.value = true
        return
      }
      show.value = false
    }
    function handleResize() {
      if (window.innerWidth >= 800) {
        show.value = true
        showBurger.value = false
        return
      }
      showBurger.value = true
    }

    function menuOnClick() {
      activeClass.value = !activeClass.value
    }

    onMounted(() => {
      if (window.innerWidth <= 800) {
        showBurger.value = true
      } else { showBurger.value = false }
      window.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleResize)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize);
    })

    return {
      menuOnClick,
      activeClass,
      showBurger,
      show
    };
  },
});
</script>
<style lang="scss" src="@/styles/header/header.scss" scoped>
</style>
