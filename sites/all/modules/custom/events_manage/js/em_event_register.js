jQuery.ready(function() {
  jQuery(".em_register_event_btn").on("click", function() {
    var event_register_btn = jQuery(this).attr('id');
    var event_register_btn_split = event_register_btn.split("_");
    var event_id = event_register_btn_split[3];
  });  	
});