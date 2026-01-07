import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-semibold text-brand-700">CLINIPLUS Docs</span>,
  project: {
    link: "https://cliniplus.com.br"
  },
  docsRepositoryBase: "https://github.com/cliniplus/cliniplus-telemedicina/blob/main",
  footer: {
    text: "CLINIPLUS Telemedicina"
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | CLINIPLUS Docs"
    };
  }
};

export default config;
