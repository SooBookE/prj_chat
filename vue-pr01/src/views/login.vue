<template>
  <div class="login">
    <h2>Sign In</h2>
    <div class="input">
      <input class="underline" type="text" name="id" id="id" placeholder="id" />
      <br />
      <input
        class="underline"
        type="password"
        icon="lock"
        placeholder="Password"
      />
    </div>
    <button class="signin" @click="signIn">로그인</button><br />
    <button class="noline" @click="anonymity">익명으로 대화하기</button>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$axios.setToken(this.$auth.strategy.token.get())
      } catch (err) {
        this.notifySignInFail()
      }
    },
    notifySignInFail() {
      this.$buefy.notification.open({
        message: '로그인 실패',
        type: 'is-danger'
      })
    }
  }
}
</script>
<style>
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
