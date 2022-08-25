import { IGenres, IMovies } from "@/interfaces/movies";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  params: {
    api_key: "f62f750b70a8ef11dad44670cfb6aa57",
  },
});

const api = {
  fetchMovies: () => instance.get<IMovies>("/discover/movie"),
  fetchGenres: () => instance.get<IGenres>("genre/movie/list"),
};

export default api;
