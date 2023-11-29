<script>
export default {
    props: {
        film: Object,
    },
    methonds: {

    }
};
</script>

<template>
    <div>
        <h3>{{ film.title }}</h3>
        <p>{{ film.original_title }}</p>

        <div v-if="film.original_language === 'it'">
            <img :src="`src/assets/img/${film.original_language}.png`" alt="">
        </div>

        <div v-else-if="film.original_language === 'en'">
            <img :src="`src/assets/img/${film.original_language}.png`" alt="">
        </div>

        <div v-else-if="film.original_language === 'fr'">
            <img :src="`src/assets/img/${film.original_language}.png`" alt="">
        </div>

        <div v-else-if="film.original_language === 'es'">
            <img :src="`src/assets/img/${film.original_language}.png`" alt="">
        </div>

        <div v-else>
            <p>{{ film.original_language }}</p>
        </div>

        <p>{{(Math.round(film.vote_average / 2))}}</p>
        

        <div>
            <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
