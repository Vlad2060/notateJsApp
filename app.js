const createButton = document.getElementById('create')
const background = document.getElementById('background')

let headerInput = document.getElementById('headerInput')
let textarea = document.getElementById('textarea')

const article = document.createElement('article')
const body = document.querySelector('body')
const span = document.createElement('span')
const headerText = document.createElement('h1')
const para = document.createElement('p')

function closeBackground() {
    background.style.display = 'none'
}

function createPanel() {
    background.style.display = 'flex'
}

function createNotate() {
    if (headerInput.value !== '' && textarea.value !== '') {
        const newArticle = document.createElement('article')  // Створюємо новий елемент article
        const newHeaderText = document.createElement('h1')    // Створюємо новий елемент h1 для заголовку
        const newSpan = document.createElement('span')         // Створюємо новий елемент span для контейнера
        const newPara = document.createElement('p')           // Створюємо новий елемент p для тексту

        newHeaderText.innerText = headerInput.value           // Встановлюємо текст заголовку
        newPara.innerText = textarea.value                     // Встановлюємо текст абзацу

        newSpan.appendChild(newPara)                          // Додаємо абзац до контейнера span
        newArticle.appendChild(newHeaderText)                // Додаємо заголовок до нової нотатки
        newArticle.appendChild(newSpan)                      // Додаємо контейнер span до нової нотатки

        body.appendChild(newArticle)    
        closeBackground()      
        
        headerText.value = ''
        textarea.value = ''
    } else {
        alert('The header or information will not be written! Write something to create please!')
    }
}


