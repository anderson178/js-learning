describe("multiplyNumeric", function () {
    it("умножаем все числовые свойства на 2", function () {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });

    it("returns nothing", function () {
        assert.isUndefined(multiplyNumeric({}));
    });

});

describe("Caclculator", function () {
    let calc = new Calculator('3','2')
    it("сложить 3 с 2", function () {        
        assert.equal(calc.sum(), 5);
    });

    it("умножить 3 на 2", function () {        
        assert.equal(calc.mul(), 6);
    });
});

describe("Filter array", function () {
    it("filter to 1 from 4", function () {
        expect([1,3,4]).to.have.members(filterRange([1,3,4,5,6,7], 1, 4));       
    });

    it("filter to 4 from 8", function () {
        expect([4,5,6,7]).to.have.members(filterRange([10,3,4,5,6,7], 4, 8));       
    });

    it("save start state by array", function () {
        var arr = [10,3,4,5,6,7];
        var tmp = filterRange(arr, 4, 8);
        expect([10,3,4,5,6,7]).to.have.members(arr);       
    });
});

describe("Sorted array", function () {
    it("sorted start to 10 end to 1", function () {
        var arr = [10,1,9,1,8,7];
        expect([10,9,8,7,1,1]).to.have.members(arr.sort(compareNumeric));
        expect([10,9,8,7,1,1]).to.have.members(arr.sort((a,b) => a < b));       
    });
});

describe("Copy and sorted array", function () {
    it("copy and sort start to 10 end to 1", function () {
        var arr = [10,1,9,1,8,7];
        var tmp = copyAndSortArray(arr);
        expect([10,9,8,7,1,1]).to.have.members(tmp);
        expect([10,9,8,7,1,1]).to.have.members(arr);        
    });
});

describe("Dinamic Caclculator", function () {
    let calc = new DinamicCalculator();
    calc.addMethod('*', (a, b) => a * b);   
    calc.addMethod('+', (a, b) => a + b);
    calc.addMethod('**', (a, b) => a ** b);
    calc.addMethod('-', (a, b) => a - b);  
    calc.addMethod('/', (a, b) => a / b);  

    it("сложить 2 + 3", function () {        
        assert.equal(5, calc.calculate("2 + 3"));
    });

    it("умножить 2 * 3", function () {        
        assert.equal(6, calc.calculate("2 * 3"));
    });

    it("вычесть 2 - 3", function () {        
        assert.equal(-1, calc.calculate("2 - 3"));
    });

    it("возвести 2 в степень 3", function () {        
        assert.equal(8, calc.calculate("2 ** 3"));
    });

    it("деление 10 / 2", function () {        
        assert.equal(5, calc.calculate("10 / 2"));
    });

    it("неверный формат ввода строки", function () {        
        assert.equal('incorrected input string', calc.calculate("10 1 2"));
    });

    it("неверный формат ввода математического метода", function () {        
        assert.equal('method is not supported', calc.calculate("10 -*/ 2"));
    });  
    
});