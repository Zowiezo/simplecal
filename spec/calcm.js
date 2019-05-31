
describe('multiply', function() {
  it('should multiply two numbers and return 2 ', function() {
    let result;
        result = multiply(1, 2)
    expect(result).toEqual(2)
    });

  it('should multiply a couple of numbers and return 24', function() {
        result = multiply(1, 2, 3, 4)
    expect(result).toEqual(24)
      });
});

describe('calculator_instance.multiply', function (){

  it('should multiply two numbers',function () {
      let calculator_instance = new Calculator();
      let multiply = calculator_instance.multiply(30,2);
      expect(multiply).toEqual(60);
  });
});


