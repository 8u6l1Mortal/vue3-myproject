<script>
export default {
  name: "App",
  setup() {
    const msg = "Hello Vue3!";
    return {
      msg,
    };
  },
};
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<style></style>