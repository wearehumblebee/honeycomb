<h1 align="center" style="border-bottom: none;">Honeycomb by Humblebee 🐝</h1>
<p align="center">monorepository for `@humblebee` Open Source packages</p>
<p align="center">
  <a href="https://lerna.js.org/" rel="noopener noreferrer">
    <img alt="Lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
  </a>
  <a href="https://commitizen.github.io/cz-cli/" rel="noopener noreferrer">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <a href="https://www.conventionalcommits.org/en/v1.0.0/" rel="noopener noreferrer">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg">
  </a>
  <a href="https://www.contributor-covenant.org/" rel="noopener noreferrer">
    <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg">
  </a>
</p>

## About Humblebee

[Humblebee](https://www.humblebee.se/) is a digital product and service studio based in Göteborg, Sweden.

We believe in the values Open Source projects bring us on a daily basis, and those packages are our modest contribution.

We hope you will like them as much as we do :)

PS: we are always looking for talented and creative mindsets, if you are interested, [reach out to us](https://www.humblebee.se/contact) :)

## Technical decisions

The project is structured as a monorepository using [lerna](https://lerna.js.org/).
The code base is written in TypeScript and compiled to different JS formats (cjs, esm...) with [microbundle](https://www.npmjs.com/package/microbundle).

The "packages" subfolder contains published packages or shareable configurations
The "examples" subfolder contains illustrations

This setup is intended to support the following scenarios:

### TypeScript

> As a developer using TypeScript, can I benefit from type definitions from this library?

Yes: the project is written in TypeScript and types are statically exported at build time.

> As a developer using JavaScript, can I still use those packages?

Yes: the project is compiled to several formats (cjs, esm etc.) thanks to microbundle.
Just import what you need :)

### Tree-shaking

> I only need one component from the UI library, am I going to bundle the entire project if I import it?

Not necessarily: those packages are fully tree-shakeable and side-effects free.
As long as you **use a bundler supporting tree-shaking** (such as webpack, rollup etc.), you will get only what you need.

### Frameworks

> Are those packages only meant for React?

No: some packages of this project may have dependencies on React or other specific frameworks, but not all of them.
Refer to README.md file of each package if you want to know which dependencies they have.

## Contribute

Contributions are very welcome :)

Make sure to read the contribution guidelines in CONTRIBUTING.md
