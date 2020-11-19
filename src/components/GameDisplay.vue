<template>
  <div class="game-display">
    <div class="game-display__container">
      <div class="game-display__content">
        <div class="game-display__line">
          <div class="game-display__title">
            розыгрыш каждый час!
          </div>
          <div class="game-display__counter">
            59:59
          </div>
        </div>
        <div class="game-display__price">
          243 gold
        </div>
        <div class="game-display__players">
          243 участника
        </div>
      </div>
      <div class="game-display__actions">
        <button class="success">играть</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-display {

  &__actions {
    display: flex;
    justify-content: center;
    padding: 5px;
  }

  &__content {
    padding: 5px;
    text-align: center;
  }

  &__line {
    display: flex;
    justify-content: space-around;
  }

  &__price {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
