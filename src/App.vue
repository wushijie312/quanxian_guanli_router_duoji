<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>
<script>
import {menulists} from './router'
sessionStorage.setItem('username','wush')
export default{
  data(){
    return {
      menudata:menulists
    }
  },
  created(){
    console.log(menulists);
  }
}
</script>

<style>

</style>
