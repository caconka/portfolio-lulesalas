<template>
  <nav class="container">
    <div class="logo">
      <img src="@/assets/flash-on.svg" class="icon__flash" alt="flash icon">
      <span class="lule">lulesalas<span class="pink dot">.</span></span>
    </div>
    <div class="buttons">
      <a href="" class="goToProject">UX/UI design</a>
      <a href="" class="goToProject">Architecture</a>
      <a href="" class="btn bgBlack">Contact me</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
  nav {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    justify-content: space-between;
    height: 72px;
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

  .icon__flash {
    height: 1.7em;
    vertical-align: text-bottom;
  }

  .dot {
    font-size: 1.4em;
  }

  .lule {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    font-size: 1.8em;
  }
</style>
