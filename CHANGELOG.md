# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0-2](https://github.com/zyndex-drive/server/compare/v0.2.0-1...v0.2.0-2) (2021-09-10)


### Features

* **crypto:** add crypto helpers for passing state between apis ([ae5efa7](https://github.com/zyndex-drive/server/commit/ae5efa7a0545e7357db0a678e2caf91d2103beb9))
* **google/drive/drives:** add method for listing drives ([feb4211](https://github.com/zyndex-drive/server/commit/feb421140f965d61dc612c5bd0ae0434790e2bdd))
* **google/drive/files:** add methods for listing files (wip) ([1b00651](https://github.com/zyndex-drive/server/commit/1b006516facaa78260e3c29db6c9d2beeeeaae57))
* **google/drive:** implement global drive api request methods ([33a24ac](https://github.com/zyndex-drive/server/commit/33a24ac356c0935bc50cc0a86d6651ca3755ecec))
* **google/oauth:** implement google oauth route ([90596e4](https://github.com/zyndex-drive/server/commit/90596e422852d8ce96cfbee0ddbc9aa476c8e404))
* **google/oauth:** implement passing of states between calls ([3f5f692](https://github.com/zyndex-drive/server/commit/3f5f692c36510bc21a0aeb71235db7e09e4794c0))
* **google/token-resolver:** implement token resolver for google oauth to fetch tokens ([7483c74](https://github.com/zyndex-drive/server/commit/7483c74f7a333d96910f302f7b3900fb50b5bee0))
* **routes/auth:** add credentials route for accessing and updating credentials ([48563b3](https://github.com/zyndex-drive/server/commit/48563b381e97a162293fbf576de9d5ed833466e1))


### Build System

* **package.json:** add query-string for parsing query parameters ([b9dab1e](https://github.com/zyndex-drive/server/commit/b9dab1eb84fdec8018a94e45f42c96fbaec2d001))
* **tsconfig.json:** add more path resolvers ([1ca9e40](https://github.com/zyndex-drive/server/commit/1ca9e40f9c178e9edc36228f60d2471b8320ed7c))


### Code Refactoring

* **routes/auth:** move policies and roles inside auth route ([a332ed3](https://github.com/zyndex-drive/server/commit/a332ed3f84be5964752d8e17c547d9bcc9bd7e77))
* **routes/tokens:** move tokens route to login route ([32f7848](https://github.com/zyndex-drive/server/commit/32f7848fcc6e8f8cf43d61688e2b8fbdb2756801))
* **routes:** move roles and policies routes inside auth route ([7fc965e](https://github.com/zyndex-drive/server/commit/7fc965e16c2828873b53197b06176e5d3ed3ede5))

## [0.2.0-1](https://github.com/zyndex-drive/server/compare/v0.2.0-0...v0.2.0-1) (2021-08-22)

### Features

- **google-oauth:** finish google oauth setup completely ([a39ca10](https://github.com/zyndex-drive/server/commit/a39ca109556acc69c520f19b7ca9e5bc8bb20756))
- **helpers/uid:** add method for generating mongodb reference ids ([ab6d10e](https://github.com/zyndex-drive/server/commit/ab6d10efd850c88e3dfc59fd4dc091bb8b6a818e))

### Bug Fixes

- **models:** fix models schema from mongo error for \_id ([7de01a1](https://github.com/zyndex-drive/server/commit/7de01a150c6b6d5aa09611323317169ef447e4da))
- **types/objectid:** fix objectid ([80bfc48](https://github.com/zyndex-drive/server/commit/80bfc485ff1fc4d2b59ff53b9eaaf76276b1ddf2))

### Code Refactoring

- **routes:** refactor all routes to use new mongo id generator ([9ec17da](https://github.com/zyndex-drive/server/commit/9ec17da5295d899d5086001801a5969708a6afdf))
- **setup-files:** refactor all setup objects to use mongo id generator ([c5f2cfc](https://github.com/zyndex-drive/server/commit/c5f2cfc2b52d6976010a0f0797e385e3dfd0f1f7))

## [0.2.0-0](https://github.com/zyndex-drive/server/compare/v0.1.6-2...v0.2.0-0) (2021-08-15)

### ⚠ BREAKING CHANGES

- **models/tokens:** This Commit Changes the way of handling models

### Features

- **drive/scopes:** add drive scopes ([e1ce604](https://github.com/zyndex-drive/server/commit/e1ce604709a7f0ceccd564a780c7b30395dc30c4))
- **google/api:** add api.ts for centrally handling api routes ([72a4909](https://github.com/zyndex-drive/server/commit/72a49097d006257c66e0907a64145301b750983b))
- **google:** add function for revoking google oauth token ([8e93b7d](https://github.com/zyndex-drive/server/commit/8e93b7dcae997114e1a5ebb41b7897006664b7e6))
- **google:** add function for validating oauth token (to be done) ([6ec5e22](https://github.com/zyndex-drive/server/commit/6ec5e220008f56c37a9454471ed2cc9f38e01328))
- **google:** introduce complete google oauth flow ([0a6d8d8](https://github.com/zyndex-drive/server/commit/0a6d8d872fe0f5158c50eb0c8061a46a0d76f735))
- **google:** introduce refresh and access token generation helpers ([1b344bd](https://github.com/zyndex-drive/server/commit/1b344bd8e54950d17ba8f5e70a7c367f838cbcd2))
- **google:** write types for google oauth functions ([8ac4f78](https://github.com/zyndex-drive/server/commit/8ac4f78589e61b9b0d24c43232bfc8120be9eff6))
- **models/tokens:** introduce token collection ([e8c3344](https://github.com/zyndex-drive/server/commit/e8c3344217396d20ade6bd3cdbb18f79850b91a4))
- **routes/tokens:** introducing token endpoint for token operations ([3bdcf6f](https://github.com/zyndex-drive/server/commit/3bdcf6ffcaafad74c8e93637f897cdfe2a10984d))

### Others

- **package:** add scripts for major, minor and patch releases ([7ea2b16](https://github.com/zyndex-drive/server/commit/7ea2b1690588ffac91f700e9cdaa6f9b8baf31d9))

### Code Refactoring

- **google/endpoints:** remove google endpoints file ([5d63ea8](https://github.com/zyndex-drive/server/commit/5d63ea848745442aea52320ef33da93efcb7a18d))
- **routes/first-setup:** move tokens endpoint to main route ([ed3a25f](https://github.com/zyndex-drive/server/commit/ed3a25ff17aefdfe4f8799fb567829933a37a158))

### [0.1.6-2](https://github.com/zyndex-drive/server/compare/v0.1.6-1...v0.1.6-2) (2021-08-11)

### Features

- **google-oauth:** add google oauth generator handler for express ([e8a1b74](https://github.com/zyndex-drive/server/commit/e8a1b7455945f4937d1134010b5a3cc9a744f435))
- **routes/setup/token:** add router for first-setup/token routes ([f65ac4b](https://github.com/zyndex-drive/server/commit/f65ac4b7395efcb28dfeffcf83e570c523c2c6a0))
- **routes/setup:** add scope, token to main router config ([6983373](https://github.com/zyndex-drive/server/commit/6983373fa4b66dab3b18a552d366cbb7fb96b19f))

### Bug Fixes

- **models/credentials:** fix credentials type, add redirect_uri as required ([cac81dc](https://github.com/zyndex-drive/server/commit/cac81dc3e0692c36a03f5daaa590f18ee3e6d325))
- **package:** fix prepare script ([c4a5064](https://github.com/zyndex-drive/server/commit/c4a5064de92fe99b5ab31e20dc0c216f8747729d))

### CI

- **husky:** add linting for commit message ([80e4f05](https://github.com/zyndex-drive/server/commit/80e4f0555f7b111a2c4276d291f587d00c045c69))

### Code Refactoring

- **helpers/axios:** refactor axios export command to a single line ([1eaf420](https://github.com/zyndex-drive/server/commit/1eaf420c70975dc9213442de11b5ebc3ac2052dc))

### Others

- **tsconfig.json:** fix directory paths for module resolution ([1976f95](https://github.com/zyndex-drive/server/commit/1976f95765ee1d29a3d85bde47227614dd5bb9f2))

### [0.1.6-1](https://github.com/zyndex-drive/server/compare/v0.1.6-0...v0.1.6-1) (2021-08-06)

### Features

- **models/tokens:** introduce tokens collection for managing auth tokens ([fdfa176](https://github.com/zyndex-drive/server/commit/fdfa1764fb448729b5e23d8fb247c467bf00a010))

### Bug Fixes

- **models/serviceaccounts:** fix type ([4bd4a67](https://github.com/zyndex-drive/server/commit/4bd4a676fc0dd34e10ebc890191ef04da8d2a099))

### Others

- **verionrc:** change versionrc file to json file type ([2b551a3](https://github.com/zyndex-drive/server/commit/2b551a367721a5b2b2a08bba2ac9459c943a09ac))

### Code Refactoring

- **helpers/classes:** remove class based helpers ([0b3040e](https://github.com/zyndex-drive/server/commit/0b3040e8b48a442a645f2d4d9c7993196acece80))

### [0.1.6-0](https://github.com/zyndex-drive/server/compare/v0.1.5...v0.1.6-0) (2021-08-06)

### [0.1.5](https://github.com/zyndex-drive/server/compare/v0.1.4...v0.1.5) (2021-08-05)

### Others

- **package.json:** add mocha-html-writer ([5ed22e0](https://github.com/zyndex-drive/server/commit/5ed22e00ccc5c02724897a76b9457d2c88015d8c))

### Tests

- **test-report:** add a test report generator with mocha ([9af6f03](https://github.com/zyndex-drive/server/commit/9af6f0335d34ee2f23a45b834891c061d86a7816))

### [0.1.4](https://github.com/zyndex-drive/server/compare/v0.1.3...v0.1.4) (2021-08-03)

### Features

- **express:** write a 404 Response Handler ([ef16534](https://github.com/zyndex-drive/server/commit/ef16534191faa72eaade32605617d368a669fccf))
- **middlewares/cors.ts:** add Support for Local Development with respect to cors issue ([4363992](https://github.com/zyndex-drive/server/commit/4363992f262c26b9e5181c5d95bca97ad1ab2896))
- **models/credential:** write a new function for handling id checks ([35ebb5d](https://github.com/zyndex-drive/server/commit/35ebb5d94ca420e63de89551cc5d0f98affda706))
- **routes/first-setup:** add credentials and scope route handlers for first setup ([0a21cc0](https://github.com/zyndex-drive/server/commit/0a21cc0ee24599d480f8c3d4a1d4ad50693459d9))

### Bug Fixes

- **express.d.ts:** fix case in extended express type ([83b7b74](https://github.com/zyndex-drive/server/commit/83b7b747839547a6ad7346179ff5f3f05189e041))
- **models/scopes:** fix type for static method in scopes ([b462c0a](https://github.com/zyndex-drive/server/commit/b462c0aa3e72c2d97cd5be5f06889dcb5ec5407f))

### Others

- **.versionrc:** introduce .versionrc for changelogs ([ca05127](https://github.com/zyndex-drive/server/commit/ca05127b4997b420ef83eea15e437e8f2cc34578))
- **package.json:** fix single test script with proper requore ([8e3c38f](https://github.com/zyndex-drive/server/commit/8e3c38fddc45a64bf73a21b7a54d0805ba712eb8))
- **readme.md:** update Readme to add commitizen badge ([23711d9](https://github.com/zyndex-drive/server/commit/23711d96eddb3001418289e33108b0a5f75e36bf))

### Tests

- **first-setup:** fix test helpers and add new tests ([79a2830](https://github.com/zyndex-drive/server/commit/79a2830825d180aeffa2d824afa58c51aedd577f))
- **first-setup:** write tests for policies, roles, credentials route tests for first-setup ([8698bf9](https://github.com/zyndex-drive/server/commit/8698bf9ad9c1924c5c7d0c4011d9dc1ea7bf3840))

### [0.1.3](https://github.com/zyndex-drive/server/compare/v0.1.2...v0.1.3) (2021-08-02)

### Docs

- **readme.md:** update Readme ([b1187a2](https://github.com/zyndex-drive/server/commit/b1187a29d436a614b49a8fb3d3955b24d85f9dbd))
- **readme:** update Readme ([b6d7d18](https://github.com/zyndex-drive/server/commit/b6d7d18473d794deb8fae8d3d4cc813503838856))

### Others

- **package.json:** add a Stage Script ([e4098f4](https://github.com/zyndex-drive/server/commit/e4098f410ced939e04c512a533585b1b8f93cfd5))

### [0.1.2](https://github.com/zyndex-drive/server/compare/v0.1.1...v0.1.2) (2021-07-31)

### Features

- **changelog.md:** automate Changelog and Commit workflow ([956c28d](https://github.com/zyndex-drive/server/commit/956c28d2c2416afebecd456c716f06720e73b591))

### 0.1.1 (2021-07-31)

### Features

- **new-feature:** add a new-feature to our project ([c0f6fd7](https://github.com/zyndex-drive/server/commit/c0f6fd7d07f079b552e603760dd92dc8de33ce95))
