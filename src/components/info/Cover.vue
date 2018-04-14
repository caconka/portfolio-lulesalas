<template>
  <div class="container">
    <header>
      <h2>HOLA! SOY LULE SALAS</h2>
      <h1>
        Arquitecta &amp; <strong>Diseñadora UX/UI</strong><br/>
        afincada en Madrid
      </h1>
    </header>
    <section class="anchors">
      <a class="a__myself" href="">¿QUIERES SABER MÁS SOBRE MI?</a>
      <ul>
        <li>
          <a href=""><img src="@/assets/linkedin.svg" alt="linkedin logo"></a>
        </li>
        <li>
          <a href=""><img src="@/assets/medium.svg" alt="medium logo"></a>
        </li>
        <li>
          <a href=""><img src="@/assets/behance.svg" alt="behance logo"></a>
        </li>
        <li>
          <a href=""><img src="@/assets/instagram.svg" alt="instagram logo"></a>
        </li>
      </ul>
    </section>
    <div class="arrows">
      <img src="@/assets/down-arrow.svg" alt="down arrows">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style scoped>
  .container {
    height: calc(100vh - var(--navbarHeight));
    margin-top: var(--navbarHeight);
  }

  header {
    margin-top: 40vh;
  }

  h1,
  h2 {
    margin: 0;
  }

  header > h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3em;
    font-weight: lighter;
  }

  header > h2 {
    color: var(--pink);
  }

  strong {
    font-weight: bold;
  }

  .anchors {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }

  .a__myself {
    padding-bottom: 0.5em;
    box-shadow: inset 0 -0.12em var(--pink);
  }

  .anchors ul {
    margin: 0;
  }

  ul li:not(:nth-child(1)) {
    margin-top: .6em;
    max-height: 1em;
  }

  .anchors li img {
    width: 1em;
  }

  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrows img {
    width: 1.5em;
  }
</style>
