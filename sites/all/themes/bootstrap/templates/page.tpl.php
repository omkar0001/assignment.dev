<? 
  global $user;
?>
<header id="navbar" role="banner" class="navbar navbar-fixed-top">
  <a href="/" class="em_logo"></a>
  <ul style="display:none;" class="nav nav-tabs">
      
      <?if(!isset($GLOBALS['em_secondary_tabs_not'])) {?>
        <?foreach($main_menu as $each_menu) {?>
          <?if("/" . $each_menu['href'] == $_SERVER['REQUEST_URI'] || ($_SERVER['REQUEST_URI'] == "/" && "/" . $each_menu['href'] == $front_page)) {?>
            <li class='active'>
              <a href="/<?echo $each_menu['href']; ?>"><?echo $each_menu['title'] ?></a>       
            </li>
          <?} else {?>
            <li>
              <a href="/<?echo $each_menu['href']; ?>"><?echo $each_menu['title'] ?></a>       
            </li>
          <?}?>  
        <?}?>
      <?}?>  
      <!--
      <li class="active">
        <a href="#">Manage Events</a>
      </li>
      <li>
        <a href="#">Manage Users</a>
      </li> 
      -->
    </ul>
    <?if(user_is_logged_in()){?>
      <ul id="em_logout"  class="nav nav-tabs">
       <li><a class="em_logout" href="/user/logout">Logout</a></li>
      <ul>
    <?}?>    
    
  

</header>
<? if(isset($GLOBALS['em_banner'])) {?>
  
  <?if(user_is_logged_in()) {?>
    <div class="em_secondary_tabs"> 
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href=''>Profile</a></li>
        <li><a href='/event/view' class='active'>Events</a></li>
        <?if(is_em_admin($user)) {?>
        <li><a href="/em_user/manage">Manage Users</a></li>
        <?}?>
      </ul>
      <?if($_SERVER['REQUEST_URI'] == '/event/view') {?>
        <? if(is_em_admin($user)) {?>
         <div id='add_event'><a class='em_btn add_event' id='add_event_button' style=''>Add Event</a></div>
        <?}?>
      <?}?>
    </div>
  <?} else {?>
    <div class="em_banner">
     <?if(!user_is_logged_in()) {?>
      <button class="em_login_register em_login">Login</button><button class="em_login_register em_register">Signup</button>
     <?}?>
    </div>
  <?}?>  
<?}?>
<div class="main-container fluid-container">

  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>
    
    <?php print render($page['header']); ?>
  </header> <!-- /#header -->

    
  </div>
  <?if(user_is_logged_in()) {?>
    <div class="row-fluid push-down">
  <?} else {?>
    <div class="row-fluid">
  <?}?>

    <?php 
    
    if (!empty($page['sidebar_first'])): ?>
      <? //if(0) {?>
      <!-- 
        <aside class="span3" role="complementary">
          <?php //print render($page['sidebar_first']); ?>
       </aside>  <!-- /#sidebar-first -->
     
      <?//}?>
    <?php endif; ?>  

    <section class="<?php 
      //print _bootstrap_content_span($columns); 
      print "span12";
    ?>">  
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted hero-unit"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      
      <?php 
      //Removing the breadcrumb
      /*
      if (!empty($breadcrumb)): print $breadcrumb; endif;
       */
      ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <div class="well"><?php print render($page['help']); ?></div>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="span3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

  </div>
</div>
<!--
<footer style="background-color:black;" class="footer container-fluid">
  <?php //print render($page['footer']); ?>
</footer>
-->
<div id="footer" style='margin-top:20px;'>
  <div class="container">
    <p class="text-muted credit">
      <a class="em_aboutus_link">About us</a>
      <a class="em_contactus_link">Contact us</a>
      <a class="em_partners_link">Partners</a>
    </p>
  </div>
</div>