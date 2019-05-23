// QUESTION 1

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