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
    <div>
        <h3>{{ serie.name }}</h3>
        <p>{{ serie.original_name }}</p>

        <div v-if="serie.original_language === 'it'">
            <img :src="`src/assets/img/${serie.original_language}.png`" alt="">
        </div>

        <div v-else-if="serie.original_language === 'en'">
            <img :src="`src/assets/img/${serie.original_language}.png`" alt="">
        </div>

        <div v-else-if="serie.original_language === 'fr'">
            <img :src="`src/assets/img/${serie.original_language}.png`" alt="">
        </div>

        <div v-else-if="serie.original_language === 'es'">
            <img :src="`src/assets/img/${serie.original_language}.png`" alt="">
        </div>

        <div v-else>
            <p>{{ serie.original_language }}</p>
        </div>

        <p>{{ serie.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>
