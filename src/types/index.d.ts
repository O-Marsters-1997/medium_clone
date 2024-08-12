export type ValueOf<T> = T[keyof T];

export type SearchParams = Record<string, string> | null | undefined;
