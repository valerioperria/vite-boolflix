<script>
import axios from "axios";
import { store } from "./store";
import AppSearch from "./components/Appsearch.vue";
import AppFilmList from "./components/AppFilmList.vue";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(this.store.apiUrl).then((resp) => {
      this.store.films = resp.data.results;
    });
  },

  components: { AppSearch, AppFilmList },

  methods: {
    movieSearch() {
      console.log("Cerca");
      axios
        .get(this.store.apiUrl, {
          params: {
            query: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.films = resp.data.results;
        });
    },
  },
}
</script>

<template>
  <AppSearch @performSearch="movieSearch" />
  <AppFilmList />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
