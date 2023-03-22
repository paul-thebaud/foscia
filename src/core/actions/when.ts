import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ContextEnhancer, ContextRunner } from '@/core/actions/types';
import { Awaitable, OnlyFalsy, OnlyTruthy, Value, value } from '@/utilities';

function when<C extends {}, V, TC extends {} = C>(
  expression: V,
  truthyCallback: (
    action: Action<C>,
    value: OnlyTruthy<Awaited<Value<V>>>,
  ) => Awaitable<Action<TC> | void>,
): ContextEnhancer<C, TC>;
function when<C extends {}, V, TC extends {} = C, FC extends {} = C>(
  expression: V,
  truthyCallback: (
    action: Action<C>,
    value: OnlyTruthy<Awaited<Value<V>>>,
  ) => Awaitable<Action<TC> | void>,
  falsyCallback: (
    action: Action<C>,
    value: OnlyFalsy<Awaited<Value<V>>>,
  ) => Awaitable<Action<FC> | void>,
): ContextEnhancer<C, TC | FC>;
function when<C extends {}, V, TR>(
  expression: V,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<V>>>) => TR,
): ContextRunner<C, TR | void>;
function when<C extends {}, V, TR, FR>(
  expression: V,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<V>>>) => TR,
  falsyCallback: (action: Action<C>, value: OnlyFalsy<Awaited<Value<V>>>) => FR,
): ContextRunner<C, TR | FR>;

/**
 * Create a new enhancer or runner from a conditional expression and given
 * enhancer/runner factories.
 * When the expression if a function, it will call the function and take its
 * result as the evaluated expression. Expression may also be a promise
 * or a promise provider function, which will also be evaluated.
 * Evaluated expression will be passed to both truthy and falsy callbacks.
 *
 * @param expression
 * @param truthyCallback
 * @param falsyCallback
 */
function when<C extends {}, V, TR, FR = void>(
  expression: V,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<V>>>) => TR,
  falsyCallback?: (action: Action<C>, value: OnlyFalsy<Awaited<Value<V>>>) => FR,
) {
  return async (action: Action<C>) => {
    const exprValue = await value(expression as Function);
    if (exprValue) {
      return truthyCallback(action, exprValue as OnlyTruthy<Awaited<Value<V>>>);
    }

    if (falsyCallback !== undefined) {
      return falsyCallback(action, exprValue as OnlyFalsy<Awaited<Value<V>>>);
    }

    return undefined as any;
  };
}

export default when;

type EnhancerExtension = ActionParsedExtension<{
  when<C extends {}, E extends {}, V, TC extends {} = C>(
    this: Action<C, E>,
    expression: V,
    truthyCallback: (
      action: Action<C, E>,
      value: OnlyTruthy<Awaited<Value<V>>>,
    ) => Awaitable<Action<TC> | void>,
  ): Action<TC, E>;
  when<C extends {}, E extends {}, V, TC extends {} = C, FC extends {} = C>(
    this: Action<C, E>,
    expression: V,
    truthyCallback: (
      action: Action<C, E>,
      value: OnlyTruthy<Awaited<Value<V>>>,
    ) => Awaitable<Action<TC> | void>,
    falsyCallback: (
      action: Action<C, E>,
      value: OnlyFalsy<Awaited<Value<V>>>,
    ) => Awaitable<Action<FC> | void>,
  ): Action<FC | TC, E>;
  when<C extends {}, E extends {}, V, TR>(
    this: Action<C, E>,
    expression: V,
    truthyCallback: (action: Action<C, E>, value: OnlyTruthy<Awaited<Value<V>>>) => TR,
  ): Promise<TR | void>;
  when<C extends {}, E extends {}, V, TR, FR>(
    this: Action<C, E>,
    expression: V,
    truthyCallback: (action: Action<C, E>, value: OnlyTruthy<Awaited<Value<V>>>) => TR,
    falsyCallback?: (action: Action<C, E>, value: OnlyFalsy<Awaited<Value<V>>>) => FR,
  ): Promise<TR | FR>;
}>;

when.extension = makeEnhancersExtension({ when }) as EnhancerExtension;
