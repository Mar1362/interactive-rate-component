/*
    Hi, welcome to this javascript code and thank you checking my code
    Everything here is commented in order to make the code easy to understand
    feel free to feedback and comment even if there is nothing to say, say 'i have nothing to say :)'
    it really help. 
    for those who just want the code, there is the nocomment.js script that contain the same code without the comments

    Thank you!!
*/


// let us retrieve every element needed
var card = document.querySelector('section'); // we retrieve the card container in order to modify it's content at submit
var listItems = document.getElementsByTagName('li'); // we retrieve all list items in a collection to handle the click after
var submit = document.querySelector('button'); // we retrieve the submit button in order to handle the click after
/*
 it is because we have only one section, one button and one list
 at the HTML that we can retrieve them like this. So, if the HTML
 code change we may have to handle it back here. That is why the best
 way to retrieve elements from the HTML is by using their id but 
 since this is a small challenge so we keep it easy ;)
*/

// some functions will need some reference at their runtime so let's create them
var selectedRate = undefined; // hold the last selected rate 

// let's create some functions for each site functionnality

function selectListItem(event) {
    /*
        this function is to handle the view of a list item
        when it is clicked
    */

    if (selectedRate) selectedRate.className = ""; // we visually unselect the last selected rate by removing the 'clicked' css class
    event.target.className = "clicked"; // we visually select the rate by adding the 'clicked' css class on it
    selectedRate = event.target; // we change the reference to the new selected element so we can unselect it whenever we select another rate after
    // and that's all for this function
    /*
        Remark: this code is to avoid on big projects because 
        we do not consider if the element had some class affected
        to it before (and fortunately it don't).
        you can ask how that could be done by commenting at the feedback section.
        i'll be glad to answer
    */
}

function handleSubmit(){

    // this function handle the page once we click at the submit button
    // this function delete everything in the container and add new elements to it
    
    if (!selectedRate){ // if nothing was selected as a rate so the selectedRate variable will have the value undefined(see the upper function) then, !selectedRate = true
        alert('Please, rate first before submitting =(');
        return; // if the user didn't rate so we do not proceed and stop the function
    }

    card.innerHTML = ''; // we empty the container so we can start adding stuff on it ;)
    
    // now let us start add elements and their styles all in this js HaHa HaHaHa (trying to do badass anime laught :() )

    // first thing first, let's create the 'illustration thank you' image
    var figure = document.createElement('figure'); // we create a figure tag for holding the img tag
    var img = document.createElement('img'); // here is the image tag that will hold the illustration
    img.setAttribute('src', 'images/illustration-thank-you.svg'); // here we set the source attribute of the image. you may want to do it like this ' img.src = "..." '
    img.setAttribute('alt', ''); // here we empty the alt attribute of the image because this is just decorative
    img.setAttribute('role', 'presentation'); // here we specify that this image is just decorative 
    figure.style = "width: min-content; margin: auto; background-color: unset;" // easiest way to add css on an element. we keep it simple ;)
    figure.appendChild(img); // here we add the img tag to the figure one so the figure tag now hold the img one
    
    // here we go for the summary of rate paragraph
    var sum = document.createElement('p');
    sum.appendChild(document.createTextNode('You selected '+selectedRate.textContent+' out of 5')); // here we add the paragraph text and if there is any question on that comment it on the feedback section
    sum.style = "width: max-content; color: hsl(25, 97%, 53%); margin: auto; background-color: hsl(213, 19%, 18%); padding: 1%; border-radius: 20px; margin-top: 5%;"; // stylize, post any question at feedback section
    
    // now let us take care about the 'thank you' heading
    var title = document.createElement('h1');
    title.appendChild(document.createTextNode('Thank you!')); // here we add the 'thank you' text to the heading. we could break it in two line of code if you wish
    title.style = "width: max-content; margin: auto; margin-top: 10%"; // stylizing
   
    // then we manage the paragraph to finish the creations
    var parag = document.createElement('p'); // we create the p tag
    parag.appendChild(document.createTextNode('We appreciate you taking the time to give a rating.\
                     If you ever need more support, don’t hesitate to get in touch!')); // here we add the text of the paragraph
    
    parag.style = "text-align: center;";
    // finally we add everything to the container
    card.append(figure, sum, title, parag);

    /*
        Notice that we could use the innerHTML to add the elements and it will be easier than we did :)
    */

}

// let us now handle the clicks on the site
submit.addEventListener('click', handleSubmit, false); // for the submit button
// for the list we have to make a loop on listItems 
for (var i = 0; i < listItems.length; i++) listItems[i].addEventListener('click', selectListItem, false);