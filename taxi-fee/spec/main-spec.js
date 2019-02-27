var billing = require('../main/main.js');

describe('taxi fee',function(){
    it("should generate taxi fee when kilo<2",function () {
        let result=billing(1,10);
        let expected=9;
        expect(result).toEqual(expected);
    })
    it("should generate taxi fee when kilo=2&&<8",function () {
        let result=billing(2,2);
        let expected=7;
        expect(result).toEqual(expected);
    })
    it("should generate taxi fee when kilo=8",function () {
        let result=billing(8,3);
        let expected=12;
        expect(result).toEqual(expected);
    })
    it("should generate taxi fee when kilo>8",function () {
        let result=billing(10,3);
        let expected=14;
        expect(result).toEqual(expected);
    })
});
