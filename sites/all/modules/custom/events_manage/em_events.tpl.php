
<?php
/**
 * $events - List of events.
 */

  $events_css_path = drupal_get_path('module','events_manage')."/em_events.css";
  drupal_add_css($events_css_path);
?>
<ul id="events_container">
 <?foreach($events as $each_event){?>
 <li class="event_container">
  <span class="event_date_time">SATURDAY, FEB 15</span>
  <div>
   <div class="event_time">10 <span>AM</span></div>
   <div class="event_inner_container">
    <span class="event_place"><?echo $each_event->field_place_value?></span>
    <span class="event_title"><?echo $each_event->title?></span>
    <span class="event_description"><?echo substr($each_event->body_value,0,300)?></span>
   </div>
  </div>
 </li>
 <?}?>

 <li class="event_container">
  <span class="event_date_time">SATURDAY, FEB 15</span>
  <div>
   <div class="event_time">10 <span>AM</span></div>
   <div class="event_inner_container">
    <span class="event_place">Hyderabad</span>
    <span class="event_title">Gunday</span>
    <span class="event_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</span>
   </div>
  </div>
 </li>

</ul>