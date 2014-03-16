<?php
/**
 * $event - Event object.
 * $is_manage - Whether the event can be managed or not.
 * $view_type - Tile
 */
  $event_load = node_load($event->nid);
  $profile_image_url = file_create_url($event_load -> field_em_event_image[LANGUAGE_NONE][0]['uri']);
  $event_start_date = $event_load->field_date[LANGUAGE_NONE][0]['value'];
?>
<? echo theme("event_edit_modal", array("event" => $event)); ?>
<div id="event_container_<?echo $event->nid;?>" class="span11 event_container">
  <span class="event_date_time"><? echo date("l",$event_start_date)?>, <?echo date("M", $event_start_date)?>  <? echo date("j",$event_start_date)?></span>
  <? if($is_manage) { ?>
    <a class="delete_event"  id="delete_event_<?echo $event->nid; ?>"><i style="float:right;" class="fa fa-times"></i></a><a id="edit_event_<? echo $event->nid ?>" class="edit_event"  style="color:black;"><i style="float:right;margin-right:10px;" class="fa fa-pencil"></i></a>
  <?}?>
  <div>
   <div class="event_time"><? echo date("g",$event_start_date)?> <span><? echo date("A",$event_start_date)?></span><div style="background-image:url(<? echo $profile_image_url;?>);background-size:100% 100%;width:100px; height:100px; margin-top:5px;"></div></div>
   <div class="span9 event_inner_container">
    <span class="event_place"><?echo $event->field_place_value?></span>
    <span class="event_title"><a href="/event/view/<? echo $event->nid;?>"><?echo $event->title?></a></span>
    <span class="event_description"><?echo substr($event->body_value,0,300)?></span>
   </div>
  </div>
 </div>