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
      <div id="buttons" @click="toggleButtons()">
        <div class="buttons__container" @click.prevent="toggleButtons">
          <a
            href="#"
            v-scroll-to="{el: '#uxui', offset: - 72}"
            @click="toggleButtons()"
          >
            {{$t('navbar.uxui')}}
          </a>
          <a
            href="#"
            v-scroll-to="{el: '#architecture', offset: - 100}"
            @click="toggleButtons()"
          >
            {{$t('navbar.architect')}}
          </a>
          <a
            v-scroll-to="'#contact'"
            href="#contact"
            class="btn bgBlack"
            @click="toggleButtons()"
            >
            {{$t('navbar.contact')}}
          </a>
        </div>
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
        const container = document.querySelector('.buttons__container');
        if (buttons.style.display !== 'flex') {
          buttons.style.display = 'flex';
        } else if (window.innerWidth < 600) {
          setTimeout(() => buttons.style.display = 'none', 220);
        }
        setTimeout(() => container.classList.toggle('active'), 100);
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
    height: 100%;
  }

  .buttons__container {
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
      background: rgba(204, 204, 204, .5);
      display: none;
      height: calc(100vh + 2em);
      justify-content: flex-end;
      position: absolute;
      right: 0;
      transform: translateY(3em);
      top: 1em;
      width: 100vw;
    }

    .buttons__container {
      align-items: flex-end;
      background: white;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0 12vw 0 0;
      transform: translateX(100%);
      transition: transform .15s ease-out;
    }

    .active {
      transform: none;
    }

    a:not(.btn) {
      font-size: 1.3em;
      margin: .5em 0 0 0;
      padding: .5em 0 .5em 12vw;
    }

    .a.active {
      transform: translateX(-6em;)
    }

    .btn {
      font-size: 1.3em;
      margin: 1.2em 0 0 12vw;
    }

    .sandwich {
      display: block;
    }
  }
</style>
