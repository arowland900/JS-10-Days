// DAY 1:

function pickPeaks(arr) {

    var obj = {}
    obj.pos = []
    obj.peaks = []

    arr.forEach((e, i) => {
        if (i > 0 && i < arr.length - 2) {
            if (e > arr[i - 1] && e > arr[i + 1]) {
                obj.pos.push(i)
                obj.peaks.push(e)
            }
            else if ((e > arr[i - 1] && e == arr[i + 1])) {
                var j = 2
                while (arr[i + 1] == arr[i + j]) {
                    j++
                }
                if (arr[i + 1] > arr[i + j]) {
                    obj.pos.push(i)
                    obj.peaks.push(e)
                }
            }
        }
    })
    return obj
}

// DAY 2:

function loop_size(node) {
    var nodes = []
    var n = node

    while (nodes.indexOf(n) == -1) {
        nodes.push(n)
        n = n.next
    }
    return nodes.length - nodes.indexOf(n)
}

// DAY 3:

function doneOrNot(board) {

    var answer = 'Try again!'
    var region = []
    var col = []

    for (var i = 0; i < 9; i++) {
        if (new Set(board[i]).size !== 9) {
            return answer
        }
        for (var j = 0; j < 9; j++) {
            col.push(board[j][i])
        }
        if (new Set(col).size !== 9) {
            return answer
        }
        else {
            col = []
        }
        for (var k = 0; k < 9; k++) {
            if (((i + 3) % 3 == 0) && ((k + 3) % 3 == 0)) {
                region.push(board[i][k], board[i + 1][k], board[i + 2][k])
                region.push(board[i][k + 1], board[i + 1][k + 1], board[i + 2][k + 1])
                region.push(board[i][k + 2], board[i + 1][k + 2], board[i + 2][k + 2])
                if (new Set(region).size !== 9) {
                    return answer
                }
                else {
                    region = []
                }
            }
        }
    }
    return "Finished!"
}

// DAY 4:

function add(a, b) {

    if (b.length < 10 && a.length < 10) {
        return (Number(a) + Number(b)).toString();
    }

    var bigNum, smallNum, bigArr, smallArr, i
    var remainder = 0
    var total = []

    if (a.length >= b.length) {
        bigNum = a
        smallNum = b
    } else {
        bigNum = b
        smallNum = a
    }

    bigArr = bigNum.split('').reverse()
    smallArr = smallNum.split('').reverse()
    for (i = 0; i <= bigArr.length - 1; i++) {
        if (smallArr[i]) {

            var num = Number(bigArr[i]) + Number(smallArr[i])
            if (num + remainder < 10) {
                total.push((num + remainder).toString())
                if (num + remainder >= 10) {
                    remainder = 1
                } else {
                    remainder = 0
                }
            } else {
                if (i == bigArr.length - 1) {
                    total.push((num + remainder).toString())
                } else {
                    total.push((num + remainder).toString().split('')[1])
                    if (num + remainder >= 10) {
                        remainder = 1
                    } else {
                        remainder = 0
                    }
                }
            }
        } else {
            if (remainder == 1) {
                if (Number(bigArr[i]) + remainder > 9) {

                    total.push((Number(bigArr[i]) + remainder).toString().split('')[1])
                    remainder = 1
                } else {
                    total.push((Number(bigArr[i]) + remainder).toString())
                    remainder = 0
                }
            } else {
                total.push(Number(bigArr[i]).toString())
                remainder = 0
            }
        }
    }
    return total.reverse().join('')
}

// DAY 4 Refactor:

function add(a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return res
}

// DAY 5

Array.prototype.sameStructureAs = function (other) {
    if (!Array.isArray(other) || this.length !== other.length)
        return false;
    for (var i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            if (!this[i].sameStructureAs(other[i])) {
                return false;
            }
        }
        else if (Array.isArray(other[i])) {
            return false;
        }
    }
    return true;
};

// DAY 6

function validate(password) {
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password);
}

// DAY 7

function dirReduc(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") {
            arr.splice(i, 2)
            dirReduc(arr)
        }
        if (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") {
            arr.splice(i, 2)
            dirReduc(arr)
        }
        if (arr[i] == "EAST" && arr[i + 1] == "WEST") {
            arr.splice(i, 2)
            dirReduc(arr)
        }
        if (arr[i] == "WEST" && arr[i + 1] == "EAST") {
            arr.splice(i, 2)
            dirReduc(arr)
        }
    }
    return arr
}

