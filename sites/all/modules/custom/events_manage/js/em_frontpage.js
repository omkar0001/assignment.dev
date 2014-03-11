jQuery(document).ready(function() {
  console.log("front page");
  jQuery(".em_login_register.em_login").on("click", function(){
    jQuery("#em_user_login_modal").modal("show");
  });
  jQuery(".em_login_register.em_register").on("click", function() {
    jQuery("#em_user_register_modal").modal("show");
  });
});