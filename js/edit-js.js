jQuery(function($) {
    $(window).on("load", function() {
        $("div.loadScreen").fadeOut();
    });

    // Submenu
    $.fn.submenu = function() {
        var $self = $(this);
        $self.each(function(index, elem) {
            var hasChild = $(elem).children('ul');
            var childrenLength = $(elem).children('ul').length;
            if (childrenLength) {
                $(this).prepend('<i class="nav-drp-arw"></i>');

                //[ .nav-drp-arw css:-
                //.nav-drp-arw {  position: absolute; right: 0; top: 14px; cursor: pointer; }
                // .nav-drp-arw:after { font-size: 20px; font-weight: bold; color: #fff; content: '+'; }
                // .nav-drp-arw.current:after { background: #fff; width: 15px; height: 3px; content: ''; position: absolute; right: 0; top: 8px; } ]

            }

            $(elem).on('click', '.nav-drp-arw', function(e) {
                $(this).toggleClass('current');
                $(this).parent('li').find('> ul').stop(true, true).slideToggle('fast');
                $(this).parent('li').siblings().find('ul').stop(true, true).slideUp('fast');
                $(this).parent('li').siblings().find('.nav-drp-arw').removeClass('current');
                e.stopPropagation();
            });

            if ($('.sidebar-nav li:has(> ul)')) {
                $(this).find('ul').prev('a').removeAttr('href');
            }

            // If "a" link need to toggle then use this bottom code
            $(elem).on('click', ' > a', function(e) {
                $(this).siblings().toggleClass('current');
                $(this).parent('li').find('> ul').stop(true, true).slideToggle('fast');
                $(this).parent('li').siblings().find('ul').stop(true, true).slideUp('fast');
                $(this).parent('li').siblings().find('.nav-drp-arw').removeClass('current');
                e.stopPropagation();
            });
            //=========================================================


        });
    }
    $('.sidebar-nav ul li').submenu();
    $('.sidebar-nav ul li.current').children('ul').show();
    $('.sidebar-nav li.current').children('.nav-drp-arw').addClass('current');

    // Custom tabs
    // info1 = $('.c_tab_container > div');
    // $('.c_tab_btn a:first').addClass('current');
    // $('.c_tab_container > div:first').show();
    // $('.c_tab_btn a').click(function(e) {
    //     e.preventDefault();
    //     var index = $(this).index();
    //     info1.hide();
    //     info1.eq(index).fadeIn();
    //     $('.c_tab_btn a').removeClass('current');
    //     $(this).addClass('current');
    // });

    info2 = $('.tab_content_panel');
    $('.acc_tab_btn a:first').addClass('current');
    $('.tab_content_panel:first').show();
    $('.acc_tab_btn a').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        info2.hide();
        info2.eq(index).fadeIn();
        $('.acc_tab_btn a').removeClass('current');
        $(this).addClass('current');
    });

    info3 = $('.tab_title');
    $('.acc_tab_btn a:first').addClass('current');
    $('.tab_title:first').show();
    $('.acc_tab_btn a').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        info3.hide();
        info3.eq(index).fadeIn();
        $('.acc_tab_btn a').removeClass('current');
        $(this).addClass('current');
    });

    $('.testimonial_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('a.mob_btn').click(function(e) {
        e.preventDefault();
        $('.header_nav').addClass('slideNav');
    });

    $('a.menu_cls').click(function(e) {
        e.preventDefault();
        $('.header_nav').removeClass('slideNav');
    });

    $(".toggle-password").click(function() {
        $(this).toggleClass("show");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // Equal height js
    var highestBox1 = 0;
    $('.post_listing .rows2 .column2 h3').each(function() {
        if ($(this).height() > highestBox1) {
            highestBox1 = $(this).height();
        }
    });
    $('.post_listing .rows2 .column2 h3').height(highestBox1);

    // var highestBox2 = 0;
    // $('.post_listing .rows2 .column2 p').each(function() {
    //     if ($(this).height() > highestBox2) {
    //         highestBox2 = $(this).height();
    //     }
    // });
    // $('.post_listing .rows2 .column2 p').height(highestBox2);

    $('.post_listing .rows2 .column2 p').each(function() {
        var $this = $(this);
        $this.text($this.text().slice(0, 100) + '...');
    });

    $('.highlights_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // makes the parallax elements
    // function parallaxIt() {
    //     // create variables
    //     var $fwindow = $(window);
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //     var $contents = [];
    //     var $backgrounds = [];

    //     // for each of content parallax element
    //     $('[data-type="content"]').each(function(index, e) {
    //         var $contentObj = $(this);

    //         $contentObj.__speed = ($contentObj.data('speed') || 1);
    //         $contentObj.__fgOffset = $contentObj.offset().top;
    //         $contents.push($contentObj);
    //     });

    //     // for each of background parallax element
    //     $('[data-type="background"]').each(function() {
    //         var $backgroundObj = $(this);

    //         $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
    //         $backgroundObj.__fgOffset = $backgroundObj.offset().top;
    //         $backgrounds.push($backgroundObj);
    //     });

    //     // update positions
    //     $fwindow.on('scroll resize', function() {
    //         scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //         $contents.forEach(function($contentObj) {
    //             var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

    //             $contentObj.css('top', yPos);
    //         })

    //         $backgrounds.forEach(function($backgroundObj) {
    //             var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

    //             $backgroundObj.css({
    //                 backgroundPosition: '50% ' + yPos + 'px'
    //             });
    //         });
    //     });

    //     // triggers winodw scroll for refresh
    //     $fwindow.trigger('scroll');
    // };

    // parallaxIt();

}); //End jQuery