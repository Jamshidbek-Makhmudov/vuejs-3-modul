<template >
  <div class="container mt-2 ">
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import Navbar from './components/navbar/Navbar.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    Navbar,
  },
}
</script>
<style scoped >
/* .box {
  background-color: whitesmoke;
} */
</style>