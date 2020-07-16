var algo = 0;
var arraySize = 150;
var barWidth;
var data;
var colours;
var sleepTime = 5;


function chooseBubbleSort() {
    document.getElementById('DropDownButton').innerHTML = 'Bubble Sort';
    algo = 0;
    init();
}

function chooseQuickSort() {
    document.getElementById('DropDownButton').innerHTML = 'QuickSort';
    algo = 1;
    init();
}

async function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            colours[j]='#000000';
        }
        for (var j = 0; j < arr.length - i-1; j++) {
            // colours[j-1]='#000000';
            if (arr[j] > arr[j + 1]) {
                colours[j]='#FF0000';
                colours[j+1]='#FF0000';
                await Swap(arr, j, j + 1);
            }
        }
        colours[j+1]='#000000';
        await sleep(sleepTime);
    }
}

async function QuickSort(arr, low, high) {
    if (low < high) {
        index = await Partition(arr, low, high);

        await Promise.all([QuickSort(arr, low, index), QuickSort(arr, index + 1, high)]);
        // await QuickSort(arr, low, index);
        // await QuickSort(arr, index + 1, high);

    }
}

async function Partition(arr, low, high) {
    var pi = Math.floor((low + high) / 2)
    for (var n = low; n < high; n++) {
        colours[n] = '#00FF00';
    }
    var pivot = arr[pi];
    var i = low - 1;
    var j = high + 1;
    while (true) {
        do {
            i++;
            colours[i-1] = '#000000';
            colours[i] = '#FF0000';
        } while (arr[i] < pivot)
        do {
            j--;
            colours[j+1] = '#000000';
            colours[j] = '#FF0000';
        } while (arr[j] > pivot)
        if (i >= j) {
            for (var n = low; n < high; n++) {
                colours[n] = '#000000';
            }
            return j;
        }
        await sleep(sleepTime);
        await Swap(arr, i, j);
    }
}

async function Swap(arr, first, second) {
    temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}