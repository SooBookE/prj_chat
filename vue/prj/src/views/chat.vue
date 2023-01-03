<template>
  <div class="chat">
    <h2>{{ data }}</h2>
  </div>
</template>

<script>
import data from '../views/login.vue'

export default {
  name: 'chat',
  data() {
    return {
      data: data
    }
  },
  created() {
    console.log(this.userName)
  }
}
</script>

<style></style>
