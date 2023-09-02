interface Data {
  page: number;
  results: Results[];
}

interface CreditMovies {
  cast: Results[];
}

interface Results {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  genres?: Genres[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Credits {
  id: number;
  cast: Cast[];
}

interface Cast {
  adult: boolean;
  genre: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: number;
  popularity: number;
  profile_path: string;
  cast_id: number;
  chracter: string;
  credit_id: string;
  order: 0;
}

interface Genres {
  id: number;
  name: string;
}

interface Backdrops {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface Genres {
  genres: GenresItem[];
}

interface GenresItem {
  id: number;
  name: string;
}

interface People {
  results: Person[];
}

interface Person {
  adult: boolean;
  biography?: string;
  birthday?: string;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

interface KnownFor {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_account: number;
}
