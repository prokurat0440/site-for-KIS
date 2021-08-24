import {textContent} from "./text-content.js"
export default function blockContent(){
    
    const blocks = document.querySelectorAll('.block'),
    cross = document.querySelector('.cross'),
    wrapperHeader = document.querySelector('.wrapper-header'),
    blockContent = document.querySelector('.block-content'),
    text = document.querySelector('.text'),
    wrapper = document.querySelector('.wrapper'),
    wrapperMenu = document.querySelector('.wrapper-menu'),
    titleBlock = document.querySelectorAll('.title-block'),
    navigation = document.querySelector('.navigation'),
    footer = document.querySelector('.footer'),
    linkVK = document.querySelector('.link-vk')

    defineCenterBlockContent()
    window.addEventListener('resize', () => defineCenterBlockContent())

    blocks.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (navigation.style.visibility !== 'visible'){
                cross.style.display = 'initial'
                wrapperHeader.style.visibility = 'hidden'
                wrapperMenu.style.visibility = 'hidden'
                footer.style.visibility = 'hidden'
                linkVK.textContent = ''
                blockContent.style.display = 'initial'
                text.innerHTML = textContent[i]
                defineCenterBlockContent()
                blockContent.style.animation = 'scaleBlock 1s'
                let timeout = setTimeout(() => blockContent.style.opacity = 1, 1000)
                wrapper.style.display = 'none'
                window.scrollTo(0, 0)
            }
        })
        elem.addEventListener('mouseover', () => {
            let textBlock = elem.childNodes[3]
            textBlock.style.transition = '0.5s'
            textBlock.style.opacity = '1'
            titleBlock[i].style.transition = '0.5s'
            titleBlock[i].style.fontSize = '1.1em'
        })
        elem.addEventListener('mouseout', () => {
            let textBlock = elem.childNodes[3]
            textBlock.style.opacity = '0'
            titleBlock[i].style.fontSize = '1em'
        })
    })

    cross.addEventListener('click', () => {
        cross.style.display = 'none'
        wrapperHeader.style.visibility = 'visible'
        wrapperMenu.style.visibility = 'visible'
        footer.style.visibility = 'visible'
        linkVK.textContent = 'Prokurat Mihail'
        blockContent.style.animation = 'none'
        blockContent.style.display = 'none'
        blockContent.style.opacity = '0'
        wrapper.style.display = 'initial'
    })

    function defineCenterBlockContent(){
        blockContent.style.marginLeft = -blockContent.clientWidth/2 + 'px'
    }
}