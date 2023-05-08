<template>
<div class='navigation'>
<div class='navigationLinks'>
<router-link to='/'>Home</router-link>
<router-link to ='/cat'>Cat</router-link>
</div>
  <router-view />
</div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:-10px;
  padding:0px;
}
.navigation{
    height:100%;
  width:100%;
  position: absolute;
  margin-top:0px;
  margin-left:0px;

}
.navigationLinks{
  height:15%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
}
.navigation a{
  color:black;
  border:none;
  border-bottom:4px solid transparent;
  text-decoration:none;
  padding:1%;
}
.navigation a.router-link-active{
  border-bottom:4px solid violet;
}
</style>
