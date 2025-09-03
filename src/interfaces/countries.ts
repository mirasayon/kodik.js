import type { FilterByExternalDatabase, ApiResponseShape, CommonParams } from "./shared-types.js";

export interface CountriesParams extends FilterByExternalDatabase, CommonParams {}

export interface CountriesResponseObject {
    title: string;
    count: number;
}

export type CountriesResponse = ApiResponseShape<CountriesResponseObject[]>;
