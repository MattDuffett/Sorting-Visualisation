var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
document.documentElement.style.overflow = 'hidden';

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    return false;
})

window.addEventListener('mousemove', function (event) {

    mouse.x = event.x-rect.left;
    mouse.y = event.y-rect.top;
})

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    rect = canvas.getBoundingClientRect();
    init();
})

leftMouseDown = false;
rightMouseDown = false;
window.addEventListener('mousedown', function (event) {
    if (event.which == 1) {
        leftMouseDown = true;
    } else if (event.which == 3) {
        rightMouseDown = true;
    }
})

window.addEventListener('mouseup', function (event) {
    leftMouseDown = false;
    rightMouseDown = false;
})

function ShowDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var sortingAlgo;
function init() {
    switch(algo) {
        case 0:
            sortingAlgo = new BubbleSort(new DataSet(150));
            break;
        case 1:
            sortingAlgo = new MergeSort(new DataSet(150));
            break;
        default:
            sortingAlgo = new BubbleSort(new DataSet(150));
      }
    
}

function run() {
    sortingAlgo.run = true;
}

function reset() {
    init();
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    sortingAlgo.animate(c);
}

init();
animate();