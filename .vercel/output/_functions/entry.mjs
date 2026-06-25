import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DV4-gy2u.mjs';
import { manifest } from './manifest_D1lD8aHw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/manufacturing/capsules.astro.mjs');
const _page7 = () => import('./pages/manufacturing/gel.astro.mjs');
const _page8 = () => import('./pages/manufacturing/gummies.astro.mjs');
const _page9 = () => import('./pages/manufacturing/powders.astro.mjs');
const _page10 = () => import('./pages/manufacturing/soft-gels.astro.mjs');
const _page11 = () => import('./pages/manufacturing/spoons.astro.mjs');
const _page12 = () => import('./pages/manufacturing.astro.mjs');
const _page13 = () => import('./pages/mockup.astro.mjs');
const _page14 = () => import('./pages/packaging-design.astro.mjs');
const _page15 = () => import('./pages/private-label.astro.mjs');
const _page16 = () => import('./pages/request-quote.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/manufacturing/capsules.astro", _page6],
    ["src/pages/manufacturing/gel.astro", _page7],
    ["src/pages/manufacturing/gummies.astro", _page8],
    ["src/pages/manufacturing/powders.astro", _page9],
    ["src/pages/manufacturing/soft-gels.astro", _page10],
    ["src/pages/manufacturing/spoons.astro", _page11],
    ["src/pages/manufacturing/index.astro", _page12],
    ["src/pages/mockup.astro", _page13],
    ["src/pages/packaging-design.astro", _page14],
    ["src/pages/private-label.astro", _page15],
    ["src/pages/request-quote.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "980ed281-ff0a-45e6-a3f7-3968414afd43",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
