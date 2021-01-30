<template>
  <div class="language-switcher">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="{active: locale.code === $i18n.locale}"
    >
      {{ locale.name }} |
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  }
}
</script>

<style scoped>

.language-switcher a {
  color: royalblue;
  text-decoration: none;
}

.language-switcher a.active {
  color: orangered;
}
</style>
