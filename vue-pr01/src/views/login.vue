<template>
  <div class="login">
    <h2>채팅 프로그램</h2>
    <div class="input">
      <input
        v-model="userName"
        class="underline"
        type="text"
        name="userName"
        id="userName"
        placeholder="닉네임을 입력해주세요"
      />
      <br />
      <!-- <input
        class="underline"
        type="password"
        icon="lock"
        placeholder="Password"
      /> -->
    </div>
    <button class="signin" @click="start">시작하기</button><br />
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  // middleware: 'auth',
  // auth: 'guest',
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    start() {
      this.$router.push({
        name: 'chat',
        chat: { name: 'userName' }
      })
    }
  }
}
</script>
<style>
h2 {
  margin-bottom: 50px;
}
input {
  width: 200px;
  height: 25px;
  margin-bottom: 20px;
}
.underline {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1;
}
.noline {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  margin-top: 30px;
}
button {
  cursor: pointer;
}
.signin {
  width: 200px;
  height: 30px;
  background-color: rgb(196, 196, 248);
}
</style>
