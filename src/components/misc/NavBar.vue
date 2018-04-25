<template>
  <div class="navbar">
    <nav>
      <div class="logo" v-scroll-to="{el:'#home', offset: - 72}">
        <img src="@/assets/img/flash-on.svg" class="icon__flash" alt="flash icon">
        <span class="lule playfair">
          lulesalas<span class="pink dot">.</span>
        </span>
      </div>
      <img
        @click="toggleButtons()"
        class="sandwich"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CiAgPGc+CiAgICA8cGF0aCBkPSJNMjQsM2MwLTAuNi0wLjQtMS0xLTFIMUMwLjQsMiwwLDIuNCwwLDN2MmMwLDAuNiwwLjQsMSwxLDFoMjJjMC42LDAsMS0wLjQsMS0xVjN6IiBmaWxsPSIjMzMzMzMzIi8+CiAgICA8cGF0aCBkPSJNMjQsMTFjMC0wLjYtMC40LTEtMS0xSDFjLTAuNiwwLTEsMC40LTEsMXYyYzAsMC42LDAuNCwxLDEsMWgyMmMwLjYsMCwxLTAuNCwxLTFWMTF6IiBmaWxsPSIjMzMzMzMzIi8+CiAgICA8cGF0aCBkPSJNMjQsMTljMC0wLjYtMC40LTEtMS0xSDFjLTAuNiwwLTEsMC40LTEsMXYyYzAsMC42LDAuNCwxLDEsMWgyMmMwLjYsMCwxLTAuNCwxLTFWMTl6IiBmaWxsPSIjMzMzMzMzIi8+CiAgPC9nPgo8L3N2Zz4K"
      />
      <div id="buttons">
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
    name: 'NavBar',
    methods: {
      toggleButtons: () => {
        const buttons = document.getElementById('buttons');
        if (buttons.style.display === 'none') {
            buttons.style.display = 'flex';
        } else {
          buttons.style.display = 'none';
        }
      }
    }
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

  .sandwich {
    display: none;
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

  #buttons {
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

  #buttons a:not(.btn):after,
  #buttons a:not(.btn):before {
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

  @media only screen and (max-width: 600px) {
    #buttons {
      align-items: flex-end;
      background: white;
      display: none;
      flex-direction: column;
      height: calc(100vh + 2em);
      justify-content: flex-start;
      position: absolute;
      right: 1em;
      transform: translateY(3em);
      top: 1em;
      width: 8em;
    }

    a {
      margin: .5em 0;
    }

    .sandwich {
      display: block;
    }
  }
</style>
