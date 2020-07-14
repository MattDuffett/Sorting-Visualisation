const BarWidth = 10;
const maxBarHeight = 300;

class DataBar {
    constructor(position) {
        this.value = Math.round(Math.random()*250);
        this.position = position;
        this.colour = "#000000"
    }

    render(c) {
        c.fillStyle = this.colour;
        c.fillRect(this.position * BarWidth,0,BarWidth,this.value);
    }
}