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
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsMjM1LjMxOEgyMC42ODJDOS4yNiwyMzUuMzE4LDAsMjQ0LjU3NywwLDI1NnM5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYgICAgYzExLjQyMywwLDIwLjY4Mi05LjI1OSwyMC42ODItMjAuNjgyQzUxMiwyNDQuNTc4LDUwMi43NDEsMjM1LjMxOCw0OTEuMzE4LDIzNS4zMTh6IiBmaWxsPSIjMzMzMzMzIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCw3OC40MzlIMjAuNjgyQzkuMjYsNzguNDM5LDAsODcuNjk5LDAsOTkuMTIxYzAsMTEuNDIyLDkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNiAgICBjMTEuNDIzLDAsMjAuNjgyLTkuMjYsMjAuNjgyLTIwLjY4MkM1MTIsODcuNjk5LDUwMi43NDEsNzguNDM5LDQ5MS4zMTgsNzguNDM5eiIgZmlsbD0iIzMzMzMzMyIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsMzkyLjE5N0gyMC42ODJDOS4yNiwzOTIuMTk3LDAsNDAxLjQ1NiwwLDQxMi44NzlzOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2ICAgIGMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MlM1MDIuNzQxLDM5Mi4xOTcsNDkxLjMxOCwzOTIuMTk3eiIgZmlsbD0iIzMzMzMzMyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
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
