<template>
  <div>
    <ul>
      <li>
        <NLink :to="localePath('test-lazy')">Test Lazy Load</NLink>
      </li>
      <li>
        <NLink :to="localePath('test-tag')">Test &lt;i18n/&gt; Tag</NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"index"
}
</script>

