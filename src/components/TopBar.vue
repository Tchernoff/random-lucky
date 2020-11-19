<template>
  <div class="top-bar">
    <div class="top-bar__container">
      <div class="top-bar__content">
        <div class="top-bar__row">
          <div class="top-bar__user">
            user
          </div>
          <div class="top-bar__money">
            <CurrenciesDisplay />
          </div>
        </div>
        <div class="top-bar__row">
          <Djackpot class="top-bar__djackpot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrenciesDisplay from '@/components/CurrenciesDisplay.vue';
import Djackpot from '@/components/Djackpot.vue';

export default {
  components: {
    CurrenciesDisplay,
    Djackpot,
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  // height: 50px;

  &__container {
    padding: 8px 16px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
  }

  &__djackpot {
    width: 100%;
  }
}
</style>
