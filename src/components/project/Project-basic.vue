<template>
  <div>
    <div class="container__full--left">
    </div>
    <div class="container__full--rigth">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectBasic'
  }
</script>

<style scoped>
  .container__full--left {
    background-image: url('../../assets/bg-left.png');
    height: var(--bgCardsHeight);
  }

  .container__full--rigth {
    background-image: url('../../assets/bg-left.png');
    height: var(--bgCardsHeight);
    transform: rotateX(90deg);
  }

</style>
