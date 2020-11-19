<template>
  <div class="auth">
    <Login />
    <Registration />
  </div>
</template>

<script>
// import Login from '@/components/Login.vue';
import Registration from '@/components/Registration.vue';

export default {
  components: {
    // Login,
    Registration,
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: calc(100% - 40px);
}
</style>
