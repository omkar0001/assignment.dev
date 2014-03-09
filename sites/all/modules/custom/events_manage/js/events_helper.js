var em_show_events;
/**
 * Show the events with a particular view on a particular container id
 */
em_show_events = function(view_type, event_container_id) {
  jQuery.ajax({
       url: "/event/events_data",
       dataType: "json",
       async:true,
       success:function(data) {
         console.log("data data");
         console.log(data);
         events_data = [];
         for(var i=0; i<data.length; i++) {
           var each_event_object = {title:data[i]['title'],start:data[i]['start_date']};
           events_data.push(each_event_object);
         }
         switch(view_type) {
           case "calendar":
             initiate_calendar(events_data);

           break;  
         } 
       }
  });
};

var em_display_event_list_view = function(start_date_seconds,end_date_seconds) {
  jQuery.ajax({
       url: "/event/list_events_html",
       dataType: "json",
       type:'POST',
       data:{start_date:start_date_seconds, end_date:end_date_seconds},
       async:true,
       success:function(data) {
         console.log("data data");
         console.log(data);
         var list_view_html = data['list_events_html'];
         jQuery("#events_container").replaceWith(list_view_html);
         jQuery("#add_event_button").on('click',function() {
           console.log('show add event modal')
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

       }
  });
};

