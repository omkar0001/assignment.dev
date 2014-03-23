<?php
/**
 *--$event --Event object
 */
 $event_load = node_load($event->nid);
  $profile_image_url = file_create_url($event_load -> field_em_event_image[LANGUAGE_NONE][0]['uri']);
  $event_start_date = $event_load->field_date[LANGUAGE_NONE][0]['value'];
?>
<a href="/event/view/<?echo $event_load->nid ?>" style="background-image:url(<?echo $profile_image_url?>)" class="em_event_medium_tile_container">
  <div class="em_event_info">
  	<span class="em_event_title"><?echo $event_load->title ?></span>
  	<span class="em_event_place"><?echo $event->field_place_value?></span>
  	<span class="em_event_date"><? echo date("l",$event_start_date)?>, <?echo date("M", $event_start_date)?>  <? echo date("j",$event_start_date)?> <span style="font-weight:bold;" class="em_event_time">&nbsp;&nbsp;  <? echo date("g",$event_start_date)?> <? echo date("A",$event_start_date)?></span></span>
  </div>
  
</a>
