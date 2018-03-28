<template>
  <div class="home">
    <project-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from "../components/Project.vue";

export default {
  name: 'home',
  components: {
      ProjectList,
  }
}
</script>
