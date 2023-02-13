---
sidebar_position: 1
description: WIP
---

# Presentation

## Introduction

FuncClient actions might require one or many dependencies to work:

- **Cache** will store already fetched models instances. It will avoid
  multiple instances of the same record coexisting and allows you to retrieve
  already fetched record without making further requests to your data source.
- **Registry** is a map of types and associated model. It is used by
  deserializer to identify which models should map to which types.
- **Serializer** will serialize instances to the data source format.
- **Deserializer** will deserialize records to instances. It might use the
  cache and registry internally.
- **Adapter** create the exchange between your actions' built context and your
  data source. As an example, it will _translate_ the context to an HTTP
  request when using JSON:API or JSON REST implementations.

Some dependencies have a common implementation through the core and some may
have a specific implementation (HTTP, JSON:API, etc.).

## Core implementation

FuncClient propose core implementation for the `Cache` and `Registry` actions'
dependencies. Both classes are available through `func-client/core` namespace
and both factory are available through `func-client/blueprints`.

Those dependencies may be used with any implementations.

### Cache through `RefsCache`

<span className="chip chip--primary">Work in progress</span>

### Registry through `MapRegistry`

<span className="chip chip--primary">Work in progress</span>

## HTTP implementation

<span className="chip chip--primary">Work in progress</span>

## JSON implementation

<span className="chip chip--primary">Work in progress</span>

## JSON:API implementation

<span className="chip chip--primary">Work in progress</span>

## JSON REST implementation

<span className="chip chip--primary">Work in progress</span>
