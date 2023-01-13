export type ActionExtensionObject<N extends string, M> = { [K in N]: M; };

export type ActionExtensionArray<N extends string, M> = [[N, M]];

export default function extractActionExtension<
  N extends string,
  M extends (...args: any[]) => any,
>(extensionObject: ActionExtensionObject<N, M>) {
  const [[name, fnc]] = Object.entries(extensionObject) as ActionExtensionArray<N, M>;

  return { name, fnc };
}
