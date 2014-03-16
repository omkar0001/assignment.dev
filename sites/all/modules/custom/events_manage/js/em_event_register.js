
var em_register_event;
jQuery(document).ready(function() {
  jQuery(".em_register_event_btn").on("click", function() {
    var event_register_btn = jQuery(this).attr('id');
    var event_register_btn_split = event_register_btn.split("_");
    var event_id = event_register_btn_split[3];
    em_register_event(event_id);

  });  	
});
 em_register_event = function(event_id) {
 	jQuery.ajax({
       url: "/em_event_register/" + event_id,
       dataType: "html",
       async:true,
       success:function(data) {
         //var event_container_id = "event_container_" + event_id;
         //jQuery("#" + event_container_id).remove(); 
       }
    });
 }