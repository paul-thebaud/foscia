import { ObjectTransform } from '@/core/transformers/types';

function dateFromUnix(unix: number): Date {
  const date = new Date();

  date.setTime(unix);

  return date;
}

export default function toDate(): ObjectTransform<Date | null, unknown> {
  return {
    serialize(value: Date | null) {
      return value ? value.toISOString() : null;
    },
    deserialize(value: unknown) {
      if (typeof value === 'string') {
        return dateFromUnix(Date.parse(value));
      }

      return null;
    },
  };
}
