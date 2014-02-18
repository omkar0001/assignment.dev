<?
/**
 * $event - Event object.
 */
?>
<div class="modal fade" id="editEventModal_<?echo $event->nid ?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="editEventModalLabel_<?echo $event->nid?>">Edit Event</h4>
      </div>
      <div class="modal-body">
        <div>
          <?
            
            $form_state = array();
            $form_state['event_node'] = node_load($event->nid);
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