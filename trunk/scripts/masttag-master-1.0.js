$(document).ready(function() {

		$('#scrollbar1').tinyscrollbar();
		$('#scrollbar2').tinyscrollbar();
		$('#scrollbar3').tinyscrollbar();

		$('#wrapper').myslider({
			'width' : '200px',
			'sliderstyle' : 'vote',
			'totalbarwidth' : '100px',
			'text' : '77 % Member Ratings',
			'bandclass' : 'voteband',
			band : [ {
				'color' : '#555',
				'width' : '100',
				'text' : 'Kayani',
				'textcolor' : '#888'
			}, {
				'color' : '#555',
				'width' : '50',
				'text' : 'Gilani',
				'textcolor' : '#888',
				'textsize' : '10px'
			}, {
				'color' : '#555',
				'width' : '70',
				'text' : 'Sumit',
				'textcolor' : '#888',
				'textsize' : '10px'
			} ]
		});

	
		
		
		
		
		
		
		var flagUpload = 0;
		
		
	    $(".displaypic-wrapper").on("mouseenter",function(){
	    	$(".choose_file").css({"visibility" : "visible" });
	    	
	    	}).on("mouseleave",function(){
	    		
	    		if (flagUpload==0){
	    		$(".choose_file").css({"visibility" : "hidden" });
	    		
	    		}
	    	});

	    
	    
	    
		$('.upload-tooltip-span').click(function(e) {
			e.stopPropagation();
			if (flagUpload == 0) {

				$('.profile-upload').css('visibility', 'visible');
				
				$('.upload-tooltip-span').css('background-color', '#33559A');
				$('.upload-tooltip-span').css('color', '#FFFFFF');
				
				
				
				
				
				flagUpload = 1;
			} else {
				$('.profile-upload').css('visibility', 'hidden');

				$('.upload-tooltip-span').css('background-color', '#FBFBFC');
				$('.upload-tooltip-span').css('color', '#777777');
				
				
				
				flagUpload = 0;

			}

		});

		$("body").click(function() {
			$('.profile-upload').css('visibility', 'hidden');
			$(".choose_file").css({"visibility" : "hidden" });
			

			$('.upload-tooltip-span').css('background-color', '#FBFBFC');
			$('.upload-tooltip-span').css('color', '#777777');
			
			flagUpload = 0;
			
			
			
		});

		$(".profile-upload").click(function(e) {
			e.stopPropagation();
		});
		
		
	    
	    
	
		
		
	});


	
	
	$(function() {
		//$( ".pagecontent-introbaruserinfo-name" ).tooltip({ content: "Awesome title!" });
		//alert("hi");
		
		
		
		
		$( ".newsfeed-comment-username" ).tooltip({
			position: {
			
			using: function( position, feedback ) {
			$( this ).css( position );
			$( "<div>" )
			.addClass( "arrow" )
			.addClass( feedback.vertical )
			.addClass( feedback.horizontal )
			.appendTo( this );
			}
			},
			
			content: "Akshay Soni"
			});
		
		
		});

	
	
	
	 function showLB1() {
	        
	        var hite = $(document).height();   // returns height of browser viewport

	    var wth = $(window).width();   // returns width of browser viewport
	  

	    $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
	    $(".reg-lightbox-1-wrapper").css({"display" : "block" });
	  
	    $("body").css({"overflow":"auto","overflow-x":"hidden"})
	       
	        };
	    
	    
	     function hideLB1() {

	$("#overlay").css({"display" : "none" });
	$(".reg-lightbox-1-wrapper").css({"display" : "none" });

	$("body").css({"overflow":"auto"})
	    
	    };
	    
function showLB11() {
	        
	        var hite = $(document).height();   // returns height of browser viewport

	    var wth = $(window).width();   // returns width of browser viewport
	  
	    hideLB1(); 

	    $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
	    $(".reg-lightbox-1-1-wrapper").css({"display" : "block" });
	  
	    $("body").css({"overflow":"auto","overflow-x":"hidden"})
	    $('#scrollbar-lightbox').tinyscrollbar();
	       
	        };
	    
	    
	     function hideLB11() {

	$("#overlay").css({"display" : "none" });
	$(".reg-lightbox-1-1-wrapper").css({"display" : "none" });

	$("body").css({"overflow":"auto"})
	    
	    };
	    
	
	    
function showLB2() {
	        
	        var hite = $(document).height();   // returns height of browser viewport

	    var wth = $(window).width();   // returns width of browser viewport
	  

	    $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
	    $(".reg-lightbox-2-wrapper").css({"display" : "block" });

	    $("body").css({"overflow":"auto","overflow-x":"hidden"})
	    
	    $('.lightbox2-right-rating-div').raty({ readOnly: false, score: 0 });
	       
	        };
	    
	    
	     function hideLB2() {

	$("#overlay").css({"display" : "none" });
	$(".reg-lightbox-2-wrapper").css({"display" : "none" });

	$("body").css({"overflow":"auto"})
	    
	    };
	
	    
