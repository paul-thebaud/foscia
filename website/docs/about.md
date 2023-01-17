---
sidebar_position: 0
---

# About

## What is FuncClient?

**FuncClient** is a simple functional programming oriented API client. It is
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

You may start to discover FuncClient from different point of view.

-   [Install](/docs/installation) the package to use it immediately
-   [Get started](/docs/getting-started) using our simple guide about
    interacting with a JSON:API or JSON REST API
-   [Check out examples](/docs/category/examples) built with FuncClient to know
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

-   [`func-client/blueprints`](/docs/api/func-client/modules/blueprints):
    pre-configured actions factories to quickly get started with FuncClient
-   [`func-client/core`](/docs/api/func-client/modules/core): core features of
    FuncClient (models, actions, hooks, etc.)
-   [`func-client/http`](/docs/api/func-client/modules/http): abstract HTTP
    adapter implementation
-   [`func-client/json`](/docs/api/func-client/modules/json): abstract raw JSON
    objects (de)serializer implementations
-   [`func-client/jsonapi`](/docs/api/func-client/modules/jsonapi):
    [JSON:API](https://jsonapi.org) implementation
-   [`func-client/jsonrest`](/docs/api/func-client/modules/jsonrest): JSON REST
    implementation
