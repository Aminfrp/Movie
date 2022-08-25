import { IGenres, IMovies } from "@/interfaces/movies";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  params: {
    api_key: "f62f750b70a8ef11dad44670cfb6aa57",
  },
});

const api = {
  fetchMovies: (page = 1 as number, releaseDate = null as string[] | null) =>
    instance.get<IMovies>("/discover/movie", {
      params: {
        page: page,
        "release_date.gte": releaseDate ? releaseDate[0] : undefined,
        "release_date.lte": releaseDate ? releaseDate[1] : undefined,
      },
    }),
  fetchGenres: () => instance.get<IGenres>("genre/movie/list"),
};

export default api;
