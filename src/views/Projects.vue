<template>
    <div v-if="!loading">
        <div v-for="project in projects">
            <router-link :to="{name: 'project-detail', params: {id: parseInt(project.id)}}">
                {{ project.title }}
            </router-link>
        </div>
    </div>
    <div v-else>
        Loading ...
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {GET_PROJECTS_LIST} from "../store/modules/portfolio/actions";

    export default {
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

<style scoped>

</style>