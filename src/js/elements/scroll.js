const links = document.querySelectorAll('a.scroll-to')

for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        const sectionId = link.getAttribute('href')

        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}