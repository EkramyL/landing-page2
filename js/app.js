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

makeNav(4);

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

// Set sections as active

document.addEventListener('scroll', function () {
    for (let i = 1; i < 5; i++) {
        section = `section${i}`;
        console.log(section);
        sectionO = document.getElementById(section);
        console.log(sectionO);
        const sectionRect = sectionO.getBoundingClientRect();
        if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
            console.log("aha");
            sectionO.classList.toggle('your-active-class');
        } else {
            sectionO.classList.remove('your-active-class');
        }
    }



});


// const section = document.getElementById('section1');
// const sectionRect = section.getBoundingClientRect();
// console.log(sectionRect);


// document.addEventListener('scroll', function () {
// rectSec



// });






// const sections = document.querySelectorAll('section');
// document.addEventListener('scroll', function () {

    // for (let i = 1; i <= sections.length; i++) {
    //     let section = sections[i];
    //     let sectionO = document.getElementById(section);
    //     const sectionRect = sectionO.getBoundingClientRect();
    //     console.log(window.scrollY);
    //     console.log(sectionRect.y);
    //     if (window.scrollY <= sectionRect.y) {
    //         console.log("true");
    //         if (section.classList.contains('your-active-class')) {
    //             section.classList.remove('your-active-class');
    //         }

    //     }
    // }
// });


