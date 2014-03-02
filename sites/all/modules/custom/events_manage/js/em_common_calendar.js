var initiate_calendar;
initiate_calendar = function(events_data) {
  console.log("initiating the calendar");
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  console.log("events data");
  console.log(events_data);
  jQuery("#em_calendar_view_container").fullCalendar('destroy');
  jQuery("#em_calendar_view_container").fullCalendar({
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
      }
         
    });
};