<?php
 /**
  * $event - Event Node object.
  */
  $profile_image_url = file_create_url($event -> field_em_event_image[LANGUAGE_NONE][0]['uri']);
  $event_start_date = $event->field_date[LANGUAGE_NONE][0]['value'];
?>

<div class='em_event_outer_container span8'>
  
  <div class='span12 em_event_info_container'>
    <div class="span12 em_event_info">
      <div class="em_event_title"><?echo $event->title;?><a id="em_register_event_<?echo $event -> nid?>" class="em_register_event_btn">REGISTER</a></div>
      <div class="em_event_place_time"><?echo $event->field_place_value[LANGUAGE_NONE][0]['value']?>, Saturday</div>
    </div>    
    <div class='em_event_pic span4' style="float:left;background-image:url(<?echo $profile_image_url?>)"></div>
    <div class="span8 em_description">
    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  
  </div>

  
</div>