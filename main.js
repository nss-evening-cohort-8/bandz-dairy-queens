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



//Event Page Begin
const tourSched  = {
    tourPlaces: [
{
    imageURL: "Photo goes here",
    locationName: "St. James Cheese Company",
    address: "Warehouse District 641 Tchoupitoulas New Orleans",
    date: "October 31st 2019",
    time: "5:00pm - 10:00pm",
    ticketPrice: "$100 up to $3,000",
    description: "It's time for us to get rowdy ya'll. I hope you're ready to bring your favorite drinks and dairy products because this evening is all about good music, good food and the New Orleans Warehouse District. Come early and get a cheese plate along with some house wine. Parking for this event is all up to you. There are multiple places that you can go to depending on price range and availability. Also, this is New Orleans, so it's bound to get crrrazzzzy! Just be aware of your surroundings, your tolerances and of each other.",
    websiteURL: "https://stjamescheese.com/"
},
{
    imageURL: "Photo goes here",
    locationName: "St. Tola Goat Farm",
    address: "Gortbofearna, Maurice Mills, Ennistymon, Co. Clare, Ireland V95 XA9C",
    date: "November 13th 2019",
    time: "4:30pm - 8:30pm",
    ticketPrice: "$250 up to $3,000",
    description: "MMmmm Irish Goat Cheese... Folk Rock Music... Fields of green... Sounds like a good combination, right? If you want to take a tour of this farm, go ahead and schedule one today. They take about an hour to an hour and a half, but you get to understand sustainable farming before WE TAKE OVER! Parking will be very specific so please follow the guidelines. These are personal fields so please be respectful when you park.",
    websiteURL: "www.st-tola.ie"
},
{
    imageURL: "Photo goes here",
    locationName: "St. Andrews Cheese Company",
    address: "Falside Farm Cottage, Pittenweem, Anstruther, Scotland KY10 2RT",
    date: "November 29th 2019",
    time: "5:15pm - 7:00pm",
    ticketPrice: "$58.50 up to $409.35",
    description: "Like coffee? Like cake? Like cheese? Like our rockin' music!? Then, yeah, this place is for you. Enjoy some delicous home cooking along with their award winning cheeses before coming to the stage. You can watch the cheese being made; milk from happy and healthy cows. Parking will be free at this event. However, you are parking in one of the fields that this company owns. Please be respectful when driving through it. We are also not responsible for any cow-pie incidents. ",
    websiteURL: "https://www.standrewscheese.co.uk"
},
{
    imageURL: "Photo goes here",
    locationName: "Widmer's Cheese Cellars",
    address: "214 W. Henni St., Theresa, WI 53091, United States",
    date: "May 16th 2019",
    time: "5:30pm - 9:00pm",
    ticketPrice: "$260 up to $1,050",
    description: "You're in for a real treat here at Widmer's Cheese Cellars. Plan on getting to the show before we begin! You'll be able to tour the Cheese Cellar, seeing first hand how the cheese is made in the factory store and viewing area. It opens at 7am and closes just in time for us to begin. Eat some good cheese and then come rock out! Parking will be a bit tricky because Theresa is a small town. There will be special parking available for concert and cheese goers. Follow the signs and volunteers will point you in the correct direction. Parking will be free.",  
    websiteURL: "https://www.widmerscheese.com/factory-tour/" 
}
]
};

const tourStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < tourSched.tourPlaces.length; i++){
      newString += `<div class = "tours">`;
      newString += `<h5>${tourSched.tourPlaces[i].imageURL}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].locationName}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].address}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].date}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].time}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].ticketPrice}</h3>`;
      newString += `<h5>${tourSched.tourPlaces[i].description}</h5>`;
      newString += `<h5>${tourSched.tourPlaces[i].websiteURL}</h5>`;
      newString += `</div>`;
  }
  printToDom(newString, 'tourEvents');
};
tourStringBuilder();


// Event Page End