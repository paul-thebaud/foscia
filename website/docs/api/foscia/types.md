---
sidebar_position: 5
description: Internal types description.
---

# Internal types

:::tip

Foscia uses some utilities types which are not exported to avoid polluting
your code or conflicting with your own utilities types. You may copy those types
as you want and use them in your project.

:::

## Arrayable

```typescript
type Arrayable<T> = T | T[];
```

## ArrayableVariadic

```typescript
export type ArrayableVariadic<T> = T[] | [T[]];
```

## Awaitable

```typescript
type Awaitable<T> = T | Promise<T>;
```

## Constructor

```typescript
type Constructor<T> = new (...args: any[]) => T;
```

## Dictionary

```typescript
type Dictionary<T = unknown> = { [K: string]: T };
```

## Optional

```typescript
export type Optional<T> = T | null | undefined;
```
