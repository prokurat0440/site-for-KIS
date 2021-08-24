import {textContent} from "./text-content.js"
export default function switchArrow(){
    const switch1 = document.querySelectorAll('.switch1'),
        switch2 = document.querySelectorAll('.switch2'),
        text = document.querySelector('.text')
    
    let i
    let titleContent

    switch1.forEach((elem) => {
        elem.addEventListener('click', () => {
            titleContent = document.querySelector('.title-content')
            i = defineIndexText()
            if (i !== 0){
                text.innerHTML = textContent[i - 1]
            } else {
                text.innerHTML = textContent[i]
            }
            text.style.animation = 'scaleBlock 0.5s'
            let timeout = setTimeout(() => {text.style.animation = 'none'}, 500)
            window.scrollTo(0,0)
        })
    })
    switch2.forEach(elem => {
        elem.addEventListener('click', () => {
            titleContent = document.querySelector('.title-content')
            i = defineIndexText()
            if (i !== 12){
                text.innerHTML = textContent[i + 1]
            } else {
                text.innerHTML = textContent[i]
            }
            text.style.animation = 'scaleBlock 0.5s'
            let timeout = setTimeout(() => {text.style.animation = 'none'}, 500)
            window.scrollTo(0,0)
        })
    })

    function defineIndexText(){
        if (titleContent.textContent === '1. Назначение КИС'){
            return i = 0
        }
        if (titleContent.textContent === '2. Требования к КИС'){
            return i = 1
        }
        if (titleContent.textContent === '3. Общая структура объекта автоматизации'){
            return i = 2
        }
        if (titleContent.textContent === '4. Состав КИС 4.1. Техническое обеспечение'){
            return i = 3
        }
        if (titleContent.textContent === '4. Состав КИС 4.2 Системное программное обеспечение'){
            return i = 4
        }
        if (titleContent.textContent === '4. Состав КИС 4.3. Сетевое обеспечение'){
            return i = 5
        }
        if (titleContent.textContent === '4. Состав КИС 4.4 Средства организации баз данных'){
            return i = 6
        }
        if (titleContent.textContent === '4. Состав КИС 4.5. Прикладное ПО'){
            return i = 7
        }
        if (titleContent.textContent === '4. Состав КИС 4.6 Информационное обеспечение'){
            return i = 8
        }
        if (titleContent.textContent === '5. Технологии обработки информации'){
            return i = 9
        }
        if (titleContent.textContent === '6. Обслуживание системы'){
            return i = 10
        }
        if (titleContent.textContent === '7. Защита информации'){
            return i = 11
        }
        if (titleContent.textContent === '8. Оценка эффективности проекта КИС'){
            return i = 12
        }
    }
}