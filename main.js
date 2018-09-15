// Image sliding begins
const images = [
    "images/groupImg.jpg",
    "images/jw-image.jpg",
    "images/mb-image.jpg",
    "images/aw-image.jpg",
    "images/mw-image.jpg",
    "images/rp-image1.jpg"
];
// function for Print To DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv!==null){
    selectedDiv.innerHTML = stringToPrint; 
}
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

// Band Member Start
const dairyQueens= [
    {
    stageName:'Blizzard',
    imgUrl: 'images/blizzardpicture.jpg',
    biography: 'The rain stick sensation Blizzard found her love for music started at a young age. She traveled the world as a solo artist for years. She was ready to give up her career as until stumbling upon The Dairy dairy Queens at a local bar in 2010. Her career with them continues to skyrocket and shows us that you should never give up on your passions.'
    },
    { 
    stageNname:'Hot Fudge',
    imgUrl: 'image/rp-image.jpg',
    biography:'Los Angeles, Hot fudge has spent her entire life saturated in music, dance and performance, it is the release of his debut album Bringing in the Cheese that will mark his true musical introduction to the world.'
    },
    {
    stageName: 'Peach Carmel',
    imgUrl:'image/peachcarmel.jpg',
    biography: 'Peach Carmel is a highly talented lyricist, singer, songwriter. Involved in music for about 10 years, she has recorded a plethera of music and played and performed at numerous venues. She found herself at a point in life where she wanted to stop running from God. She writes her own music, always creating it totally real and universal.' 
    }, 
    {
    stageName: 'Baby Swiss',
    imgUrl:'image/babyswiss.jpg',
    biography:'At just 24 years old, Baby Swiss has already traveled a path that has taken him from the depths of a broken home to the top of her game as a songwriter, producer, philanthropist and ultimately, a believer. Her attitude and work ethic reflect a mantra that says anything is possible if you just put your mind to it.'
    },
    {
    stageName: 'Butter',
    imgUrl:'image/butter.jpg',
    biography: 'Butter was found by the group in 2011 at a local park stringing her guitar. Her musical journey led her to a life of patrying and eventually left her homeless. After joining the band her confidence grew and style developed. She is now an inspirational figure and is a key member of the group.'
    }
    
];
const bandMemberStringBuilder = () => {
    let newString = '';
    for(let i = 0; i < dairyQueens.length; i++){
        newString += `<div class = "dairyQueens">`;
        newString += `<h3>${dairyQueens[i].stageName}</h3>`;
        newString += `<h3>${dairyQueens[i].imgUrl}</h3>`;
        newString += `<h3>${dairyQueens[i].biography}</h3>`;
        newString +=  `</div>`;

    }
    printToDom(newString, 'dairyQueens');
}
bandMemberStringBuilder();
// Band Member Page End

//Song Page Start

const songData = [
    {albumName: 'Bring the Cheese',
    songOne: 'Born to Brie wild',
    songTwo: 'Munster Mash',
    songThree: 'Ricottanother thing coming',
    songFour: "It's too Gouda to be true",
    songFive: 'You Feta believe it' }, 
    {albumName: 'Cows go Moo',
    songOne: 'I moo, therefore I am',
    songTwo: 'Stinky fromage',
    songThree: 'Udderly delicious',
    songFour: 'Churn dat butta',
    songFive: 'Thanks a latte' },
    {albumName: 'Treat Your Beats',
    songOne: 'Lick me till ice cream',
    songTwo: 'Sundae school',
    songThree: 'Not pudding up with it',
    songFour: "Don't break my cheesecake",
    songFive: 'Whip my Cream' }
];

const songLoop = () => {
    let stringBuilder = '';
    for (i = 0; i < songData.length; i++) {
    stringBuilder += `<div class='albumSongs'>`; 
    stringBuilder += `<h2>${songData[i].albumName}</h2>`;
    stringBuilder += `<p>${songData[i].songOne}</p>`
    stringBuilder += `<p>${songData[i].songTwo}</p>`
    stringBuilder += `<p>${songData[i].songThree}</p>`
    stringBuilder += `<p>${songData[i].songFour}</p>`
    stringBuilder += `<p>${songData[i].songFive}</p>`
    stringBuilder += `</div>`
    };
    printToDom(stringBuilder, 'allSongs')
};

songLoop();

//Song Page End

