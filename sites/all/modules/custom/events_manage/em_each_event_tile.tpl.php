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
<div id="event_container_<?echo $event->nid;?>" class="span5 tile_event_container">
  <div class="span4" style="background-image:url(<? echo $profile_image_url;?>);background-size:100% 100%;height:167px; margin-top:5px;"></div>
  <div class="span8 tile_event_info_container">
    <span class="span11 event_title"><?echo $event->title?></span>
    <span class="span11 event_place"><?echo $event->field_place_value?></span>    
    <span class="span11 event_time">10 <span>AM</span></span>
  </div>
  <div class="event_description"><?echo substr($event->body_value,0,300)?></div>
 </div>