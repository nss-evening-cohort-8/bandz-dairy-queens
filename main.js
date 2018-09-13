//albumPage JS insert//

let albumTitle = [
    {releaseDate: 'August 2017',
    image: 'placeHolder'
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "insertHere",
    }, 
    {releaseDate: 'March 2018',
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "insertHere",
    }, 
    {releaseDate: 'July 2018',
    genre: 'Folk Rock',
    price: '$9.99',
    albumDescription: "insertHere",
    }, 
];

const albumTitle = () => {
  let stringBuilder = '';
  for (i = 0; i < albumPage.length; i++) {
  stringBuilder += `<div class='albumPage'>`; 
  stringBuilder += `<img src= ${albumTitle[i].image}height="300" width="250">`
  stringBuilder += `<h2>${albumTitle[i].albumName}</h2>`;
  stringBuilder += `<p>${albumTitle[i].releaseDate}</p>`;
  stringBuilder += `<p>${albumTitle[i].genre}</p>`;
  stringBuilder += `<p>${albumTitle[i].price}</p>`;
  stringBuilder += `<p>${albumTitle[i].albumDescription}</p>`;
  
  stringBuilder += `</div>`
  };
  printToDom(stringBuilder, 'albumPage')
};
albumPage();

//End of Album Page JS Insert//