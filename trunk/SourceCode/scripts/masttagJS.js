$(function() {
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
    
     $('textarea').autosize(); 
    
  });