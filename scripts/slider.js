/*
jquery-linear-graph-plugin
*/

(function( $ ){

  $.fn.myslider = function(options) {
	
    var settings = $.extend( {
      'width'         : '100px'
    }, options);
	
	var populatediv = this;
	var sliderstyle = options.sliderstyle;
	var marker      = options.marker;
	
	if(sliderstyle=='linear')
	{
		$.each((options.band),function(index,value){
			//alert(index);
			//alert(options.band[index].color);
			populatediv.append("<div style='width:"+options.band[index].width+";background:"+options.band[index].color+";height:100%;float:left'>"+
								"<span style='color:"+options.band[index].textcolor+";font-size:"+options.band[index].textsize+"'>"
								+options.band[index].text+
								"</span>"+
								"</div>");
		});
		populatediv.append("<div class='marker' style='position:absolute;width:50px;height:25px;margin-left:"+marker+";margin-top:2px'>"+
		"<div style='position:absolute;font-weight:bold;color:#000;margin-top:5px;margin-left:5px'>"+marker+"</div></div>");
		//animation effect for the div
		this.animate({
			width: options.width,
		}, 900 );
	
	}
	else
	{
		populatediv.append("<div class='questiontext'>"+options.text+"</div>");
		$.each((options.band),function(index,value){
			//alert(index);
			//alert(options.band[index].color);
			populatediv.append(  "<div><div style='color:"+options.band[index].textcolor+"; width: 60px;  margin-right: 5px; text-align: right; display: inline-block; vertical-align: top; '>"+options.band[index].text+"</div>"+
									"<div class='bar'  style= 'display: inline-block;' >" + "<div style='width:"+options.totalbarwidth+"'>"+									
								 "<div class='"+options.bandclass+" "+options.bandclass+index+"' id="+index+" style='background:"+options.band[index].color+";width:0;height:25px;margin-top:0px'>"

+"<span class='barchartpercentage'>"+ options.band[index].width+"</span>"   +

 "</div>"+
								 "</div>"+
								"</div></div>");
			
		$("#"+index).animate({
		width: options.band[index].width+"%",
		}, 1200 );					
		});

	}
	
  };
})( jQuery );
