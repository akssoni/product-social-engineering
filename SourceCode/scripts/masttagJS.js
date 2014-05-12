$(function() {
    var projects = [
      {
        value: "jquery",
        label: "jQuery",
        desc: "the write less, do more, JavaScript library",
        icon: "jquery_32x32.png"
      },
      {
        value: "jquery-ui",
        label: "jQuery UI",
        desc: "the official user interface library for jQuery",
        icon: "jqueryui_32x32.png"
      },
      {
        value: "sizzlejs",
        label: "Sizzle JS",
        desc: "a pure-JavaScript CSS selector engine",
        icon: "sizzlejs_32x32.png"
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
        .append( "<a><img src='img/threeiPhone.png' height='50' width='50'></img><div style='display: inline-block; vertical-align: top; margin:5px;'>" + item.label + "<br>" + item.desc + "</div></a>" )
        .appendTo( ul );
    };
  });