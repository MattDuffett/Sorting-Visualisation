class DataSet {
    constructor(numPoints) {
        this.numPoints = numPoints;
        this.data = []
        var value = 0;
        this.generate();
    }

    generate() {
        var value = 0;
        for(var i = 0; i < this.numPoints; i++) {
            this.data.push(new DataBar(i));
        }
    }

    render(c) {
        for(var i = 0; i < this.numPoints; i++) {
            this.data[i].render(c);
        }
    }

    swapElements(first, second) {
        var temp = this.data[first].value;
        this.data[first].value = this.data[second].value;
        this.data[second].value = temp;
        // this.data[second].colour = '#FF0000';
        // this.data[first].colour = '#000000';
    }

    resetColours() {
        for(var i = 0; i < this.numPoints; i++) {
            this.data[i].colour = '#000000';
        }
    }


}