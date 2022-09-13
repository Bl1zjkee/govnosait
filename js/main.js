var windowOnloadAdd = function (event) {
    if ( window.onload ){
        window.onload = window.onload + event;
    } else {
        window.onload = event;
    };
};

windowOnloadAdd(function() {

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


    new Swiper(".mainSwiper", {
        slidesPerView: 1,
        spaceBetween:20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        watchOverflow: true,
    });

    new Swiper(".threeSwiper", {
        slidesPerView: 3,
        spaceBetween:20,
        breakpoints:{
            320:{
                slidesPerView: 1,
            },
            540:{
                slidesPerView: 2.2,
            },

            1200:{
                slidesPerView:3,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        watchOverflow: true,
        autoHeight: true,
    });




    let tabs = document.querySelectorAll('.js-tab-contact');
    tabs.forEach((item) => {
        let k = item.dataset.contact;
        let lols = document.querySelectorAll(`.${k}`);

        item.addEventListener("click",function(e){

            e.preventDefault();


            let currentlols = document.querySelectorAll(".js-tab-contact.active");
            let currentTabs = document.querySelectorAll(".allcard.active");

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


    let tab = document.querySelectorAll('.js-tab-receive');
    tab.forEach((items) => {
        let t = items.dataset.receive;
        let lol = document.querySelectorAll(`.${t}`);

        items.addEventListener("click",function(e){

            e.preventDefault();


            let currentlol = document.querySelectorAll(".js-tab-receive.active");
            let currentTab = document.querySelectorAll(".allcards.active");

            currentlol.forEach(function(tabItems){
                if(tabItems === items){
                    return;
                }

                tabItems.classList.remove("active");

            });

            currentTab.forEach((currentTabq) => {
                currentTabq.classList.remove("active");

            });

            lol.forEach((currentItemq) => {
                currentItemq.classList.add("active");


            });

            items.classList.add("active");

        });

    });


});



