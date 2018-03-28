<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
