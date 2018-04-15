<template>
  <div>
    <div class="container__full--left container__full">
      <div class="container__flex">
        <div class="proyect__image">
          <img src="@/assets/mock-locspot.png" alt="">
        </div>
        <div class="project__card">
          <h1 class="pink section">DISEÑO UX/UI</h1>
          <header>
            <h2 class="playfair">Find the right location with locspot</h2>
          </header>
          <section>
            <p class="gray">
              Type something un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
            </p>
          </section>
          <footer class="right">
            <a href="" class="btn bgBlack">ver proyecto ______</a>
          </footer>
        </div>
      </div>
    </div>
    <div class="container__full--right container__full">
      <div class="container__flex">
        <div class="project__card">
          <h1 class="pink section right">DISEÑO UX/UI</h1>
          <header>
            <h2 class="playfair">Find the right location with locspot</h2>
          </header>
          <section>
            <p class="gray">
              Type something un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
            </p>
          </section>
          <footer>
            <a href="" class="btn bgBlack">ver proyecto ______</a>
          </footer>
        </div>
        <div class="proyect__image">
          <img src="@/assets/mock-locspot.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectBasic'
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
