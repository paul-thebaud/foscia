import { Awaitable, Dictionary } from '@foscia/utils';

export type HookCallback<E> = (event: E) => Awaitable<void>;

export type HooksDefinition = Dictionary<HookCallback<any>>;

export type HooksRegistrar<D extends HooksDefinition> = {
  [K in keyof D]?: D[K][];
};

export type Hookable<D extends HooksDefinition> = {
  $hooks: HooksRegistrar<D> | null;
};
