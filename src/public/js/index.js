const navbar = document.getElementById('navbar')
const title = document.getElementById('title')

title.addEventListener('mouseover', () => {
    title.textContent = 'Notes api'
})
title.addEventListener('mouseout', () => {
    title.textContent = 'Sea in pot'
})