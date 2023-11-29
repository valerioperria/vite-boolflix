<script>
import { store } from "../store";
import AppFilmCard from "./AppFilmCard.vue";


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppFilmCard },
}
</script>

<template>
    <div v-for="film in store.films" :key="film.id">
        <AppFilmCard :film="film" />
    </div>
</template>

<style lang="scss" scoped></style>