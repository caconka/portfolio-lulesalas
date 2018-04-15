<template>
  <div class="navbar">
    <nav class="container">
      <div class="logo">
        <img src="@/assets/flash-on.svg" class="icon__flash" alt="flash icon">
        <span class="lule playfair">
          lulesalas<span class="pink dot">.</span>
        </span>
      </div>
      <div class="buttons">
        <a href="">Diseño UX/UI</a>
        <a href="">Arquitectura</a>
        <a href="" class="btn bgBlack">Contacto</a>
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
  }

  nav {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: var(--navbarHeight);
    margin: 0 auto;
    position: fixed;
    width: var(--maxWidth);
    z-index: 9;
  }

  a {
    margin-left: 2.4em;
  }

  .logo {
    margin-top: .2em;
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
