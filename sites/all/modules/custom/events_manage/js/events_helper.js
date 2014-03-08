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
       }
  });
};

