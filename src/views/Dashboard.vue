<template>
  <div class="Dashboard">
    <TopBar />
    <Slot />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Slot from '@/components/Slot.vue';

export default {
  components: {
    TopBar,
    Slot,
  },
};
</script>
