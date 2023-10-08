---
sidebar_position: 20
description: Sharing common features across your models.
---

# Composing models

:::tip What you'll learn

-   Creating composables to share features across some of your models
-   Creating your own model factory with predefined features for all of your
    models

:::

Sometimes, you may want to share common features across your models. To solve
this, you may use one of the two solutions proposed by Foscia:

-   [Composition](#composition), to share features across some of your models
-   [Factory](#factory), to share features across all of your models

## Composition

When you need to share features across **some** of your models, you should use
composition.

The first step is to create a composable with the features you want to share.
This is done through `makeComposable` and uses the same syntax as `makeModel`.

The created composable will get its custom properties (e.g. `published` below)
rewritten to protect their descriptor. This allows using spread syntax when
using composable in other models' definition.

```javascript title="composables/publishable.js"
import { attr, makeComposable, toDate } from 'foscia/core';

export default makeComposable({
    publishedAt: attr(toDate({ nullable: true })),
    get published() {
        return !!this.publishedAt;
    },
});
```

The easiest way to use your composable is to object-spread it inside your
model's definition.

```javascript title="models/post.js"
import { makeModel } from 'foscia/core';
import publishable from '../composables/publishable';

export default class Post extends makeModel('posts', {
    ...publishable,
    /** post definition */
}) {}
```

You may also use the model `extends` method as follows:

```javascript title="models/post.js"
import { makeModel } from 'foscia/core';
import publishable from '../composables/publishable';

export default class Post extends makeModel('posts').extends(publishable) {}
```

:::caution

Please note that when using the object spread syntax, you won't be able to get a
correctly typed `this` context _inside the current definition object_ (it is
still available in next/previous definition or in class body). This is because
of an
[**issue due to a TypeScript limitation**](https://github.com/paul-thebaud/foscia/issues/6).

:::

## Factory

When you need to share features across **all** of your models, you should use a
custom model factory. It will replace the Foscia's `makeModel` function.

```javascript title="makeModel.js"
import { attr, makeModelFactory, toDate } from 'foscia/core';

export default makeModelFactory(
    {
        createdAt: attr(toDate()),
        updatedAt: attr(toDate()),
        get wasChangedSinceCreation() {
            return this.createdAt.getTime() === this.updatedAt.getTime();
        },
    },
    {
        /* base configuration */
    },
);
```

Once your factory is ready, you can use in replacement of the classical
`makeModel`, as it will have the same features.

```javascript
import makeModel from './makeModel';

export default class Post extends makeModel('posts', {
    /* definition */
}) {}
```
