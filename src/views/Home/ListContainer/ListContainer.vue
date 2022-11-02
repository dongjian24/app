<template>
  <div class="list-container">
    <div class="sortList learfix">
      <div class="center">
        <MyCarousel :list="bannerList"></MyCarousel>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="f1">尚品汇快报</em>
            <span class="fr tip">more></span>
          </h4>
          <div class="clearfix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>备战开学季</li>
            <li><span class="bold">[特惠]</span>备战开学季</li>
            <li><span class="bold">[特惠]</span>备战开学季</li>
            <li><span class="bold">[特惠]</span>备战开学季</li>
            <li><span class="bold">[特惠]</span>备战开学季</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon1.png" alt="" />
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon2.png" alt="" />
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon3.png" alt="" />
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon4.png" alt="" />
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon5.png" alt="" />
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon6.png" alt="" />
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon7.png" alt="" />
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon8.png" alt="" />
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon5.png" alt="" />
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon2.png" alt="" />
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon3.png" alt="" />
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <img src="./images/icon1.png" alt="" />
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";


export default {
  name: "ListContainer",
  mounted() {
    console.log("组件挂载完毕");
    this.$store.dispatch("getBannerList");
    //dispatch当中涉及到异步语句 导致v-for遍历的时候结构还没有完全 所以newSwiper不能写在mounted里面
    console.log("轮播");
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
    }),
  },
  // watch: {
  //   //监听bannerList数据 由空数组变为服务器读取的数据
  //   bannerList: {
  //     handler() {
  //       //当前函数执行 只能保证数据已经有了 但是无法保证v-for执行结束
  //       //nextTick:在下次DOM更新循环结束之后执行延迟回调 在修改数据之后立即使用这个方法 获取更新后的DOM
  //       this.$nextTick(() => {
  //         new Swiper(this.$refs.mySwiper, {
  //           loop: true, // 循环模式选项

  //           // 如果需要分页器
  //           pagination: {
  //             el: ".swiper-pagination",
  //             clickable: true,
  //           },

  //           // 如果需要前进后退按钮
  //           navigation: {
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //           },
  //         });
  //       });
  //     },
  //   },
  // },
};
</script>
  
  <style scoped lang="less">
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 500px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 500px;
      padding: 5px;
      float: left;

      .swiper-container {
        width: 740px;
        height:462px;

      }
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .f1 {
            float: left;
          }

          .fr {
            float: left;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        img {
          width: 25px;
          height: 25px;
        }

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            width: 61px;
            height: 14px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }
        }
      }

      .ads {
        margin-top: 8px;

        img {
          width: 250px;
          height: 74px;
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
  