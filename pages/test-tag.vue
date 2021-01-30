<i18n>
{
  "en": {
    "title1": "The daily life we spend every day may actually be a series of miracles."
  },
  "jp": {
    "title1": "日々私たちが過ごしている日常は、実は、奇跡の連続なのかもしれない。"
  },
  "cn": {
    "title1": "我们所经历的每个平凡的日常，也许就是连续发生的奇迹。"
  }
}
</i18n>

<template>
  <div>
    <p>Test &lt;i18n/&gt; Tag</p>
    <h1>{{ $t('title1') }}</h1>
  </div>
</template>

<script>
export default {
name: "test-tag"
}
</script>

<style scoped>

</style>
