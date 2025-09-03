import { describe, it, expect } from "vitest";
import { ApiClient } from "../dist/main/client.js";

describe("Test api client", () => {
    const client = new ApiClient({ token: process.env.KODIK_API_TOKEN!, refineFetch: globalThis.fetch });
    it("Find anime by search query", async () => {
        const parsedLink = await client.search({
            title: "Наруто 1",
            limit: 1,
            with_material_data: true,
            types: ["anime", "anime-serial"],
            has_field: "shikimori_id",
        });
        expect(parsedLink.results).length(1, "Response objects lenght");
        expect(parsedLink.results[0].title).toBeTypeOf("string");
    });

    it("List animes sorted by shikimori rating, only ongoings", async () => {
        const parsedLink = await client.list({
            limit: 20,
            with_material_data: true,
            types: ["anime", "anime-serial"],
            has_field: "shikimori_id",
            sort: "shikimori_rating",
            anime_status: "ongoing",
        });
        expect(parsedLink.results).length(20, "Response objects lenght");
        expect(parsedLink.results[0].title).toBeTypeOf("string");
        for (const anime of parsedLink.results) {
            if (anime.material_data?.anime_status) {
                expect(anime.material_data.anime_status).toBe("ongoing");
                expect(anime.material_data.shikimori_rating).toBeTypeOf("number");
            }
        }
    });
});

