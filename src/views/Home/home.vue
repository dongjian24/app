<template>
  <div>
    <!-- 三级联动全局组件 全局组件 不需要再引入 -->
    <TypeNav></TypeNav>

    <ListContainer></ListContainer>
    <MyRecommend></MyRecommend>
    <MyRank></MyRank>
    <MyLike></MyLike>
    <MyFloor v-for="floor in floorList" :key="floor.id" :list="floor"></MyFloor>
    <MyBrand></MyBrand>
  </div>
</template>
  
  <script>
import ListContainer from "@/views/Home/ListContainer/ListContainer.vue";
import MyRecommend from "@/views/Home/Recommend/Recommend.vue";
import MyRank from "@/views/Home/Rank/Rank.vue";
import MyLike from "@/views/Home/Like/Like.vue";
import MyFloor from "@/views/Home/Floor/Floor.vue";
import MyBrand from "@/views/Home/Brand/Brand.vue";

import { mapState } from "vuex";

export default {
  name: "MyHome",
  components: {
    ListContainer,
    MyRecommend,
    MyRank,
    MyLike,
    MyFloor,
    MyBrand

  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>
  
  <style>
</style>
  