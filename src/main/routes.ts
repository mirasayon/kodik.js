export const apiEndpoints = {
    qualitiesV2: "qualities/v2",
    translationsV2: "translations/v2",
    countries: "countries",
    genres: "genres",
    list: "list",
    qualities: "qualities",
    search: "search",
    translations: "translations",
    years: "years",
} as const;
export type apiEndpoints = (typeof apiEndpoints)[keyof typeof apiEndpoints];

