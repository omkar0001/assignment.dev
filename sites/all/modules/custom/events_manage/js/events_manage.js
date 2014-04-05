var em_start_date_object=null;
var em_end_date_object=null;
var em_event_approved_status=-1;
var delete_event;
jQuery(document).ready(function() {
  
  em_show_events("calendar", "em_calendar_view_container");
  //Initiate the calendar.
  //When user click on save event in modal.
  jQuery(".modal-footer .btn.btn-primary").on('click',function() {
    jQuery(jQuery(this).parent().prev().find("[id*='edit-submit']")[0]).trigger("click");
    //jQuery("#edit-submit").trigger("click");
  });
  /**
   * Handles the events when an user clicks on the tabs.
   */
  jQuery(".em_event_filter_btn").on("click", function() {
    var parent_li = jQuery(this).parent();
    var parent_id = parent_li.attr("id");
    console.log("parent id");
    console.log(parent_id);
    jQuery(".em_event_filter_btn").parent(".active_event_tab").removeClass("active_event_tab");
    parent_li.addClass("active_event_tab");
    switch(parent_id){
      case "active_event_tab":
      em_event_approved_status = -1;
      em_calendar_object.fullCalendar("gotoDate",em_start_date_object);
      //em_show_events("calendar", "em_calendar_view_container", em_start_date_object, em_end_date_object);
      break;
      case "em_event_approval_tab":
      //Waiting for approval.
      em_event_approved_status = 0;
      em_calendar_object.fullCalendar("gotoDate", em_start_date_object);
      //em_show_events("calendar", "em_calendar_view_container", em_start_date_object, em_end_date_object);
      break;
      case "em_event_attend_tab":
      //Events attending.
      em_event_approved_status = 2;
      
      em_calendar_object.fullCalendar("gotoDate", em_start_date_object);
      //em_show_events("calendar", "em_calendar_view_container", em_start_date_object, em_end_date_object);
      break;
    }
  });

  jQuery("#event-manage-add-event-form").submit(function(){
    
    
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

