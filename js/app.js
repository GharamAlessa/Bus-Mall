'use strict';

let firstImageElement = document.getElementById('one');
let secondImageElement = document.getElementById('two');
let thirdImageElement = document.getElementById('three');
let ImagesElement = document.getElementById('images')
// edit to 25..............
let maxAttempt = 25;
let userAttempt = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

function Shop(name, src) {
    this.name = name;
    this.source = src;
    this.vote = 0;
    this.shown = 0;

    Shop.all.push(this);

}
Shop.all=[];
console.log(Shop.all);

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

    return Math.floor(Math.random() * Shop.all.length);
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


    firstImageElement.src = Shop.all[firstImageIndex].source;
    secondImageElement.src = Shop.all[secondImageIndex].source;
    thirdImageElement.src = Shop.all[thirdImageIndex].source;

    // console.log(firstImage, secondImage, thirdImage);
    Shop.all[firstImageIndex].shown++
    Shop.all[secondImageIndex].shown++
    Shop.all[thirdImageIndex].shown++
}

renderImages();

ImagesElement.addEventListener('click', handleUserClick);

let button=document.getElementById('Show');

function handleUserClick(e) {
 
  


    console.log(userAttempt);
     console.log(e.target.id);
    if (userAttempt < maxAttempt) {
        if (e.target.id === 'one') {
            Shop.all[firstImageIndex].vote++
    console.log(  Shop.all[firstImageIndex].vote);
    console.log('hello');
    userAttempt++
    renderImages();

        }
        else if (e.target.id === 'two') {
            Shop.all[secondImageIndex].vote++
            userAttempt++
            renderImages();
        } else if(e.target.id==='three') {
            Shop.all[thirdImageIndex].vote++
            userAttempt++
            renderImages();
    
        }
    } else {
        ImagesElement.removeEventListener('click',handleUserClick);

        button.addEventListener('click',handleButttonClick);
      
        
        
    }
    
}


function handleButttonClick() {
  
    let list = document.getElementById('result');
    
    for (let i = 0; i < Shop.all.length; i++) {
        let listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${Shop.all[i].name} has ${Shop.all[i].vote}vote ${Shop.all[i].shown}shown`


    }
}




