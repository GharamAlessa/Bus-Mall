'use strict';

let firstImageElement = document.getElementById('one');
let secondImageElement = document.getElementById('two');
let thirdImageElement = document.getElementById('three');
let ImagesElement = document.getElementById('images');
// edit to 25..............
let maxAttempt = 25;
let userAttempt = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

let namesArr=[];
let voteArr=[];
let shownArr=[];
let shownPic=[];
// let items=[];
// Shop.all=[];




function Shop(name, src) {
    this.name = name;
    this.source = src;
    this.vote = 0;
    this.shown = 0;

    Shop.all.push(this);

    namesArr.push(this.name);
    // voteArr.push(this.vote);
updateStorage();


}
Shop.all=[];
// console.log(Shop.all);

function updateStorage() {
  let arrayString=JSON.stringify(Shop.all);
  localStorage.setItem('items',arrayString);


}

function getItems() {
  let data=localStorage.getItem('items');
  console.log(data);
  let parsedData=JSON.parse(data);



if (parsedData!==null) {
  Shop.all=[];
  for (let i = 0; i < parsedData.length; i++) {
   let newShop=new Shop(parsedData[i].name,parsedData[i],source);
   newShop.vote=parsedData[i].vote;
   newShop.shown=parsedData[i].shown;

    
  }console.log(Shop.all);

}


}
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



getRandomIndex();




function renderImages() {


    firstImageIndex = getRandomIndex();
    secondImageIndex = getRandomIndex();
    thirdImageIndex = getRandomIndex();



    while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex||shownPic.includes(firstImageIndex)||shownPic.includes(secondImageIndex)||shownPic.includes(thirdImageIndex)) {

      firstImageIndex =getRandomIndex(); 
        secondImageIndex = getRandomIndex();
        thirdImageIndex = getRandomIndex();
    }


shownPic=[firstImageIndex,secondImageIndex,thirdImageIndex];

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

    // console.log(  Shop.all[firstImageIndex].vote);
    // console.log('hello');

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



        for (let i = 0; i < Shop.all.length; i++) {
            voteArr.push(Shop.all[i].vote);
            shownArr.push(Shop.all[i].shown);
            
        }
      
     showChart();   
        
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




function showChart() {

    const data = {
      labels: namesArr,
      datasets: [{
        label: 'Vote',
        data: voteArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Shown',
        data: shownArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    
    ]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
  
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  
  }



