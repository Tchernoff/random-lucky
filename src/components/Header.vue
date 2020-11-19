<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <router-link to="/">Random Lucky</router-link>
        <div class="header__menu">
          <router-link to="/Auth" tag="button">log out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.header {
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);

  &__container {
    padding: 0 16px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }
}

</style>
