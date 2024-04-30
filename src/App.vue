<template>
  <div>
    <div class="test">
      <Test></Test>
    </div>
  </div>
</template>

<script>
  import Test from './components/Test.vue'
  export default {
    components: {
      Test
    }
  }
</script>

<style scoped>
.test {
  width: 90vw;
  height: 70vh;
  margin: 10px auto;
  border-radius: 22px;
  border: 5px solid #666;
  box-shadow: 0 0 10px #ccc;
  overflow: hidden;
}
</style>