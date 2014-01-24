/**
 * jQuery Mobile configuration
 */
$(document).on("mobileinit", function() {
  //
  // jQuery Settings
  // 

  $.support.cors = true;

  // Ajax communication setup
  $.ajaxSetup({
    timeout: 30000,
    cache: false
  });
  
  //
  // jQuery Mobile Settings
  //

  // configuration
  $.mobile.defaultPageTransition = "slide";
  
  // messages
  $.mobile.loadingMessage = "Loading...";
  $.mobile.pageLoadErrorMessage = "Load Error!";
  
  // labels
  $.mobile.page.prototype.options.backBtnText = "Back";
  $.mobile.dialog.prototype.options.closeBtnText = "Close";
  $.mobile.selectmenu.prototype.options.closeText= "Close";
});
