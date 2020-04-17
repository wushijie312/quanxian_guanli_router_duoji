
<template>
  <div class="nav_list">
    home
    <div class="nav_list_item" v-for="(item,index) in navList" @click="goPage(item)" :key="index">
      <i :class="item.icon"></i>
      <h2>{{item.meta.title}}</h2>
      <div v-if="item.children">
        <div
          class="nav_list_item"
          v-for="(childs,index) in item.children"
          @click="goPage(childs)"
          :key="index"
        >
          <i :class="childs.icon"></i>
          <h2>{{childs.meta.title}}</h2>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: []
    };
  },
  created() {
    this.navList = this.$parent.menudata;
    console.log(this.navList);
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