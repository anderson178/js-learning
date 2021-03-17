function alertInputText() {
    alert(document.getElementById('textInput').value);
}

var tmp = 0;

function addRowTable(idTable, idInput) {
    var tbody = document.getElementById(idTable).getElementsByTagName("TBODY")[0];
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.appendChild(document.createTextNode(++tmp));
    td2.appendChild(document.createTextNode(document.getElementById(idInput).value));
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

function Calculator(a, b) {
    this.a = Number(a);
    this.b = Number(b);

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

function filterRange(arr, a, b) {
    return arr.filter(val => (a <= val && val <= b));
}

function compareNumeric(a, b) {
    return a < b;
}

function copyAndSortArray(arr) {
    return arr.slice().sort();
}

function DinamicCalculator() {
    this.methods = [];
    const digitsOnly = (val) => /^[0-9]+$/.test(val);

    this.addMethod = function (method, func) {
        this.methods.push({
            [method]: func
        });
    }

    this.calculate = function (line) {
        let array = line.split(' ');
        let a = Number(array[0]);
        let b = Number(array[2]);

        if (!validateArray(array)) {
            return 'incorrected input string';
        }

        let method;

        for (let i = 0; i < this.methods.length; i++) {
            for (let key in this.methods[i]) {
                if (key == array[1]) {
                    method = this.methods[i];
                    break;
                }
            }
            if (validateMethod(method)) {
                break;
            }
        }
        if (!validateMethod(method)) {
            return 'method is not supported';
        }
        return method[array[1]](a, b);
    }

    const validateMethod = (method) => {
        return typeof method != 'undefined';        
    }

    const validateArray = (array) => {
        return Array.isArray(array) && array.length == 3 && digitsOnly(array[0]) && digitsOnly(array[2]) && !digitsOnly(array[1]);
    }
}