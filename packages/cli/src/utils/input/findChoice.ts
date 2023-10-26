type Choice = {
  value: unknown;
};

export default function findChoice<T extends Choice>(choices: T[] | Readonly<T[]>, value: unknown) {
  return choices.find((c) => c.value === value);
}
