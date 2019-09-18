describe('last', () => {
    let answer = new Calculator();
    it('should return the last function result and return 2', () => {
        answer.multiplyNum(1, 2);
        let result = answer.last();
        expect(result).toEqual(2);
    });
});

describe("slot allows the calculator to remember more numbers",() => {
    let answer = new Calculator();
    it("should return 3",()=> {
        answer.addNum(1, 2);
        answer.set_slot(1);
        let result = answer.get_slot(1);
        expect(result).toEqual(3);
    });
});