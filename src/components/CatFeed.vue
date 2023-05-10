<template>
  <div style='padding:4%;'>
  <!-- {{catItems}} -->
   <virtual-scroll-list :items='items' :item-height="180" :container-height="400">
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
      items:[{}]

    }
  },

mounted(){
  this.getCats()
},

methods:{
  getCats(){
         fetch('https://api.thecatapi.com/v1/breeds')
       .then(response => response.json())
       .then(response => this.items = response)
  },
}



//       catItems(){
//  console.log(this.rawItems)
        
//         let items =[]
//         let response = this.rawItems
//          for(let i in response){
//         let item={}
//         item.name=response[i].name
//         item.weight=response[i].weight.metric
//         item.id=response[i].id
//         item.adaptability = response[i].adaptability
//         item.dog_friendly = response[i].dog_friendly
//         item.affection_level = response[i].affection_level
//         item.grooming = response[i].grooming
//         item.origin = response[i].origin
//         item.stranger_friendly = response[i].stranger_friendly
//         item.temperament= response[i].temperament
//         item.rare = response[i].rare
//         item.lifespan = response[i].life_span
//         item.wikipedia_url = response[i].wikipedia_url
//         this.items.push(item)
//       }
//       console.log(items, 'j')
//       return items

   
//       }
       



    // handleResponse(response){
    //   this.items= []
    //   for(let i in response){
    //     let item={}
    //     item.name=response[i].name
    //     item.weight=response[i].weight.metric
    //     item.id=response[i].id
    //     item.adaptability = response[i].adaptability
    //     item.dog_friendly = response[i].dog_friendly
    //     item.affection_level = response[i].affection_level
    //     item.grooming = response[i].grooming
    //     item.origin = response[i].origin
    //     item.stranger_friendly = response[i].stranger_friendly
    //     item.temperament= response[i].temperament
    //     item.rare = response[i].rare
    //     item.lifespan = response[i].life_span
    //     item.wikipedia_url = response[i].wikipedia_url
    //     this.items.push(item)
    //   }
    //    console.log(this.items)
  
    // }
   
   
  
}
</script>
