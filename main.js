//Print To Dom function

const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    
};

//Song Page Start

const songData = [
    {albumName: 'Bring the Cheese',
    image: '../images/BringTheCheese.jpg',
    songOne: 'Born to Brie wild',
    songTwo: 'Munster Mash',
    songThree: 'Ricottanother thing coming',
    songFour: "It's too Gouda to be true",
    songFive: 'You Feta believe it' }, 
    {albumName: 'Cows go Moo',
    image: '../images/cows.jpg',
    songOne: 'I moo, therefore I am',
    songTwo: 'Stinky fromage',
    songThree: 'Udderly delicious',
    songFour: 'Churn dat butta',
    songFive: 'Thanks a latte' },
    {albumName: 'Treat Your Beats',
    image: '../images/treatyourbeat.jpg',
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
    stringBuilder += `<img src=${songData[i].image}>`;
    stringBuilder += `<p>${songData[i].songOne}</p>`;
    stringBuilder += `<p>${songData[i].songTwo}</p>`;
    stringBuilder += `<p>${songData[i].songThree}</p>`;
    stringBuilder += `<p>${songData[i].songFour}</p>`;
    stringBuilder += `<p>${songData[i].songFive}</p>`;
    stringBuilder += `</div>`;
    };
    printToDom(stringBuilder, 'allSongs')
};

songLoop();

//Song Page End