// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable(
    {
      "ajax":'/table.json',
      searching: false,
      ordering: false,
      lengthChange: false,
      info: false,
      pageLength: 6,
      "createdRow": function( row, data, dataIndex){
        if( data[3] ==  "High"){
            $(row).addClass('red');
        }
        if( data[3] ==  "Mid"){
          $(row).addClass('orange');
        }
        if( data[3] ==  "Low"){
        $(row).addClass('green');
        }
        if(data[3] == 'Pending'){
          $(row).addClass('yellow');
        }
      }
      // lengthMenu: [[5,10,-1], [5, 10, "All"]]
    }
  );
});
