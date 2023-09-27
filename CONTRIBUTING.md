# Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on
[GitHub](https://github.com/paul-thebaud/foscia).

Informal discussion regarding bugs, new features, and implementation of existing
features takes place in the
[GitHub issue page](https://github.com/paul-thebaud/foscia/issues).

## Pull Requests

- **Lint your code.** Make sure your code follows our coding standards by
  running `make lint` on the CLI.

- **Add tests!** Your patch won't be accepted if it does not have tests.
  Run tests using `make test-typecheck` and `make test-coverage`

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

> Notice that we use [Docker](https://docker.com/) to work on the package.

### Package development

After cloning the repository, you can use the `Makefile` to quickly get started.

```shell
# List all available rules.
make help
# Start working on the project.
make first
```

Once the docker containers are fully running, you can visit two endpoint:

- [`playground.foscia.localhost`](http://playground.foscia.localhost): to get a
  local playground where you can try your new features or bug fixes.
- [`docs.foscia.localhost`](http://docs.foscia.localhost): to get preview
  of your documentation updates.

You may also check out the test container logs to see if your changes are
issuing errors in unit and features tests:

```shell
docker compose logs test -f
```
