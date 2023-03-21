---
sidebar_position: 0
---

# About

## What is Foscia?

_Type safe, modular and intuitive API client._

**Foscia** is a simple API client built with functional programming in mind. It
is framework-agnostic and can integrate with any Web app using JavaScript or
TypeScript, and with any data source.

-   Modular, highly extensible and fully tree-shakable thanks to functional
    programming
-   Ready to use functions to integrate with any
    [JSON:API](https://jsonapi.org/) and REST backends
-   Type safe with generics typings on models, actions, etc.
-   Framework-agnostic and dependency free (HTTP adapters are based on
    [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
-   Free and open-source under
    [MIT license](https://opensource.org/licenses/MIT)
-   _Coming soon:_ Fully tested and documented

:::info

Foscia is currently in alpha stage. It may contain bugs and the API may change.
[**Please fill an issue**](https://github.com/paul-thebaud/foscia/issues) to
give your feedback.

:::

## Starting point

You may start to discover Foscia from different point of view.

-   [Install](/docs/installation) the package to use it immediately
-   [Get started](/docs/getting-started) using our simple guide about
    interacting with a JSON:API or REST API
-   [Live test through the Playground](https://stackblitz.com/edit/foscia?file=playground.ts)
    using a fake JSON REST API
-   [Check out examples](/docs/category/examples) built with Foscia to know if
    the API fits your needs

## Structure of the documentation

-   [Installation](/docs/installation): installation instructions
-   [Getting started](/docs/getting-started): quick start guide with concrete
    examples
-   [Core concepts](/docs/category/core-concepts): Core concepts of Foscia
    (models and actions)
-   [Guides](/docs/category/guides): guides for special use case or customized
    behaviors
-   [Examples](/docs/category/examples): concrete examples of usage
-   [Reference](/docs/category/reference): API reference and concrete functions
    listing and documentation
-   [Help](/docs/category/help): useful links and FAQ for Foscia

## Structure of the package

-   [`foscia/blueprints`](/docs/reference/api/modules/blueprints):
    pre-configured actions factories to quickly get started with Foscia
-   [`foscia/core`](/docs/reference/api/modules/core): core features of Foscia
    (models, actions, hooks, etc.)
-   [`foscia/http`](/docs/reference/api/modules/http): abstract HTTP adapter
    implementation
-   [`foscia/object`](/docs/reference/api/modules/object): abstract raw objects
    (de)serializer implementations
-   [`foscia/jsonapi`](/docs/reference/api/modules/jsonapi):
    [JSON:API](https://jsonapi.org) implementation
-   [`foscia/rest`](/docs/reference/api/modules/rest): REST implementation
