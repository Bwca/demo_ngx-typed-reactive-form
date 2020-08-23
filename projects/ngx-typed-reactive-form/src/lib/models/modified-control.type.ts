export type ModifiedControl <T, R> = Omit<T, keyof R> & R;
