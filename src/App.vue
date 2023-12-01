<script>
import axios from "axios";
import { storeFilm } from "./store";
import { storeSeries } from "./store";
import AppHeader from "./components/AppHeader.vue";
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

  components: { AppHeader, AppFilmList, AppSeriesList },

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
    <AppHeader @performSearch="movieSearch" />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(64, 63, 63);
  overflow: auto;

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
