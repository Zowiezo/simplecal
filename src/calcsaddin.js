class Calculator {
    constructor() {
        this.lastNum = 0;
        this.slot = [];
    }
    //add numbers

    addNum() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        this.lastNum = sum;
        return sum;
    }


    //muiltiply numbers

    multiplyNum() {
        let muiltiply = 1;
        for (let i = 0; i < arguments.length; i++) {
            muiltiply *= arguments[i];
        }
        this.lastNum = muiltiply;
        return muiltiply;
    }

    //return last

    last() {
        return this.lastNum;
    }

    set_slot(number) {
        this.slot[number] = this.lastNum;
    }

    get_slot(number) {
        return this.slot[number];
    }
}