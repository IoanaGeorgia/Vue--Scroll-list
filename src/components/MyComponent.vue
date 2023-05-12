<template>
  <div class="item">
    <h3>{{ items.name }}</h3>

    <div>
      <div>{{ items.origin }}</div>
      <div class="description">{{ items.description }}</div>
    </div>
    <div class="temperament">{{ items.temperament }}</div>

    <div class="characteristics">
      <div>❤️️?: {{ items.affection_level }}/5</div>
      <div>🐶? : {{ items.dog_friendly }} /5</div>
      <div>🕵️?: {{ items.stranger_friendly }}/5</div>
      <div>💅?: {{ items.grooming }}/5</div>
      <div>⚡>? : {{ items.energy_level }}/5</div>
      <div>👨‍🦲?: {{ items.shedding_level }}/5</div>
    </div>

    <div class="otherInfo">
      <div>Wiki: {{ items.wikipedia_url }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  padding: 10px;
  padding-top: 20px;
  border: 15px solid violet;
  border-radius: 10px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 580px;
  margin-right: 15px;
  width: 50%;
}
.description {
  margin: 3%;
  padding: 2%;
  border: 1px solid black;
  text-align: center;
  font-size: 12px;
}
.temperament {
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: violet;
}
.temperamentInfo {
  font-size: 10xp;
}
.characteristics {
  margin: 5%;
  width: 80%;
  height: 30%;
  display: grid;
  grid-template-rows: 30% 30% 30%;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
}
.characteristics > div {
  height: 40px;
}
.otherInfo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 13px;
}
@media only screen and (max-width: 500px) {
  .item {
    width: auto;
  }
}
</style>
