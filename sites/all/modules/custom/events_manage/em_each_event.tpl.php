<?php
/**
 * $event - Event object.
 * $is_manage - Whether the event can be managed or not.
 */
?>
<? echo theme("event_edit_modal", array("event" => $event)); ?>
<li id="event_container_<?echo $event->nid;?>" class="event_container">
  <span class="event_date_time">SATURD0AY, FEB 15</span>
  <? if($is_manage) { ?>
    <a class="delete_event" id="delete_event_<?echo $event->nid; ?>"><i style="float:right;" class="fa fa-times"></i></a><a id="edit_event_<? echo $event->nid ?>" class="edit_event"  style="color:black;"><i style="float:right;margin-right:10px;" class="fa fa-pencil"></i></a>
  <?}?>
  <div>
   <div class="event_time">10 <span>AM</span></div>
   <div class="event_inner_container">
    <span class="event_place"><?echo $event->field_place_value?></span>
    <span class="event_title"><?echo $event->title?></span>
    <span class="event_description"><?echo substr($event->body_value,0,300)?></span>
   </div>
  </div>
 </li>