// DAY 7 Refactor

function dirReduc(arr) {
    var obj = { NORTH: 1, SOUTH: -1, EAST: 2, WEST: -2 }
    for (var i = 0; i < arr.length - 1; i++) {
        var a = arr[i]
        var b = arr[i + 1]
        if (obj[a] + obj[b] == 0) {
            arr.splice(i, 2)
            dirReduc(arr)
        }
    }
    return arr
}

// DAY 8 

function factorial(n) {
    let f = 1;
    for (var i = 2; i <= n; i++) {
        let fi = 0;
        for (let j = 0; j < i; j++) {
            fi = addHelper(fi, f);
        }
        f = fi;
    }
    return f.toString()
}

function addHelper(a, b) {
    var res = '', c = 0
    a = a.toString().split('')
    b = b.toString().split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return res
}

// DAY 9

function dblLinear(n) {
    var a = [1, 3, 4]
    var i = 1
    while (a.length <= n * (n / 2)) {
        var x = a[i]
        var y = a[i + 1]
        a.push(x * 2 + 1)
        a.push(y * 2 + 1)
        a.push(x * 3 + 1)
        a.push(y * 3 + 1)
        var a = [...new Set(a)];
        i += 2
    }
    a.sort((a, b) => a - b)
    return a[n]
}

// DAY 9 Refactor

function dblLinear(n) {
    var u = [1], c2 = 0, c3 = 0
    for (var i = 0; i < n; i++) {
        var x = 2 * u[c2] + 1, y = 3 * u[c3] + 1
        if (x < y) { u.push(x); c2++; }
        else if (y < x) { u.push(y); c3++; }
        else { u.push(y); c2++; c3++; }
    }
    return u[n]
}

//  Day 10

function nLinear(m, n) {
    m = m.sort((a, b) => a - b)
    var u = [1]
    var counter = {}
    var adder = {}
    for (var i = 0; i < m.length; i++) {
        counter[m[i]] = 0
    }

    for (var j = 0; u.length <= n + 1; j++) {
        for (var i = 0; i < m.length; i++) {
            adder[m[i]] = u[counter[m[i]]] * m[i] + 1
            var k = Object.values(adder).sort((a, b) => a - b).shift()
            if (adder[m[i]] == k) {
                counter[m[i]] += 1
            }
            if (u.indexOf(k) == -1) {
                u.push(k)
            }
        }
    }
    return u[n]
}

// Day 10 refactor:

// I couldn't figure out how to make this solution more efficient! 
// However, there are numerous solutions here: 
// https://www.codewars.com/kata/n-linear/solutions?show-solutions=1

// Day 11

function sudoku(puzzle) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            var col = [], box = [], row = puzzle[i]
            var all = [col, box, row]
            if (puzzle[i][j] == 0) {
                for (var n = 0; n < 9; n++) { col.push(puzzle[n][j]) }
                for (let x = 3 * ~~(i / 3); x < 3 * (~~(i / 3) + 1); x++) {
                    for (let y = 3 * ~~(j / 3); y < 3 * (~~(j / 3) + 1); y++) {
                        box.push(puzzle[x][y])
                    }
                }
                all.forEach(a => {
                    a.forEach(c => {
                        if (c > 0) {
                            var spot = options.indexOf(c)
                            if (spot > -1) {
                                options.splice(spot, 1)
                            }
                        }
                        if (options.length == 1) {
                            puzzle[i][j] = options[0]
                            sudoku(puzzle)
                        }
                    })
                })
            }
        }
    }
    return puzzle
}

// DAY 12

// first attempt, only works for 'observed' pins with 3 or less digits.  Attempting to refactor using recursion
function getPINs(observed, answer = []) {

    var opts = {
        1: ['1', '2', '4'],
        2: ['1', '2', '3', '5'],
        3: ['2', '3', '6'],
        4: ['1', '4', '5', '7'],
        5: ['2', '4', '5', '6', '8'],
        6: ['3', '5', '6', '9'],
        7: ['4', '7', '8'],
        8: ['0', '5', '7', '8', '9'],
        9: ['6', '8', '9'],
        0: ['0', '8']
    }
    var code = observed.split('')
    var arr = []
    var final = []

    code.forEach((c, i) => {
        arr = opts[c]
        if (code.length == 1) {
            answer = arr
        }
        if (code.length > 1) {
            if (answer.length == 0) {
                if (code[i + 1]) {
                    arr.forEach((t, j) => {
                        opts[code[i + 1]].forEach(o => {
                            answer.push(arr[j].toString() + o.toString())
                        })
                    })
                }
            } else {
                console.log('answer', answer)
                console.log('arr', arr)
                if (code[i + 1]) {
                    answer.forEach((x, y) => {
                        opts[code[i + 1]].forEach(o => {
                            final.push(answer[y].toString() + o.toString())
                        })
                    })
                    answer = final
                }
            }
        }
    })

    return answer
}

