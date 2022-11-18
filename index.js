var expandedImage = document.getElementById("expandedImage");
var container = document.getElementById("container");
var image = document.getElementsByClassName("image");
var text = document.getElementById("expandedText")

var left = document.getElementById("left");
var right = document.getElementById("right");

var cur =0;


// for (i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", enlarge);
//   }

function link(image) {
    
}

function enlarge(image) {
    // console.log(event.target.src);
    expandedImage.src = image;
    // expandedImage.style.display = "flex";
    container.style.display ="block";
    expandedImage.style.zIndex = "1";
    container.style.zIndex="1";
        // image.style.zIndex="-1";
}





function closing(){
    container.style.display = "none";
}

function moveLeft() {
    if (cur ==0) {
        expandedImage.src = image[11].src;
        cur = 11;
    } else {
        expandedImage.src = image[cur-1].src;
        cur--;
    }

}

function moveRight(){
    if (cur ==11) {
        expandedImage.src = image[0].src;
        cur = 0;
    } else {
        expandedImage.src = image[cur+1].src;
        cur++;
    }
}

// for (i = 0; i < image.length; i++) {
//     image[i].addEventListener("click", clickHandler);
//   }
//   function clickHandler() {
//     alert('You clicked on a: ' + this.getAttribute("data-type"));
//   }
