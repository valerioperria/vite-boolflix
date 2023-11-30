<script>
import axios from "axios";
import { storeFilm } from "./store";
import { storeSeries } from "./store";
import AppSearch from "./components/AppSearch.vue";
import AppFilmList from "./components/AppFilmList.vue";
import AppSeriesList from "./components/AppSeriesList.vue";

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

  components: { AppSearch, AppFilmList, AppSeriesList },

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
  <div class="container">
    <header>
      <h1>BOOLFLIX</h1>
      <AppSearch @performSearch="movieSearch" />
    </header>
    <main>
      <section class="film">
        <AppFilmList />
      </section>
      <section class="series">
        <AppSeriesList />
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";


.container {

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(64, 63, 63);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: black;
    width: 100%;

    h1 {
      color: crimson;
    }
  }

  main {
    padding: 1rem;

    .film,
    .series {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
