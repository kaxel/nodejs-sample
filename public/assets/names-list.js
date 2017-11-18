$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/list',
        data: todo,
        success: function(data){
          //refresh the page - do I need to use jQuery here?
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
	  var target_id = parseInt(this.id);
	  $(this).remove();
      $.ajax({
        type: 'DELETE',
        url: '/list/' + target_id,
        success: function(data){
          //refresh the page - remove li
			console.log("deleted succesfully.");
        }
      });
  });

});