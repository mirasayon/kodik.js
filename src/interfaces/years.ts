import type { FilterByExternalDatabase, ApiResponseShape, CommonParams } from "./shared-types.js";

export interface YearsParams extends FilterByExternalDatabase, Omit<CommonParams, "year"> {}

export interface YearsEntity {
    title: string;
    count: number;
}

export type YearsResponse = ApiResponseShape<YearsEntity[]>;
