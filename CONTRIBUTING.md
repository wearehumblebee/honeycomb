# Polestar Component Warehouse

## Contributions

Each package aims to provide features with relevant tests and documentation.

We build the external documentation with [Storybook](https://storybook.js.org/) to provide
an overall platform centralising the use-cases and best practices of each package.

This platform is built in the `packages/storybook` package.

## Reviews and approval

Bitbucket is used to host the source-code of those packages.

When you have a new feature or bugfix ready to be published,
open a Pull-Request against the relevant branch
("master", unless "next" you wish to target the "next" version with a pre-release).

## Commit

This project uses [husky](https://github.com/typicode/husky) with several hooks to lint,
prepare and validate commit messages.

When commits are pushed to the release branch,
lerna will parse messages to generate the semantic version to release accordingly,
as well as updating the CHANGELOG files of each released packages.

In order to make sure commit messages can be parsed by lerna,
this project uses [commitlint](https://commitlint.js.org/) as linter and [conventional commits](https://www.conventionalcommits.org/en/) as a convention.

To facilitate the respect of those conventions, you can take advantage
of a CLI prompt called [commitizen](https://commitizen.github.io/cz-cli/),
which can be used by running `git cz` (or `yarn commit`) instead of `git commit`.

## CI/CD

From the release branch(es) (master or next), an automated CI/CD pipeline will:

- install the dependencies
- run the tests
- build each packages
- define the version to release using lerna
- publish the version

Just follow its status on your branch and wait for approval there.
Default reviewers should also be available to help you.

## Modules Resolution & Path Mapping

This package includes different tools and configs:

- [typescript](https://www.typescriptlang.org/) to check types
- [microbundle](https://github.com/developit/microbundle) to compile libraries
- [parcel](https://parceljs.org/) or [webpack](https://webpack.js.org/) to build projects
- [jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/) to test librairies and projects
- [eslint](https://eslint.org/) together with [prettier](https://prettier.io/) to lint and format source code files
- [commitlint](https://commitlint.js.org) together with [commitizen](http://commitizen.github.io/cz-cli/) to streamline the versioning and CHANGELOG generation
- [husky](https://github.com/typicode/husky) to run scripts around git events

Combining TypeScript, bundlers, test runners and linters together in a monorepository structure is not straightforward as of today.

To simplify the paths references among the subfolders of different packages, as well as monorepository dependencies between different packages, some aliases are set:

- `@humblebee/{packageName}` should target the `packages/{packageName}/src` subfolder
- `src` should target the `src` subfolder of a given package
- `tests` should target the `tests` subfolder of a given package

Those aliases are defined:

- in local `tsconfig.json` files for TypeScript (including editors) and bundlers using TypeScript under the hood (`parcel` and `webpack`)
- in local bundlers config, for some packages (e.g. in the webpack config for Storybook: `packages/storybook-react/.storybook/main.js`)
- in `jest.config.js` files for Jest (usually just re-mapping tsconfig paths thanks to the [ts-jest recipe](https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping))

### Known Caveats

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) has a hard type interpretating those paths
  and the `import/no-unresolved` is therefore disabled (imports are already analyzed by TypeScript anyway)

## Creating a new package

To create a new package, you can either use the [lerna create](https://github.com/lerna/lerna/tree/master/commands/create#readme) command,
or just create a subfolder manually and configure it yourself.

We recommend to keep the same tooling to ensure consistency between packages and facilitate the maintenance,
but if you have a specific reason to setup something different,
this is also fine, as long as it is well documented.

Checklist:

- Add at least the required NPM scripts in the package.json (`build`, `dev`, `lint`, `lint:fix`, `dev`)
- Make sure to define the package as [side-effects free](https://webpack.js.org/guides/tree-shaking/) (as much as possible)
- Add a README.md file with relevant instructions

Do not hesitate to ask for help if you have issues with path mapping or anything
