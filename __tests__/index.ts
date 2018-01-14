import { sum } from '../src'

describe('curried sum', () => {
  it('can sum 2 positive numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1)(2)).toBe(3)
  })
})
