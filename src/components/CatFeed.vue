<template>
  <div class="bigCatWrapper">
    <div class="catWrapper">
      <virtual-scroll-list
        :items="items"
        :item-height="500"
        :container-height="500"
      >
        <template #default="{ item }">
          <my-component :items="item"></my-component>
        </template>
      </virtual-scroll-list>
    </div>
  </div>
</template>

<script>
import VirtualScrollList from './VirtualScrollList.vue';
import MyComponent from './MyComponent.vue';

export default {
  name: 'CatFeed',

  components: {
    VirtualScrollList,
    MyComponent,
  },
  data() {
    return {
      items: [{}],
    };
  },

  mounted() {
    this.getCats();
  },

  methods: {
    getCats() {
      fetch('https://api.thecatapi.com/v1/breeds')
        .then((response) => response.json())
        .then((response) => (this.items = response));
    },
  },
};
</script>
<style>
.bigCatWrapper {
  padding-left: 4%;
  border-top: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-y:hidden
}
</style>
