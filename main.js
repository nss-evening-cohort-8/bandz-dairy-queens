
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
    imgUrl: '../images/blizzardpicture.jpg',
    biography: 'The rain stick sensation Blizzard found her love for music started at a young age. She traveled the world as a solo artist for years. She was ready to give up her career as until stumbling upon The Dairy dairy Queens at a local bar in 2010. Her career with them continues to skyrocket and shows us that you should never give up on your passions.'
    },
    { 
    stageName:'Hot Fudge',
    imgUrl: '../images/rp-image.jpg',
    biography:'Los Angeles, Hot fudge has spent her entire life saturated in music, dance and performance, it is the release of his debut album Bringing in the Cheese that will mark his true musical introduction to the world.'
    },
    {
    stageName: 'Peach Carmel',
    imgUrl:'../images/peachcarmel.jpg',
    biography: 'Peach Carmel is a highly talented lyricist, singer, songwriter. Involved in music for about 10 years, she has recorded a plethera of music and played and performed at numerous venues. She found herself at a point in life where she wanted to stop running from God. She writes her own music, always creating it totally real and universal.' 
    }, 
    {
    stageName: 'Baby Swiss',
    imgUrl:'../images/babyswiss.jpg',
    biography:'At just 24 years old, Baby Swiss has already traveled a path that has taken him from the depths of a broken home to the top of her game as a songwriter, producer, philanthropist and ultimately, a believer. Her attitude and work ethic reflect a mantra that says anything is possible if you just put your mind to it.'
    },
    {
    stageName: 'Butter',
    imgUrl:'../images/butter.jpg',
    biography: 'Butter was found by the group in 2011 at a local park stringing her guitar. Her musical journey led her to a life of patrying and eventually left her homeless. After joining the band her confidence grew and style developed. She is now an inspirational figure and is a key member of the group.'
    }
    
];
const bandMemberStringBuilder = () => {
    let newString = '';
    for(let i = 0; i < dairyQueens.length; i++){
        newString += `<div class = "dairyQueens">`;
        newString += `<h3>${dairyQueens[i].stageName}</h3>`;
        newString += `<img src= ${dairyQueens[i].imgUrl} width = "200px">`;
        newString += `<h3>${dairyQueens[i].biography}</h3>`;
        newString +=  `</div>`;

    }
    printToDom(newString, 'dairyQueens');
}
bandMemberStringBuilder();
// Band Member Page End

//Song Page Start

const songData = [
    {
    albumName: 'Bring the Cheese',
    image: '../images/theCheese.jpg',
    soundFile: 'mandolin.mp3',
    songOne: "It's too Gouda be true",
    songTwo: 'Munster Mash',
    songThree: 'Ricottanother thing coming',
    songFour: 'Born to Brie wild',
    songFive: 'You Feta believe it' 
    }, 
    {
    albumName: 'Cows go Moo',
    image: '../images/cows.jpg',
    soundFile: 'strummin.mp3',
    songOne: 'I moo, therefore I am',
    songTwo: 'Fresh from the teet',
    songThree: 'Udderly delicious',
    songFour: 'Churn dat butta',
    songFive: 'Thanks a latte' 
    },
    {
    albumName: 'Treat Your Beats',
    image: '../images/treatyourbeat.jpg',
    soundFile: 'theEntertainer.mp3',
    songOne: 'Lick me till ice cream',
    songTwo: 'Sundae School',
    songThree: 'Not pudding up with it',
    songFour: "Don't break my cheesecake",
    songFive: 'Whip my cream' 
    }
];

const songLoop = () => {
    let stringBuilder = '';
    for (i = 0; i < songData.length; i++) {
    stringBuilder += `<div class='albumSongs'>`; 
    stringBuilder += `<h2>${songData[i].albumName}</h2>`;
    stringBuilder += `<img class='songImage' src="${songData[i].image}">`;
    stringBuilder += `<p class='songName'>1. ${songData[i].songOne}</p>`;
    stringBuilder += `<audio controls>`;
    stringBuilder += `<source src="../soundFiles/${songData[i].soundFile}" type="audio/mpeg">`;
    stringBuilder += `</audio>`;
    stringBuilder += `<p class='songName'>2. ${songData[i].songTwo}</p>`;
    stringBuilder += `<p class='songName'>3. ${songData[i].songThree}</p>`;
    stringBuilder += `<p class='songName'>4. ${songData[i].songFour}</p>`;
    stringBuilder += `<p class='songName'>5. ${songData[i].songFive}</p>`;
    stringBuilder += `</div>`;
    };
    printToDom(stringBuilder, 'allSongs')
};

songLoop();

