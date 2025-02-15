export const transformItemsAsync = async <T, R>(
  arr: T[],
  adapter: (arg: T, index: number) => R | undefined,
) =>
  arr.map(async (i, index) => await adapter(i, index)).filter((i) => i) as R[];
