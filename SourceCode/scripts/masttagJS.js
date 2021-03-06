$(function () {




    $(".container").shapeshift({
        minColumns: 5,
        enableDrag: false,
        gutterX: 14,
        gutterY: 14


    });



    $(".landing-container").shapeshift({
        minColumns: 1,
        enableDrag: false,
        gutterX: 14,
        gutterY: 14,
        columns: 3


    });









    var projects = [
        {
            value: "iPhone5S",
            label: "iPhone5S",
            desc: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>',
            icon: "jquery_32x32.png"
      },
        {
            value: "Lumia",
            label: "Lumia",
            desc: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>',
            icon: "jquery_32x32.png"
      },
        {
            value: "GalaxyS5",
            label: "GalaxyS5",
            desc: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>',
            icon: "jquery_32x32.png"
      },
        {
            value: "Lumia",
            label: "Lumia",
            desc: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>',
            icon: "jquery_32x32.png"
      },
        {
            value: "Lumia",
            label: "Lumia",
            desc: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>',
            icon: "jquery_32x32.png"
      }
    ];




    $("#project").keyup(function (event) {


        if (($("#project").val().length) > 0) {

            $(".page-master-header-searchbox").css('border', '1px solid #00aeef');

        } else {


            $(".page-master-header-searchbox").css('border', '1px solid #e7e7e7');
        }

    });




    $("#project-landing").keyup(function (event) {


        if (($("#project-landing").val().length) > 0) {

            $(".landing-page-search-text-div").css('border', '1px solid #00aeef');

        } else {


            $(".landing-page-search-text-div").css('border', '1px solid #e7e7e7');
        }

    });



    $("#project-lightbox").keyup(function (event) {


        if (($("#project-lightbox").val().length) > 0) {

            $(".product-page-wishlist-lightbox-filter-search-text").css('border', '1px solid #00aeef');

        } else {


            $(".product-page-wishlist-lightbox-filter-search-text").css('border', '1px solid #e7e7e7');
        }

    });



    if ($("#project").length != 0) {


        $("#project").autocomplete({
            minLength: 1,
            source: projects,
            focus: function (event, ui) {
                $("#project").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#project").val(ui.item.label);
                return false;
            }
        })
            .data("ui-autocomplete")._renderItem = function (ul, item) {




                return $("<li>")
                    .append("<a><img src='img/threeiPhone.png' height='30' width='30' style='margin: 8px;'></img><div style='display: inline-block; vertical-align: top; margin:5px;'>" + item.label + "<br><span>" + item.desc + "</span></div></a>")
                    .appendTo(ul);
        };


    }



    if ($("#project-lightbox").length != 0) {

        $("#project-lightbox").autocomplete({
            minLength: 1,
            source: projects,
            focus: function (event, ui) {
                $("#project-lightbox").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#project-lightbox").val(ui.item.label);
                return false;
            }
        })
            .data("ui-autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<a><img src='img/threeiPhone.png' height='30' width='30' style='margin: 8px;'></img><div style='display: inline-block; vertical-align: top; margin:5px;'>" + item.label + "<br><span>" + item.desc + "</span></div></a>")
                    .appendTo(ul);
        };

    }


    if ($("#project-landing").length != 0) {
        $("#project-landing").autocomplete({
            minLength: 1,
            source: projects,
            focus: function (event, ui) {
                $("#project-landing").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#project-landing").val(ui.item.label);
                return false;
            }
        })
            .data("ui-autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<a><img src='img/threeiPhone.png' height='30' width='30' style='margin: 8px;'></img><div style='display: inline-block; vertical-align: top; margin:5px;'>" + item.label + "<br><span>" + item.desc + "</span></div></a>")
                    .appendTo(ul);
        };

    }






    $(".page-master-header-account-info ul li").width($(".page-master-header-account-info").width() - 2);

    $("textarea").autosize({
        callback: function () {
            // alert("fsef");

            $(".container").trigger("ss-rearrange");

        }
    });
    //  $('textarea').autosize();

    //$(".search-container").trigger("ss-rearrange");


    $('#scrollbar3').tinyscrollbar();

    var flagnoti1 = 0;
    $('#tip').click(function (e) {



        e.stopPropagation();
        if (flagnoti1 == 0) {

            $('#tip').css('color', '#00aeef');

            // $('#scrollbar3').tinyscrollbar();
            $('#tip-arrow').css('visibility', 'visible');
            $('#tip-arrow-nested').css('visibility', 'visible');
            $('#tooltip').css('visibility', 'visible');
            flagnoti1 = 1;
        } else {

            $('#tip').css('color', '#555');

            $('#tip-arrow').css('visibility', 'hidden');
            $('#tip-arrow-nested').css('visibility', 'hidden');
            $('#tooltip').css('visibility', 'hidden');
            flagnoti1 = 0;

        }

    });

    $("body").click(function () {

        $('#tip').css('color', '#555');
        $('#tip-arrow').css('visibility', 'hidden');
        $('#tip-arrow-nested').css('visibility', 'hidden');
        $('#tooltip').css('visibility', 'hidden');
        flagnoti1 = 0;



    });

    $("#tooltip").click(function (e) {
        e.stopPropagation();
    });




    /* Light boxes all pages */


    /*  add to wishlist */

    $(".product-page-add-to-wishlist").click(function () {

        var hite = $(document).height(); // returns height of browser viewport

        var wth = $(window).width(); // returns width of browser viewport


        $("#overlay").css({
            "display": "block",
            "height": "" + hite + "px",
            "width": "" + wth + "px"
        });
        $(".product-page-add-to-wishlist-lightbox").css({
            "display": "block"
        });

        $("body").css({
            "overflow": "hidden"
        });



    });



    $(".product-page-add-to-wishlist-lightbox-close").click(function () {


        // alert("akshay");    
        $("#overlay").css({
            "display": "none"
        });
        $(".product-page-add-to-wishlist-lightbox").css({
            "display": "none"
        });

        $("body").css({
            "overflow": "auto"
        });

    });


    /*  Sign in @landing page */


    $(".landing-page-subheader-two-right-bottom-log-in").click(function () {

        var hite = $(document).height(); // returns height of browser viewport

        var wth = $(window).width(); // returns width of browser viewport


        $("#overlay").css({
            "display": "block",
            "height": "" + hite + "px",
            "width": "" + wth + "px"
        });
        $(".lightbox-landing-page-login").css({
            "display": "block"
        });

        $("body").css({
            "overflow": "hidden"
        });



    });



    $(".lightbox-landing-page-login-close").click(function () {


        // alert("akshay");    
        $("#overlay").css({
            "display": "none"
        });
        $(".lightbox-landing-page-login").css({
            "display": "none"
        });

        $("body").css({
            "overflow": "auto"
        });

    });








    /* End of light boxes */


    /* Search Page */


    $(".page-search-result-left-pane-options").click(function () {



        $(".page-search-result-right-pane-div").css({
            "display": "none"
        });

        $(".page-search-result-left-pane-options").css({
            "border-color": "#d9d9d9"
        });
        $(".page-search-result-left-pane-options").css({
            "color": "#999999"
        });

        $(".page-search-result-left-pane-options").css({
            "font-weight": "normal"
        });

        $(".page-search-result-left-pane-options-2").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-result-left-pane-options-2").css({
            "border-bottom-color": "#FFF"
        });



        $(".page-search-result-left-pane-options-list-2").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-result-left-pane-options-list-3").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-result-left-pane-options-list-4").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-result-left-pane-options-list-4").css({
            "border-bottom-color": "#FFF"
        });




        $(".page-search-setting-left-pane-options-2").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-setting-left-pane-options-3").css({
            "border-top-color": "#FFF"
        });

        $(".page-search-setting-left-pane-options-4").css({
            "border-top-color": "#FFF"
        });

        $(".page-search-setting-left-pane-options-4").css({
            "border-bottom-color": "#FFF"
        });


    });



    $(".page-search-result-left-pane-options-1").click(function () {

        $(".page-search-result-right-pane-products").css({
            "display": "block"
        });



        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });

    });






    $(".page-search-result-left-pane-options-2").click(function () {

        $(".page-search-result-right-pane-people").css({
            "display": "block"
        });




        $(".page-search-result-left-pane-options-3").css({
            "border-top-color": "#FFF"
        });
        $(".page-search-result-left-pane-options-1").css({
            "border-bottom-color": "#FFF"
        });


        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });


        //  $(this).animate({"height": "200px"}, "slow");


    });

    $(".page-search-result-left-pane-options-3").click(function () {




        //   var curHeight = $(this).height();
        //     $(".page-search-result-left-pane-options-2").animate({"height": curHeight}, "slow");

        // $(this).animate({"height": "200px"}, "slow");





        $(".page-search-result-right-pane-reviews").css({
            "display": "block"
        });


        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });



        $(".search-container").shapeshift({
            minColumns: 1,
            enableDrag: false,
            gutterX: 14,
            gutterY: 14,
            columns: 3


        });


        $(".search-container").trigger("ss-rearrange");





    });



    /* these functions are for List view page */

    $(".page-search-result-left-pane-options-list-2").click(function () {



        $(".page-search-result-title-right").html("REVIEWS");



        // var curHeight = $(this).height();

        $(".page-search-result-left-pane-options-list-3").animate({
            "height": "16px"
        }, "slow");

        $(this).animate({
            "height": "143px"
        }, "slow");


        $(".page-search-result-left-pane-options-list-3-sublist").css({
            "display": "none"
        });


        $(".page-search-result-left-pane-options-list-2-sublist").css({
            "display": "block"
        });


        $(".page-search-result-right-pane-reviews").css({
            "display": "block"
        });


        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });



        $(".search-container").shapeshift({
            minColumns: 1,
            enableDrag: false,
            gutterX: 14,
            gutterY: 14,
            columns: 3


        });


        $(".search-container").trigger("ss-rearrange");





    });


    $(".page-search-result-left-pane-options-list-3").click(function () {


        $(".page-search-result-title-right").html("FRIENDS");



        $(".page-search-result-left-pane-options-list-2").animate({
            "height": "16px"
        }, "slow");

        $(this).animate({
            "height": "143px"
        }, "slow");

        $(".page-search-result-left-pane-options-list-2-sublist").css({
            "display": "none"
        });


        $(".page-search-result-left-pane-options-list-3-sublist").css({
            "display": "block"
        });


        $(".page-search-result-right-pane-people").css({
            "display": "block"
        });


        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });








    });

    $(".page-search-result-left-pane-options-list-1").click(function () {


        $(".page-search-result-title-right").html("SCORE");


        $(".page-search-result-left-pane-options-list-2").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-3").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-2-sublist").css({
            "display": "none"
        });
        $(".page-search-result-left-pane-options-list-3-sublist").css({
            "display": "none"
        });



        $(".page-search-result-right-pane-list-score").css({
            "display": "block"
        });



        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });

    });

    $(".page-search-result-left-pane-options-list-4").click(function () {

        $(".page-search-result-title-right").html("OWN LIST");


        $(".page-search-result-left-pane-options-list-2").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-3").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-2-sublist").css({
            "display": "none"
        });
        $(".page-search-result-left-pane-options-list-3-sublist").css({
            "display": "none"
        });



        $(".page-search-result-right-pane-products").css({
            "display": "block"
        });



        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });
        $(this).css({
            "font-weight": "bold"
        });


    });


    $(".page-search-result-left-pane-options-list-5").click(function () {

        $(".page-search-result-title-right").html("WISH LIST");


        $(".page-search-result-left-pane-options-list-2").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-3").animate({
            "height": "16px"
        }, "slow");
        $(".page-search-result-left-pane-options-list-2-sublist").css({
            "display": "none"
        });
        $(".page-search-result-left-pane-options-list-3-sublist").css({
            "display": "none"
        });



        $(".page-search-result-right-pane-products-wishlist").css({
            "display": "block"
        });



        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });

    });

    /* End of List view page */


    /* these functions are for account setting page */

    $(".page-search-setting-left-pane-options-1").click(function () {

        $(".page-setting-result-right-pane-option-1").css({
            "display": "block"
        });

        $(".page-search-result-title-right").html("GENERAL ACCOUNT SETTING");

        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });
        $(this).css({
            "font-weight": "bold"
        });


    });

    $(".page-search-setting-left-pane-options-2").click(function () {

        $(".page-setting-result-right-pane-option-2").css({
            "display": "block"
        });

        $(".page-search-result-title-right").html("PROFILE");

        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });

        $(this).css({
            "font-weight": "bold"
        });

    });

    $(".page-search-setting-left-pane-options-3").click(function () {

        $(".page-setting-result-right-pane-option-3").css({
            "display": "block"
        });

        $(".page-search-result-title-right").html("EMAIL NOTIFICATIONS");

        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });
        $(this).css({
            "font-weight": "bold"
        });


    });

    $(".page-search-setting-left-pane-options-4").click(function () {

        $(".page-setting-result-right-pane-option-4").css({
            "display": "block"
        });

        $(".page-search-result-title-right").html("WEB NOTIFICATIONS");

        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });
        $(this).css({
            "font-weight": "bold"
        });


    });

    $(".page-search-setting-left-pane-options-5").click(function () {

        $(".page-setting-result-right-pane-option-5").css({
            "display": "block"
        });

        $(".page-search-result-title-right").html("HAPPY TO HELP");

        $(this).css({
            "border-color": "#00aeef"
        });
        $(this).css({
            "color": "#00aeef"
        });
        $(this).css({
            "font-weight": "bold"
        });


    });




    $(".page-product-user-ask-a-expert-link").click(function () {

        $(".page-product-user-ask-a-expert-link").css({
            "color": "#555"
        });
        $(".page-product-user-write-a-review-link").css({
            "color": "#999"
        });

        $(".page-product-user-ask-a-expert").css({
            "display": "block"
        });
        $("#tip-arrow2").css({
            "display": "block"
        });

        $("#tip-arrow2-nested").css({
            "display": "block"
        });



        $(".page-product-user-write-a-review").css({
            "display": "none"
        });
        $("#tip-arrow1").css({
            "display": "none"
        });

        $("#tip-arrow1-nested").css({
            "display": "none"
        });


        $(".container").trigger("ss-rearrange");


    });


    $(".page-product-user-write-a-review-link").click(function () {

        $(".page-product-user-write-a-review-link").css({
            "color": "#555"
        });
        $(".page-product-user-ask-a-expert-link").css({
            "color": "#999"
        });

        $(".page-product-user-ask-a-expert").css({
            "display": "none"
        });

        $("#tip-arrow2").css({
            "display": "none"
        });

        $("#tip-arrow2-nested").css({
            "display": "none"
        });


        $(".page-product-user-write-a-review").css({
            "display": "block"
        });

        $("#tip-arrow1").css({
            "display": "block"
        });

        $("#tip-arrow1-nested").css({
            "display": "block"
        });

        $(".container").trigger("ss-rearrange");

    });



});