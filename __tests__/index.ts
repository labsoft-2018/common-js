import { sum, assoc } from '../src'

describe('curried sum', () => {
  it('can sum 2 positive numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1)(2)).toBe(3)
  })
})

describe('curried assoc', () => {
  it('can assoc a key-val into an object', () => {
    expect(assoc('name', 'Rafael', { age: 12 })).toEqual({
      name: 'Rafael',
      age: 12,
    })
  })
})
