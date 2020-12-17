/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//list of sections in the html file


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const list_sec=document.querySelectorAll("section"); 

const fragment = document.createDocumentFragment();

console.log(list_sec);

  for (const section of list_sec)
  {
       var li=document.createElement('li'); //create a new li
       let secId = section.getAttribute('id'); //get the section's id
       li.setAttribute('id',secId); //set li id = to section id
       var n=section.getAttribute('data-nav'); //get data-nav data
       var txt=document.createTextNode(n); //append the data from data-nav into textNode

       var lnk = document.createElement('a');  //create a new anchor tag
      
       //add the event listener so when the section is clicked in the nav bar it will be shown on the screen
      lnk.addEventListener("click",function()
	    {
        section.scrollIntoView({behavior:"smooth"});

      });
       // appending text to button 
       lnk.appendChild(txt);  //append txtNode (data-nav) into the anchor link 
       li.appendChild(lnk);   //append the newly created link to the li
       fragment.appendChild(li); //append the li into the fragment
  }
  //append the whole fragment(contains all li created) into the nav bar
  document.getElementById('navbar__list').appendChild(fragment);

  //changing some style in the nav bar and the li
  document.querySelector("nav").style.background="rgb(0,13,60,1)";
  document.querySelector("nav").style.padding="8px 20px 8px 8px";
  
  var links=document.querySelectorAll("li");

  for (const li of links)
  {
    li.style.fontSize="18px";
    li.style.padding="8px";
    li.style.cursor="pointer";
  }

  //function to update the active link on the navbar
  function StyleClass(section)
  {
    var activeLink=document.querySelectorAll("a"); //get all links in the navbar
    var data = section.getAttribute('data-nav');  //get data from the viewed section
    for (const link of activeLink) // compare the data woth data on each link to grt the link belongs to the section
    {
      if (link.textContent==data)
      {
        link.classList.add("active-link"); //the active section found  => highlighting in the style.css file  line 26
      }
      else
      {
        link.classList.remove("active-link");
      }
    }
  }

window.addEventListener("scroll",function()  //add event listener with type scroll
{
  for (const section of list_sec)  //loop on sections to get the current section on the screen
  {    
    var rect = section.getBoundingClientRect(); 
    if(rect.top > 0 && rect.top <= 150 )    
    {
      section.classList.add("your-active-class");  // if found add the active class
      StyleClass(section);
    }
    else
    {
      section.classList.remove("your-active-class");
    }
  }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


