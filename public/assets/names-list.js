$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
	  //gotta jigger the state select into the form submit
	  item.state_select = document.getElementById("address_state").val();

      $.ajax({
        type: 'POST',
        url: '/list',
        data: item,
        success: function(data){
			location.reload();
			console.log("succesful insert.");
        }
      });
      return false;
  });

  $('.mydel').on('click', function(){
	  var target_id = this.id;
	  
	  var result = confirm("Please confirm that you would like to delete this record.");
	  if (result) {
	      $.ajax({
	        type: 'DELETE',
	        url: '/list/' + target_id,
	        success: function(data){
			  console.log("deleted succesfully.");
	        }
	      });
	      
	  } 
	  window.location='/list';
  });
  
  $('#show-input-link').on('click', function(){
	  var x = document.getElementById("main-form");
	      if (x.style.display === "none") {
	          $( "#main-form" ).fadeIn( "fast" );
	      } else {
			  $( "#main-form" ).fadeOut( "fast" );
			  $( "#alert_message" ).fadeOut( "fast" ); // if we turn off the input form, the message should turn off too
	      }
  });
  //end main-form
  
  $('#show-list-link').on('click', function(){
	  var x = document.getElementById("hideable-main-list");
	      if (x.style.display === "none") {
	          $( "#hideable-main-list" ).fadeIn( "fast" );
	      } else {
	          $( "#hideable-main-list" ).fadeOut( "fast" );
	      }
  });
  //end hideable-main-list
});