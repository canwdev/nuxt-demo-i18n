<template>
  <div class="page-header">
    <Logo/>
    <h1 class="title">
      {{ $t('welcome') }}
    </h1>

    <hr>
    <LanguageSwitcher/>
  </div>
</template>

<script>
export default {
name: "PageHeader"
}
</script>

<style scoped>
.page-header {
  margin-bottom: 50px;
}
</style>
