var initiate_calendar;
var em_calendar_object;
initiate_calendar = function(data) {
  events_data = [];
  for(var i=0; i<data['raw_data'].length; i++) {
    var each_event_object = {title:data['raw_data'][i]['title'],start:data['raw_data'][i]['start_date']};
    events_data.push(each_event_object);
  }
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  jQuery("#em_calendar_view_container").fullCalendar('destroy');
  em_calendar_object = jQuery("#em_calendar_view_container").fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      editable: true,
      events: events_data,
      dayClick: function(date, allDay, jsEvent, view) {
        jQuery("#em_calendar_view_container").fullCalendar("changeView", "basicDay");
        jQuery("#em_calendar_view_container").fullCalendar("gotoDate",date);
      },
      viewRender: function(view, element) {
        em_start_date_object = new Date(view.start);
        em_end_date_object = new Date(view.end);
        var start_date_milliseconds = em_start_date_object.getTime();
        var end_date_milliseconds = em_end_date_object.getTime();
        //em_display_event_list_view(start_date_milliseconds/1000,end_date_milliseconds/1000, em_event_approved_status);
        em_show_events("list_view", "id", start_date_milliseconds, end_date_milliseconds);
      }
         
    });
};