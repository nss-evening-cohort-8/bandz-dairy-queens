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
//   function to slide Images
const slideMyImages= (i) => {
     setTimeout(()=> {    
      newString=`<img src="${images[i]}" width= "900" height="500">`;
       printToDom(newString, "image_container");
    }, i * 3000);
  }
// function to loop through images
const slideImage= () => {
    for(i=0; i<images.length; i++){
      slideMyImages(i);
    }
  }
slideImage();
setInterval(slideImage, 18000);
  
// image sliding ends

