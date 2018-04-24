<template>
  <div class="container__card">
    <section class="description">
      <h2 id="tastes" class="header--important playfair">
        {{$t('tastes.title')}}
      </h2>
      <div class="bar"></div>
      <ul class="description__list">
        <li class="gray">
          {{$t('tastes.first.one')}}
          <span class="black">{{$t('tastes.first.two')}}</span>
          {{$t('tastes.first.three')}}
        </li>
        <li class="gray">
          {{$t('tastes.second.one')}}
          <span class="black"> {{$t('tastes.second.two')}}</span>,
          {{$t('tastes.second.three')}}
        </li>
        <li class="gray">
          {{$t('tastes.third.one')}}
          <span class="black">{{$t('tastes.third.two')}}</span>
          {{$t('tastes.third.three')}}
          <span class="black">{{$t('tastes.third.four')}}</span>.
        </li>
      </ul>
    </section>
    <section class="values">
      <div class="card__img">
        <img src="@/assets/img/value1.png" alt="motivación">
      </div>
      <div class="card__img">
        <img src="@/assets/img/value2.png" alt="trabajo en equipo">
      </div>
      <div class="card__img">
        <img src="@/assets/img/value3.png" alt="aprendizaje continuo">
      </div>
      <div>
        <header>
          <h2 class="playfair">{{$t('tastes.motivation.title')}}</h2>
        </header>
        <p class="gray">{{$t('tastes.motivation.description')}}</p>
      </div>
      <div>
        <header>
          <h2 class="playfair">{{$t('tastes.teamwork.title')}}</h2>
        </header>
        <p class="gray">{{$t('tastes.teamwork.description')}}</p>
      </div>
      <div>
        <header>
          <h2 class="playfair">{{$t('tastes.learning.title')}}</h2>
        </header>
        <p class="gray">{{$t('tastes.learning.description')}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Taste'
}
</script>

<style scoped>
  .container__card {
    margin-bottom: 10em;
  }

  .header--important {
    text-align: center;
  }

  section {
    text-align: center;
  }

  .header--important {
    margin: 0;
  }

  .bar {
    margin: .8em auto 2em auto;
  }

  .description__list {
    margin: 0 auto;
    width: 81%;
  }

  .description__list li:before {
    background-image: url('../../assets/img/flash-on.svg');
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    display: inline-block;
    margin-left: -1.26em;
    margin-top: 0.6em;
    transform: translateY(0.4em);
    width: 1em;
    height: 1.3em;
  }

  .description__list li {
    text-align: left;
    padding-left: 1em;
    line-height: 1.5em;
  }

  .description__list li:nth-last-child(1) {
    margin-bottom: 8vh;
  }

  .values {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(2, auto);
  }

  .values h2 {
    font-size: 1.6em;
    margin-top: 0.5em;
  }

  .card__img {
    margin-top: 2em;
    height: 5em;
  }
</style>
