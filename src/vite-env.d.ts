/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GOOGLE_MAP_API_KEY: string;
  readonly VITE_APP_MAP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
