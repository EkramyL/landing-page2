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
// let liLink;
let aLink;
let section;
let sectionO;
let liLinks;
let liLink;
let listItem;
const navList = document.getElementById('navbar__list');


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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu Dynamically

const sections = Array.from(document.getElementsByTagName('section'));
for(section of sections){
    let i = 1;
    listItem = document.createElement('li');
    navList.appendChild(listItem);
    aLink = document.createElement('a');
    // aLink.textContent = 'section ' 
    aLink.classList.add('menu__link');
    listItem.appendChild(aLink);
    
}


// Scroll to section on link click





liLinks = document.querySelectorAll('.menu__link');



for (let i = 1; i <= sections.length; i++){
    liLink = liLinks[i-1]; // get every li
    liLink.textContent = `section ${i}`;
    section = `section${i}`; // example #section1
    sectionO = document.getElementById(section);
    const rectSection = sectionO.getBoundingClientRect();
    liLink.addEventListener('click', function(){
        window.scrollTo(rectSection.x, rectSection.y);
        
        for (let link of liLinks){
            link.classList.remove('active');
        }
        this.classList.add('active');

    });

}

// Set sections as active if in viewport

document.addEventListener('scroll', function () {
    for (let i = 1; i <= sections.length; i++) {
        section = `section${i}`;
        
        sectionO = document.getElementById(section);
        
        const sectionRect = sectionO.getBoundingClientRect();
        if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
            
            sectionO.classList.add('your-active-class');
        } else {
            sectionO.classList.remove('your-active-class');
        }
    }



});










