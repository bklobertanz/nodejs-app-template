import sum from '../utils/addTwoNums'

describe('addTwoNums', () => {
  it('should add two numbers and result', () => {
    // arrange
    const expectedResult = 2
    // act
    const result = sum(1, 1)
    // assert
    expect(result).toBe(expectedResult)
  })
})
