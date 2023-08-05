import { makeActionClass } from '@/core/actions';

export default function makeFakeAction() {
  const ActionClass = makeActionClass();

  return new ActionClass();
}
