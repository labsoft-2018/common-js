import * as R from 'ramda'

export const sum = R.curry((a: number, b: number): number => a + b)

export const assoc = R.curry((key: any, val: any, map: object): object => ({
  ...map,
  [key]: val,
}))
