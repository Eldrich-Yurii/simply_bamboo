function showAuthor (auth) {
    const author = document.getElementById( 'author' ).innerHTML = "I am eldrich";
    
}


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
