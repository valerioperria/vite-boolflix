<script>
import { store } from "./store";
import AppSearch from "./components/Appsearch.vue";

export default {
  data() {
    return{
      store,
    };
  },
  components: {AppSearch,},
}
</script>

<template>
  <AppSearch />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
