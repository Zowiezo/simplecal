/*last*/

describe('last', function () {
    let answer = new Calculator();
    it('should return the last function result and return 2', function () {
        answer.multiplyNum(1, 2);
        let result = answer.last();
        expect(result).toEqual(2);
    })

    it('should return the last function result and should return 3', function () {
        answer.addNum(1, 2);
        let result = answer.last();
        expect(result).toEqual(3);
    })

    it('should return the last function result and should return 7', function () {
        answer.addNum(1, 2);
        let result = answer.addNum(answer.last(), 4);
        expect(result).toEqual(7);
    })
});


/*Memory Slots*/

describe("allows the calculator to remember more numbers", function () {
    let answer = new Calculator();
    it("should return 3", function () {
        answer.addNum(1, 2);
        answer.set_slot(1);
        let result = answer.get_slot(1)
        expect(result).toEqual(3);
    })

    it("should return 9", function () {
        answer.addNum(1, 2);
        answer.set_slot(1);
        let result = answer.addNum(answer.get_slot(1), 6);
        expect(result).toEqual(9);
    })

    it("should return 12", function () {
        answer.addNum(1, 2);
        answer.set_slot(1);
        let result = answer.multiplyNum(answer.get_slot(1), 4);
        expect(result).toEqual(12);
    })
});