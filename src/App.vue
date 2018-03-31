<template>
  <div id="app">
    <navbar/>
    <transition :name="transitionName" mode="out-in">
      <router-view :key="$router.currentRoute.fullPath" class="container"/>
    </transition>
    <div ref="pageTransition" class="page-transition "></div>
  </div>
</template>

<script>
    import {EventBus} from "./main";
    import Navbar from "./components/Navbar";

    export default {
        components: {Navbar},
        name: 'app',
        data() {
            return {
                transitionName: 'fadeLeft',
                to: null,
                from: null
            }
        },
        mounted() {
            this.$refs.pageTransition.addEventListener('animationend', (e) => {
                if (e.animationName === "fillScreen") {
                    this.$refs.pageTransition.classList.remove('animate');
                    if (this.to.meta.order > this.from.meta.order) {
                        this.transitionName = 'fadeLeft'
                    } else {
                        this.transitionName = 'fadeRight'
                    }
                }
            });

            EventBus.$on('after-route', (to, from) => {
                this.to = to;
                this.from = from;
                if (to.meta.order > from.meta.order) {
                    this.$refs.pageTransition.classList.add('animate', 'reverse');
                } else {
                    this.$refs.pageTransition.classList.add('animate');
                    this.$refs.pageTransition.classList.remove('reverse');
                }
            });
        },
    }
</script>

<style lang="scss">
</style>
