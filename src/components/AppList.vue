<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCard },
}
</script>

<template>
    <section id="films">
        <div v-for="film in store.films" :key="film.id">
            <AppCard :object="film" />
        </div>
    </section>

    <section id="series">
        <div v-for="serie in store.series" :key="serie.id">
            <AppCard :object="serie" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
#films,
#series {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>