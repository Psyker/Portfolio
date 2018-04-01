<template>
    <div v-if="!loading">
        <h2>Portfolio</h2>
        <div class="project-list">
            <project :key="project.id" v-for="project in projects" :project="project"/>
        </div>
    </div>
    <div v-else>
        <loader :loading="loading"/>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {GET_PROJECTS_LIST} from "../store/modules/portfolio/actions";
    import Project from "../components/Project";
    import Loader from "../components/Loader";

    export default {
        components: {
            Loader,
            Project},
        name: "projects",
        data() {
            return {
                loading: true
            }
        },
        computed: {
            ...mapState(
                'portfolio', [
                    'projects'
                ]
            )
        },
        methods: {
            ...mapActions(
                'portfolio', [
                    GET_PROJECTS_LIST
                ]
            )
        },
        async created() {
            await this[GET_PROJECTS_LIST]();
            this.loading = false
        }
    }
</script>

<style lang="scss" scoped>
    .project-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }
</style>