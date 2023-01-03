<!-- auto header start -->
<div id="top" align="center">
  <h1>autorepo</h1>
  <a href="https://npmjs.com/package/autorepo">
    <img alt="npm" src="https://img.shields.io/npm/v/autorepo.svg">
  </a>
  <a href="https://github.com/autosoftoss/autorepo">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/autosoftoss/autorepo.svg">
  </a>
</div>

<br />

<blockquote align="center">Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/autosoftoss/autorepo">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/autosoftoss/autorepo?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!-- auto header end -->

## Installation

```sh
yarn add --dev autorepo
```

```sh
npm install --save-dev autorepo
```

```sh
pnpm add --save-dev autorepo
```

## Usage

In your `package.json` file:
```json
{
  "scripts": {
    "build": "auto build",
    "lint": "auto lint",
    "test": "auto test",
  },
  "eslintConfig": {
    "extends": "@autosoft/eslint-config"
  },
  "jest": {
    "preset": "@autosoft/jest-preset"
  },
  "npmpackagejsonlint": {
    "extends": "npm-package-json-lint-config-auto"
  }
}
```


<!-- auto footer start -->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/autorepo?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/autorepo.svg"></a></h2>

- [@autosoft/autorepo-api](https://www.npmjs.com/package/@autosoft/autorepo-api): API for Autorepo.


<br />

<h3>Dev Dependencies</h3>

- [@autosoft/eslint-config](https://www.npmjs.com/package/@autosoft/eslint-config): A base for projects that use ESLint.
- [@autosoft/jest-preset](https://www.npmjs.com/package/@autosoft/jest-preset): A base for projects that use Jest.
- [@autosoft/tsconfig](https://www.npmjs.com/package/@autosoft/tsconfig): A base for TypeScript projects.
- [autobin](https://www.npmjs.com/package/autobin): Prepare bin scripts for publishing.
- [npm-package-json-lint-config-auto](https://www.npmjs.com/package/npm-package-json-lint-config-auto): NPM Package.json Lint Config


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/autorepo.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!-- auto footer end -->
