
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';


declare var self: ServiceWorkerGlobalScope;

/**
 * Применяем версию воркера немедленно для всех вкладок
 */
setCacheNameDetails({
  suffix: "v1",
  precache: "pre-cache",
  runtime: "runtime-cache",
});

clientsClaim();

/**
 * Получаем существующий кэш-манифест или устанавливаем пустой
 */
const manifest = self.__WB_MANIFEST || [];

/**
 * Устанавливаем манифест
 */
cleanupOutdatedCaches();
precacheAndRoute(manifest, {
  ignoreURLParametersMatching: [/.*/]
});

const navHandler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(navHandler, {
  denylist: [
    new RegExp('^/css/'),
    new RegExp('^/js/'),
    new RegExp('^/media/'),
    new RegExp('^/static/'),
  ],
});
registerRoute(navigationRoute);


/**
 * Устанавливаем стратегию получения ресурса шрифтов первоначально из кэша.
 * Время хранения 180 дней
 */
const CACHE_FONTS_NAME = `fonts-precache`;
const CACHE_OTHER_NAME = `other-precache`;


registerRoute( ({ request }) => {
  return request.destination === 'font';
}, new CacheFirst({
  cacheName: CACHE_FONTS_NAME,
  plugins: [
    new ExpirationPlugin ({
      maxEntries: 4,
      maxAgeSeconds: 180 * 24 * 60 * 60, // 180 дней
    }),
  ],
}));


registerRoute(
  ({ url }) => url.pathname.match(/(manifest.json)|(favicon.svg)/),
  new CacheFirst({
    cacheName: CACHE_OTHER_NAME,
    plugins: [
      new ExpirationPlugin ({
        maxEntries: 3,
        maxAgeSeconds: 24 * 60 * 60, // 1 день
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.pathname.match(/(env.js)/),
  new NetworkFirst({
    cacheName: CACHE_OTHER_NAME,
    plugins: [
      new ExpirationPlugin ({
        maxEntries: 3,
        maxAgeSeconds: 24 * 60 * 60, // 1 день
      }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting()
      .then(() => console.log('Все вкладки были обновлены'));
  }
});
