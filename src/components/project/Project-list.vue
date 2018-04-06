<template>
  <div>
    <!-- <app-project-basic v-for="project in projects"></app-project-basic> -->
  </div>
</template>

<script>
import ProjectBasic from './Project-basic';

export default {
  name: 'ProjectList',
  components: {
    'app-project-basic': ProjectBasic
  }
}
</script>

<style scoped>

</style>
