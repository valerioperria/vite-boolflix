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
    <input
      type="search"
      placeholder="cerca film e serie"
      v-model.trim:films="storeFilm.searchText" 
      v-model.trim:series="storeSeries.searchText"
    />
    <button @click="$emit('performSearch')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped></style>