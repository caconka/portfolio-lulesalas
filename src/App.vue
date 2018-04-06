<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from './components/misc/NavBar';
import Footer from './components/misc/Footer';

export default {
  name: 'App',
  components: {
    'app-navbar': NavBar,
    'app-footer': Footer
  }
}
</script>

<style src="./styles.css"></style>
