const images = [
    "images/groupImg.jpg",
    "images/jw-image.jpg",
    "images/mb-image.jpg",
    "images/aw-image.jpg",
    "images/mw-image.jpg",
    "images/rp-image1.jpg"
];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint; 
}

const imagesStringBuilder =() => {
    let newString = ' ';
	for (i=0; i < images.length; i++){
        newString += `<img src="${images[i]}" width="500px">`;
    };
    printToDom(newString, 'image_container');
}

imagesStringBuilder();
