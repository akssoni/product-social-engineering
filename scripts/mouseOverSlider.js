$(function(){
	//Get our elements for faster access and set overlay width
	var div1 = $('#page-1'),
	
		ul1 = $('#page-1-ul'),
		ulPadding1 = 15;
	
	//Get menu width
	var divWidth1 = div1.width();

	//Remove scrollbars	
	div1.css({overflow: 'hidden'});
	
	//Find last image container
	var lastLi1 = ul1.find('li:last-child');
	
	//When user move mouse over menu
	div1.mousemove(function(e){
		//As images are loaded ul width increases,
		//so we recalculate it each time
		var ulWidth = lastLi1[0].offsetLeft + lastLi1.outerWidth() + ulPadding1;	
		var left = (e.pageX - div1.offset().left) * (ulWidth-divWidth1) / divWidth1;
		div1.scrollLeft(left);
	});
	
	
	//Get our elements for faster access and set overlay width
	var div2 = $('#page-2'),
	
		ul2 = $('#page-2-ul'),
		ulPadding2 = 15;
	
	//Get menu width
	var divWidth2 = div2.width();

	//Remove scrollbars	
	div2.css({overflow: 'hidden'});
	
	//Find last image container
	var lastLi2 = ul2.find('li:last-child');
	
	//When user move mouse over menu
	div2.mousemove(function(e){
		//As images are loaded ul width increases,
		//so we recalculate it each time
		var ulWidth = lastLi2[0].offsetLeft + lastLi2.outerWidth() + ulPadding2;	
		var left = (e.pageX - div2.offset().left) * (ulWidth-divWidth2) / divWidth2;
		div2.scrollLeft(left);
	});
	
	
	
	//Get our elements for faster access and set overlay width
	var div3 = $('#page-3'),
	
		ul3 = $('#page-3-ul'),
		ulPadding3 = 15;
	
	//Get menu width
	var divWidth3 = div3.width();

	//Remove scrollbars	
	div3.css({overflow: 'hidden'});
	
	//Find last image container
	var lastLi3 = ul3.find('li:last-child');
	
	//When user move mouse over menu
	div3.mousemove(function(e){
		//As images are loaded ul width increases,
		//so we recalculate it each time
		var ulWidth = lastLi3[0].offsetLeft + lastLi3.outerWidth() + ulPadding3;	
		var left = (e.pageX - div3.offset().left) * (ulWidth-divWidth3) / divWidth3;
		div3.scrollLeft(left);
	});
	
	
});



