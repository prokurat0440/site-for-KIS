import {textContent} from "./text-content.js"
export default function menu(){
    const navigation = document.querySelector('.navigation'),
        btnMenu = document.querySelector('.btn-menu'),
        wrapper = document.querySelector('.wrapper'),
        titleNavigation = document.querySelector('.title-navigation'),
        list = document.querySelector('.list'),
        links = document.querySelectorAll('.link'),
        text = document.querySelector('.text'),
        cross = document.querySelector('.cross'),
        blockContent = document.querySelector('.block-content'),
        wrapperHeader = document.querySelector('.wrapper-header'),
        wrapperMenu = document.querySelector('.wrapper-menu'),
        footer = document.querySelector('.footer'),
        linkVK = document.querySelector('.link-vk')

    if (document.documentElement.clientWidth >= 620){
        navigation.style.height = document.documentElement.scrollHeight + "px"
    }

    btnMenu.addEventListener('click', () => {
        wrapper.style.filter = 'blur(3px)'
        if (document.documentElement.clientWidth <= 620){
            navigation.style.visibility = 'visible'
            list.style.opacity = '1'
            titleNavigation.style.opacity = '1'
            navigation.style.animation = 'menuOpenPhone 0.5s'
            list.style.opacity = 1
        } else {
            navigation.style.visibility = 'visible'
            navigation.style.animation = 'menuOpen 0.5s'
            list.style.opacity = 1
        }
    })
    wrapper.addEventListener('click', () => {
        wrapper.style.filter = 'blur(0px)'
        if (document.documentElement.clientWidth <= 620){
            list.style.opacity = '0'
            titleNavigation.style.opacity = '0'
            navigation.style.animation = 'menuClosePhone 0.5s'
            let timeout = setTimeout(() => {navigation.style.visibility = 'hidden'}, 450)
            list.style.opacity = 0
        } else {
            navigation.style.animation = 'menuClose 0.5s'
            let timeout = setTimeout(() => {navigation.style.visibility = 'hidden'}, 450)
            list.style.opacity = 0
        }
    })
    links.forEach((link, i) => {
        link.addEventListener('click', () => {
            cross.style.display = 'initial'
            wrapperHeader.style.visibility = 'hidden'
            wrapperMenu.style.visibility = 'hidden'
            footer.style.visibility = 'hidden'
            linkVK.textContent = ''
            blockContent.style.display = 'initial'
            text.innerHTML = textContent[i]
            blockContent.style.marginLeft = -blockContent.clientWidth/2 + 'px'
            blockContent.style.animation = 'scaleBlock 1s'
            let timeout = setTimeout(() => blockContent.style.opacity = 1, 1000)
            wrapper.style.display = 'none'
            window.scrollTo(0, 0)
            list.style.opacity = 0

            if (document.documentElement.clientWidth <= 620){
                list.style.opacity = '0'
                titleNavigation.style.opacity = '0'
                navigation.style.animation = 'menuClosePhone 0.5s'
                let timeout = setTimeout(() => {navigation.style.visibility = 'hidden'}, 450)
            } else {
                navigation.style.animation = 'menuClose 0.5s'
                let timeout = setTimeout(() => {navigation.style.visibility = 'hidden'}, 450)
            }
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
        wrapper.style.filter = 'blur(0px)'
        wrapper.style.display = 'block'
    })
}