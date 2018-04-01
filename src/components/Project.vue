<template>
    <div class="project-card">
        <router-link :to="{name: 'project-detail', params: {id: parseInt(project.id)}}">
            <h3>{{ project.name }}</h3>
            <small>{{project.created_at}}</small>
            <p>{{project.description}}</p>
        </router-link>
    </div>

</template>

<script>
export default {
  name: 'project',
  props: {
    project: {
        type: Object,
        required: true
    }
  }
}
</script>

<style scoped lang="scss">
    .project-card {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        height: 320px;
        width: 100%;
        box-shadow: 0 6px 15px rgba(36,37,38,0.08);
        border-radius: 16px;
        background-color: white;
        h2 {

        }
    }
</style>
