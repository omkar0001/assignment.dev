var activate_user;
var deactivate_user;
jQuery(document).ready(function() {
  //Activate Deactivate user binding.	
  jQuery(".em_user_activate_deactivate").on('click',function(){
    if(jQuery(this).hasClass("em_user_activate")) {
      console.log("activating");
      var id_split = jQuery(this).attr('id').split("_");
      activate_user(id_split[3]);	
    } else {
      console.log("deactivating");
      var id_split = jQuery(this).attr('id').split("_");
      deactivate_user(id_split[3]);	
    }
  });
});

//Activate the user.
activate_user = function(user_id) {
  console.log("activate user callback");
  jQuery.ajax({
       url: "/em_user_activate/" + user_id,
       dataType: "html",
       async:false,
       success:function(data) {
         jQuery("#user_activate_deactivate_" + user_id).removeClass("em_user_activate");
         jQuery("#user_activate_deactivate_" + user_id).addClass("em_user_deactivate");
         jQuery("#user_activate_deactivate_" + user_id).text("Deactivate"); 
       }
  });
};

//Deactivate the user.
deactivate_user = function(user_id) {
  console.log("deactivate user callback.");	
  jQuery.ajax({
       url: "/em_user_activate/" + user_id,
       dataType: "html",
       async:false,
       success:function(data) {
         jQuery("#user_activate_deactivate_" + user_id).removeClass("em_user_deactivate");
         jQuery("#user_activate_deactivate_" + user_id).addClass("em_user_activate");
         jQuery("#user_activate_deactivate_" + user_id).text("Activate");  
       }
  });
};