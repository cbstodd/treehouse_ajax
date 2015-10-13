// EMPLOYEES.
//1. Creates an XMLHTTP Request object named xhrEmployeeObject.
var xhrEmployeeObject = new XMLHttpRequest();

//2. Creates the callback function.
xhrEmployeeObject.onreadystatechange = function () {
  if (xhrEmployeeObject.readyState === 4) {
    var employees = JSON.parse(xhrEmployeeObject.responseText);
    var html = '';//Sets html string variable
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        html += '<li class="list-group-item list-group-item-success">';
      } else {
        html += '<li class="list-group-item list-group-item-danger">';
      }
      html += employees[i].name;
      // HTML += '</ul>';
    }
    document.getElementById('employeeList').innerHTML = html;
  }
};

//3. Opens xhr request via GET, Would most likely be recent employee database.
xhrEmployeeObject.open('GET', 'data/employees.json');

//4. Sends the xhr request.
xhrEmployeeObject.send();
