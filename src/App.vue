<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> |
      <router-link :to="{name: 'projects'}">Projects</router-link>
    </div>
    <transition name="fadeLeft" mode="out-in">
      <router-view/>
    </transition>
    <div ref="pageTransition" class="page-transition "></div>
  </div>
</template>

<script>
    import {EventBus} from "./main";

    export default {
        name: 'app',
        mounted() {
            this.$refs.pageTransition.addEventListener('animationend', (e) => {
                if (e.animationName === "fillScreen") {
                    this.$refs.pageTransition.classList.remove('animate')
                }
            });
            EventBus.$on('after-route', () => {
                this.$refs.pageTransition.classList.add('animate')
            })
        },

    }
</script>

<style lang="scss">
  @keyframes fillScreen {
    0% {
      background-color: black;
      left: 100%
    }
    50% {
      background-color: black;
      right: 0;
    }
    100% {
      background-color: black;
      right: 100%;
      left: -100%;
    }
  }
  .page-transition {
    z-index: 100;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: black;
    &.animate {
      animation: fillScreen 1.5s ease-in-out;
    }
  }
</style>
