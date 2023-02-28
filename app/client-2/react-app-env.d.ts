/// <reference types="react" />
/// <reference types="react-scripts" />

interface Window {
  __WB_MANIFEST: any[];
}

interface ServiceWorkerGlobalScope {
  __WB_MANIFEST: any[];
}

declare var window: Window;
declare var self: ServiceWorkerGlobalScope;
