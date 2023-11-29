<script>
import axios from "axios";
import { storeFilm } from "./store";
import { storeSeries } from "./store";
import AppSearch from "./components/Appsearch.vue";
import AppFilmList from "./components/AppFilmList.vue";
import AppSeriesList from "./components/AppSeriesList.vue"

export default {
  data() {
    return {
      storeFilm,
      storeSeries,
    };
  },
  created() {
    axios.get(this.storeFilm.apiUrlFilm).then((resp) => {
      this.storeFilm.films = resp.data.results;
    });
    axios.get(this.storeSeries.apiUrlSeries).then((resp) => {
      this.storeSeries.series = resp.data.results;
    });
  },

  components: { AppSearch, AppFilmList, AppSeriesList},

  methods: {
    movieSearch() {
      console.log("Cerca");
      axios
        .get(this.storeFilm.apiUrlFilm, {
          params: {
            query: this.storeFilm.searchText,
          },
        })
        .then((resp) => {
          this.storeFilm.films = resp.data.results;
        });

        axios
        .get(this.storeSeries.apiUrlSeries, {
          params: {
            query: this.storeSeries.searchText,
          },
        })
        .then((resp) => {
          this.storeSeries.series = resp.data.results;
        });
    },
  },
}
</script>

<template>
  <AppSearch @performSearch="movieSearch" />
  <h1>FILM</h1>
  <AppFilmList />
  <h2>TV SERIES </h2>
  <AppSeriesList/>
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
