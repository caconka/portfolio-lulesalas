<template>
  <div>
    <div class="container__full">
      <img
        src="@/assets/img/background.jpg"
        alt="background"
        :class="index % 2 === 0 ? 'bg--left' : 'bg--right'"
      >
      <div
        :class="index % 2 === 0 ? 'container__flex' : 'container__flex reverse'"
      >
        <div class="project__image">
          <img
            :class="project"
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
            <a href="" class="btn bgBlack">Ver proyecto ______</a>
          </footer>
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

  .bg--left,
  .bg--right {
    height: 354px;
    position: absolute;
    padding-top: 3em;
    width: calc(799px + (100% - 1000px) / 2);
    z-index: -999;
  }

  .bg--left {
    left: 0;
  }

  .bg--right {
    right: 0;
  }

  .container__flex {
    width: var(--maxWidth);
    display: flex;
    justify-content: space-between;
  }

  .reverse {
    flex-direction: row-reverse;
  }

  .project__card {
    width: var(--proyectCardWidth);
  }

  .project__card h1 {
    font-weight: lighter;
  }

  .project__image {
    max-width: 60%;
  }

  .project__image img {
    max-height: 88%;
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

  .panificadora {
    transform: translateX(-20%);
  }

  footer {
    margin-top: 4em;
  }
</style>
