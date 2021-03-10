<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
   created() {
    this.$http.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          localStorage.removeItem('token')
          this.$router.push('login')
        }
        throw err;
      });
    });
  },
  beforeDestroy() {
    localStorage.clear("is_Auth");
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  direction: rtl;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
created() {
    // if (localStorage.getItem("is_Auth") == null) this.$router.push("login");
  },