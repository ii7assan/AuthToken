<template>
  <form @submit.prevent="login()">
    <h1>ورود</h1>
    <div>
      <input type="text" placeholder="Username" v-model="username" />
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="success" id="success">با موفقیت وارد شدید</div>
    <button type="submit">Submit</button>
  </form>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
      success: "",
    };
  },
  props: {
    user: {
      type: String,
    },
  },
   //user&pass: 09197479105
  methods: {
        login(){
           const payload = {
              email: this.username,
              password: this.password,
              token_name: 'web'
           }
            this.$store.dispatch('login', payload)
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    },
  }

</script>
<style scoped>
input[type="text"],
input[type="password"] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
button {
  background-color: #4caf57;
  color: white;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 50%;
}
button:hover {
  opacity: 0.8;
}
</style>

// login: async function () {
    //   const api = "https://api-crm.basalam.dev/api/v1/login";
    //   const payload = {
    //     email: this.username,
    //     password: this.password,
    //     token_name: "web",
    //   };
    //   this.error = null;
    //   try {
       
    //     const res = await axios
    //       .post(api, payload)
    //       .then((Response) => Response.data);

    //     if (res.outcome.data) {
    //       window.localStorage.setItem("is_Auth", res.outcome.data.token); // cookie better
    //       this.$store.commit("setUserName", res.outcome.data.user.name);
    //       this.$router.push("/");
    //       this.success = true;
    //     }
    //   } catch (error) {
    //     this.error = error.message;
    //   }