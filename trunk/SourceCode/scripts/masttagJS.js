$(function() {
    
    
    
    
    	$(".container").shapeshift({
                    minColumns: 5,
                    enableDrag: false,
                     gutterX : 14,
                     gutterY : 14
                    
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
      }
    ];
 
    $( "#project" ).autocomplete({
      minLength: 0,
      source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        return false;
      }
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a><img src='img/threeiPhone.png' height='30' width='30' style='margin: 8px;'></img><div style='display: inline-block; vertical-align: top; margin:5px;'>" + item.label + "<br><span>" + item.desc + "</span></div></a>" )
        .appendTo( ul );
    };
    
    
    
    
    
    $(".page-master-header-account-info ul li").width($(".page-master-header-account-info").width()-2);
    
   //  $('textarea').autosize(); 
    
 



$('#scrollbar3').tinyscrollbar();

var flagnoti1 = 0;
		$('#tip').click(function(e) {
            
           
            
			e.stopPropagation();
			if (flagnoti1 == 0) {

               // $('#scrollbar3').tinyscrollbar();
				$('#tip-arrow').css('visibility', 'visible');
                $('#tip-arrow-nested').css('visibility', 'visible');
				$('#tooltip').css('visibility', 'visible');
				flagnoti1 = 1;
			} else {
				$('#tip-arrow').css('visibility', 'hidden');
                $('#tip-arrow-nested').css('visibility', 'hidden');
				$('#tooltip').css('visibility', 'hidden');
				flagnoti1 = 0;

			}

		});

		$("body").click(function() {
			$('#tip-arrow').css('visibility', 'hidden');
            $('#tip-arrow-nested').css('visibility', 'hidden');
			$('#tooltip').css('visibility', 'hidden');
			flagnoti1 = 0;
			
			
			
		});

		$("#tooltip").click(function(e) {
			e.stopPropagation();
		});
		
    
    
$(".product-page-add-to-wishlist").click(function(){
//function showLB2New() {
    
    
    //alert("akshay");
	        
	        var hite = $(document).height();   // returns height of browser viewport

	    var wth = $(window).width();   // returns width of browser viewport
	  

	    $("#overlay").css({"display" : "block", "height" : ""+hite+"px", "width" : ""+wth+"px" });
	   $(".product-page-add-to-wishlist-lightbox").css({"display" : "block" });
	   
	    $("body").css({"overflow":"hidden"});
	    
	   
	       
	        });
    
    
    
    $(".product-page-add-to-wishlist-lightbox-close").click(function(){
   
        
   // alert("akshay");    
        $("#overlay").css({"display" : "none" });
	$(".product-page-add-to-wishlist-lightbox").css({"display" : "none" });

	$("body").css({"overflow":"auto"});
    
     });

 });



	    
	    
	   




