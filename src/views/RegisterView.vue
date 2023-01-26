<template lang="">
  <div class="box text-center">
    <RegisterPage/>
  </div>
</template>
<script>
import { RegisterPage } from '@/components'
export default {
  components: {
    RegisterPage,
  },
}
</script>
<style scoped>
.box {

  border: none;
  border-radius: 8px;
  background: -webkit-linear-gradient(left, #7f049e, #f09f34);
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>