var modalBtn = document.querySelector('.modalBtn');
var modalcontent = document.querySelector('.modal-content');
var close = document.querySelector('.close');



modalBtn.addEventListener('click', function(){
    modalcontent.classList.add('active');
});

close.addEventListener('click', function(){
    modalcontent.classList.remove('active');
});



// humbruger

const toggleBtn = document.getElementsByClassName('toggle')[0]
const navlinks = document.getElementsByClassName('nav_items')[0]


toggleBtn.addEventListener('click', () => {
    navlinks.classList.toggle('btnactive')
})