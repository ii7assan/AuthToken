<template>
  <div class="main">
    <div class="invoice">
      <div class="inputs">
        <form action="">
          <label>شناسه ی مشتری</label>
          <input type="text" v-model="user_id" />
          <label>تاریخ فراد</label>
          <input type="text" v-model="frudDate" />
          <label>نوع فراد</label>
          <input type="text" v-model="frudType" />
          <label>آخرین تاریخ خرید</label>
          <input type="text" v-model="lastBought" />
          <label>احتمال فراد</label>
          <input type="text" v-model="frud" />
          <button @click.prevent="add">add invoice</button>
        </form>
      </div>
    </div>
    <div class="grid">
      <Grid :data="gridData" :columns="gridColumns" />
    </div>
  </div>
</template>

<script>
import Grid from "../components/Grid";
import { fakeData } from "../components/data.js";
export default {
  components: {
    Grid,
    // AddInvoice
  },
  data() {
    return {
      gridData: fakeData,
      gridColumns: ["user_id", "frudDate", "frudType", "last_buy", "frud"],
      user_id: "",
      frudDate: "",
      frudType: "",
      lastBought: "",
      frud: "",
    };
  },
  mounted() {
    if (localStorage.getItem("is_Auth") == null) this.$router.push("login");
  },
  methods: {
    add() {
      const newInvoice = {
        user_id: this.user_id,
        frudDate: this.frudDate,
        frudType: this.frudType,
        last_buy: this.lastBought,
        frud: this.frud,
      };
      fakeData.push(newInvoice);
      console.log(fakeData);
    },
  },
};
</script>

<style scoped>
.invoice {
  background-color: lightgray;
  border-radius: 55px;
  padding: 15px;
  height: 30vh;
}
.inputs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 5px;
}
.inputs input {
  height: 20px;
  margin: 5px;
}
.inputs label {
  margin: 2px;
  font-size: 15px;
}
</style>

// ['شناسه ی مشتری','تاریخ فراد','نوع فراد','آخرین تاریخ خرید','احتمال فراد']