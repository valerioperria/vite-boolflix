import { reactive } from "vue";

export const store = reactive({
    films: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=a79c48f58b91e5f890bf08cee08c06dd&query",
    searchText: "",
})