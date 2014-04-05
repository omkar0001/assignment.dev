


/**
 * Show the events with a particular view on a particular container id
 */
em_show_events = function(view_type, event_container_id, start_date, end_date) {
  jQuery.ajax({
       url: "/event/events_data",
       dataType: "json",
       data:{em_event_approved_status:em_event_approved_status, start_date:start_date, end_date:end_date},
       async:true,
       success:function(data) {
         /*
         events_data = [];
         for(var i=0; i<data['raw_data'].length; i++) {
           var each_event_object = {title:data['raw_data'][i]['title'],start:data['raw_data'][i]['start_date']};
           events_data.push(each_event_object);
         }
         */
         switch(view_type) {
           case "calendar":
             initiate_calendar(data);
             break;
            case "list_view":
              em_display_event_list_view(data);
         
         } 
       }
  });
};

/**
 * Displays the list of events in list view.
 */
var em_display_event_list_view = function(events_data) {
         var list_view_html = events_data['list_events_html'];
         jQuery("#events_container").replaceWith(list_view_html);
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

      
};

