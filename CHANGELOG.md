# Changelog

# [0.1.0-alpha.12](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.11...v0.1.0-alpha.12) (2023-07-04)


### Features

* **actions:** support loading relations using loaders ([bb60e42](https://github.com/paul-thebaud/foscia/commit/bb60e4229e32e9c4facf179492520fe57be90fbc)), closes [#8](https://github.com/paul-thebaud/foscia/issues/8)
* **actions:** add variadic enhancers support to action.use ([9a4fbbd](https://github.com/paul-thebaud/foscia/commit/9a4fbbdb23e1313eac2a834bf1f705de8eb789a5)), closes [#26](https://github.com/paul-thebaud/foscia/issues/26)

# [0.1.0-alpha.11](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.10...v0.1.0-alpha.11) (2023-06-13)


### Bug Fixes

* **models:** strong type support for readonly properties ([f94cc67](https://github.com/paul-thebaud/foscia/commit/f94cc670ff6e051f1b7ba5408a0a1d19f43ba8c9)), closes [#12](https://github.com/paul-thebaud/foscia/issues/12)

# [0.1.0-alpha.10](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.9...v0.1.0-alpha.10) (2023-06-11)


### Bug Fixes

* define correct typing on sortBy enhancer ([245305b](https://github.com/paul-thebaud/foscia/commit/245305bafafab78049a8aaa1686a386351fc7d65))

# [0.1.0-alpha.9](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.8...v0.1.0-alpha.9) (2023-06-11)


### Reverts

* "fix: strong type support for read only properties on models" ([57cb5f3](https://github.com/paul-thebaud/foscia/commit/57cb5f36caee6534650c727bf57290708476f731))

# [0.1.0-alpha.8](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.7...v0.1.0-alpha.8) (2023-06-11)


### Bug Fixes

* correctly detect dev env using process ([5dfc786](https://github.com/paul-thebaud/foscia/commit/5dfc78682845a43f346889c0f5bc3e122f7bc600))
* strong type support for read only properties on models ([067d2b8](https://github.com/paul-thebaud/foscia/commit/067d2b83a0f800d1c14acc3116e562b6b77e81fc)), closes [#12](https://github.com/paul-thebaud/foscia/issues/12)


### Features

* **actions:** add support for more parameters for sorts enhancers ([b072b34](https://github.com/paul-thebaud/foscia/commit/b072b3468439bf74ab826f6fd7e5f0e50566fc1a)), closes [#20](https://github.com/paul-thebaud/foscia/issues/20)
* IDs will now be managed as any classical model's props ([8a82e7f](https://github.com/paul-thebaud/foscia/commit/8a82e7fdf970e3626df1832b2c20e11f647e02a6)), closes [#22](https://github.com/paul-thebaud/foscia/issues/22)
* overridable IDs definition ([26dc2c6](https://github.com/paul-thebaud/foscia/commit/26dc2c644325f047865d930ef6ffef2157cf41e5)), closes [#21](https://github.com/paul-thebaud/foscia/issues/21)
* unit testing utilities and docs ([16e1d33](https://github.com/paul-thebaud/foscia/commit/16e1d33a1c2317eb1153a616c72f5fa98b2fa236)), closes [#16](https://github.com/paul-thebaud/foscia/issues/16)

# [0.1.0-alpha.7](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.6...v0.1.0-alpha.7) (2023-04-22)


### Bug Fixes

* fields for array spread when no previous fields ([5359efd](https://github.com/paul-thebaud/foscia/commit/5359efd4e0170ebba1dd97dbaeae506411613bc7))

# [0.1.0-alpha.6](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2023-04-06)


### Bug Fixes

* **actions:** enhancers compatilibity with forRelation contexts ([1152812](https://github.com/paul-thebaud/foscia/commit/1152812305158f3a9fc9f4263abb4b2f9ed5bad1))

# [0.1.0-alpha.5](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2023-04-04)


### Bug Fixes

* **models:** composables this context typing ([df5c042](https://github.com/paul-thebaud/foscia/commit/df5c0426689dddaabc7a9323fa814b43ba6ac037))

# [0.1.0-alpha.4](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2023-03-31)


### Bug Fixes

* **actions:** request body transformation ([ec9308c](https://github.com/paul-thebaud/foscia/commit/ec9308c5f12be9e1e0cf1b973fd786fb56fdc928))

# [0.1.0-alpha.3](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2023-03-31)


### Bug Fixes

* remove dts bundling ([95d2e56](https://github.com/paul-thebaud/foscia/commit/95d2e56c024719748654be3c3ccfade3d43233f3))

# [0.1.0-alpha.2](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.1...v0.1.0-alpha.2) (2023-03-28)


### Bug Fixes

* enhancers/runners with sub propagate extensions ([e36a3b7](https://github.com/paul-thebaud/foscia/commit/e36a3b7634547ba813ad343d2f90975224fc622f)), closes [#18](https://github.com/paul-thebaud/foscia/issues/18)


### Features

* rename catchWith runner ([4155972](https://github.com/paul-thebaud/foscia/commit/41559729854fa918da6ba1f74a920e4c7d0a1a55))


### BREAKING CHANGES

* signatures of multiple generics in enhancers/runners and actions types have changed
* catchWith runner is renamed to catchIf

# [0.1.0-alpha.1](https://github.com/paul-thebaud/foscia/compare/v0.1.0-alpha.0...v0.1.0-alpha.1) (2023-03-25)


### Features

* **actions:** new catchWith runner ([e6ac746](https://github.com/paul-thebaud/foscia/commit/e6ac74660e52c2e045cc438705c633e04ace56f8)), closes [#17](https://github.com/paul-thebaud/foscia/issues/17)

# 0.1.0-alpha.0 (2023-03-23)

Initial release.
