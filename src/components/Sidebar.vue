<template>
  <div class="sidebar">
    <div class="title">{{ username }}</div>
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">خانه</div>
      </router-link>
      <router-link
        to="/messages"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">فروش</div>
      </router-link>
      <router-link
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">فراد</div>
      </router-link>
      <button
        @click="logout"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">خروج</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({ username: "getCurrentUser" }),
    ...mapGetters({isLoggedIn: 'isLoggedIn'})
  },
  methods: {

    logout: () => {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('login')
        })
      }
    // logout() {
    //   this.$router.push("login");
    //   this.$store.commit('resetState');
    //   localStorage.removeItem("is_Auth");
    // },
  },
};
</script>

<style scoped>
.title {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 6px;
}

.menu-items > * {
  margin-top: 60px;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
  top: -30px;
}

.side-btn.active::after {
  bottom: -30px;
}

.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}

.side-btn.active .link-container::before {
  top: -60px;
}

.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
</style>