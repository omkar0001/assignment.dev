<?
/**
 * $modal_id - Id of the modal.
 * $form_rendered - Form rendered.
 */
 $title = "Login";
 switch($modal_id) {
  case "em_user_login_modal":
  $title="Login";
  break;
  case "em_user_register_modal":
  $title = "Sign Up";
 }
?>
<div class="modal fade" id="<?echo $modal_id?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        
        <h4 class="modal-title" id="<?echo $id?>_title"><?echo $title ?></h4>
      </div>
      <div class="modal-body">
        <div>
          <?
          
            echo $form_rendered;
          ?>

        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>