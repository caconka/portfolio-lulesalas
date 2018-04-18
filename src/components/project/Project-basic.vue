<template>
  <div>
    <div
      class="container__full"
      :class="index % 2 === 0
        ? 'container__full--left'
        : 'container__full--right'"
    >
      <div class="container__flex">
        <div
          class="proyect__image"
          v-if="index % 2 === 0"
        >
        <img
          :src="$t(`projects.${project}.images.basic`)"
          alt="Project photo"
        >
        </div>
        <div class="project__card">
          <h1
            class="pink section"
            :class="index % 2 === 0 ? '' : 'right'"
          >
            {{$t(`projects.${project}.type`)}}
          </h1>
          <header>
            <h2 class="playfair">{{$t(`projects.${project}.title`)}}</h2>
          </header>
          <section>
            <p class="gray">{{$t(`projects.${project}.description`)}}</p>
          </section>
          <footer :class="index % 2 === 0 ? 'right' : ''">
            <a href="" class="btn bgBlack">ver proyecto ______</a>
          </footer>
        </div>
        <div
          class="proyect__image"
          v-if="index % 2 !== 0"
        >
          <img
            :src="$t(`projects.${project}.images.basic`)"
            alt="Project photo"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectBasic',
    props: ['project', 'index']
  }
</script>

<style scoped>
  .container__full {
    display: flex;
    justify-content: center;
    margin-bottom: 12.5em;
    background-repeat: no-repeat;
    background-size: cover;
    height: var(--bgCardsHeight);
  }

  .container__full--left {
    background-image: url('../../assets/bg-left.png');
  }

  .container__full--right {
    background-image: url('../../assets/bg-right.png');
  }

  .container__flex {
    width: var(--maxWidth);
    display: flex;
    justify-content: space-between;
  }

  .project__card {
    width: var(--proyectCardWidth);
  }

  .section {
    font-size: 1em;
    margin-top: 3vh;
  }

  header h2 {
    font-size: 1.7em;
  }

  .right {
    text-align: right;
  }

  .gray {
    text-shadow: 1px 1px 1px var(--white);
  }

  footer {
    margin-top: 4em;
  }
</style>
