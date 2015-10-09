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
	});

$.get('someMissingFile.html', function(response) {
	$('#subscribe').html(response);
}).fail(function(jqXHR) {
	alert(jqXHR.stausText);
});


});//End jQuery ready.
