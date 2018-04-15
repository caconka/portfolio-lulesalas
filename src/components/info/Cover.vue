<template>
  <div class="container">
    <header>
      <h2>¡HOLA! SOY LULE SALAS</h2>
      <h1 class="header--important playfair">
        Arquitecta &amp; <strong>Diseñadora UX/UI</strong><br/>
        afincada en Madrid
      </h1>
    </header>
    <section class="anchors">
      <a class="a__myself" href="">¿QUIERES SABER MÁS SOBRE MÍ?</a>
      <ul>
        <li class="linkedin"
            @click="goto('https://www.linkedin.com/in/luciasalascobos/')">
        </li>
        <li class="medium"
            @click="goto('https://medium.com/@lule_salas')">
        </li>
        <li class="behance"
            @click="goto('https://www.behance.net/luciasalasf498')">
        </li>
        <li class="instagram"
            @click="goto('https://www.instagram.com/_uke_lule/')">
        </li>
      </ul>
    </section>
    <div class="arrows">
      <img src="@/assets/down-arrow.svg" alt="down arrow">
      <img src="@/assets/down-arrow.svg" alt="down arrow">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cover',
    methods: {
      goto: (link) => window.open(link)
    }
  }
</script>

<style scoped>
  .container {
    margin-top: var(--navbarHeight);
  }

  header {
    padding-top: 24vh;
  }

  h1,
  h2 {
    margin: 0;
  }

  header > h2 {
    color: var(--pink);
    font-weight: 400;
  }

  strong {
    font-weight: bold;
  }

  .anchors {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }

  .a__myself:after {
    box-shadow: inset 0 -0.12em var(--gold);
    content: '';
    display: block;
    height: 0.4em;
    margin: 0 auto;
    transition: width 0.2s ease-out;
    width: 95%;
  }

  .a__myself:hover:after {
    width: 0%;
  }

  .anchors ul {
    margin: 0;
  }

  ul li:not(:nth-child(1)) {
    margin-top: 0.8em;
    max-height: 1em;
  }

  .anchors li {
    background-size: contain;
    background-repeat: no-repeat;
    height: 1em;
    width: 1em;
  }

  .anchors li:hover {
    cursor: pointer;
  }

  .linkedin a {
    height: 100%;
    width: 100%;
  }

  .linkedin {
    background-image: url('../../assets/linkedin.svg');
  }

  .linkedin:hover {
    background-image: url('../../assets/linkedin-pink.svg');
  }

  .medium {
    background-image: url('../../assets/medium.svg');
  }

  .medium:hover {
    background-image: url('../../assets/medium-pink.svg');
  }

  .behance {
    background-image: url('../../assets/behance.svg');
  }

  .behance:hover {
    background-image: url('../../assets/behance-pink.svg');
  }

  .instagram {
    background-image: url('../../assets/instagram.svg');
  }

  .instagram:hover {
    background-image: url('../../assets/instagram-pink.svg');
  }

  .arrows {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(60vh - 15em);
    justify-content: flex-end;
  }

  @keyframes blink {
    0% {
        opacity: 0;
    }
    30% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
  }

  .arrows img {
    margin-top: -0.2em;
    width: 1.5em;
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .arrows img:nth-child(2) {
    animation-delay: 0.2s;
  }
</style>
