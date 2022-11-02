<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer v-if="$route.meta.isShow"></my-footer>
  </div>
</template>
<!-- 接口地址:http://gmall-h5-api.atguigu.cn-->

<script>
import MyHeader from "./components/header/header.vue";
import MyFooter from "./components/footer/footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyFooter,
  },
  methods: {},
  mounted() {
    //通知Vuex发请求 获取数据 存储于仓库
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
