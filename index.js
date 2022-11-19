var expandedImage = document.getElementById("expandedImage");
var container = document.getElementById("container");
var image = document.getElementsByClassName("image");
const imgs = ['CargoPants', 'CargoShorts', 'RainJacket', 'Skirt', 'Vest'];
var text = document.getElementById("expandedText")

var left = document.getElementById("left");
var right = document.getElementById("right");

let cur =0;

// for (i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", enlarge);
//   }

function link(image) {
    
}

function enlarge(img, pid) {
    // console.log(event.target.src);
    let lab = img.split('/');
    lab = lab[lab.length - 1];
    lab = lab.split('.')[0];
    if (lab.includes('%20')) {
        lab = lab.split('%20').join('');
    }
    cur = imgs.indexOf(lab);
    expandedImage.src = img;
    // expandedImage.style.display = "flex";
    container.style.display ="block";
    expandedImage.style.zIndex = "1";
    container.style.zIndex="1";
        // image.style.zIndex="-1";
    const imglabel = $(`#${pid}`).text();
    $("#expandedText").text(imglabel);
}





function closing(){
    container.style.display = "none";
}

function moveLeft() {
    if (cur === 0) {
        cur = 4;
    } else {
        cur--;
    }
    expandedImage.src = image[cur].src;
    let label = expandedImage.src.split('/');
    label = label[label.length - 1].split('.')[0].toLowerCase();
    if (label.includes('%20')) {
        label = label.split('%20').join('');
    }
    labeltext = $(`#${label}`).text();
    $("#expandedText").text(labeltext);
}

function moveRight(){
    if (cur === 4) {
        cur = 0;
    } else {
        cur++;
    }
    expandedImage.src = image[cur].src;
    let label = expandedImage.src.split('/');
    label = label[label.length - 1].split('.')[0].toLowerCase();
    if (label.includes('%20')) {
        label = label.split('%20').join('');
    }
    labeltext = $(`#${label}`).text();
    $("#expandedText").text(labeltext);
}

// for (i = 0; i < image.length; i++) {
//     image[i].addEventListener("click", clickHandler);
//   }
//   function clickHandler() {
//     alert('You clicked on a: ' + this.getAttribute("data-type"));
//   }
