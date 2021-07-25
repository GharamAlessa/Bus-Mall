'use strict';

let firstImageElement = document.getElementById('one');
let secondImageElement = document.getElementById('two');
let thirdImageElement = document.getElementById('three');
let ImagesElement = document.getElementById('images')
// edit to 25..............
let maxAttempt = 5;
let userAttempt = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

function Shop(name, src) {
    this.name = name;
    this.source = src;
    this.vote = 0;
    this.shown = 0;

    items.push(this);

}

let items = [];

new Shop('bag', 'Images/bag.jpg');
new Shop('banana', 'Images/banana.jpg');
new Shop('bathroom', 'Images/bathroom.jpg');
new Shop('boots', 'Images/boots.jpg');
new Shop('breackfast', 'Images/breakfast.jpg');
new Shop('bubblegum', 'Images/bubblegum.jpg');
new Shop('chair', 'Images/chair.jpg');
new Shop('cthulhu', 'Images/cthulhu.jpg');
new Shop('dog-duck', 'Images/dog-duck.jpg');
new Shop('dragon', 'Images/dragon.jpg');
new Shop('pen', 'Images/pen.jpg');
new Shop('pet-sweep', 'Images/pet-sweep.jpg');
new Shop('scissors', 'Images/scissors.jpg');
new Shop('shark', 'Images/shark.jpg');
new Shop('sweep', 'Images/pet-sweep.jpg');
new Shop('tauntaun', 'Images/tauntaun.jpg');
new Shop('unicorn', 'Images/unicorn.jpg');
new Shop('water-can', 'Images/water-can.jpg');
new Shop('wine-glass', 'Images/wine-glass.jpg');


// from w3 schools


function getRandomIndex() {

    return Math.floor(Math.random() * Shop.length);
}

console.log(getRandomIndex);
getRandomIndex();

function renderImages() {


    firstImageIndex = getRandomIndex();
    secondImageIndex = getRandomIndex();
    thirdImageIndex = getRandomIndex();


    while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex) {
      firstImageIndex =getRandomIndex(); 
        secondImageIndex = getRandomIndex();
        thirdImageIndex = getRandomIndex();
    }


    firstImageElement.src = items[firstImageIndex].source;
    secondImageElement.src = items[secondImageIndex].source;
    thirdImageElement.src = items[thirdImageIndex].source;

    // console.log(firstImage, secondImage, thirdImage);
    items[firstImageIndex].shown++
    items[secondImageIndex].shown++
     items[thirdImageIndex].shown++
}

renderImages();

ImagesElement.addEventListener('click', handleUserClick);

let button=document.getElementById('Show');

function handleUserClick(e) {
 
    userAttempt++


    console.log(userAttempt);
     console.log(e.target.id);
    if (userAttempt <= maxAttempt) {
        if (e.target.id === 'one') {
            items[firstImageIndex].vote++
    console.log(  items[firstImageIndex].vote);
    console.log('hello');
        }
        else if (e.target.id === 'two') {
            items[secondImageIndex].vote++
        } else {
            items[thirdImageIndex].vote++
    
        }
    } else {
        ImagesElement.removeEventListener('click',handleUserClick);

        button.addEventListener('click',handleButttonClick);
      
        

        
    }
    
}

function handleButttonClick() {
  
    let list = document.getElementById('result');
    
    for (let i = 0; i < items.length; i++) {
        let listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${items[i].name} has ${items[i].vote}vote ${items[i].shown}shown`


    }
}




