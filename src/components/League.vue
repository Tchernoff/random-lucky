<template>
  <div class="league">
    <div class="league__container">
      <div class="league__content">
        <Ticket />
      </div>
    </div>
  </div>
</template>

<script>
import Ticket from '@/components/Ticket.vue';

export default {
  components: {
    Ticket,
  },
};
</script>

<style lang="scss" scoped>
.league {
  background-color: #fff;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 4px;

  &__container {
    padding: 16px;
  }

  &__content {
    display: flex;
    justify-content: center;
  }
}
</style>
