<template lang="">
<main class="form-signin w-50 m-auto mt-5">
  <form>
    <a href="/">
      <img src="../../assets/logo/sec2__logo.png" alt="logo" class=" w-50 cursor:pointer mt-4" @click="toHomeHandler" />
    </a>
    <h1 class="h3 mb-3 fw-normal mt-3">Please sign up</h1>
  <Input :label="'Name'" :type="'text'"/>
    <Input :label="'Email address'" :type="'text'"/>
    <Input :label="'Password'"  :type="'password'"/>
    <Button class="w-100 btn btn-lg btn-primary mt-3" type="submit" :disabled="isLoading" @click="submitHandler">Sign up</Button>
    <div class="p-4">
    <RouterLink class="text-dark text-decoration-none cursor:pointer" :to="{ name: 'login' }">© Do you have an account?
      </RouterLink>
    </div>
  </form>
</main>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading

    },


  },
  methods: {
    submitHandler(e) {
      e.preventDefault();     // bu ozini vazifasini toxtadadi ozini vazifasi submit bolib click  boganda page refresh bolishi kerak edi
      //bu kodni yozganimizdan keyin bosgandan keyin page refresh bomidi
      this.$store.commit('setLoading')
      //bu kodni yozishimizdan maqsad user buttonni bosganida butyonni disable qilib turamiz, sani malumotlaring severga yuborilmoqda deb
    }
  }

}
</script>
<style>
.style {
  cursor: pointer;
}
</style>