// src/types/maath-random.d.ts
declare module 'maath/random/dist/maath-random.esm' {
  const random: any;
  export default random;
}

// src/types/maath-random.d.ts
declare module 'maath/random' {
  export function inSphere(array: Float32Array, options: { radius: number }): Float32Array;
}
