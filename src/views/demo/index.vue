<template>
  <div class="">
    <el-button @click="getData()">获取数据</el-button>
    {{this.name}}
    {{this.sex}}
    {{this.age}}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
      methods: {
    ...mapActions("demo", ["getData"]),
  },
  computed: {
    ...mapState({
      name: state => state.demo.name,
      sex: state => state.demo.sex,
      age: state => state.demo.age,
    })
  },
  data() {
    return {
      orderList: [],
    };
  },

  mounted() {
   
  },
};
</script>

<style lang="" scoped></style>
