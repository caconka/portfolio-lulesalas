<template>
  <div>
    <app-info></app-info>
    <app-project-list></app-project-list>
  </div>
</template>

<script>
import Info from '@/components/info/Info';
import ProjectList from '@/components/project/Project-list';

export default {
  name: 'Home',
  components: {
    'app-info': Info,
    'app-project-list': ProjectList
 }
}
</script>

<style scoped>

</style>
