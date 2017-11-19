$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');

      $.ajax({
        type: 'POST',
        url: '/list',
        data: item,
        success: function(data){
			location.reload();
        }
      });

      return false;

  });

  $('.mydel').on('click', function(){
	  var target_id = this.id;
	  //$(this).parent.remove();
      $.ajax({
        type: 'DELETE',
        url: '/list/' + target_id,
        success: function(data){
          //refresh the page - remove li
			console.log("deleted succesfully.");
        }
      });
	  
      window.location='/list';
  });
  
  $('#delete-page-link').on('click', function(){
	  var x = document.getElementById("hidden-delete");
	      if (x.style.display === "none") {
	          x.style.display = "block";
	      } else {
	          x.style.display = "none";
	      }
  });
  //delete-page-link
  
  $('#show-input-link').on('click', function(){
	  var x = document.getElementById("main-form");
	      if (x.style.display === "none") {
	          x.style.display = "block";
	      } else {
	          x.style.display = "none";
	      }
  });
  //main-form
  
  $('#show-list-link').on('click', function(){
	  var x = document.getElementById("hidden-main-list");
	      if (x.style.display === "none") {
	          x.style.display = "block";
	      } else {
	          x.style.display = "none";
	      }
  });
  //delete-page-link

});