---
sidebar_position: 0
title: CLI
description: Using Foscia CLI.
---

# Command Line Interface

:::tip What you'll learn

- Initializing Foscia on your project
- Creating files related to Foscia (models, composables, etc.)

:::

## Installation

The Foscia CLI is directly provided by Foscia, making it available
inside any project where `foscia` package is installed.

To install Foscia, read the [installation guide](/docs/installation).

## Usage

The Foscia CLI is directly provided by Foscia, making it available
inside any project where `foscia` package is installed.

The `foscia` command can be called from command line once Foscia is installed.
When called without arguments, it will list available commands.

```shell
foscia
```

```text
Usage: foscia <command> [options]

Commands:
  init <path>             Initialize foscia configuration and files.
  make:model <name>       Create a model file.
  make:composable <name>  Create a composable file.

Options:
      --version  Show version number.                                  [boolean]
      --help     Show help.                                            [boolean]
  -c, --config   Path to a custom configuration file.                   [string]
```

## Commands

### `foscia init <path>`

```shell
foscia init src/api
```

Initialize the Foscia CLI configuration file and create an action factory.
The command will ask you multiple things about your project to set up an
adapted Foscia CLI environment.

### `foscia make:model <name>`

```shell
foscia make:model post
```

Create a Foscia model using the name argument. The command will infer the
model type, class name and file name over the name argument.

:::tip

You can print the generated code (instead of writing a file to the disk)
using the `--show` option.

:::

### `foscia make:composable <name>`

```shell
foscia make:composable publishable
```

Create a Foscia composable using the name argument. The command will infer the
file name over the name argument.

:::tip

You can print the generated code (instead of writing a file to the disk)
using the `--show` option.

:::

## Configuration

Foscia CLI uses a configuration file which help generating files correctly
for all `make:*` commands using many options, such as:

- Path to store your files
- Language you are using (TS or JS)
- Modules organization (ESM or CommonJS)
- etc.

This configuration can be set up using [`foscia init <path>`](#foscia-init-path)
command and will be stored in a `.fosciarc.json`.

### Available options

Example of a Foscia CLI configuration:

```json
{
  "path": "src/api",
  "alias": "@/api",
  "usage": "jsonapi",
  "language": "ts",
  "modules": "esm"
}
```

Description of each configuration options:

| Key        | Type                                           | Description                                                                    |
|------------|------------------------------------------------|--------------------------------------------------------------------------------|
| `path`     | `string`                                       | Directory to put your Foscia files in (action factory, models, etc.)           |
| `alias`    | `string`&vert;`undefined`                      | Alias to use when importing models in files (instead of relative import path). |
| `usage`    | `'jsonapi'`&vert;`'jsonrest'`&vert;`undefined` | Your usage of Foscia for this configuration.                                   |
| `language` | `'ts'`&vert;`'js'`                             | The language to use when generating files.                                     |
| `modules`  | `'esm'`&vert;`'commonjs'`                      | The modules organization to use when generating files.                         |
| `tabSize`  | `number`                                       | The tab size to use when generating files (defaults to 2).                     |

### Multiple configurations

Using a configuration file also allow you to use multiple configurations files
for multiple purposes (e.g. one for your client-side,
another for your server-side).

To init a multiple configurations setup, you can call `init` with a
`config` option:

```shell
foscia init --config=.fosciarc.api.json
```

Once your configuration is set up, you can run other commands using the same
`config` option:

```shell
foscia make:model --config=.fosciarc.api.json Post
```
