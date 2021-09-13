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

// Build menu 

function makeNav(sections) {
    for (let i = 1; i < (sections + 1); i++) {
        let sectionTxt = `section ${i}`;
        let sectionLnk = `#section${i}`;
        const navUi = document.querySelector('#navbar__list');
        let liLink = document.createElement('li');
        let aLink = document.createElement('a');
        // aLink.setAttribute('href', sectionLnk);
        aLink.textContent = sectionTxt;
        aLink.classList.add('menu__link');
        liLink.appendChild(aLink);
        navUi.appendChild(liLink);
    }
}

makeNav(4); // number of sections.

// Scroll to section on link click





const liLinks = document.querySelectorAll('.menu__link');
let section;
let sectionO;
let liLink
for (let i = 1; i < 5; i++) {
    liLink = liLinks[(i - 1)]; // get every li
    section = `section${i}`; // example #section1
    sectionO = document.getElementById(section);
    const rectSection = sectionO.getBoundingClientRect(); // each section boundries
    liLink.addEventListener('click', function () {

        window.scrollTo(rectSection.x, rectSection.y);
    });
}

// Set sections as active if in viewport

document.addEventListener('scroll', function () {
    for (let i = 1; i < 5; i++) {
        section = `section${i}`;
        
        sectionO = document.getElementById(section);
        
        const sectionRect = sectionO.getBoundingClientRect();
        if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
            
            sectionO.classList.toggle('your-active-class');
        } else {
            sectionO.classList.remove('your-active-class');
        }
    }



});










