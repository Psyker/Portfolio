<template>
    <transition name="fade-up">
        <div v-if="loading" class="loader-background">
            <img src="../assets/img/svg/circles.svg" alt="">
        </div>
    </transition>
</template>

<script>
    export default {
        name: "loader",
        props: {
            loading: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loader-background {
        display: flex;
        align-content: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.33);
        z-index: 10;
        img {
            width: 50px;
            height: 50px;
            margin: auto 0;
        }
    }
</style>