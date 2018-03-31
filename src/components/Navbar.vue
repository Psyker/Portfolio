<template>
    <div id="nav">
        <div class="container">
            <div class="left-side">
                <h1 class="logo" title="Théo Bourgoin">[tb].</h1>
            </div>
            <div class="right-side">
                <router-link :to="{name: 'home'}">Home</router-link> |
                <router-link :to="{name: 'about'}">About</router-link> |
                <router-link :to="{name: 'projects'}">Projects</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/styles/scss/modules/colors";
    @import "./../assets/styles/scss/modules/mixins";
 #nav {
     z-index: 9999;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     background-color: white;
     box-shadow: 0 6px 15px rgba(36,37,38,0.08);
     .container {
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         height: 80px;
         align-items: center;
     }
     .left-side {
         margin-left: 0;

     }
     .right-side {
         margin-left: auto;
     }
     .logo {
         margin: 0;
         font-family: "Montserrat", sans-serif;
         @include textGradient($main-gradient)
     }
     a {
         text-decoration: none;
     }
 }
</style>