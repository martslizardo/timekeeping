function fetch_attendance(){
  $.ajax({
    url: base_url + "get/attendance",
    type: "POST",
    success: function(data){
      $("#timesheet").html(data);
      $("#timesheet-table").DataTable();
    }
  })
}

function fetch_employee_attendance() {
  $.ajax({
    url: base_url + "get/emp_attendance",
    type: "POST",
    success: function(data){
      $("#employee-attendance").html(data);
      $("#employee-attendance-table").DataTable();
    }
  })
}

function fetch_leave(index,order) {
  $.ajax({
    url: base_url + "get/leave",
    type: "POST",
    success: function(data){
      $("#leave-data").html(data);
      $("#leave-table").DataTable();
    }
  })
}

function fetch_overtime() {
  $.ajax({
    url: base_url + "get/emp_overtime",
    type: "POST",
    success: function(data){
      $("#employee-overtime").html(data);
      $("#employee-overtime-table").DataTable();
    }
  })
}

$(document).ready(function(){
  $(".form-timesheet").on('submit',function(e){
    $.ajax({
      url: base_url + 'add/attendance',
      type: "POST",
      data: $(this).serialize(),
      success: function(data){
        fetch_leave();
        fetch_attendance();
      }

    })
    e.preventDefault();
  })
})

$(document).ready(function(){
  $("#file-overtime-form").on('submit',function(e){
    $.ajax({
      url: base_url + 'add/overtime',
      type: "POST",
      data: $(this).serialize(),
      success: function(data){
        fetch_overtime();
        $('#file-overtime-modal').modal('hide');
      }
    })
    e.preventDefault();
  })
})

fetch_overtime();
fetch_attendance();
fetch_leave();
fetch_employee_attendance();
/*$(document).ready(function(){
  $("#timesheet-timein").on('submit',function(e){
    $.ajax({
      url: base_url + 'add/attendance',
      data: $(this).serialize(),
      success: function(data){
        var result = JSON.parse(data);
        fetch_attendance();
      }
    });
    e.preventDefault();
  })
})*/
