const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const listItems = document.querySelectorAll('.links a');
const portfolioLists = document.querySelectorAll('.portfolio-section ul li')

// Show the nav when scrollY is 150
window.addEventListener('scroll', () => {
    if (window.scrollY >= 150) {
        nav.style.backgroundColor = '#333'
    } else {
        nav.style.backgroundColor = 'transparent'
    }

})
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 788) {
        nav.style.backgroundColor = '#333'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})


// Show and hide the menu in mobile screen by clickking the burger menu
navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
})



// // Make the menu background color dark for the small screen
// if (window.innerWidth < 788) {
//     nav.style.backgroundColor = '#333'
// } else {
//     nav.style.backgroundColor = 'transparent'
// }


// When click a link in the menu, it select this link and remove a class to hide the menu
listItems.forEach((a) => {
    a.addEventListener('click', (e) => {
        links.classList.remove('show-links');
        //remove the class active from any link and add it to the current clicked
        listItems.forEach((a) => {
            a.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
    })
})

// Change selected(active) link color in portfolio links
portfolioLists.forEach((li) => {
    li.addEventListener('click', (e) => {
        //remove the class active from any link and add it to the current clicked
        portfolioLists.forEach((li) => {
            li.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
    })
})


//Typed text for the home section h1
var typed = new Typed('.animate', {
    strings: ['Web Designer',
        'Network Engineer',
        'WordPress Developer',

    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});







