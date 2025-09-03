import { ApiClient } from "../dist/main/client.js";

// Создание клиента
const client = new ApiClient({
    token: process.env.KODIK_API_TOKEN!,
    refineFetch: (url) => fetch(url),
});
const response = await client.search({
    limit: 1,
    types: ["anime-serial"],
    has_field: "shikimori_id",
    title: "Наруто",
});
const data = response.results[0] || null;
console.log(data);
// {
//   id: 'serial-16000',
//   type: 'anime-serial',
//   link: '//kodik.info/serial/16000/cc56d0ae4cb1000a98d09a0bce8f90a9/720p',
//   title: 'Тиби Наруто: Весна юности Рока Ли',
//   title_orig: 'Naruto SD: Rock Lee no Seishun Full-Power Ninden',
//   other_title: 'ЧИБИ Наруто - Весна Юности Рока Ли / Naruto Spin-Off: Rock Lee & His Ninja Pals',
//   translation: { id: 767, title: 'SHIZA Project', type: 'voice' },
//   year: 2012,
//   last_season: 1,
//   last_episode: 51,
//   episodes_count: 51,
//   kinopoisk_id: '679735',
//   imdb_id: 'tt2301807',
//   worldart_link: 'http://www.world-art.ru/animation/animation.php?id=386',
//   shikimori_id: '12979',
//   quality: 'HDTVRip 720p',
//   camrip: false,
//   lgbt: false,
//   blocked_countries: [],
//   blocked_seasons: {},
//   created_at: '2019-03-23T09:08:53Z',
//   updated_at: '2019-12-14T11:56:43Z',
//   screenshots: [
//     'https://i.kodik.biz/screenshots/seria/419212/1.jpg',
//     'https://i.kodik.biz/screenshots/seria/419212/2.jpg',
//     'https://i.kodik.biz/screenshots/seria/419212/3.jpg',
//     'https://i.kodik.biz/screenshots/seria/419212/4.jpg',
//     'https://i.kodik.biz/screenshots/seria/419212/5.jpg'
//   ]
// }

