<template >
  <ul>
    <li>

    </li>
  </ul>
</template>
<script>
export default {
  name: 'ValidationError',
  props: {
    type: Object,
    required: true,
  },
  computed: {
    errorMessages() {
      return ['email is a required field', 'password must be at least 8 characters']
    }
  }
}

</script>
<style >

</style>