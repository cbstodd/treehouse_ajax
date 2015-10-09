$(document).ready(function() {

	var url = 'data/employees.json';
	$.getJSON(url, function(response) {
		var printHTML = "";
		$.each(response, function(index, employee) {
			if (employee.inoffice === true) {
				printHTML += '<li class="list-group-item list-group-item-success">';
			} else {
				printHTML += '<li class="list-group-item list-group-item-warning">';
			}
			printHTML += employee.name;
		});

		$("#employeeList").html(printHTML);//Calls the printHTML as html to #employeeList.


	});//End getJSON.
});//End ready.
