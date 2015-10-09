$(document).ready(function() {

	//EMPLOYEES WIDGET
	var url = 'data/employees.json';
	$.getJSON(url, function(employee_object) {
		var printHTML = "";
		$.each(employee_object, function(index, employee) {
			if (employee.inoffice === true) {
				printHTML += '<li class="list-group-item list-group-item-success">';
			} else {
				printHTML += '<li class="list-group-item list-group-item-danger">';
			}
			printHTML += employee.name;
		});

		$("#employeeList").html(printHTML);//Calls the printHTML as html to #employeeList.
	});//End getJSON.

  //ROOMS WIDGET
	var roomsURL = 'data/rooms.json';
	$.getJSON(roomsURL, function(room_object) {
		var printHTML = "";
		$.each(room_object, function(index, room) {
			if (room.available === true) {
				printHTML += '<li class="list-group-item list-group-item-success">';
			} else {
				printHTML += '<li class="list-group-item list-group-item-warning">';
			}
			printHTML += index + ". "  + room.name;
		});

		$("#roomList").html(printHTML);//Calls the printHTML as html to #employeeList.
	});//End getJSON.












});//End ready.
