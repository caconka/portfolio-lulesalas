<template>
  <div class="footer">
    <div class="container__card">
      <section class="links">
        <span>{{$t('footer.find')}}</span>
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      goto: (link) => window.open(link)
    }
  }
</script>

<style scoped>
  .footer {
    background: var(--gold);
    height: var(--footerHeight);
  }

  .container__card {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .links span {
    letter-spacing: .2em;
    margin-right: 2em;
  }

  .links ul {
    display: inline;
  }

  .links li {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-left: 1.2em;
    height: 1em;
    width: 1em;
  }

  .links li:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .links ul {
      display: block;
      text-align: right;
      margin: .5em 0;
    }

    .links li {
      height: 1.3em;
      width: 1.3em;
    }

    .links span {
      letter-spacing: .1em;
      margin-right: 0;
    }
  }
</style>
