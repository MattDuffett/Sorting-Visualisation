class SortingAlgorithm {
    constructor(dataset) {
        this.dataSet = dataset;
        this.run = false;
    }

    animate(c) {
        this.dataSet.render(c);
    }
}

var algo = 0;

function chooseBubbleSort() {
    document.getElementById('DropDownButton').innerHTML = 'Bubble Sort';
    algo=0;
    init();
}

function chooseMergeSort() {
    document.getElementById('DropDownButton').innerHTML = 'Merge Sort';
    algo=1;
    init();
}