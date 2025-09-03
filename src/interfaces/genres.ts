import type { FilterByExternalDatabase, ApiResponseShape, CommonParams, ExternalDatabaseGenresType } from "./shared-types.js";

export interface GenresParams extends FilterByExternalDatabase, CommonParams {
    genres_type?: ExternalDatabaseGenresType;
}

export interface GenresResponseObject {
    title: string;
    count: number;
}

export type GenresResponse = ApiResponseShape<GenresResponseObject[]>;
