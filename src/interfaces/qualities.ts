import type { FilterByExternalDatabase, ApiResponseShape, CommonParams } from "./shared-types.js";

export interface QualitiesParams {}

export interface QualitiesV2Params extends FilterByExternalDatabase, CommonParams {}

export interface QualityEntity {
    title: string;
    count: number;
}

export type QualitiesResponse = Pick<QualityEntity, "title">[];
export type QualitiesV2Response = ApiResponseShape<QualityEntity[]>;
