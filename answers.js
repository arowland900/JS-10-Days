// DAY 1

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

// DAY 2

function loop_size(node) {
    var nodes = []
    var n = node

    while (nodes.indexOf(n) == -1) {
        nodes.push(n)
        n = n.next
    }
    return nodes.length - nodes.indexOf(n)
}

// DAY 3

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