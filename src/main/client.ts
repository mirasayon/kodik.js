import type * as Ts from "../interfaces/index.js";
import { apiEndpoints } from "./routes.js";
import { KodikApiClientError } from "./errors.js";
import type { FetchLike, KodikApiClientOptions } from "./types.js";

export class ApiClient {
    static readonly DEFAULT_API_URL = "https://kodikapi.com" as const;
    private readonly kodikApiUrl: typeof ApiClient.DEFAULT_API_URL | (string & {});
    private readonly api_token: string;
    private readonly _fetch: FetchLike;

    constructor({ token, kodikApiUrl, refineFetch }: KodikApiClientOptions) {
        if (!token) {
            throw new Error("No Api Token provided");
        }
        this.kodikApiUrl = kodikApiUrl ?? ApiClient.DEFAULT_API_URL;
        this.api_token = token;
        this._fetch = refineFetch ?? globalThis.fetch;
    }
    private _processRes = async (res: Response): Promise<any> => {
        if (res.headers.get("content-type") !== "application/json") {
            throw new KodikApiClientError(`invalid response (expected content-type application/json, but got ${res.headers.get("content-type")})`);
        }
        const json = await res.json();
        if (typeof json !== "object") {
            throw new KodikApiClientError(`expected json as an object, but got a ${typeof json}`);
        }
        if ("error" in json) {
            throw new KodikApiClientError(json.error as string);
        }
        return json;
    };
    countries = async (params: Ts.CountriesParams): Promise<Ts.CountriesResponse> => {
        const url = new URL(
            `${apiEndpoints.countries}?${new URLSearchParams({
                token: this.api_token,
                ...(params as unknown as Record<string, string>),
            }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    genres = async (params?: Ts.GenresParams): Promise<Ts.GenresResponse> => {
        const url = new URL(
            `${apiEndpoints.genres}?${new URLSearchParams({ token: this.api_token, ...(params as unknown as Record<string, string>) }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };

    list = async (params?: Ts.ListParams): Promise<Ts.ListResponse> => {
        const url = new URL(
            `${apiEndpoints.list}?${new URLSearchParams({ token: this.api_token, ...(params as unknown as Record<string, string>) }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };

    qualities = async (params?: Ts.QualitiesParams): Promise<Ts.QualitiesResponse> => {
        const url = new URL(
            `${apiEndpoints.qualities}?${new URLSearchParams({
                token: this.api_token,
                ...(params as unknown as Record<string, string>),
            }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    qualitiesV2 = async (params?: Ts.QualitiesV2Params): Promise<Ts.QualitiesV2Response> => {
        const url = new URL(
            `${apiEndpoints.qualitiesV2}?${new URLSearchParams({
                token: this.api_token,
                ...(params as unknown as Record<string, string>),
            }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    search = async (params?: Ts.SearchParams): Promise<Ts.SearchResponse> => {
        const url = new URL(
            `${apiEndpoints.search}?${new URLSearchParams({ token: this.api_token, ...(params as unknown as Record<string, string>) }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    translations = async (params?: Ts.TranslationsParams): Promise<Ts.TranslationsResponse> => {
        const url = new URL(
            `${apiEndpoints.translations}?${new URLSearchParams({
                token: this.api_token,
                ...(params as unknown as Record<string, string>),
            }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    translationsV2 = async (params?: Ts.TranslationsV2Params): Promise<Ts.TranslationsV2Response> => {
        const url = new URL(
            `${apiEndpoints.translationsV2}?${new URLSearchParams({
                token: this.api_token,
                ...(params as unknown as Record<string, string>),
            }).toString()}`,
            this.kodikApiUrl,
        );
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
    years = async (params?: Ts.YearsParams): Promise<Ts.YearsResponse> => {
        const sq = new URLSearchParams({ token: this.api_token, ...(params as unknown as Record<string, string>) });
        const url = new URL(`${apiEndpoints.years}?${sq.toString()}`, this.kodikApiUrl);
        const res = await this._fetch(url);
        return await this._processRes(res);
    };
}
