import type { AlsoArray, AlsoNull } from "./util-types.js";

export type MaterialMoviesType = "foreign-movie" | "soviet-cartoon" | "foreign-cartoon" | "russian-cartoon" | "anime" | "russian-movie";

export type MaterialSeriesType = "cartoon-serial" | "documentary-serial" | "russian-serial" | "foreign-serial" | "anime-serial" | "multi-part-film";

export type TypeOfEntity = MaterialMoviesType | MaterialSeriesType;

export type ExternalDatabases = "kinopoisk_id" | "imdb_id" | "mdl_id" | "worldart_link" | "shikimori_id";

export type ExternalDatabaseGenresType = "kinopoisk" | "shikimori" | "mydramalist" | "all";

export type EntityRatingMpaa = "G" | "PG" | "PG-13" | "R" | "R+" | "Rx";

export type AnimeExactKind = "tv" | "movie" | "ova" | "ona" | "special" | "music" | "tv_13" | "tv_24" | "tv_48";

export type AnimeStatusesType = "anons" | "ongoing" | "released";

export type TypeOfLocalization = "voice" | "subtitles";

export interface Translation {
    id: number;
    title: string;
    type: TypeOfLocalization;
}

export interface FilterByExternalDatabase {
    countries?: AlsoArray<string>;
    genres?: AlsoArray<string>;
    anime_genres?: AlsoArray<string>;
    drama_genres?: AlsoArray<string>;
    all_genres?: AlsoArray<string>;
    duration?: string | number;
    kinopoisk_rating?: number | string;
    imdb_rating?: number | string;
    shikimori_rating?: number | string;
    mydramalist_rating?: number | string;
    actors?: AlsoArray<number | string>;
    directors?: AlsoArray<number | string>;
    producers?: AlsoArray<number | string>;
    writers?: AlsoArray<number | string>;
    composers?: AlsoArray<number | string>;
    editors?: AlsoArray<number | string>;
    designers?: AlsoArray<number | string>;
    operators?: AlsoArray<number | string>;
    rating_mpaa?: AlsoArray<EntityRatingMpaa>;
    minimal_age?: number | string;
    anime_kind?: AlsoArray<AnimeExactKind>;
    anime_status?: AlsoArray<AnimeStatusesType>;
    drama_status?: AlsoArray<AnimeStatusesType>;
    all_status?: AlsoArray<AnimeStatusesType>;
    anime_studios?: AlsoArray<string>;
    anime_licensed_by?: AlsoArray<string>;
}

export interface MaterialDataOfEntity {
    title?: string;
    anime_title?: string;
    title_en?: string;
    other_titles?: string[];
    other_titles_en?: string[];
    other_titles_jp?: string[];
    anime_license_name?: string;
    anime_licensed_by?: string[];
    anime_kind?: AnimeExactKind;
    all_status?: AnimeStatusesType;
    anime_status?: AnimeStatusesType;
    drama_status?: AnimeStatusesType;
    year?: number;
    tagline?: string;
    description?: string;
    anime_description?: string;
    poster_url?: string;
    anime_poster_url?: string;
    screenshots?: string[];
    duration?: number;
    countries?: string[];
    all_genres?: string[];
    genres?: string[];
    anime_genres?: string[];
    drama_genres?: string[];
    anime_studios?: string[];
    kinopoisk_rating?: number;
    kinopoisk_votes?: number;
    imdb_rating?: number;
    imdb_votes?: number;
    shikimori_rating?: number;
    shikimori_votes?: number;
    mydramalist_rating?: number;
    mydramalist_votes?: number;
    premiere_ru?: string;
    premiere_world?: string;
    aired_at?: string;
    released_at?: string;
    next_episode_at?: string;
    rating_mpaa?: EntityRatingMpaa;
    minimal_age?: number;
    episodes_total?: number;
    episodes_aired?: number;
    actors?: string[];
    directors?: string[];
    producers?: string[];
    writers?: string[];
    composers?: string[];
    editors?: string[];
    designers?: string[];
    operators?: string[];
}

export interface CommonParams {
    sort?: "title" | "count";
    types?: AlsoArray<TypeOfEntity>;
    year?: AlsoArray<number>;
    block_translations?: AlsoArray<number>;
    translation_id?: AlsoArray<number>;
    translation_type?: TypeOfLocalization;
    lgbt?: boolean;
    has_field?: AlsoArray<ExternalDatabases>;
    has_field_and?: boolean;
}

export interface EpisodeDataObject {
    title?: string;
    link: string;
    screenshots: string[];
}

export interface EpisodesObject {
    [episode: string | number]: string | EpisodeDataObject;
}

export interface SeasonObject {
    link: string;
    title?: string;
    episodes?: EpisodesObject;
}

export interface SeasonsObject {
    [season: string | number]: SeasonObject;
}

export interface BlockedSeasonsObject {
    [season: string | number]: "all" | string[];
}

export interface TranslationV1Object {
    id: number;
    title: string;
    type: TypeOfLocalization;
}

export interface EntityDataObject {
    id: string;
    title: string;
    title_orig: string;
    other_title: string;
    link: string;
    year: number;
    kinopoisk_id: string | number;
    imdb_id: string | number;
    mdl_id: string | number;
    worldart_link: string;
    shikimori_id: number;
    type: TypeOfEntity;
    quality: string;
    caprip: boolean;
    lgbt: boolean;
    translation: TranslationV1Object;
    created_at: string;
    updated_at: string;
    blocked_countries: string[];
    seasons?: SeasonsObject;
    last_season?: number;
    last_episode?: number;
    episodes_count?: number;
    blocked_seasons?: BlockedSeasonsObject | "all";
    screenshots: string[];
    material_data?: MaterialDataOfEntity;
}

export interface SharedSearchListFields {
    limit?: number;
    camrip?: boolean;
    with_seasons?: boolean;
    with_episodes?: boolean;
    with_episodes_data?: boolean;
    with_page_links?: boolean;
    not_blocked_in?: AlsoArray<string>;
    not_blocked_for_me?: boolean;
    with_material_data?: boolean;
    next?: string;
}

export interface ApiResponseShape<T> {
    time: string;
    total: number;
    results: T;
}

export interface ApiResponseShapeWithPagination<T> extends ApiResponseShape<T> {
    prev_page: AlsoNull<string>;
    next_page: AlsoNull<string>;
}
