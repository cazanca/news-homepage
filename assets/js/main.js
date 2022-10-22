(()=> {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.add('show')
    })

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('show')
    })
})()