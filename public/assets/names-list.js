$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');

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
      $.ajax({
        type: 'DELETE',
        url: '/list/' + target_id,
        success: function(data){
		  console.log("deleted succesfully.");
        }
      });
      window.location='/list';
  });
  
  $('#show-input-link').on('click', function(){
	  var x = document.getElementById("main-form");
	      if (x.style.display === "none") {
	          x.style.display = "block";
	      } else {
	          x.style.display = "none";
	      }
  });
  //end main-form
  
  $('#show-list-link').on('click', function(){
	  var x = document.getElementById("hideable-main-list");
	      if (x.style.display === "none") {
	          x.style.display = "block";
	      } else {
	          x.style.display = "none";
	      }
  });
  //end delete-page-link
});