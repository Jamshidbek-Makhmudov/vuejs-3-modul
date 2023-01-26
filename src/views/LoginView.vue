<template >
  <div class="box text-center ">
    <LoginPage />
  </div>
</template>
<script>
import { LoginPage } from '@/components'
export default {
  components: {
    LoginPage,
  }
}
</script>
<style scoped >
.box {

  border: none;
  border-radius: 8px;
  background: -webkit-linear-gradient(left, #7f049e, #f09f34);
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>