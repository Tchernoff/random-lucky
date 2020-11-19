<template>
  <div class="slot">
    <div class="slot__container">
      <div class="slot__content">
        <League />
      </div>
    </div>
  </div>
</template>

<script>
import League from '@/components/League.vue';

export default {
  components: {
    League,
  },
};

</script>

<style lang="scss" scoped>
.slot {
  &__container {
    padding: 0 16px 16px 16px;
  }
}
</style>
