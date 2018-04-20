<template>
  <div class="container">
    <section class="description">
      <h2 id="tastes" class="header--important playfair">
        Me encanta lo que hago.
      </h2>
      <div class="bar"></div>
      <ul class="description__list">
        <li class="gray">
          Me apasiona el diseño en todas sus formas y encontrar
          <span class="black">soluciones creativas</span> a problemas
          concretos a través de él.
        </li>
        <li class="gray">
          Soy amante de los <span class="black">procesos y metodologías
          </span>, creo que pueden llevarte allí donde nunca hubieras
          imaginado.
        </li>
        <li class="gray">
          Considero la <span class="black">comunicación y empatía</span>
          herramientas fundamentales para poder llevar a cabo cualquier proceso
          con éxito: con el equipo, el cliente y el usuario, pues creo que
          nunca debe olvidarse qué ni <span class="black">para quién se está
          diseñando</span>.
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
          <h2 class="playfair">motivación</h2>
        </header>
        <p class="gray">
          Creo en la motivación como motor de trabajo, me gusta lo que hago y
          me gusta hacerlo bien.
        </p>
      </div>
      <div>
        <header>
          <h2 class="playfair">trabajo en equipo</h2>
        </header>
        <p class="gray">
          Escucharse, entenderse, respetarse y complementarse, para trabajar
          mejor y más agusto.
        </p>
      </div>
      <div>
        <header>
          <h2 class="playfair">aprendizaje continuo</h2>
        </header>
        <p class="gray">
          Soy muy aficionada a las charlas, eventos y workshops: te mantienen
          al día y alimentan la curiosidad que fomenta el crecimiento.
        </p>
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
  .header--important {
    text-align: center;
  }

  section {
    text-align: center;
  }

  .header--important {
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  .bar {
    background: var(--gold);
    border-radius: 1px;
    height: 4px;
    margin: 0.5em auto 1em auto;
    width: 12%;
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
