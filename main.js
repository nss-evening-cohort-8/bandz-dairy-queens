//Print To Dom function

const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    
};

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
    {
    albumName: 'Bring the Cheese',
    image: '../images/theCheese.jpg',
    soundFile: 'not sure',
    songOne: "It's too Gouda be true",
    songTwo: 'Munster Mash',
    songThree: 'Ricottanother thing coming',
    songFour: 'Born to Brie wild',
    songFive: 'You Feta believe it' 
    }, 
    {
    albumName: 'Cows go Moo',
    image: '../images/cows.jpg',
    soundFile: 'CowSound.wav',
    songOne: 'I moo, therefore I am',
    songTwo: 'Stinky fromage',
    songThree: 'Udderly delicious',
    songFour: 'Churn dat butta',
    songFive: 'Thanks a latte' 
    },
    {
    albumName: 'Treat Your Beats',
    image: '../images/treatyourbeat.jpg',
    soundFile: 'not sure',
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
    stringBuilder += `<p>1. ${songData[i].songOne}</p>`;
    stringBuilder += `<audio controls>`;
    stringBuilder += `<p>Sample: </p>`
    stringBuilder += `<source src="../soundFiles/${songData[i].soundFile}" type="audio/wav">`;
    stringBuilder += `</audio>`;
    stringBuilder += `<p>2. ${songData[i].songTwo}</p>`;
    stringBuilder += `<p>3. ${songData[i].songThree}</p>`;
    stringBuilder += `<p>4. ${songData[i].songFour}</p>`;
    stringBuilder += `<p>5. ${songData[i].songFive}</p>`;
    stringBuilder += `</div>`;
    };
    printToDom(stringBuilder, 'allSongs')
};

songLoop();

//Song Page End