// DAY 12 REFACTOR:
// all i needed to do was add a filter at the end.  
// using console logs helped me discover that my final answer was returning some strings that were shorter than desired

function getPINs(observed) {

    const opts = {
        1: ['1', '2', '4'],
        2: ['1', '2', '3', '5'],
        3: ['2', '3', '6'],
        4: ['1', '4', '5', '7'],
        5: ['2', '4', '5', '6', '8'],
        6: ['3', '5', '6', '9'],
        7: ['4', '7', '8'],
        8: ['0', '5', '7', '8', '9'],
        9: ['6', '8', '9'],
        0: ['0', '8']
    }
    const code = observed.split('')
    let arr = [], final = [], answer = []

    code.forEach((c, i) => {
        arr = opts[c]
        if (code.length == 1) answer = arr
        else {
            if (answer.length == 0) {
                if (code[i + 1]) arr.forEach((t, j) => { opts[code[i + 1]].forEach(o => { answer.push(arr[j] + o) }); });
            }
            else {
                if (code[i + 1]) {
                    answer.forEach((x, y) => { opts[code[i + 1]].forEach(o => { final.push(answer[y] + o) }); });
                    answer = final
                }
            }
        }
    })
    return answer.filter(x => x.length >= code.length)
}

// DAY 12 SECOND REFACTOR:
// I discovered that using reduce can seriously simplify the logic!

function getPINs(ob) {
    var ob = ob.split('');
    var pins = [];
    var code = {
        0: ["0", "8"],
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["0", "5", "7", "8", "9"],
        9: ["6", "8", "9"]
    };

    for (var i in ob) {
        var pin = code[ob[i]]
        pins.push(pin)
    }

    return pins.reduce(function (a, c) {
        var res = []
        for (var i in a) {
            for (var j in c) {
                res.push(a[i] + c[j])
            }
        }
        return res
    })

}

// DAY 13

function balanced(str) {

    var arr = str.split('')
    var hold = []
    var match = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (var i = 0; i < arr.length; i++) {
        if (match[arr[i]]) {
            hold.push(arr[i])
        }
        if (hold[hold.length - 1] != "(" && arr[i] == ")") {
            return false
        } else if (arr[i] == ")" && hold[hold.length - 1] == "(") {
            hold.pop()
        }
        if (arr[i] == "]" && hold[hold.length - 1] != "[") {
            return false
        } else if (arr[i] == "]" && hold[hold.length - 1] == "[") {
            hold.pop()
        }
        if (arr[i] == "}" && hold[hold.length - 1] != "{") {
            return false
        } else if (arr[i] == "}" && hold[hold.length - 1] == "{") {
            hold.pop()
        }
    }
    if (!hold.length) return true
    return false
}

// DAY 13 REFACTOR

function balanced(str) {

    var arr = str.split('')
    var hold = []
    var open = ["{", "(", "["]
    var close = ["}", ')', ']']

    for (var i = 0; i < arr.length; i++) {
        if (open.includes(arr[i])) {
            hold.push(arr[i])
        }
        for (var j = 0; j < open.length; j++) {
            var h = hold[hold.length - 1]
            if (arr[i] == close[j]) {
                if (h != open[j]) return false
                else hold.pop()
            }
        }
    }
    if (!hold.length) return true
    return false
}

//  DAY 14

function totalTaskTime(arr, num) {
    let count = 0
    if (arr.length === 0) return 0
    if (num >= arr.length) return Math.max(...arr)
    while (arr.length > 0) {
        for (let i = 0; i < num && i < arr.length; i++) {
            if (arr[i]) arr[i]--
        }
        count += 1
        arr = arr.filter(a => a > 0)
    }
    return count
}