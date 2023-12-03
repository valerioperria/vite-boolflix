<script>
import axios from "axios";
import { store } from "./store"
// import { storeFilm } from "./store";
// import { storeSeries } from "./store";
import AppHeader from "./components/AppHeader.vue";
// import AppFilmList from "./components/AppFilmList.vue";
// import AppSeriesList from "./components/AppSeriesList.vue";
import AppList from "./components/AppList.vue";

export default {
  data() {
    return {
      // storeFilm,
      // storeSeries,
      store,
    };
  },

  components: { AppHeader, AppList },

  methods: {
    // movieSearch() {
    //   console.log("Cerca");
    //   axios
    //     .get(this.storeFilm.apiUrlFilm, {
    //       params: {
    //         query: this.storeFilm.searchText,
    //       },
    //     })
    //     .then((resp) => {
    //       this.storeFilm.films = resp.data.results;
    //     });

    //   axios
    //     .get(this.storeSeries.apiUrlSeries, {
    //       params: {
    //         query: this.storeSeries.searchText,
    //       },
    //     })
    //     .then((resp) => {
    //       this.storeSeries.series = resp.data.results;
    //     });
    // },
    search() {
      const params = {
        api_key: this.store.apiKey,
        query: this.store.searchText,
      };

      axios
        .get(`${this.store.baseApiurl}/search/movie`, { params })
        .then((resp) => {
          this.store.films = resp.data.results;
        });

      axios
        .get(`${this.store.baseApiurl}/search/tv`, { params })
        .then((resp) => {
          this.store.series = resp.data.results;
        });
    },
  },
}
</script>

<template>
  <div class="container">
    <header>
      <AppHeader @performSearch="search" />
    </header>

    <main>
      <AppList />
    </main>

    <!-- <main>
      <section class="film">
        <AppFilmList />
      </section>
      <section class="series">
        <AppSeriesList />
      </section>
    </main> -->
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

  header {
    width: 100%;
  }

  main {
    padding: 1rem;
  }
}
</style>
