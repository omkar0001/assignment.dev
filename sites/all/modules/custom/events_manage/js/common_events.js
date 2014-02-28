jQuery(document).ready(function(){
  initiate_calendar();
  jQuery("#em_calendar_view_container").hide();
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
    em_show_events("calendar", "em_calendar_view_container");
  });
});