
<?php
/**
 * $events - List of events.
 * $is_manage - Whether the list can be edited or not.
 */



  $events_css_path = drupal_get_path('module','events_manage')."/em_events.css";
  drupal_add_css($events_css_path);
?>






<?if($view_type == "list") {?>
<div class="container-fluid">
  <div class="span6" id="em_calendar_view_container"> </div>

  <div class="container-fluid span5" id="events_container">
   <?foreach($events as $each_event){?>
    <?echo theme("em_each_event", array("event" => $each_event,'is_manage' => $is_manage))?>
   <?}?>
  </div>
 </div> 
<? }  else if($view_type == "only_list") {?>
  
  <div class="container-fluid span5" id="events_container">
   <?foreach($events as $each_event){?>
    <?echo theme("em_each_event", array("event" => $each_event,'is_manage' => $is_manage))?>
   <?}?>
  </div>

<?} else if($view_type == "tile") {?>
  <div class="container-fluid" id="events_container">
    
   <div class="modal fade" id="addEventModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="addEventModalLabel">Add Event</h4>
      </div>
      <div class="modal-body">
        <div>
          <?
            $node = new stdclass();
            $node->type = 'event';
            node_save($node);
            $form_state = array();
            $form_state['event_node'] = $node;
            echo render(drupal_build_form('event_manage_add_event_form',$form_state, 'modal'));
          ?>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button id="save-event" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
   </div>
  </div>

    <?
    $i = 0;
    foreach($events as $each_event){?>
      <?if($i%2==0){?>
        <div class="em_event_row container-fluid"><?echo theme("em_each_event_tile", array("event" => $each_event,'is_manage' => $is_manage))?>
      <?} else {?>
         <?echo theme("em_each_event_tile", array("event" => $each_event,'is_manage' => $is_manage))?></div>
      <?}?>   
    <?
    $i++;
    }?>
  </div>
<?}?> 