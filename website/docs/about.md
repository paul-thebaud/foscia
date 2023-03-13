---
sidebar_position: 0
---

# About

## What is Foscia?

**Foscia** is a simple functional programming oriented API client. It is
framework-agnostic and can integrate with any Web app using JavaScript or
TypeScript, and with any data source.

-   Modular, highly extensible and fully tree-shakable thanks to functional
    programming
-   Ready to use functions to integrate with any
    [JSON:API](https://jsonapi.org/) and JSON REST backends
-   Strongly typed everywhere, with generics typings on models, actions, etc.
-   Dependency free (HTTP adapters are based on
    [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
-   Free and open-source under
    [MIT license](https://opensource.org/licenses/MIT)
-   _Coming soon:_ Fully tested and documented

## Starting point

You may start to discover Foscia from different point of view.

-   [Install](/docs/installation) the package to use it immediately
-   [Get started](/docs/getting-started) using our simple guide about
    interacting with a JSON:API or JSON REST API
-   [Live test through the Playground](https://stackblitz.com/edit/foscia?file=playground.ts)
    using a fake JSON REST API
-   [Check out examples](/docs/category/examples) built with Foscia to know
    if the API fits your needs

## Structure of the documentation

-   [Installation](/docs/installation): installation instructions
-   [Getting started](/docs/getting-started): quick start guide with concrete
    examples
-   [Models](/docs/models): basic guides about models (definition, usage, hooks,
    etc.)
-   [Actions](/docs/actions): basic guides about actions (enhancers, runners,
    hooks, etc.)
-   [Advanced](/docs/category/advanced): advanced guides for special use case or
    customized behaviors
-   [Examples](/docs/category/examples): concrete examples of usage
-   [API](/docs/category/api): API reference and concrete functions listing and
    documentation
-   [FAQ](/docs/faq): interesting or frequently asked questions

## Structure of the package

-   [`foscia/blueprints`](/docs/api/foscia/modules/blueprints):
    pre-configured actions factories to quickly get started with Foscia
-   [`foscia/core`](/docs/api/foscia/modules/core): core features of
    Foscia (models, actions, hooks, etc.)
-   [`foscia/http`](/docs/api/foscia/modules/http): abstract HTTP
    adapter implementation
-   [`foscia/json`](/docs/api/foscia/modules/json): abstract raw JSON
    objects (de)serializer implementations
-   [`foscia/jsonapi`](/docs/api/foscia/modules/jsonapi):
    [JSON:API](https://jsonapi.org) implementation
-   [`foscia/jsonrest`](/docs/api/foscia/modules/jsonrest): JSON REST
    implementation
