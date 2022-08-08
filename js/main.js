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

// let contactTabs = document.querySelectorAll('.js-tab-contact');
// // let inputBlock = document.querySelector('.application__inputs');
// // let contactBlock = document.querySelector('.application__contacts');
// //
// // contactTabs.forEach((item) => {
// //     item.addEventListener('click', function () {
// //         item.classList.add('active');
// //
// //         let currentBlock = document.querySelectorAll('.js-tab-contact.active');
// //         currentBlock.forEach(function (currentBlocks) {
// //
// //             if (currentBlocks === item) {
// //                 return;
// //             }
// //             console.log(item);
// //             currentBlocks.classList.remove('active');
// //
// //         });
// //
// //     });
// //
// // });

let tabs = document.querySelectorAll('.js-tab-contact');
tabs.forEach((item) => {
    let k = item.dataset.contact;
    let lols = document.querySelectorAll(`.${k}`);

    item.addEventListener("click",function(e){

        e.preventDefault();


        let currentlols = document.querySelectorAll(".js-tab-contact.active");
        let currentTabs = document.querySelectorAll(".allcontacts.active");

        currentlols.forEach(function(tabItem){
            if(tabItem === item){
                return;
            }

            tabItem.classList.remove("active");

        });

        currentTabs.forEach((currentTab) => {
            currentTab.classList.remove("active");

        });

        lols.forEach((currentItem) => {
            currentItem.classList.add("active");


        });

        item.classList.add("active");

    });

});

let receiveTabs = document.querySelectorAll('.js-tab-contact');
receiveTabs.forEach((item) => {
    let t = item.dataset.receive;
    let lol = document.querySelectorAll(`.${t}`);

    item.addEventListener("click",function(e){

        e.preventDefault();


        let currentlol = document.querySelectorAll(".js-tab-contact.active");
        let currentTabss = document.querySelectorAll(".allreceive.active");

        currentlol.forEach(function(tabItems){
            if(tabItems === item){
                return;
            }

            tabItems.classList.remove("active");

        });

        currentTabss.forEach((currentTabq) => {
            currentTabq.classList.remove("active");

        });

        lol.forEach((currentItems) => {
            currentItems.classList.add("active");


        });

        item.classList.add("active");

    });

});
