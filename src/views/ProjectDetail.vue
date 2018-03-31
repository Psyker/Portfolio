<template>
    <div v-if="!loading">
        {{activeProject.title}}
    </div>
    <div v-else>
        <loader :loading="loading"/>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {GET_PROJECT} from "../store/modules/portfolio/actions";
    import Loader from "../components/Loader";
    export default {
        components: {Loader},
        name: "project-detail",
        data() {
            return {
                loading: true
            }
        },
        computed: {
            ...mapState(
                'portfolio', [
                    'activeProject'
                ]
            )
        },
        methods: {
            ...mapActions(
                'portfolio', [
                    GET_PROJECT
                ]
            )
        },
        props: {
            id: {type: Number, required: true}
        },
        async created() {
            await this[GET_PROJECT](this.id);
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>