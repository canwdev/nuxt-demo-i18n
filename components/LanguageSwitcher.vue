<template>
  <div class="language-switcher">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="{active: locale.code === $i18n.locale}"
      @click="setLocale(locale.code)"
    >
      {{ locale.name }} |
    </nuxt-link>

    <select v-model='selectedLocale'>
      <option
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :value="locale.code"
      >{{ locale.name }}</option>
    </select>
    <button @click="setLanguage">setLocale</button>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      selectedLocale: this.$i18n.locale,
    }
  },
  methods: {
    setLanguage() {
      this.$i18n.setLocale(this.selectedLocale)
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
