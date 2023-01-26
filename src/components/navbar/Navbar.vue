<template >
  <div class=" text-center d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom ">
    <a href="/">
      <img src="../../assets/logo/sec2__logo.png" alt="logo" class=" w-50 cursor:pointer" @click="toHomeHandler" />
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto ">

      <RouterLink class="btn me-3 py-2 text-dark text-decoration-none cursor:pointer" :to="{ name: 'login' }">
        Login
      </RouterLink>

      <RouterLink class="btn me-3 py-2 text-dark text-decoration-none cursor:pointer" :to="{ name: 'register' }">
        Register
      </RouterLink>

    </nav>
  </div>
</template>
<script>
export default {
  data() { },
  methods: {
    toHomeHandler() {
      return this.$router.push("/")
    },
  },
}
</script>
<style scoped>
.box {
  background-color: rgb(177, 171, 171);

  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}

.btn {
  cursor: pointer;
  font-size: large;
}

.btn:hover {
  opacity: 0.7;
  border-bottom: 1px solid blue;
}
</style>