function showLB2New() {
	        
	        var hite = $(document).height();   // returns height of browser viewport

	    var wth = $(window).width();   // returns width of browser viewport
	  

	    $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
	    $(".reg-new-lightbox-2-wrapper").css({"display" : "block" });
	   // $(".lightbox2-header-text").html("<input type='text' placeholder='Product name'/>")
	   // $(".lightbox2-header-subtext").html("<input type='text' placeholder='Category'/>")
	    $("body").css({"overflow":"auto","overflow-x":"hidden"})
	    
	    $('.lightbox2-right-rating-div').raty({ readOnly: false, score: 0 });
	       
	        };
	    
	    
	     function hideLB2New() {

	$("#overlay").css({"display" : "none" });
	$(".reg-new-lightbox-2-wrapper").css({"display" : "none" });

	$("body").css({"overflow":"auto"})
	    
	    };
	    
	    
	    
	    
	 
	
	

	
	    
	  
	    
	    
	    function showSearchAgain() {

	    	
	    	$(".lightbox2-left-webimage-grid-wrapper").css({"display" : "none" });
	    	$(".lightbox2-left-webimage-keyword-wrapper").css({"display" : "block" });
	    	
	    	    
	    	    };
	    	    
	    	    function hideSearchAgain() {

	    	    	
	    	    	$(".lightbox2-left-webimage-keyword-wrapper").css({"display" : "none" });
	    	    	$(".lightbox2-left-webimage-grid-wrapper").css({"display" : "block" });
	    	    	
	    	    	    
	    	    	    };	    
	    	    
	    	 
	    	
	    function showUpload(input){
	    	
	    	
	    	$(".lightbox2-left-webimage-keyword-wrapper").css({"display" : "none" });
	    	$(".lightbox2-left-webimage-grid-wrapper").css({"display" : "none" });
	    	
	    	
	    	$(".lightbox2-left-image-upload").css({"display" : "block" });
	    	
	    	
	    	
	    	 if (input.files && input.files[0]) {
	                var reader = new FileReader();

	                reader.onload = function (e) {
	                    $('#user-image')
	                        .attr('src', e.target.result)
	                        .width(200)
	                        .height(200);
	                };

	                reader.readAsDataURL(input.files[0]);
	            }
	    	
	    	
	    };	 
	    
	    function closeUpload(){
	    	
	    	
	    	$(".lightbox2-left-webimage-keyword-wrapper").css({"display" : "none" });
	    	$(".lightbox2-left-webimage-grid-wrapper").css({"display" : "block" });   	
	    	$(".lightbox2-left-image-upload").css({"display" : "none" });
	    	
	    }
	    	    	    
	    
	    
	    
	function showLargeImageResult(url){
	    	
		
		$(".ImageResultBoxContainerWrapper").html("<img src='"+url+"' style='height: 100%;'>");
	    	
	    	
	    }
	
	
	
	$(function() {

		$("#project").autocomplete({
			minLength : 2,
			source : function(request, response) {
				$.ajax({
					url : "search.json",
					dataType : "json",
					data : {
						term : request.term
					},
					success : function(data) {
						response($.map(data, function(item) {
							return {
								value : item.value,
								label : item.label,
								desc : item.desc,
								icon : item.icon
							};
						}));
					}
				});
			},

			select : function(event, ui) {
				$("#project").val(ui.item.label);

				return false;
			}
		}).data("autocomplete")._renderItem = function(ul, item) {
			return $("<li>")
					.data("item.autocomplete", item)
					.append(
							"<a><img src='images/profile-pictures.jpg' height='50' width='50'></img><div style='display: inline-block; vertical-align: top; margin:5px;'><span style='color: #335598;  font-weight: bold;'>"
									+ item.label
									+ "</span><br>"
									+ item.desc
									+ "</div></a>").appendTo(ul);
		};

	});
	
	
	
	
	function showUploadProfileImage() {
        
        var hite = $(document).height();   // returns height of browser viewport

    var wth = $(window).width();   // returns width of browser viewport
  

    $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
    $(".profile-picture-upload-lightbox").css({"display" : "block" });
   
    $("body").css({"overflow":"auto","overflow-x":"hidden"})
    
   
       
        };
        
        function showChooseProfileImage() {
            
            var hite = $(document).height();   // returns height of browser viewport

        var wth = $(window).width();   // returns width of browser viewport
      

        $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
        $(".profile-picture-choose-lightbox").css({"display" : "block" });
       
        $("body").css({"overflow":"auto","overflow-x":"hidden"})
        
       
           
            };
            
            
            function showRemoveProfileImage() {
                
                var hite = $(document).height();   // returns height of browser viewport

            var wth = $(window).width();   // returns width of browser viewport
          

            $("#overlay").css({"display" : "block" , "background" : "#AAA", "height" : ""+hite+"px", "width" : ""+wth+"px" });
            $(".profile-picture-remove-lightbox").css({"display" : "block" });
           
            $("body").css({"overflow":"auto","overflow-x":"hidden"})
            
           
               
                };
    
    
     function hideUploadProfileImage() {

$("#overlay").css({"display" : "none" });
$(".profile-picture-upload-lightbox").css({"display" : "none" });

$("body").css({"overflow":"auto"})
    
    };
    
    function hideChooseProfileImage() {

    	$("#overlay").css({"display" : "none" });
    	$(".profile-picture-choose-lightbox").css({"display" : "none" });

    	$("body").css({"overflow":"auto"})
    	    
    	    };
    	    
    	    
    	    
    	    function hideRemoveProfileImage() {

    	    	$("#overlay").css({"display" : "none" });
    	    	$(".profile-picture-remove-lightbox").css({"display" : "none" });

    	    	$("body").css({"overflow":"auto"})
    	    	    
    	    	    };
    	    	    
    	    	    
    	    	    
    	    	    
    	    	    
    	    	    
    	   
    
    	    	
	
	