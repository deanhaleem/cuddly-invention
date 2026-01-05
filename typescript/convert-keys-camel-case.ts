import transform from 'lodash.transform';
import camelCase from 'lodash.camelcase';

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type CamelCaseKeys<T> = {
  [K in keyof T as SnakeToCamelCase<K & string>]: T[K];
};

function convertKeysToCamelCase<T extends Record<keyof T, unknown>>(
  input: T
): CamelCaseKeys<T> {
  return transform(
    input,
    (acc: Record<string, unknown>, value: unknown, key: string, target) => {
      // Array entries have a key equal to the index, so we want to leave those as is
      const camelKey = Array.isArray(target) ? key : camelCase(key);

      acc[camelKey] =
        Boolean(value) && typeof value === 'object'
          ? convertKeysToCamelCase(value as T)
          : value;
    }
  ) as CamelCaseKeys<T>;
}
