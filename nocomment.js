/*
    Hi, welcome to this javascript code and thank you checking my code
    this is the nocomment.js file in which the code is not commented for people who just want the code
    without any comment. if you feel this code not undertandable then the index.js code is the file you
    need to open because at there, everyline of code is commented in order to facilitate the comprehension.
    feel free to feedback and comment even if there is nothing to say, say 'i have nothing to say :)'
    it really help. 

    Thank you!!
*/


var card = document.querySelector('section'); 
var listItems = document.getElementsByTagName('li'); 
var submit = document.querySelector('button'); 

var selectedRate = undefined;

function selectListItem(event) {

    if (selectedRate) selectedRate.className = ""; 
    event.target.className = "clicked"; 
    selectedRate = event.target; 
}

function handleSubmit(){
    
    if (!selectedRate){ 
        alert('Please, rate first before submitting =(');
        return; 
    }

    card.innerHTML = ''; 
    
    var figure = document.createElement('figure'); 
    var img = document.createElement('img'); 
    img.setAttribute('src', 'images/illustration-thank-you.svg'); 
    img.setAttribute('alt', ''); 
    img.setAttribute('role', 'presentation'); 
    figure.style = "width: min-content; margin: auto; background-color: unset;";
    figure.appendChild(img);

    var sum = document.createElement('p');
    sum.appendChild(document.createTextNode('You selected '+selectedRate.textContent+' out of 5')); 
    sum.style = "width: max-content; color: hsl(25, 97%, 53%); margin: auto; background-color: hsl(213, 19%, 18%); padding: 1%; border-radius: 20px; margin-top: 5%;"; 
    
    var title = document.createElement('h1');
    title.appendChild(document.createTextNode('Thank you!')); 
    title.style = "width: max-content; margin: auto; margin-top: 10%"; 
   
    var parag = document.createElement('p');
    parag.appendChild(document.createTextNode('We appreciate you taking the time to give a rating.\
                     If you ever need more support, don’t hesitate to get in touch!'));
    
    parag.style = "text-align: center;";
    card.append(figure, sum, title, parag);
}

submit.addEventListener('click', handleSubmit, false); 
for (var i = 0; i < listItems.length; i++) listItems[i].addEventListener('click', selectListItem, false);