describe('add', function () {
  it('should add two numbers and return zero', function () {
    let result;
    result = add(0, 0)
    expect(result).toEqual(0)
  });

  it('should add two negative numbers and return -2', function () {
    result = add(-1, -1)
    expect(result).toEqual(-2)
  });

  it('should add two numbers and return 9', function () {
    result = add(4, 5)
    expect(result).toEqual(9)
  });

  it('should add a couple of numbers and return 10', function () {
    result = add(1, 2, 3, 4)
    expect(result).toEqual(10)
  });
});