import type { FilterByExternalDatabase, ApiResponseShape, CommonParams, TranslationV1Object } from "./shared-types.ts";

export interface TranslationsParams {}

export interface TranslationsV2Params extends FilterByExternalDatabase, Omit<CommonParams, "translation_id"> {}

export interface TranslationV2Object {
    id: number;
    title: string;
    count: number;
}

export type TranslationsResponse = TranslationV1Object[];
export type TranslationsV2Response = ApiResponseShape<TranslationV2Object[]>;
