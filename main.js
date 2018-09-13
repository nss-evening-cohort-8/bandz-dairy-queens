// Image sliding begins
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
   
	for (i=0; i < images.length; i++){
         let newString = `<img src="${images[i]}" width="1000px">`;
         if(i < images.length){
            i++;
        }else {
            i = 0;
        }
        let counter = 0;
    setTimeout(() => {
        counter++;
        printToDom(newString, 'image_container')}, 3000); 
}
}
imagesStringBuilder();

// image sliding ends
