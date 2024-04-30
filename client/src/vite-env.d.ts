/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_SERVER_BASEURL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
