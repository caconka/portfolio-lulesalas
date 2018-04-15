<template>
  <div class="container__list">
    <!-- <app-project-basic v-for="project in projects"></app-project-basic> -->
    <header>
      <h2 id="uxui" class="playfair">Proyectos</h2>
    </header>
    <section>
      <app-project-basic></app-project-basic>
    </section>
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
  header {
    font-size: 1.3em;
    margin: 0 auto;
    text-align: right;
    width: var(--maxWidth);
  }

  #uxui {
    margin-top: 0;
  }

  .container__list {
    /* margin-top: 5vh; */
  }

</style>
