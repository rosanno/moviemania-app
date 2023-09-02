import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_TMDB_API_KEY, REACT_APP_TMDB_BASE_URL } from "@env";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_TMDB_BASE_URL }),
  tagTypes: ["Movie"],
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    /** discover movie endpoint */
    getDiscoverMovies: builder.query<Data, any>({
      query: ({ type }) =>
        `3/discover/${
          type === "movie" ? "movie" : "tv"
        }?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** trending movie endpoint */
    getTrendingMovies: builder.query<Data, void>({
      query: () => `3/trending/movie/day?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** upcoming movie endpoint */
    getUpcomingMovies: builder.query<Data, void>({
      query: () => `3/movie/upcoming?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** movie details endpoint */
    getMovieDetails: builder.query<Results, any>({
      query: ({ id }) => `3/movie/${id}?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** credits endpoint */
    getMovieCredits: builder.query<Credits, any>({
      query: ({ id }) =>
        `3/movie/${id}/credits?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** similar movies endpoint */
    getSimilarMovies: builder.query<Data, any>({
      query: ({ id }) =>
        `3/movie/${id}/similar?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** popular people endpoint */
    getPopularPeople: builder.query<People, void>({
      query: () => `3/person/popular?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    getPersonDetails: builder.query<Person, any>({
      query: ({ id }) => `/3/person/${id}?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    getCreditMovies: builder.query<CreditMovies, any>({
      query: ({ id }) =>
        `/3/person/${id}/combined_credits?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    /** recommendation movies endpoint */
    getRecommendMovies: builder.query<Data, any>({
      query: ({ id }) =>
        `3/movie/${id}/recommendations?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),

    Search: builder.query<Data, any>({
      query: ({ query }) =>
        `3/search/movie?api_key=${REACT_APP_TMDB_API_KEY}&query=${query || ""}`,
    }),

    /** movie logo endpoint */
    getLogo: builder.query<{ backdrops: Backdrops[] }, any>({
      query: ({ id }) => ({
        url: `3/movie/${id}/images?api_key=${REACT_APP_TMDB_API_KEY}`,
      }),
    }),

    /** genres enpoint */
    getGenres: builder.query<Genres, void>({
      query: () => `3/genre/movie/list?api_key=${REACT_APP_TMDB_API_KEY}`,
    }),
  }),
});

export const {
  useGetDiscoverMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetPopularPeopleQuery,
  useGetPersonDetailsQuery,
  useGetCreditMoviesQuery,
  useGetRecommendMoviesQuery,
  useSearchQuery,
  useGetLogoQuery,
  useGetGenresQuery,
} = tmdbApi;
