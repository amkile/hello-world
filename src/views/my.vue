<template>
  <div class="">
    {{ messge }}
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      messge: "adasdasd"
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.$store);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped></style>
