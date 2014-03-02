var delete_event;
jQuery(document).ready(function() {
  //Initiate the calendar.
  //initiate_calendar();
  jQuery("#em_calendar_view_container").hide();
  console.log("Added the events")
  //Showing the list view
  jQuery(".em_list_view").on('click', function(){
    jQuery(".fa-em-active").removeClass("fa-em-active");
    jQuery(".em_list_view").addClass("fa-em-active");
    jQuery("#events_container").show();
    jQuery("#em_calendar_view_container").hide();
  });

  //Showing the calendar view.
  jQuery(".em_calendar_view").on("click", function(){
    jQuery(".fa-em-active").removeClass("fa-em-active");
    jQuery(".em_calendar_view").addClass("fa-em-active");
    jQuery("#events_container").hide();
    jQuery("#em_calendar_view_container").show();
    //initiate_calendar();
    em_show_events("calendar", "em_calendar_view_container");
  });

  //When user click on save event in modal.
  jQuery("#save-event").on('click',function() {
    jQuery("#edit-submit").trigger("click");
  });
  
  jQuery("#event-manage-add-event-form").submit(function(){
    
    alert("save event triggered");
  });

  jQuery("#add_event_button").on('click',function() {
    jQuery("#addEventModal").modal("show");
  });
  //When user clicks on delete event.
  jQuery(".delete_event").on("click",function(){
  	var r = confirm("Are you sure, you want to delete event?");
  	if(r==true) {
      var delete_event_id = jQuery(this).attr('id')
      var delete_event_id_split = delete_event_id.split("_");
      delete_event(delete_event_id_split[2]);
  	}
  });

  jQuery(".edit_event").on('click',function() {
    var edit_event_id = jQuery(this).attr("id");
    var edit_event_id_split = edit_event_id.split("_");
    jQuery("#editEventModal_" + edit_event_id_split[2]).modal("show");
  });
  
  

});
/**
 * Deletes an event from backend and UI.
 */
delete_event = function(event_id) {
  jQuery.ajax({
       url: "/event_delete/" + event_id,
       dataType: "html",
       async:false,
       success:function(data) {
         var event_container_id = "event_container_" + event_id;
         jQuery("#" + event_container_id).remove(); 
       }
  });

};

