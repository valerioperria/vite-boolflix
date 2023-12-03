<!-- <script>
export default {
    props: {
        film: Object,
    },
    methonds: {

    }
};
</script>

<template>
    <div class="card">
        <div class="details">
            <h3>Titolo: {{ film.title }}</h3>
            <p>Titolo originale: {{ film.original_title }}</p>

            <div v-if="film.original_language === 'it'"><span>Lingua:
                    <img :src="`src/assets/img/${film.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="film.original_language === 'en'"><span>Lingua:
                    <img :src="`src/assets/img/${film.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="film.original_language === 'fr'"><span>Lingua:
                    <img :src="`src/assets/img/${film.original_language}.png`" alt=""></span>
            </div>

            <div v-else-if="film.original_language === 'es'"><span>Lingua:
                    <img :src="`src/assets/img/${film.original_language}.png`" alt=""></span>
            </div>

            <div v-else>
                <p>Lingua: {{ film.original_language }}</p>
            </div>

            <div>Voto:
                <i v-for="i in 5" class="fa-star"
                    :class="i <= (Math.round(film.vote_average / 2)) ? 'fa-solid' : 'fa-regular'"></i>
            </div>

            <p>Overview: {{ film.overview }}</p>
        </div>

        <div class="poster">
            <h3 v-if="film.poster_path === null">The Image is not Available</h3>
            <img v-else :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 342px;
    height: 510px;
    margin: 0 1rem 1rem 0;

    .details {
        display: none;
        color: white;
        background-color: black;
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
        background-color:  rgb(64, 63, 63);;

        h3 {
            color: white;
            text-align: center;
            padding-top: 8rem;
        }
       img{
        width: 342px;
        height: 510px
       };
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
</style> -->
