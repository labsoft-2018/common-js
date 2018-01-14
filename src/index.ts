import * as R from 'ramda'

export const sum = R.curry((a: number, b: number): number => a + b)

export const assoc = (key: any) => (val: any) => (map: object) => ({
  ...map,
  [key]: val,
})
