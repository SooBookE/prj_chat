<template>
  <div class="chat">
    <h2>{{ $route.params.userName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'chat',
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  computed: {
    // userName() {
    //   return this.$route.params.userName
    // }
  },
  created() {
    console.log(this.$route.params.userName)
  }
}
</script>

<style></style>
