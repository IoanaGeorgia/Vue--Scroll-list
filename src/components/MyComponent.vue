<template>
  <div class="item">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name:'MyComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
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
