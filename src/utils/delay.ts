export function artificialDelay<T>(ms = 5000): (val?: T) => Promise<T | undefined> {
  console.debug("Artificial delay of", `${ms}ms`);
  return async (val: T | undefined = undefined) => import.meta.env.DEV
    ? await new Promise((resolve) => setTimeout(() => resolve(val), ms))
    : val;
}