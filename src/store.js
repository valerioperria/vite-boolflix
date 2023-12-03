import { reactive } from "vue";

// export const storeFilm = reactive({
//     films: [],
//     apiUrlFilm: "https://api.themoviedb.org/3/search/movie?api_key=a79c48f58b91e5f890bf08cee08c06dd",
//     searchText: "",
// });

// export const storeSeries = reactive({
//     series: [],
//     apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=a79c48f58b91e5f890bf08cee08c06dd",
//     searchText: "",
// });

export const store = reactive({
    series: [],
    films: [],
    baseApiurl: "https://api.themoviedb.org/3",
    apiKey: "a79c48f58b91e5f890bf08cee08c06dd",
    searchText: "",
})