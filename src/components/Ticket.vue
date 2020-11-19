<template>
  <div class="ticket">
    <div class="ticket__container">
      <div class="ticket__content">
        <div class="ticket__title">
          1 Gold
        </div>
        <div class="ticket__display">
          <GameDisplay />
          <hr>
          <GameDisplay />
          <hr>
          <GameDisplay />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameDisplay from '@/components/GameDisplay.vue';

export default {
  components: {
    GameDisplay,
  },
};
</script>

<style lang="scss" scoped>
.ticket {
  border: 1px solid black;
  background-color: #ffd700;

  &__container {
    padding: 8px;
  }

  &__content {
    min-width: 200px;
  }

  &__title {
    text-align: center;
    margin: 5px;
    font-weight: 600;
  }
}
</style>
