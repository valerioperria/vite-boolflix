<script>
export default {
  props: {
    film: Object,
  },
};
</script>

<template>
  <div>
    <h3>{{ film.title }}</h3>
    <p>{{ film.original_title }}</p>
    <p>{{ film.original_language }}</p>
    <p>{{ film.vote_average }}</p>
  </div>
</template>

<style lang="scss" scoped></style>