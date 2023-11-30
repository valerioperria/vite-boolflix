<script>
export default {
    props: {
        serie: Object,
    },
    methonds: {

    }
}
</script>

<template>
    <div class="card">
        <div class="details">
            <h3>Titolo: {{ serie.name }}</h3>
            <p>Titolo originale: {{ serie.original_name }}</p>

            <div v-if="serie.original_language === 'it'"><span>Lingua:
                    <img :src="`src/assets/img/${serie.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="serie.original_language === 'en'"><span>Lingua:
                    <img :src="`src/assets/img/${serie.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="serie.original_language === 'fr'"><span>Lingua:
                    <img :src="`src/assets/img/${serie.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="serie.original_language === 'es'"><span>Lingua:
                    <img :src="`src/assets/img/${serie.original_language}.png`" alt=""></span>
            </div>

            <div v-else>
                <p>Lingua: {{ serie.original_language }}</p>
            </div>

            <div>Voto:
                <i v-for="i in 5" class="fa-star"
                    :class="i <= (Math.round(serie.vote_average / 2)) ? 'fa-solid' : 'fa-regular'"></i>
                </div>

            <p>Overview: {{ serie.overview }}</p>
        </div>

        <div class="poster">
            <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 342px;
    height: 520px;
    background-color: black;
    margin: 0 1rem 1rem 0;

    .details {
        display: none;
        color: white;
        padding: 1rem;
        width: 100%;
        height: 100%;
        overflow: auto;

        h3,
        p,
        div,
        span {
            margin-bottom: 1rem;
        }

        i {
            color: gold;
        }
    }

    .poster {
        display: block;
    }

    &:hover {
        .details {
            display: block;
        }

        .poster {
            display: none;
        }
    }
}
</style>
