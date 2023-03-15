---
sidebar_position: 4
description: Available actions extensions.
---

# Actions extensions

Foscia provides multiple extension packs, which contains many enhancers or
runners to integrate into your action to get
[builder pattern style calls](/docs/actions#extensions).

## Starter packs

### `jsonApiStarterExtensions`

Combination of:

-   [`coreExtensions`](#coreextensions)
-   [`crudExtensions`](#crudextensions)
-   [`hooksExtensions`](#hooksextensions)
-   [`httpExtensions`](#httpextensions)
-   [`jsonApiExtensions`](#jsonapiextensions)

### `jsonRestStarterExtensions`

Combination of:

-   [`coreExtensions`](#coreextensions)
-   [`crudExtensions`](#crudextensions)
-   [`hooksExtensions`](#hooksextensions)
-   [`httpExtensions`](#httpextensions)
-   [`jsonRestExtensions`](#jsonrestextensions)

## Common packs

### `coreExtension`

-   [`when`](/docs/api/actions-enhancers#when)
-   [`forModel`](/docs/api/actions-enhancers#formodel)
-   [`forInstance`](/docs/api/actions-enhancers#forinstance)
-   [`forId`](/docs/api/actions-enhancers#forid)
-   [`find`](/docs/api/actions-enhancers#find)
-   [`include`](/docs/api/actions-enhancers#include)
-   [`target`](/docs/api/actions-enhancers#target)
-   [`context`](/docs/api/actions-enhancers#context)

### `crudExtension`

Combination of:

-   [`readExtension`](#readextension)
-   [`writeExtension`](#writeextension)

### `readExtension`

-   [`all`](/docs/api/actions-runners#all)
-   [`one`](/docs/api/actions-runners#one)
-   [`oneOrFail`](/docs/api/actions-runners#oneorfail)
-   [`oneOrCurrent`](/docs/api/actions-runners#oneorcurrent)
-   [`oneOr`](/docs/api/actions-runners#oneor)
-   [`none`](/docs/api/actions-runners#none)
-   [`raw`](/docs/api/actions-runners#raw)
-   [`rawUsing`](/docs/api/actions-runners#rawusing)
-   [`cached`](/docs/api/actions-runners#cached)
-   [`cachedOrFail`](/docs/api/actions-runners#cachedorfail)
-   [`cachedOr`](/docs/api/actions-runners#cachedor)

### `writeExtension`

-   [`create`](/docs/api/actions-enhancers#create)
-   [`update`](/docs/api/actions-enhancers#update)
-   [`save`](/docs/api/actions-enhancers#save)
-   [`destroy`](/docs/api/actions-enhancers#destroy)
-   [`instanceData`](/docs/api/actions-enhancers#instancedata)

### `hooksExtension`

-   [`onPreparing`](/docs/api/actions-enhancers#onpreparing)
-   [`onRunning`](/docs/api/actions-enhancers#onrunning)
-   [`onSuccess`](/docs/api/actions-enhancers#onsuccess)
-   [`onError`](/docs/api/actions-enhancers#onerror)
-   [`onFinally`](/docs/api/actions-enhancers#onfinally)

## HTTP packs

### `httpExtension`

-   [`makeGet`](/docs/api/actions-enhancers#makeget)
-   [`makePost`](/docs/api/actions-enhancers#makepost)
-   [`makePut`](/docs/api/actions-enhancers#makeput)
-   [`makePatch`](/docs/api/actions-enhancers#makepatch)
-   [`makeDelete`](/docs/api/actions-enhancers#makedelete)
-   [`makeRequest`](/docs/api/actions-enhancers#makerequest)
-   [`param`](/docs/api/actions-enhancers#param)
-   [`abortSignal`](/docs/api/actions-enhancers#abortsignal)

## JSON:API packs

### `jsonApiExtension`

-   [`filterBy`](/docs/api/actions-enhancers#filterby)
-   [`fields`](/docs/api/actions-enhancers#fields)
-   [`fieldsFor`](/docs/api/actions-enhancers#fieldsfor)
-   [`sortBy`](/docs/api/actions-enhancers#sortby)
-   [`sortByDesc`](/docs/api/actions-enhancers#sortbydesc)
-   [`paginate`](/docs/api/actions-enhancers#paginate)

## REST packs

### `restExtension`

No enhancers/runners available for now in this extension.
