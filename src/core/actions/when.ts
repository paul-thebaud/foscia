import Action from '@/core/actions/action';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension, ContextEnhancer, ContextRunner } from '@/core/actions/types';
import { Awaitable, OnlyFalsy, OnlyTruthy, Value, value } from '@/utilities';

function when<C extends ActionContext, E, TC extends ActionContext = C>(
  expression: E,
  truthyCallback: (
    action: Action<C>,
    value: OnlyTruthy<Awaited<Value<E>>>,
  ) => Awaitable<Action<TC> | void>,
): ContextEnhancer<C, TC>;
function when<
  C extends ActionContext,
  E,
  TC extends ActionContext = C,
  FC extends ActionContext = C,
>(
  expression: E,
  truthyCallback: (
    action: Action<C>,
    value: OnlyTruthy<Awaited<Value<E>>>,
  ) => Awaitable<Action<TC> | void>,
  falsyCallback: (
    action: Action<C>,
    value: OnlyTruthy<Awaited<Value<E>>>,
  ) => Awaitable<Action<FC> | void>,
): ContextEnhancer<C, TC | FC>;
function when<C extends ActionContext, E, TR>(
  expression: E,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<E>>>) => TR,
): ContextRunner<C, TR>;
function when<C extends ActionContext, E, TR, FR>(
  expression: E,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<E>>>) => TR,
  falsyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<E>>>) => FR,
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
function when<C extends ActionContext, E, TR, FR = void>(
  expression: E,
  truthyCallback: (action: Action<C>, value: OnlyTruthy<Awaited<Value<E>>>) => TR,
  falsyCallback?: (action: Action<C>, value: OnlyFalsy<Awaited<Value<E>>>) => FR,
): (action: Action<C>) => Promise<TR | FR> {
  return async (action: Action<C>) => {
    const exprValue = await value(expression as Function);
    if (exprValue) {
      return truthyCallback(action, exprValue as OnlyTruthy<Awaited<Value<E>>>);
    }

    if (falsyCallback !== undefined) {
      return falsyCallback(action, exprValue as OnlyFalsy<Awaited<Value<E>>>);
    }

    return undefined as any;
  };
}

export default when;

type WhenEnhancerExtension = ActionParsedExtension<{
  when<
    C extends ActionContext,
    A extends Action<C>,
    E,
    TC extends ActionContext = C,
  >(
    this: Action<C> & A,
    expression: E,
    truthyCallback: (
      action: Action<C> & A,
      value: OnlyTruthy<Awaited<Value<E>>>,
    ) => Awaitable<Action<TC> | void>,
  ): Action<TC> & A;
  when<
    C extends ActionContext,
    A extends Action<C>,
    E,
    TC extends ActionContext = C,
    FC extends ActionContext = C,
  >(
    this: Action<C> & A,
    expression: E,
    truthyCallback: (
      action: Action<C> & A,
      value: OnlyTruthy<Awaited<Value<E>>>,
    ) => Awaitable<Action<TC> | void>,
    falsyCallback: (
      action: Action<C> & A,
      value: OnlyTruthy<Awaited<Value<E>>>,
    ) => Awaitable<Action<FC> | void>,
  ): Action<TC | FC> & A;
  when<C extends ActionContext, A extends Action<C>, E, TR>(
    this: Action<C> & A,
    expression: E,
    truthyCallback: (action: Action<C> & A, value: OnlyTruthy<Awaited<Value<E>>>) => TR,
  ): Promise<TR>;
  when<C extends ActionContext, A extends Action<C>, E, TR, FR>(
    this: Action<C> & A,
    expression: E,
    truthyCallback: (action: Action<C> & A, value: OnlyTruthy<Awaited<Value<E>>>) => TR,
    falsyCallback?: (action: Action<C>, value: OnlyFalsy<Awaited<Value<E>>>) => FR,
  ): Promise<TR | FR>;
}>;

when.extension = makeEnhancersExtension({ when }) as WhenEnhancerExtension;
