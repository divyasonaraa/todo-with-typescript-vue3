import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      isLight: true,
    };
  },
  actions: {
    toggleTheme() {
      this.isLight = !this.isLight;
    },
    setTheme(isLight: boolean) {
      this.isLight = isLight;
    },
  },
});

export default useThemeStore;
