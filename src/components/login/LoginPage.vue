<template lang="">
<main class=" form-signin w-50 m-auto mt-5">
  <form>
    <a href="/">
      <img src="../../assets/logo/sec2__logo.png" alt="logo" class=" w-50 cursor:pointer mt-4" @click="toHomeHandler" />
    </a>
    <h1 class="h3 mb-3 fw-normal mt-3">Please sign in</h1>
    <Input :label="'Email address'" :type="'text'"/>
    <Input :label="'Password'"  :type="'password'"/>
    <div class="checkbox mb-3 mt-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <Button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</Button>
 
    <div class="p-4">
    <RouterLink class="text-dark text-decoration-none cursor:pointer" :to="{ name: 'register' }">© don't have an account?
      </RouterLink>
    </div>
  </form>
</main>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>