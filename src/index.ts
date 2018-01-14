export const sum = (a: number) => (b: number) => a + b

export const assoc = (key: any) => (val: any) => (map: object) => ({
  ...map,
  [key]: val,
})
