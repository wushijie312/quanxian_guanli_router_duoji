
<template>
  <div class="nav_list">
   home
   <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$parent.menudata);
  },
  methods: {
   
  }
};
</script>