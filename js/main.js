new Swiper(".mySwiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    watchOverflow: true,
});

let contactTabs = document.querySelectorAll('.js-tab-contact');
let inputBlock = document.querySelector('.application__inputs');
let contactBlock = document.querySelector('.application__contacts');

contactTabs.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.add('active');

        let currentBlock = document.querySelectorAll('.js-tab-contact.active');
        currentBlock.forEach(function (currentBlocks) {

            if (currentBlocks === item) {
                return;
            }
            console.log(item);
            currentBlocks.classList.remove('active');

        });

    });

});