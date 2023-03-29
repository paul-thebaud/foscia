# Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on
[GitHub](https://github.com/paul-thebaud/foscia).

Informal discussion regarding bugs, new features, and implementation of existing
features takes place in the
[GitHub issue page](https://github.com/paul-thebaud/foscia/issues).

## Pull Requests

- **Lint your code.** Make sure your code follows our coding standards by
  running `pnpm lint` on the CLI.

- **Add tests!** Your patch won't be accepted if it does not have tests.
  Run tests using `pnpm test`

- **Document any change in behaviour.** Make sure the `README.md` and any other
  relevant documentation (inside `website/docs`) are kept up-to-date.

- **Create feature branches.** Don't ask us to pull from your master branch.

- **One pull request per feature.** If you want to do more than one thing, send
  multiple pull requests.

- **Send coherent history.** Make sure each individual commit in your pull
  request is meaningful. We try to follow the
  [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

**Happy coding**!

## Useful commands

> Notice that we use [PNPM](https://pnpm.io/) as our package manager.

### Package development

#### Run local playground

This will run a local website which will run the `playground/main.ts` file.
You should use it to locally test your new features/bug fixes in addition
to automated tests.

``` shell
pnpm dev
```

> Changes to `playground` directory must not be committed.

#### Build

``` shell
pnpm build
```

#### Lint

``` shell
pnpm lint
```

#### Test watch

``` shell
pnpm test:watch
```

#### Test coverage

``` shell
pnpm test:coverage
```

#### Test types

``` shell
pnpm test:typecheck
```

### Documentation development

You can work on documentation by moving to the `website` directory.

#### Prettier docs

``` shell
pnpm prettier
```

#### Run local docs

``` shell
pnpm start
```

#### Build docs

``` shell
pnpm build
```
