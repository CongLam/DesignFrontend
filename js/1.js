$(document).ready(function () {
    new WOW().init(); // kich hoat thu vien wow.jsa



    $(window).scroll(function () { 
        if($('html, css').scrollTop()>=300){
            $('header').addClass('menu-fixed')
        }
        else if($('html, css').scrollTop()<300){
            $('header').removeClass('menu-fixed')
        }
    });



    $(".menu ul li:nth-child(1)").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".home").offset().top -100
        },1200, "easeOutBack")
    });

    $(".menu ul li:nth-child(2)").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop:$(".about").offset().top -100
        },1200, "easeOutBack")
    });

    $(".menu ul li:nth-child(3)").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop:$(".portfolio").offset().top -100
        },1200, "easeOutBack")
    });

    $(".menu ul li:nth-child(4)").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop:$(".contact").offset().top -100
        },1200, "easeOutBack")
    });
    
    //responsive menu
    // $("#navigation .menu-icon ").click(function (e) { 
    //     e.preventDefault();
    //     $("#navigation").toggleClass("responsive_nav");
    //     console.log("ok");
    // });

  


    //back-top
    //b1:an back top btn
    $("#back-top").hide();
    $("#go-end").hide()
    //b2: hien back top khi keo xuong 100px

    $(window).scroll(function () { 
        if($(this).scrollTop()>100){
            $("#back-top").fadeIn();
        }
        else{
            $("#back-top").fadeOut();
        }
            
    });


    

    //b3:nhay len top khi click
    $("#back-top").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1300 , "easeOutBack")
    });



    // //responsive menu
    // $("header.navigation div.menu a i.menu-icon ").click(function (e) { 
    //     e.preventDefault();
    //     $("header.navigation").toggleClass("responsive_nav");
    //     console.log("ok");
    // });

   

    // $(".menu-icon").hide();
    // //hien hoac an menu khi resize

    // $(window).resize(function() {
    //     var wi = $(window).width();
    //     if (wi >= 641) {
    //         $(".menu-icon").hide();
    //         $('.menu-content').addClass('main-menu');
    //         $('.menu-content').removeClass('responsive-menu');
    //     }
    //     else {
    //         $(".menu-icon").fadeIn();
    //         $('.menu-content').addClass('responsive-menu');
    //         $('.menu-content').removeClass('main-menu');

    //     }
        
    // });

    // // $(".responsive-menu li").slideUp();
    // $(".menu-icon").click(function (e) { 
    //     e.preventDefault();
        
    //     $(".responsive-menu").slideToggle();
    //     $(".responsive-menu li").slideToggle();
        
    // });


   









    //animation
    $(window).scroll(function () { 
        var bodyLocal = $('body, html').scrollTop();
            sectionServiceLocal  = $('.section-service').offset().top;
            if(bodyLocal  >= sectionServiceLocal-550){
                $('.section-service').addClass('show-section-service');
            }
    });


});


//map
    // Initialize and add the map
        function initMap() {
            // The location of Uluru
            var uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: uluru, map: map});
        }


   