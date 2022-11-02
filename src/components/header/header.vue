<template>
  <div class="outer">
    <header class="header">
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>welcome</p>
            <p v-if="!userName">
              <span>please</span>
              <router-link href="" to="/login">login</router-link>
              <router-link href="" to="/register" class="register"
                >register</router-link
              >
            </p>
            <p v-else>
              <span>{{ userName }}</span>
              <a @click="logout" class="register">退出登录</a>
            </p>
          </div>
          <div class="typeList">
            <router-link to="/center/myorder">我的订单</router-link>
            <router-link to="/shopcart">我的购物车</router-link>
            <a href="">我的尚品汇</a>
            <a href="">我的会员</a>
            <a href="">企业采购</a>
            <a href="">关注尚品汇</a>
            <a href="">合作招商</a>
            <a href="">商家后台</a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <h1 class="logoArea">
          <router-link href="" class="logo" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              v-model="value"
              class="input-error input-xxlarge"
            />
            <button
              class="sui-btn btn-xlarge btn-danger"
              @click="Search()"
              type="button"
            >
              search
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
  
  <script>
export default {
  name: "MyHeader",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    Search() {
      if (this.$route.query) {
        let location = { name: "sousuo", params: { keyword: this.value } };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("user/userLogOut");
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.value = "";
    });
  },
  computed: {
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
};
</script>
  
  <style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 115px;
          height: 60px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
  