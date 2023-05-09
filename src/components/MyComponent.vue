<template>
  <div class="item">
    <h2>{{ items.name }}</h2>

  </div>
</template>

<script>
export default {
  name:'MyComponent',
  props: {
    items: {
      type: Object,
      required: true
    },

  }
}
</script>

<style scoped>
.item {
  padding: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
}
</style>
