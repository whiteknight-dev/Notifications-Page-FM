const notification = document.querySelectorAll('.notification');
const markRead = document.querySelector('#mark-read');

markRead.addEventListener('click', () => {

    notification.forEach(element => {

        if(element.classList.contains('unread')) element.classList.remove('unread');

    });

});

