<template>
  <label class="toggler">
    <input type="checkbox" v-model="isLight" />
    <div>
      <img :class="{ hidden: isLight }" :src="LightIcon" alt="icon-light" />
      <img :class="{ hidden: !isLight }" :src="DarkIcon" alt="icon-dark" />
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import useThemeStore from "@/stores/theme";
import LightIcon from "@/assets/images/icon-sun.svg";
import DarkIcon from "@/assets/images/icon-moon.svg";

const themeStore = useThemeStore();
const isLight = computed({
  get: function () {
    // console.log(this.$store);
    // return this.$store.state.theme.isLight;
    return themeStore.isLight;
  },
  set: function () {
    themeStore.toggleTheme();
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.toggler {
  position: relative;

  & input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 2.6rem;
    height: 2.6rem;
    @media only screen and (max-width: $breakpoint-sm) {
      width: 2rem;
      height: 2rem;
    }
  }

  img {
    width: 2.6rem;
    height: 2.6rem;
    @media only screen and (max-width: $breakpoint-sm) {
      width: 2rem;
      height: 2rem;
    }
    &.hidden {
      display: none;
    }
  }
}
</style>
