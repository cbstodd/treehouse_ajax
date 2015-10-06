$("#warning").hide();

$("#clickMe").click(function(){
  $("#warning").toggle('fast');
	$(this).remove();
});
