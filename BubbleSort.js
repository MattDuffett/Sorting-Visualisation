class BubbleSort extends SortingAlgorithm {
    constructor(dataset) {
        super(dataset);
        this.i = 0;
        this.j = 0;
    }

    step() {
        if(this.j < this.dataSet.numPoints - this.i - 1) {
            if(this.dataSet.data[this.j].value > this.dataSet.data[this.j+1].value){
                this.dataSet.swapElements(this.j,this.j+1);
            }
            this.dataSet.data[this.j+1].colour = '#FF0000';
            this.dataSet.data[this.j].colour = '#000000';
            this.j++;
        } else {
            this.i++;
            this.j=0;
        }
    }

    animate(c) {
        super.animate(c);
        if(this.run){
            if(this.i < this.dataSet.numPoints-1){
                for(var z = 0; z < 10; z++){
                    this.step();
                }
            }
        }
        
    }
}