/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add other environment variables here
}

interface ImportMeta extends ImportMetaEnv {
  readonly env: {
    /** @deprecated Use `import.meta.env.PROD` instead */
    PROD: boolean;
    /** @deprecated Use `import.meta.env.DEV` instead */
    DEV: boolean;
    /** @deprecated Use `import.meta.env.MODE` instead */
    MODE: string;
    [key: string]: any;
  };
}
