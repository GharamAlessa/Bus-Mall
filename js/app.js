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
new Shop('breackfast', 'Images/breackfast.jpg');
new Shop('bubblegum', 'Images/bubblegum.jpg');
new Shop('chair', 'Images/chair.jpg');
new Shop('cthulhu', 'Images/cthulhu.jpg');
new Shop('dog-duck', 'Images/dog-duck.jpg');
new Shop('dragon', 'Images/dragon.jpg');
new Shop('pen', 'Images/pen.jpg');
new Shop('pet-sweep', 'Images/pet-sweep.jpg');
new Shop('scissors', 'Images/scissors.jpg');
new Shop('shark', 'Images/shark.jpg');
new Shop('sweep', 'Images/sweep.jpg');
new Shop('tauntaun', 'Images/tauntaun.jpg');
new Shop('unicorn', 'Images/unicorn.jpg');
new Shop('water-can', 'Images/water-can.jpg');
new Shop('wine-glass', 'Images/wine-glass.jpg');


// from w3 schools


function getRandomIndex() {

    return Math.floor(Math.random() * items.length);
}

//   console.log(getRandomIndex());



function renderImages() {


    firstImageIndex = getRandomIndex();
    secondImageIndex = getRandomIndex();
    thirdImageIndex = getRandomIndex();


    while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex) {
        secondImageIndex = getRandomIndex();
        thirdImageIndex = getRandomIndex();
    }
    // while (secondImageIndex===thirdImageIndex) {
    //     thirdImageIndex=getRandomIndex();
    //   }

    firstImageElement.src = items[firstImageIndex].source;
    secondImageElement.src = items[secondImageIndex].source;
    thirdImageElement.src = items[thirdImageIndex].source;

    //   console.log(firstImage,secondImage,thirdImage);
}

renderImages();

ImagesElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    console.log(event.target.id);
    userAttempt++
    console.log(userAttempt);
}

if (userAttempt < maxAttempt) {
    if (event.target.id === 'firstImage') {
        items[firstImageIndex].vote++

    }
    else if (event.target.id === 'secondImage') {
        items[secondImageIndex].vote++
    } else {
        items[thirdImageIndex].vote++

    } else {
        let list = document.getElementById('result');

        for (let i = 0; i < items.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = '${items[i].name} has ${items[i].vote}vote'

        }

        ImagesElement.removeEventListener('click'handleUserClick)
    }
    
}