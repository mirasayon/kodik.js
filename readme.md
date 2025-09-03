<p align="center"><img src="./.github/kodik.js-logo.svg" alt="kodik.js logo"></p>

[![NPM version](https://img.shields.io/npm/v/kodik.svg?style=flat)](https://npmjs.com/package/kodik)
[![NPM downloads](https://img.shields.io/npm/dw/kodik.svg?style=flat)](https://npmjs.com/package/kodik)
[![donate](https://img.shields.io/badge/♥︎⋆˙⟡♥︎-support-BF36FF.svg?maxAge=2592000&style=flat)](https://github.com/mirasayon/donate)
[![install size](https://badgen.net/packagephobia/install/kodik)](https://packagephobia.now.sh/result?p=kodik)

Репозиторий проекта - [github.com/mirasayon/kodik.js](https://github.com/mirasayon/kodik.js)

Ссылка на NPM пакет - [npmjs.com/package/kodik](https://npmjs.com/package/kodik)

## Библиотека `kodik` - это обёртка над API [kodikapi.com](https://kodikapi.com)

Вы можете исползовать эту библиотеку и на клиенте и на сервере

Поддерживается Node.js версии 18 и выше

Поддерживает работу в альтернативных рантаймах JS как Deno, Bun

Библиотека написана только на модулях ESM ([Подробнее о ESM](https://nodejs.org/api/esm.html))

## Установка

Если вы исползуете стандартный пакетный менеджер для Node.js - [NPM](https://docs.npmjs.com/about-npm):

```bash
npm i kodik
```

или если вы исползуете `yarn`:

```bash
yarn add kodik
```

если `pnpm`:

```bash
pnpm add kodik
```

## Использования

### Класс ApiClient

Класс `ApiClient` реализует все доступные эндпоинты из API.

**Документация по Kodik API: https://bd.kodik.biz/api/info**. (Авторизация обязательна)

> **Все методы будут называться так же как и названия эндпоинтов**.
>
> Например для роута `/list` используется медот `client.list({...})`,
> для роута `/search` используется медот `client.search({...})` и так далее.

### Параметры для создания клиента

-   `token` - Ваш токен для выполнения запросов к API.
    **Обязательный параметр**

-   `kodikApiUrl` - Вы можете передать сюда изменёный URL для выполнения запросов. Например, с измененым протоколом
    По умолчанию будет исползоваться URL c HTTP**S** протоколом: `https://kodikapi.com`.
    Но если вы хотите поменять это (например исползовать HTTP), то просто перепишите как `http://kodikapi.com`

-   `refineFetch` - Пользовательская функция для выполнения HTTP-запросов. По умолчанию используется стандартная `fetch()` функция который есть и в [браузере](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) и в сервере ([Node.js](https://nodejs.org/en/learn/getting-started/fetch)). Можно передать собственную реализацию для своих нужд, например для кэширования или для использования другой библиотеки HTTP-клиента. Например, в веб приложении [`Next.js`](https://nextjs.org/) стандартная `fetch()` функция (только в серверной части, в браузере `fetch` останется обычным) переопределятся и добавляютя дополнителные параметры типа [`{ next: { revalidate: 3600 } }`](https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options) или `{ cache: 'force-cache' })`
    В таком случае, вам стоит передать свою реализацию:

_Пример исползования в `Next.js`:_

```ts
    refineFetch: (url) => fetch(url, { next: { revalidate: 3600 } }),
```

## Использование клиента `ApiClient`

```ts
import { ApiClient } from "kodik";
// Создание API клиента
const client = new ApiClient({
    token: "ВАШ ТОКЕН",
});

const res = await client.search({
    limit: 1,
    types: ["anime-serial"],
    has_field: "shikimori_id",
    title: "Наруто",
});
const data = res.results[0] || null;
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
```

## Typescript

Все типы готовые и доступны из коробки

## Лицензия

[MIT](./license.md)
