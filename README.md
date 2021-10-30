# spiderspace

> spiderspace is web prototypes

- [www.spiderspace.org](https://www.spiderspace.org)
- [spiderspace.github.io/about](https://spiderspace.github.io/about)
- [spiderspace.github.io/css-vars](https://spiderspace.github.io/css-vars)

## design

- create layouts, spaces, and documents with the same data structure
  - safe to share (e.g. sanitized style attributes) (currently insecure, relies on
    [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
    to block external network connections,
    and maybe we'll want to stick with this and add trusted domains as a UX affordance)
  - ultimately should this be a mdsvex+Svelte AST?

## todo

- sanitize element attributes - allowlist, start with `class`
  - ensure `src` is a relative or absolute url, and maybe allowlisted domains? or CSP?
- each iframe on the page eats at least one press of the back button, not good!
- sync `Iframe` header with navigation inside the iframe
- sort/dragndrop blocks
- 2d block view (add optional `x`/`y` properties or maybe `location.x/y`)
- make all blocks responsive
- let the iframes request their layout dimensions

## usage

```bash
# node >= 16.6
npm i
npm run dev
# or
gro dev # npm i -g @feltcoop/gro
```

## build

```bash
npm run build
# or
gro build
```

## deploy

```bash
npm run deploy
# or
gro deploy
```

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[Gro](https://github.com/feltcoop/gro) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[Rollup](https://github.com/rollup/rollup) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[@lukeed\/\*](https://github.com/lukeed)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
