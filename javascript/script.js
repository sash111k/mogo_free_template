//BURGEEERRR

let burger = document.querySelector('.burger');
let header_nav = document.querySelector('.header_nav');

burger.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    header_nav.classList.toggle('_active');
})


//плавная навигация
let links = document.querySelectorAll('.nav_link[data-goto]');
if (links.length > 0) {
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const nav_link = event.target;
            const gotoBlock = document.querySelector(nav_link.dataset.goto);
            const scrollTo = gotoBlock.getBoundingClientRect().top + window.pageYOffset - 55;
            window.scrollTo({
                top: scrollTo,
                behavior: "smooth"
            });
            document.body.classList.remove('_lock');
            burger.classList.remove('_active');
            header_nav.classList.remove('_active');

            event.preventDefault();
        })
    });
}

//прилипающее меню
let header = document.querySelector('header');
window.addEventListener('scroll', function(event) {
    if (window.pageYOffset > window.innerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})


//ACCORDIOON
let items = document.querySelectorAll('.accordion_item');

items.forEach(item => {
    item.querySelector('.accordion_item_title').addEventListener('click', function () {

        document.querySelectorAll('.item_arrow').forEach(iteem => {
            if (item.querySelector('.item_arrow') != iteem) {
                iteem.classList.remove('-active');
            }
        })

        document.querySelectorAll('.accordion_item_text').forEach(iteem => {
            if (this.nextElementSibling != iteem) {
                iteem.classList.remove('-active');
            }
        })

        item.querySelector('.item_arrow').classList.toggle('-active');
        this.nextElementSibling.classList.toggle('-active');
    })
});


