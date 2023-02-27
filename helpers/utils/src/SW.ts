
interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}


interface IServiceWorker {
  appName: string;
  version: string;
  mode: 'offline-first' | 'online-first' | undefined;
  cacheAllRequests?: boolean;
  debug?: boolean;
}


class SW implements IServiceWorker {
  appName: string;
  version: string;
  mode: 'offline-first' | 'online-first' | undefined;
  cacheAllRequests?: boolean;
  debug?: boolean;

  constructor(props: Partial<IServiceWorker>) {
    this.appName = props?.appName ?? 'app';
    this.version = props?.version ?? '0.0.1';
    this.mode = props?.mode ?? 'offline-first';
    this.cacheAllRequests = props?.cacheAllRequests ?? true;
    this.debug = props?.debug ?? true;
  }

  getAppName () {
    return this.appName;
  }

  getVersion() {
    return this.version;
  }

  app() {
    return this.appName + '__v' + this.version;
  }

  install(resources: string[]) {

    self.addEventListener('install', (event: ExtendableEvent) => {
      if (this.debug) {
        console.log('installing', this.app() + '...');
      }

      if (typeof resources == 'object' && resources != null) {
        event.waitUntil(caches.open(this.app())
          .then((this_cache: Cache) => {
            return this_cache.addAll(resources);
          })
          .catch((ex) => {
            if (this.debug) {
              console.error('Failed to cache files: ', ex);
            }
          })
        );
      }
    });

    self.addEventListener('fetch',  (event: ExtendableEvent & FetchEvent) => {
      if (this.cacheAllRequests === true) {
        event.waitUntil(caches.open(this.app())
          .then((this_cache) => {
            return caches.match(event.request)
              .then((response: any) => {
                if ( ! response) {
                  return fetch(event.request).then(function (response) {
                    this_cache.put(event.request, response.clone());
                  });
                }
                else {
                  return response;
                }
              });
          })
        );
      }

      if (this.mode === 'offline-first') {
        event.respondWith(caches.match(event.request)
          .then((response: any) => {
            return response || fetch(event.request);
          })
          .catch ((ex) => {
            if (this.debug) {
              console.log('Failed to fetch installed files: ', ex);
            }
          })
        );
      }

      if (this.mode === 'online-first') {
        // @ts-ignore
        event.respondWith(fetch(event.request)
          .catch (() => {
            return caches.match(event.request);
          }));
      }
    });
  };
}

export default SW;

// }
//
//
//
//
// function Webonfire(conf = {
//   appname: 'app',
//   version: '1.0.0',
//   mode: 'offline-first',
//   cacheAllRequests: true,
//   debug: true
// }) {
//   var root = this;
//
//   this.install = function (resources) {
//     self.addEventListener('install', function (event) {
//       if (conf.debug) {
//         console.log('installing', root.app() + '...');
//       }
//       if (typeof resources != 'undefined') {
//         if (typeof resources == 'object' && resources != null) {
//           event.waitUntil(caches.open(root.app()).then(function (this_cache) {
//               return this_cache.addAll(resources);
//             }, function (ex) {
//               if (conf.debug) {
//                 console.error('Failed to cache files: ', ex);
//               }
//             })
//           );
//         }
//       }
//     });
//     self.addEventListener('fetch', function (event) {
//       if (conf.cacheAllRequests === true) {
//         event.waitUntil(caches.open(root.app()).then(function (this_cache) {
//             return caches.match(event.request).then(function (response) {
//               return response || fetch(event.request).then(function (response) {
//                 this_cache.put(event.request, response.clone());
//               });
//             });
//           })
//         );
//       }
//       if (conf.mode === 'offline-first' || conf.mode === '') {
//         event.respondWith(caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//           }).catch (function (ex) {
//             if (conf.debug) {
//               console.log('Failed to fetch installed files: ', ex);
//             }
//           })
//         );
//       }
//       if (conf.mode === 'online-first') {
//         event.respondWith(fetch(event.request).catch (function (ex) {
//           return caches.match(event.request);
//         }));
//       }
//     });
//   };
// }
// function splitApp(app, index = 'appname') {
//   details = app.split('__');
//   if (index == 'appname') {
//     return details[0];
//   }
//   if (index == 'version') {
//     return details[1];
//   }
// }
// Webonfire.getVersion = function (appname) {
//   return caches.keys().then(function (cacheNames) {
//     for (var i = cacheNames.length - 1; i >= 0; i--) {
//       if (appname === splitApp(cacheNames[i], 'appname')) {
//         return splitApp(cacheNames[i], 'version');
//       }
//     }
//   });
// };
// Webonfire.uninstall = function (appname) {
//   caches.keys().then(function (cacheNames) {
//     for (var i = cacheNames.length - 1; i >= 0; i--) {
//       if (appname === splitApp(cacheNames[i]), 'name') {
//         return cacheNames[i];
//       }
//     }
//     return 'none';
//   }).then(function (name) {
//     if (name == 'none') {
//       if (conf.debug) {
//         console.log('Application not found');
//       }
//     }
//     else
//     {
//       return caches.delete (name);
//     }
//   });
// };