#!/bin/sh -

if [ ! -d node_modules ]
then
  echo "[Installing dependencies...]"
  pnpm install
fi

exec "$@"
