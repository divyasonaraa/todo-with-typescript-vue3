<template>
  <header class="header">
    <div class="header__background" />
    <div class="header__container">
      <h1 class="header__heading">TODO</h1>
      <ThemeToggler />
    </div>
  </header>
</template>
<script lang="ts" setup>
import ThemeToggler from "./ThemeToggler.vue";
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";

.header {
  width: 100%;
  position: relative;

  &__container {
    width: 54rem;
    margin: 4.8rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: $breakpoint-sm) {
      width: 32rem;
      margin: 3.6rem auto;
    }
  }

  &__heading {
    z-index: 1;
    color: var(--color-heading);
  }

  &__background {
    position: absolute;
    width: 100vw;
    height: 30rem;
    background-image: var(--image-bg-desktop);
    background-size: cover;

    @media only screen and (max-width: $breakpoint-sm) {
      height: 20rem;
      background-image: var(--image-bg-mobile);
    }
  }
}
</style>
