---
sidebar_position: 80
description: Writing tests when using Foscia.
---

# Testing

:::tip What you'll learn

-   Mocking action factory for unit tests
-   Writing expectation about ran contexts

:::

## Integration tests

Integration tests goal is to ensure separate parts of your software works
together.

When using Foscia, this probably means you want to check that your UI correctly
interact with a backend or database using Foscia.

**Therefore, Foscia does not provide any integration tests utilities, because
those tests should not mock or fake any Foscia behaviors.**

## Unit tests

Unit tests are focused on checking small and independent parts of your software.

This probably means you want to check functions which are interacting with a
backend or database using Foscia API.

The simplest way to write unit tests of parts of code using Foscia is to mock
your action factory and define expected results and contexts expectation.

Foscia provide a simple set of functions and objects to help you writing unit
tests with any testing framework (Jest, Vitest, etc.).

### Mocking action factory

You can mock your action factory using `mockAction` function. It is important to
just pass your action factory (`action`) and not its return value (`action()`),
because the mock will install on the function itself.

When mocking your action, Foscia is replacing the base factory function with a
proxy function which will built a proxy action instance. Each enhancer will
apply normally and make the context evolve, but when running the action it will
intercept the run to provide your mocked result.

```typescript title="test/actionMock.ts"
import { ActionFactoryMock, mockAction, unmockAction } from 'foscia/test';
import action from './action';

let actionMock: ActionFactoryMock;

beforeEach(() => {
    actionMock = mockAction(action);
});

afterEach(() => {
    unmockAction(action);
});

export default actionMock;
```

#### Making any action factory mockable

When using [blueprints action factories](/docs/getting-started#with-blueprints),
the action factory function is already a mockable function (a mock can be
installed on it) and you have nothing else to do.

If you are building your
[own action factory function](docs/guides/custom-action-factory), you can make
any factory function mockable using `makeActionFactoryMockable`:

```typescript title="action.ts"
function action() {
    // Your custom action factory...
    return new Action();
}

// This will return a new function which can be mocked.
export default makeActionFactoryMockable(action);
```

### Unit tests example

Here is a simple example of a function we will write tests for:

```typescript title="src/registerUser.ts"
import { create, fill, oneOrCurrent } from 'foscia/core';
import action from './action';
import User from './models/user';

export default function registerUser(
    email: string,
    acceptedTerms: boolean,
): Promise<User> {
    if (!acceptedTerms) {
        throw new Error('User did not accept terms and conditions of use.');
    }

    const user = fill(new User(), {
        email,
        acceptedTermsAt: new Date(),
    });

    return action().use(create(user)).run(oneOrCurrent());
}
```

#### Simple mock usage

In this simple example, we will go through basics features of action mocking
(e.g. mocking next results).

```typescript title="test/registerUser.test.ts"
import { fill } from 'foscia/core';
import User from '../src/models/user';
import registerUser from '../src/registerUser';
import actionMock from './actionMock';

test('should create user', async () => {
    const user = fill(new User(), {
        email: 'john.doe@example.com',
        acceptedTermsAt: new Date(),
    });

    actionMock.mockResult(user);

    const result = await registerUser('john.doe@example.com', true);

    expect(result).toStrictEqual(user);
});

test('should fail creating user with non accepted terms', async () => {
    const result = await registerUser('john.doe@example.com', true);

    expect(() =>
        registerUser('john.doe@example.com', true),
    ).rejects.toThrowError();
});
```

#### Complex mock usage

Action mock provide enough flexibility for you to check complex cases.

##### Mocking indefinitely or "n" times

```typescript
// Mock result indefinitely.
actionMock.mockResult(value);
// Mock result for only for "n" next calls.
actionMock.mockResultOnce(value);
actionMock.mockResultTwice(value);
actionMock.mockResultTimes(3, value);
// Mock result factory function.
actionMock.mockResult(() => value);
```

:::caution Mocking results indefinitely will prevent your next mocked runs to be
used. Mocking for "n" times is therefore a safer way to mock results, since it
will also fail if there are no more runs expected. :::

##### Mocking context conditionally

```typescript
// Only mock when context is matching over given predicate.
actionMock.mockResult(value, (context) => context.model === Post);
```

##### Mocking context expectation

```typescript
// Run expectation over context before returning value.
actionMock.mockResult({
    result: value,
    expectation: (context) => {
        expect(context.model).toStrictEqual(Post);
        expect(context.action).toStrictEqual('create');
    },
});
```

##### Mocking full configuration

```typescript
// Use differents mocking options.
actionMock.mockResult({
    result: value,
    times: 3,
    predicate: (context) => context.model === Post,
    expectation: (context) => {
        expect(context.model).toStrictEqual(Post);
        expect(context.action).toStrictEqual('create');
    },
});
```
