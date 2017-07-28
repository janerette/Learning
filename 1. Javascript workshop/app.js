
//Run this after the page is finished loading
$(document).ready(function(){
  console.log ("hello world");

  $( "#trackbutton" ).on( "click", function( event ) {
      event.preventDefault();
       console.log($('#WhoByEmail').val())

    //   $('#idname').val(): Gets or sets the value attribute of an element
    });

  })



  //Selectors, to select an element on a page
  // $('.classname')
  //$('#idname')

  //Select the value of a field input
  // $('#idname').val(): Gets or sets the value attribute of an element

  // text(): Gets the combined text of an element and its children


  //To ADD something to a specific element
  //$('#idname').append( "stuff you want to insert into element"    )

  // hide(): Hides an element if it was visible
  // show(): Shows an element if it was hidden

  //To CONCAT STRINGS
  // '<p>' + variable + '</p>'


  /* $( "#ID" ).on( "click", function( event ) {

  });

})

})
*/