//Song Page End
//Event Page Begin
const tourPlaces = [
{
    cheeseImage: "../images/StJames.jpg",
    locationName: "Location: St. James Cheese Company",
    address: "Address: Warehouse District 641 Tchoupitoulas New Orleans",
    date: "Date: October 31st 2019",
    time: "Time: 5:00pm - 10:00pm",
    ticketPrice: "Ticket Pricing: $100 up to $3,000",
    albumPlaying: "Playing the albums: Bring the Cheese, Cows Go Moo and Treat Your Beats",
    websiteURL: "https://www.stjamescheese.com/"
},
{
    cheeseImage: "../images/StTola.jpg",
    locationName: "Location: St. Tola Goat Farm",
    address: "Address: Gortbofearna, Maurice Mills, Ennistymon, Co. Clare, Ireland V95 XA9C",
    date: "Date: November 13th 2019",
    time: "Time: 4:30pm - 8:30pm",
    ticketPrice: "Ticket Pricing: $250 up to $3,000",
    albumPlaying: "Playing the album: Bring the Cheese and a few other original or improv songs",
    websiteURL: "https://www.st-tola.ie"
},
{
    cheeseImage: "../images/StAndrews.jpg",
    locationName: "Location Time: St. Andrews Cheese Company",
    address: "Address: Falside Farm Cottage, Pittenweem, Anstruther, Scotland KY10 2RT",
    date: "Date: November 29th 2019",
    time: "Time: 5:15pm - 7:00pm",
    ticketPrice: "Ticket Pricing: $58.50 up to $409.35",
    albumPlaying: "Playing the album: Treat Your Beats and lucky audience members will join for random improv songs involving dairy product titles pulled from a hat",
    websiteURL: "https://www.standrewscheese.co.uk"
},
{
    cheeseImage: "../images/Widmer.jpg",
    locationName: "Location: Widmer's Cheese Cellars",
    address: "Address: 214 W. Henni St., Theresa, WI 53091, United States",
    date: "Date: May 16th 2019",
    time: "Time: 5:30pm - 9:00pm",
    ticketPrice: "Ticket Pricing: $260 up to $1,050",
    albumPlaying: "Playing the albums: Bring the Cheese and Treat Your Beats",
    websiteURL: "https://www.widmerscheese.com/factory-tour/" 
}
];

const tourStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < tourPlaces.length; i++){
      newString += `<div class = "tours">`;
      newString += `<img src='${tourPlaces[i].cheeseImage}' width = '350px'></img>`;
      newString += `<p>${tourPlaces[i].locationName}</p>`;
      newString += `<p>${tourPlaces[i].address}</p>`;
      newString += `<p>${tourPlaces[i].date}</p>`;
      newString += `<p>${tourPlaces[i].time}</p>`;
      newString += `<p>${tourPlaces[i].ticketPrice}</p>`;
      newString += `<p>${tourPlaces[i].albumPlaying}</p>`;
      newString += `<p>${tourPlaces[i].websiteURL}</p>`;
      newString += `</div>`;
      newString += '<br>';
  }
  printToDom(newString, 'tourEvents');
};
tourStringBuilder();
// Event Page End
//albumPage JS insert//
let albumTitle = [
    {albumName: 'Bring the Cheese',
    releaseDate: 'August 2017',
    image: '../images/theCheese.jpg',
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "This album came together after a fun album release party where many guest brought us Cheese.",
    }, 
    {albumName: 'Cows Go Moo!',
    releaseDate: 'March 2018',
    image: '../images/cows.jpg',
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "This album was written by all band members while on a relaxing on a farm in Franklin,TN.",
    }, 
    {albumName: 'Treat Your Beats',
    releaseDate: 'July 2018',
    image: '../images/treatyourbeat.jpg',
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "This Album was written by all band members. This album has the #1 Hit Song Treat Your Beats.",
    }
];

const bandAlbums = (albumArray) => {
  let stringBuilder = '';
  for (i = 0; i < albumArray.length; i++) {
  stringBuilder += `<h2>${albumArray[i].albumName}</h2>`;
  stringBuilder += `<div class='albumPage'>`; 
  stringBuilder += `<img class= "albumImages" src= ${albumArray[i].image}><br>`;
  stringBuilder += `<a href="link to song.html">Click here to listen to songs</a>`;
  stringBuilder += `<div class="rating">`;
  stringBuilder += ` <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>`;
  stringBuilder += `</div>`;
  stringBuilder += `<button type="button">Download</button>`;
  stringBuilder += `<p>${albumArray[i].releaseDate}</p>`;
  stringBuilder += `<p>${albumArray[i].genre}</p>`;
  stringBuilder += `<p>${albumArray[i].price}</p>`;
  stringBuilder += `<p>${albumArray[i].albumDescription}</p>`;
  stringBuilder += `</div>`;
  };
  printToDom(stringBuilder, 'album_container');
};
bandAlbums(albumTitle);

//Function for Alert//

const alertConnect = () => {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let emailAddress = document.getElementById('emailAddress').value
    alert( `Thanks ${firstName} ${lastName} for Contacting Beatz of Dairy Queens! We will be sending a email to ${emailAddress} soon.`)
};
let submitButton= document.getElementById('submit');
submitButton.addEventListener('click', function(){alertConnect()});

//End of Album Page JS Insert//

