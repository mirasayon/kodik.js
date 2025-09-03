import type {
    FilterByExternalDatabase,
    CommonParams,
    EntityDataObject,
    ApiResponseShapeWithPagination,
    SharedSearchListFields,
} from "./shared-types.js";

export interface ListParams extends FilterByExternalDatabase, Omit<CommonParams, "sort">, SharedSearchListFields {
    sort?: "year" | "created_at" | "updated_at" | "kinopoisk_rating" | "imdb_rating" | "shikimori_rating";
    order?: "asc" | "desc";
}

export type ListResponse = ApiResponseShapeWithPagination<EntityDataObject[]>;
