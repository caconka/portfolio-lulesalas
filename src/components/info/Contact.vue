<template>
  <div class="container">
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
          <span class="black">{{$t('contact.mail')}}</span>
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
  .card {
    width: 40%;
  }
</style>

