const btnOpenElement = document.querySelector('button#open')
const btnCloseElement = document.querySelector('button#close')

btnOpenElement.addEventListener('click', ()=> {
    const btncoverElement = document.querySelector('cover')
    coverElement.classList.add('open-cover')
})


btnCloseElement.addEventListener('click', ()=> {
    const btncoverElement = document.querySelector('cover')
    coverElement.classList.remove('open-cover')
})
