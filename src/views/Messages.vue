<template>
  <div class="messages">Messages</div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("is_Auth") == null) this.$router.push("login");
  },
};
</script>

<style scoped>
.messages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
</style>