jQuery(document).ready(function() {
  jQuery("#block-events-manage-events-manage-filter-block li").on("click", function(){
  	//jQuery(this).addclass("active");
  	jQuery("#block-events-manage-events-manage-filter-block li.active").removeClass("active");
    jQuery(this).addClass("active");
  });
});