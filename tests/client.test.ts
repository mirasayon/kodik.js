import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ApiClient } from "kodik";
import { dirname, join } from "node:path";
import { loadEnvFile } from "node:process";
import { fileURLToPath } from "node:url";

const rootPath = dirname(fileURLToPath(import.meta.url));
loadEnvFile(join(rootPath, "..", ".env.test"));

//
export async function TestClient() {
    assert.ok(process.env.KODIK_API_TOKEN, "KODIK_API_TOKEN environment variable is required");

    describe("Test api client", () => {
        const client = new ApiClient({
            token: process.env.KODIK_API_TOKEN!,
            refineFetch: globalThis.fetch,
        });

        test("Find anime by search query", async () => {
            const parsedLink = await client.search({
                title: "Наруто 1",
                limit: 1,
                with_material_data: true,
                types: ["anime", "anime-serial"],
                has_field: "shikimori_id",
            });

            assert.strictEqual(parsedLink.results.length, 1, "Response objects length");
            assert.strictEqual(typeof parsedLink.results[0].title, "string", "Title should be a string");
        });

        test("List animes sorted by shikimori rating, only ongoings", async () => {
            const parsedLink = await client.list({
                limit: 20,
                with_material_data: true,
                types: ["anime", "anime-serial"],
                has_field: "shikimori_id",
                sort: "shikimori_rating",
                anime_status: "ongoing",
            });

            assert.strictEqual(parsedLink.results.length, 20, "Response objects length");
            assert.strictEqual(typeof parsedLink.results[0].title, "string", "Title should be a string");

            for (const anime of parsedLink.results) {
                if (anime.material_data?.anime_status) {
                    assert.strictEqual(anime.material_data.anime_status, "ongoing", "material_data.anime_status should be 'ongoing'");
                    assert.strictEqual(typeof anime.material_data.shikimori_rating, "number", "shikimori_rating should be a number");
                }
            }
        });
    });
}

