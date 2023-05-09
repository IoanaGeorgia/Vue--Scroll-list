<template>
  <div style='padding:4%;'>
    <virtual-scroll-list :items='items' :item-height="80" :container-height="500">
      <template #default="{item}">
        <my-component :items="item"></my-component>
      </template>
    </virtual-scroll-list>
  </div>
</template>

<script>
import VirtualScrollList from './VirtualScrollList.vue'
import MyComponent from './MyComponent.vue'

export default {
  name:'CatFeed',

  components: {
    VirtualScrollList,
    MyComponent
  },
  data() {
    return {
      items: [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
                {id: 1, name: 'Item 3'},
        {id: 2, name: 'Item 4'},        {id: 1, name: 'Item 9'},
        {id: 2, name: 'Item 5'},        {id: 1, name: 'Item 10'},
        {id: 2, name: 'Item 6'},        {id: 1, name: 'Item 11'},
        {id: 2, name: 'Item 7'},        {id: 1, name: 'Item 12'},
        {id: 2, name: 'Item 8'},

      ]
    }
  }
}
</script>
