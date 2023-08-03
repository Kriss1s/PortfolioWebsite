let step = 1;
const steps = document.querySelectorAll('.step')
const progress = document.querySelector('.progress')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
next.addEventListener('click', () => {
    if (step < 4) {
        step++
        if (step > 1 && prev.classList.contains('disabled')) {
            prev.classList.remove('disabled')
            prev.disabled = false
        }
    }
    steps[step - 1].classList.add('active')
    progress.style.width = `${((step - 1) / 3) * 100}%`
    if (step === 4) {
        next.disabled = true
        next.classList.add('disabled')
    }
})

prev.addEventListener('click', () => {

    if (step > 1) {

        step--
        if (step < 4 && next.classList.contains('disabled')) {
            next.classList.remove('disabled')
            next.disabled = false
        }
    }

    steps[step].classList.remove('active')
    progress.style.width = `${((step - 1) / 3) * 100}%`
    if (step === 1) {
        prev.disabled = true
        prev.classList.add('disabled')
    }
})