<template>
  <div class="container">
    <vue3-virtual-list
      :item-height="30"
      :total-items="items.length"
      :render-item="renderItem"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Vue3VirtualList from 'vue3-virtual-list';

export default defineComponent({
  name: 'CatFeed',
  components: {
    Vue3VirtualList,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 100' },
      ],
    };
  },
  methods: {
    renderItem(index) {
      const item = this.items[index];
      return (
        <div key={item.id} class="item">
          {item.name}
        </div>
      );
    },
  },
});
</script>

<style scoped>
.container {
  height: 400px;
  overflow-y: auto;
}
.item {
  height: 30px;
  line-height: 30px;
  padding: 5px;
}
</style>
