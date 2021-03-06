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
    if (localStorage.getItem("is_Auth") == null) this.$router.push("login");
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
