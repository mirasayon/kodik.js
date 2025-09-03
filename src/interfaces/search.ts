import type { AlsoArray } from "./util-types.js";
import type {
    ApiResponseShape,
    EntityDataObject,
    FilterByExternalDatabase,
    CommonParams,
    TypeOfLocalization,
    SharedSearchListFields,
} from "./shared-types.js";

export interface SearchParams extends FilterByExternalDatabase, Omit<CommonParams, "sort">, SharedSearchListFields {
    title?: string;
    title_orig?: string;
    strict?: boolean;
    full_match?: boolean;
    id?: string;
    player_link?: string;
    kinopoisk_id?: number;
    imdb_id?: string;
    mdl_id?: string;
    worldart_animation_id?: number;
    worldart_cinema_id?: number;
    worldart_link?: string;
    shikimori_id?: number;
    prioritize_translations?: AlsoArray<TypeOfLocalization | string | number>;
    unprioritize_translations?: AlsoArray<TypeOfLocalization | string | number>;
    prioritize_translation_type?: TypeOfLocalization;
    season?: number;
    episode?: number;
}

export type SearchResponse = ApiResponseShape<EntityDataObject[]>;
