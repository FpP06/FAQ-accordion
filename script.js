let items = document.querySelectorAll('.accordion .item .question');

items.forEach(item => {
    item.addEventListener('click', () => {
        let content = item.nextElementSibling;
        let icon = item.querySelector('img')
        if(item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.height = '0px';
            icon.src = "assets/images/icon-plus.svg"; 
        }
        else {
            item.classList.add('active');
            content.style.height = `${content.scrollHeight}px`;
            icon.src = "assets/images/icon-minus.svg"; 
        }
    })
})