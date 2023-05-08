<template>
  <div class="landingContainer">
  <h1 class='violet'>Cat feed</h1>
  <p class='subtitle'>Make neverending scrolling an actually funny activity!<p>
  <p class='underText'>Decided to waste your life away and you think endless scrolling is the way to do it? <span class='violet' > Cat Feed </span>actually gives you a better way to make your preffered choice of escaping reality more enjoyable. Just imagine, endless <span class='violet' > cat </span> pics AND INFO, so you can flex to your buddies that you are well educated in the matters of the<span class='violet' > feline</span> community~ </p>

<h3>Project created by <span class='violet'>Pascu Ioana-Georgia</span></h3>
<h3>using the folowing technologies:</h3>

<ul class='violet'>
<li>JavaScript</li>
<li>CSS</li>
<li>Vue JS</li>
<li>Vue Router</li>
</ul>

  </div>
</template>

<script>
export default {
  name:  'LandingPage',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-transform: uppercase;
  font-weight:bolder;
  font-size:3.5em;
}
.landingContainer{
  padding:5%;
  text-align:center;

}
.subtitle{
  font-weight:bolder;
  text-align:center;
}
.violet{
  color:violet;
}
.underText{
  color:grey;
  text-align:center;
  font-size:15px;
}
ul{
  width:100%;
  text-align:left;
}
li{
  list-style-type:'';
  width:100%;
  margin-top:5%;
}
h3{
  text-align:left;
}
</style>
