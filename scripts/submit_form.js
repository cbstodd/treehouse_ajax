$(document).ready(function() {

	$('form').submit(function(event) {
		event.preventDefault();//Stops browser from leaving web page and submitting bad form.
		var url = $(this).attr("action");//Creates url based on the forms "action".
		var formData = $(this).serialize();//searlizes the date inputed into the form.
		$.ajax(url, {
				data: formData,
				type: 'POST',
				success: function(response) {
					$('#subscribe').html("<span class='alert-success'>You are now subscribed!</span>");
				}
		});
	});//END SUBMIT>





	//ERROR MESSAGE
	$.get('office_widget_jquer.html', function(data) {
	  $('#subscribe').html(data);
	}).fail(function(jqXHR) {
		var errorMessage = "";
		errorMessage += "<p class='alert-danger'>Sorry there was an error. <br/>";
		errorMessage += "The error was: " + jqXHR.statusText + "</p>";
		$("#subscribe").html(errorMessage);

	});

});//End jQuery ready>
