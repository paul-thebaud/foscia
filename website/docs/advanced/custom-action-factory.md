---
sidebar_position: 70
description: Making your own action factory.
---

# Custom action factory

:::tip What you'll learn

-   Creating a custom action factory

:::

As mentioned in the
[implementations guide presentation](/docs/advanced/implementations/presentation),
any action will require some dedicated features through dependencies.

When using an action factory blueprint, all those dependencies are initialized
automatically, and you may only configure it. This is quick and simple, but do
not fit custom implementations or full tree-shaking needs.

## Replacing some dependencies

Sometimes, you may need to only replace an overwritten dependency (such as a
customized version of the `JsonRestDeserializer`). Admitting you have
an extended version of this deserializer like:

```javascript title="action/customDeserializer.js"
export default class CustomDeserializer extends JsonRestDeserializer {
  // ...your overwrite...
}
```

You are able to keep using the default blueprint factory and only replace some
dependency by instantiating your action manually:

```javascript title="action.js"
import { makeJsonRest } from 'func-client/blueprints';
import { context } from 'func-client/core';
import CustomDeserializer from './action/customDeserializer';

// Note that we are not using the exported action function,
// but the raw Action class.
const { Action, cache, registry, adapter, serializer } = makeJsonRest({
  baseURL: 'https://example.com/api/v1',
});

const deserializer = new CustomDeserializer();

// We are now manually declaring our action factory
// with the proper dependencies injection.
export default function action() {
  return new Action().use(context({
    cache, registry, adapter, deserializer, serializer,
  }))
}
```

## Writing your own factory

For more complex requirements, like with custom implementations, you should
use a custom action factory from scratch.

When using a custom action factory, all those dependencies are initialized and
attached to your actions manually. This gives you a lot of control over which
dependencies are imported, instantiated and attached, thus reducing your
production bundle if you are removing unused dependencies.

Here is an example of a custom action factory (in fact, it is more or less the
`makeJsonRest` factory function):

```javascript title="action.js"
import {
    coreExtensions,
    crudExtensions,
    jsonRestExtensions,
    makeCache,
    makeRegistry,
} from 'func-client/blueprints';
import { context, makeAction } from 'func-client/core';
import {
    JsonRestAdapter,
    JsonRestDeserializer,
    JsonRestSerializer,
} from 'func-client/jsonrest';

const cache = makeCache();
const registry = makeRegistry();
const adapter = new JsonRestAdapter({ baseURL: 'https://example.com/api' });
const deserializer = new JsonRestDeserializer();
const serializer = new JsonRestSerializer();
const Action = makeAction({
    ...coreExtensions,
    ...crudExtensions,
    ...jsonRestExtensions,
});

export default function action() {
    // Prepare the context of each new action to
    // use all dependencies.
    return new Action().use(
        context({
            cache,
            registry,
            adapter,
            deserializer,
            serializer,
        }),
    );
}
```

Writing your own action factory is useful, because you may remove the
dependencies you are not using. As an example, if you are never making create or
update action on instances, those are never serialized, and you won't need the
serializer dependency. Removing it will reduce your bundle size.

:::caution

When an action enhancer/runner requires a dependency, FuncClient will throw an
exception if this dependency is not available in the context. You may remove
useless dependencies which you are not using for now.

But, be careful! Removing some dependencies may have an invisible impact! As an
example, absence of the cache may not throw an exception, but will allow
multiple instances of the same record to coexist.

:::

Here is a concrete example of a custom action factory with read-only
capabilities (we won't ever send a record to our data source). In it, we are not
using the `serializer` dependency, and we are only importing the
`readExtensions` extensions pack.

```javascript title="action.js"
import {
    coreExtensions,
    readExtensions,
    jsonRestExtensions,
    makeCache,
    makeRegistry,
} from 'func-client/blueprints';
import { context, makeAction } from 'func-client/core';
import { JsonRestAdapter, JsonRestDeserializer } from 'func-client/jsonrest';

const cache = makeCache();
const registry = makeRegistry();
const adapter = new JsonRestAdapter({ baseURL: 'https://example.com/api' });
const deserializer = new JsonRestDeserializer();
const Action = makeAction({
    ...coreExtensions,
    ...readExtensions,
    ...jsonRestExtensions,
});

export default function action() {
    return new Action().use(
        context({
            cache,
            registry,
            adapter,
            deserializer,
        }),
    );
}
```
