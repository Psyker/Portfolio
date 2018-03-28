<template>
    <div v-if="!loading">
        {{activeProject.title}}
    </div>
    <div v-else>
        Loading ...
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {GET_PROJECT} from "../store/modules/portfolio/actions";
    export default {
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