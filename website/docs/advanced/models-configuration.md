---
sidebar_position: 20
description: Configuring a model behavior.
---

# Models configuration

:::tip What you'll learn

-   Configuring a model through its factory or with a custom factory
-   Learning each available configuration option goal and usage

:::

## How to configure a model

You may configure your model when creating them through your factory `makeModel`
or when defining a custom factory such as described in the
[model composition guide](/docs/advanced/models-composition).

Inside a model creation:

```javascript title="post.js"
class Post extends makeModel(
    {
        type: 'posts',
        /* ...configuration */
    },
    {
        /* ...definition */
    },
) {}
```

Common to multiple models through a custom model factory:

```javascript title="makeModel.js"
import { attr, makeModelFactory, toDate } from 'func-client/core';

export default makeModelFactory(
    {
        /* ...definition */
    },
    {
        /* ...configuration */
    },
);
```

## Common

### Record type

When using the model factory `makeModel`, you have probably seen that the first
argument of the function is a string. This is the **type** of the current model.

It may be used for different purpose depending on the context:

-   Concatenate in a URL to target an API specific resource
-   Identify a record from an API/data source serialized data
-   Etc.

To define it, you should follow your data source convention. As an example, in a
JSON:API the resource types are defined in plural kebab case, such as
`blog-posts` or `comments`.

You may define the type as the only configuration of the model or as a
configuration property (if you want to define other properties):

```javascript title="post.js"
class Post extends makeModel('posts', {
    /* ...definition */
}) {}
// OR
class Post extends makeModel(
    { type: 'posts' },
    {
        /* ...definition */
    },
) {}
```

### Record path

The `path` is used to query the model. It defaults to the model's type.

In an HTTP API, it is used as the endpoint. In a SQL database, it would be the
table.

```javascript title="post.js"
class Post extends makeModel(
    {
        type: 'posts',
        path: 'blog-posts',
    },
    {
        /* definition */
    },
) {}
```

### Comparator and cloner

You may have noticed that FuncClient provide some model history features. Those
allow you to know which parts of a model instance changed since its retrieval
from the data source or interact with those changes, through
[some utilities functions](/docs/api/models-utilities): `changed`, `reset`, and
`syncOriginal`.

Currently, FuncClient won't clone any value when syncing the instance values (on
save, etc.) and will do a strict equal comparison to known if the value changed.

The following model configuration is equivalent to the default behavior of
FuncClient:

```javascript title="post.js"
class Post extends makeModel(
    {
        comparator: (newValue, prevValue) => nextValue === prevValue,
        cloner: (value) => value,
    },
    {
        /* definition */
    },
) {}
```

You may change those two functions to really clone values when syncing the
instance state. Keep in mind that:

-   Values might be any value your instance could contain, including complex
    object and even other model instance
-   Cloned values might be restored through `reset` utility
-   Making a real clone of a value without updating the comparator will break
    the history because of its default behavior

## HTTP

The following configuration options are specific to HTTP models (JSON:API, JSON
REST, etc.)

### Base URL

You may define a `baseURL` configuration option on your models. It will replace
the default base URL define on the adapter.

```javascript title="post.js"
class Post extends makeModel(
    {
        type: 'posts',
        baseURL: 'https://example.com/api/v2',
    },
    {
        /* ...definition */
    },
) {}
```
