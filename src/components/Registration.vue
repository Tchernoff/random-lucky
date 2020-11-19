<template>
  <div class="registration">
    <form class="registration__form" @submit.prevent="submitRegistation">
      <input
        v-model="nickname"
        type="text"
        name="nickname"
        placeholder="nickname"
        id="nickname"
      />
      <input
        v-model="emailInput"
        type="email"
        name="email"
        placeholder="email"
        id="email"
      />
      <input
        v-model="passwordInput"
        type="password"
        name="password"
        placeholder="password"
        id="password"
      />
      <input
        v-model="passwordInput2"
        type="password"
        name="password2"
        placeholder="password"
        id="password2"
      />
      <button type="submit">Вход</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nickname: '',
      emailInput: '',
      passwordInput: '',
      passwordInput2: '',
    };
  },
  methods: {
    submitRegistation() {
      const sendData = {
        name: this.nickname,
        email: this.emailInput,
        password: this.passwordInput,
        password2: this.passwordInput2,
      };
      axios.post('http://185.119.57.116/api/register', sendData)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', response.data.access_token);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto auto;
  }
}
</style>
