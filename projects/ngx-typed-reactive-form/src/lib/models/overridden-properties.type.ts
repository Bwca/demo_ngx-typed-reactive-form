export type OverriddenProperties <T, R> = Omit<T, keyof R> & R;
