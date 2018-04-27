<template>
  <div id="contact" class="container__card">
    <section class="card">
      <header>
        <h2 class="pink">{{$t('contact.name')}}</h2>
        <h1 class="playfair">{{$t('contact.title')}}</h1>
      </header>
      <section>
        <p class="gray">{{$t('contact.description')}}</p>
      </section>
      <footer>
        <p class="gray">{{$t('contact.contact')}}<br>
          <a href="mailto:luciasalascobos@gmail.com">
            <span class="black">luciasalascobos@gmail.com</span>
          </a>
        </p>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>
  #contact {
    margin-top: 12em;
  }

  .container__card {
    margin-bottom: 8em;
  }

  .card {
    width: 50%;
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-weight: lighter;
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
    
    h1 {
      font-size: 1.8em;
    }

    h2 {
      font-size: 1.6em;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    .card {
      width: 70%;
    }
  }

  @media only screen and (min-width: 960px) and (max-width: 1200px) {
    .card {
      width: 61%;
    }
  }
</style>

