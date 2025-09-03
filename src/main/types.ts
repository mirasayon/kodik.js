import type { OptionalParameter } from "../interfaces/util-types.js";
export type * from "../interfaces/index.js";
export type FetchLike = (url: URL) => Promise<Response>;
export type KodikApiClientOptions = {
    /**
     * Ваш токен для выполнения запросов к API.
     *
     * **Обязательный параметр**
     *
     *  @default undefined
     */
    token: string;
    /**
     * Вы можете передать сюда изменёный URL для выполнения запросов. Например, с измененым протоколом
     *
     * По умолчанию будет исползоваться URL c HTTP***S*** протоколом: `https://kodikapi.com`.
     *
     * Но если вы хотите поменять это (например исползовать HTTP), то просто перепишите как `http://kodikapi.com`
     * @default "https://kodikapi.com"
     */
    kodikApiUrl?: OptionalParameter<string>;
    /**
     * Пользовательская функция для выполнения HTTP-запросов.
     *
     * По умолчанию используется стандартная `fetch()` функция который есть и в [браузере](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) и в сервере ([Node.js](https://nodejs.org/en/learn/getting-started/fetch))
     *
     * Можно передать собственную реализацию для своих нужд, например для кэширования или для использования другой библиотеки HTTP-клиента.
     *
     * Например, в веб приложении [`Next.js`](https://nextjs.org/) стандартная `fetch()` функция (только в серверной части, в браузере `fetch` останется обычным) переопределятся и добавляютя дополнителные параметры типа [`{ next: { revalidate: 3600 } }`](https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options) или `{ cache: 'force-cache' })`
     * В таком случае, вам стоит передать свою реализацию:
     *
     * **Пример исползования в `Next.js`:**
     * ```ts
     * {
     *    refineFetch: (url) => fetch(url, { next: { revalidate: 3600 } }),
     *    ...
     * }
     * ```
     *
     * @default globalThis.fetch
     */
    refineFetch?: OptionalParameter<FetchLike>;
};

