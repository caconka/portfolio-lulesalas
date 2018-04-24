<template>
  <div class="navbar">
    <nav>
      <div class="logo" v-scroll-to="{el:'#home', offset: - 72}">
        <img src="@/assets/img/flash-on.svg" class="icon__flash" alt="flash icon">
        <span class="lule playfair">
          lulesalas<span class="pink dot">.</span>
        </span>
      </div>
      <div class="buttons">
        <a href="#" v-scroll-to="{el: '#uxui', offset: - 72}">
          {{$t('navbar.uxui')}}
        </a>
        <a href="#" v-scroll-to="'#architecture'">{{$t('navbar.architect')}}</a>
        <a 
          v-scroll-to="'#contact'"
          href="#contact" 
          class="btn bgBlack"
        >
          {{$t('navbar.contact')}}
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');

  .navbar {
    display: flex;
    justify-content: center;
    background-color: #fff;
    height: var(--navbarHeight);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: var(--maxWidth);
  }

  a {
    margin-left: 2.4em;
  }

  .logo {
    margin-top: .2em;
  }

  .logo:hover {
    cursor: pointer;
  }

  .buttons {
    text-align: right;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .buttons a:not(.btn):after,
  .buttons a:not(.btn):before {
    box-shadow: inset 0 -0.12em var(--gold);
    content: '';
    display: block;
    height: 3px;
    transition: width 0.2s ease-out;
    width: 0%;
  }

  a:not(.btn):hover:after {
    width: 100%;
  }

  .icon__flash {
    height: 1.7em;
    vertical-align: text-bottom;
  }

  .dot {
    font-size: 1.4em;
  }

  .lule {
    font-weight: bold;
    font-size: 1.8em;
  }
</style>
