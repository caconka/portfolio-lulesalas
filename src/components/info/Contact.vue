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
  .container__card {
    margin-bottom: 8em;
  }

  .card {
    width: 40%;
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
</style>

