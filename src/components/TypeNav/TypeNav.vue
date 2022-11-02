<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托 -->
      <div @mouseleave="leaveStyle" @mouseenter="enterStyle">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="showNav">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(v1, index) in categoryList"
                :class="{ cur: currentIndex == index }"
                :key="v1.categoryId"
              >
                <h3 @mouseenter="changeStyle(index)">
                  <a
                    :data-categoryName="v1.categoryName"
                    :data-category1Id="v1.categoryId"
                    >{{ v1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="v2 in v1.categoryChild"
                      :key="v2.categoryId"
                    >
                      <dt>
                        <a
                          :data-categoryName="v2.categoryName"
                          :data-category2Id="v2.categoryId"
                          >{{ v2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="v3 in v2.categoryChild" :key="v3.categoryId">
                          <a
                            :data-categoryName="v3.categoryName"
                            :data-category3Id="v3.categoryId"
                            >{{ v3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="">服装城</a>
        <a href="">美妆馆</a>
        <a href="">尚品汇超市</a>
        <a href="">全球购</a>
        <a href="">闪购</a>
        <a href="">团购</a>
        <a href="">有趣</a>
        <a href="">秒杀</a>
      </nav>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      showNav: true,
    };
  },
  //组件挂载完毕 可以向服务器发请求
  mounted() {
    if (this.$route.path != "/home") {
      this.showNav = false;
    }
  },
  computed: {
    ...mapState({
      //右侧需要的是一个函数,当使用这个计算属性 右侧函数会立即执行一次
      //注入一个参数state 其实即为大仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    changeStyle: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveStyle() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.showNav = false;
      }
    },
    enterStyle() {
      this.showNav = true;
    },
    goSearch(event) {
      // console.log(event.target.dataset)
      //获取触发事件的节点 带有data-categoryname则是a标签 节点有一个dataset属性 可以获取节点自定义属性和属性值
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: "sousuo" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // console.log(categoryname,category1id,category2id,category3id);
        // console.log(location,query)
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
          this.$router.push(location);
        }
      }
    },
  },
};
</script>
  
  <style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 500px;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 530px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          a:hover {
            cursor: pointer;
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }

        .cur {
          background: coral;
        }
      }
    }

    .sort-enter {
      opacity: 0;
    }
    .sort-enter-to {
      opacity: 1;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
  