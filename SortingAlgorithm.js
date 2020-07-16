var algo = 0;
var arraySize = 150;
var barWidth;


function chooseBubbleSort() {
    document.getElementById('DropDownButton').innerHTML = 'Bubble Sort';
    algo=0;
    init();
}

function chooseQuickSort() {
    document.getElementById('DropDownButton').innerHTML = 'QuickSort';
    algo=1;
    init();
}

async function BubbleSort(arr){
    for(var i = 0; i < arr.length;i++){
        await sleep(10);
        for(var j = 0; j < arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                await Swap(arr,j,j+1);
            }
        }
    }
}

async function QuickSort(arr, start, end){

}

async function Swap(arr,first,second){
    temp = arr[first];
    arr[first]=arr[second];
    arr[second] = temp;
}