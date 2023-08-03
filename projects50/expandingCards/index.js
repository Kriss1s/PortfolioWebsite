
let blocks = document.querySelectorAll('.block');

blocks.forEach(element => {
    element.addEventListener('click', () => {
        // let active = document.querySelector('.active');
        // active.classList.remove('active')
        remove()
        element.classList.add("active")

    })
});

function remove() {
    blocks.forEach(e => e.classList.remove('active'))
}