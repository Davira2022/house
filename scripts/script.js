'use strict'
$(document).ready(function () {
    let menu = $('#menu')

    $('#menu-one').click(function () {
        $('.history')[0].scrollIntoView({behavior: 'smooth'});
        menu.css('display', 'none')
    });

    $('#menu-two').click(function () {
        $('.technologies')[0].scrollIntoView({behavior: 'smooth'});
        menu.css('display', 'none')
    });

    $('#menu-three').click(function () {
        $('.projects')[0].scrollIntoView({behavior: 'smooth'});
        menu.css('display', 'none')
    });

    $('#menu-four').click(function () {
        $('.steps')[0].scrollIntoView({behavior: 'smooth'});
        menu.css('display', 'none')
    });

    $('#menu-five').click(function () {
        $('.guarantees')[0].scrollIntoView({behavior: 'smooth'});
        menu.css('display', 'none')
    });


    let loader = $('.loader');

    $('.popup-with-form').magnificPopup({

        type: 'inline',
        preloader: false,
        focus: '#popupName',


        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#popupName';
                }
            }
        }
    });

    $('#popupSubmit').click(function () {

        let popupName = $('#popupName');
        let popupPhone = $('#popupPhone');
        let myPopup = $('#popup');
        let popupThankYou = $('#popupThankYou');
        let popupHasError = false;

        if (!popupName.val()) {
            popupName.css('border-color', 'red');
            popupName.next().show();
            popupHasError = true;
        }
        if (!popupPhone.val()) {
            popupPhone.css('border-color', 'red');
            popupPhone.next().show();
            popupHasError = true;
        }

        if (!popupHasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: popupName.val(), phone: popupPhone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        myPopup.children().not($('.mfp-close')).hide();
                        popupThankYou.css('display', 'flex');
                    } else {
                        popupName.val('');
                        popupPhone.val('')
                        alert('Возникла ошибка! Позвоните нам!');
                    }
                });
        }
    })



let small = $('.small');

small.hover(function () {
        $(this).siblings('.arrow-text').show();
        small.eq(2).children('#color-two').css('stroke', 'rgb(236, 198, 107)');
        small.eq(2).find('#color-one').css('fill', 'rgb(236, 198, 107)');
        small.eq(2).siblings('.arrow-text').hide();
    },
    function () {
        $(this).siblings('.arrow-text').hide();
    }
)

small.eq(2).hover(function () {
    small.eq(2).children('#color-two').css('stroke', 'rgb(252, 237, 203)');
    small.eq(2).find('#color-one').css('fill', 'rgb(252, 237, 203)');
    small.eq(2).siblings('.arrow-text').show();
})


$('#phone').inputmask({"mask": "+(999) 999-99999"});


new WOW({
    animateClass: 'animate__animated'
}).init();

$('.image-link').magnificPopup({type: 'image'});


$('#burger').click(function () {
    menu.css('display', 'block')
})

$('.close').click(function () {
    menu.css('display', 'none')
})

$('#more').click(function () {
    $('.project.more').css('display', 'flex');
    $('#more').hide()
})

$('.center').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
})



$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let myForm = $('#myForm');
    let thankYou = $('#thankYou');
    let hasError = false;


    $('.error-input').hide();
    name.css('border-color', '#821328');
    phone.css('border-color', '#821328');


    if (!name.val()) {
        name.css('border-color', 'red');
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    myForm.hide();
                    thankYou.css('display', 'flex');
                } else {
                    name.val('');
                    phone.val('')
                    alert('Возникла ошибка! Позвоните нам!');
                }
            });
    }
})
})

