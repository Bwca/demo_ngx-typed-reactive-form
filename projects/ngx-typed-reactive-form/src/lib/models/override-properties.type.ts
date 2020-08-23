export type OverrideProperties<T, R> = Omit<T, keyof R> & R;
