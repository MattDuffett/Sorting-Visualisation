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

var input = document.getElementById("arraySize");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("Submit").click();
  }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function ShowDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function SetArraySize() {
    arraySize = document.getElementById("arraySize").value;
    if(arraySize == ""){
        arraySize = 150;
        document.getElementById("arraySize").value = 150;
    }
}

function init() {
    reset();
}

async function run() {
    switch(algo) {
        case 0:
            await BubbleSort(data);
            break;
        case 1:
            await QuickSort(data,0,arraySize-1);
            console.log("QuickSort!!");
            break;
        default:

      }
}

function reset() {
    SetArraySize();
    barWidth = Math.trunc(canvas.width / arraySize);
    data = new Array(arraySize);
    colours = new Array(arraySize);
    for(var i = 0; i < arraySize;i++) {
        data[i] = Math.round(Math.random()*(canvas.height-70));
        colours[i] = '#000000';
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < arraySize;i++) {
        c.fillStyle = colours[i];
        c.fillRect(i*barWidth,0,barWidth,data[i]);
    }
}

init();
animate();