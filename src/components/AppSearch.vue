<script>
import { storeFilm } from "../store";
import { storeSeries } from "../store";

export default {
  data() {
    return {
      storeFilm,
      storeSeries,
    };
  },
};
</script>

<template>
  <div>
    <button @click="$emit('performSearch')">Cerca</button>
    <input type="search" placeholder="cerca film e serie" v-model.trim:films="storeFilm.searchText"
      v-model.trim:series="storeSeries.searchText" />
  </div>
</template>

<style lang="scss" scoped>
button {
  height: 2rem;
  width: 3rem;
}

input {
  height: 2rem;
  width: 12rem;
  padding-left: 0.5rem;
}
</style>