<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <input
      type="search"
      placeholder="cerca film"
      v-model.trim="store.searchText"
    />
    <button @click="$emit('performSearch')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped></style>