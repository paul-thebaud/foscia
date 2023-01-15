# Planned features

## General features

- [ ] **MAJOR** Method of composable/models this context broken.
- [ ] Action context should let any key be available.
- [ ] Generics should be clearly named.
- [ ] Add @tag, @category or @group to enhancers, runners, etc.
- [ ] Replace `extends ActionContext` by `{}` when available.
- [ ] Manage `lid` on models
- [ ] `useModelContext` and other contextual user with exception throwing
- [ ] Receipts docs (client side generated ID, "first" enhancer)
- [ ] Generic context (ID, etc.) should not be mentioned in ActionContext type
- [ ] Prettier on docs to quickly format code
- [ ] Model and relations metadata (missing, loading, etc.)
- [ ] Manage errors when users are bypassing types (relations not found, etc.)
- [ ] Tests using vitest

## Questions

- Extended services? All methods protected? Good?
- Configuration of services? Options object? Properties? Wrapped object? Methods
  to override options?
- Configuration of some behaviors (type serialization, type in URL, etc.): model
  config? Per service config?
- REST standard for classic relation? And polymorphic? Where to configure
  behavior?

## Documentation

Planned plan for documentation:

- Discover
- Installation
    - Yarn
    - PNPM
    - NPM
    - UMD?
    - Notes?
- Essentials
    - Getting started
    - Models
        - Model factory
        - Schema
            - Attributes
                - Configuration
                - Transform
            - Relations
        - Extensions
    - Best practices (model vs ES6 classes, extensions, etc.)
- Advanced
    - Configuration
        - Model configuration
    - Models composition
    - Custom transformers

## Relations interactions

Provide relations related helpers and actions enhancers/consumers.

### Read actions

Those enhancers and consumers will probably be available in the core.

```ts
// Fetch a relation value.
const user = await action()
  .use(relation(post, 'author'))
  .run(oneOrFail());

// Load a relation value on model.
await action().run(load(post, ['author', 'tags']));
await action().run(loadMissing(post, 'author', 'tags'));
```

### Write actions

Those consumer will probably be available in the core (with an update on the
serializer).

```ts
// Write relations with model instances.
await action().run(associate(post, 'author', user));
await action().run(dissociate(post, 'author'));
await action().run(attach(post, 'tags', [tag]));
await action().run(sync(post, 'tags', [tag]));
await action().run(detach(post, 'tags', [tag]));
```

## Relations inverse

Relations inverse allow to define an inverse value when updating a relation.

```ts
const post = await action()
  .use(find(Post, '<id>'))
  .use(include('comments'))
  .run(oneOrFail());
// post.comments[0].commentable is post.
```
