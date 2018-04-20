<template>
  <div>
    <app-cover></app-cover>
    <app-tastes></app-tastes>
  </div>
</template>

<script>
import Cover from './Cover';
import Tastes from './Tastes';

export default {
  name: 'Info',
  components: {
    'app-cover': Cover,
    'app-tastes': Tastes
  }
}
</script>

<style scoped>

</style>

