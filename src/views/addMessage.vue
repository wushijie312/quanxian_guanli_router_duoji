
<template>
  <div class="nav_list">
    addMessage
  </div>
</template>

<script>
export default {
  created() {
    const routeArr = JSON.parse(localStorage.getItem("menudata"));
    this.navList = routeArr;
  },
  methods: {
    goPage(item) {
      // 只有一级菜单
      if (item.component) {
        this.$router.push(item.path);
      } else {
        // 二级菜单的数据结构中只在children中有path
        this.$router.push(item.children[0]["path"]);
      }
    }
  }
};
</script>