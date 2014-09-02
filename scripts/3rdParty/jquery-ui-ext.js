/*
  This file is extension to jquery-ui.js, because of below issues in CKEditor plugin.
  jquery-ui.js Version 1.10.3 and below versions doesn't support CKEditor plugin completely.
  ISSUE 1:- Dropdowns in CKEditor(within Dialog Box) closes immediately in IE.
  ISSUE 2:- Dropdowns in CKEditor(within Dialog Box) loses content if user opens them more than once.
  So once new version of jquery-ui.js is available,if above issues get fixed, this file should be removed along with dependency from phyrenderer.js.
  Reference:- http://bugs.jqueryui.com/ticket/9087#comment:30
              http://bugs.jqueryui.com/ticket/9087#comment:27
              http://bugs.jqueryui.com/ticket/4727#comment:23
              http://dev.ckeditor.com/ticket/10269
*/

$.widget( "ui.dialog", $.ui.dialog, {
  _allowInteraction: function( event ) {
    var target = event ? $(event.target) : null ;
    if ( target.is('[id^="cke_"]') || target.closest('[id^="cke_"]').length ) {
      return true;
    }
    return this._super( event );
  },
  _moveToTop: function ( event, silent ) {
    if ( event && this.uiDialog.nextAll(":visible").find('iframe').is('[id^="cke_"]') ) {
      return ;
    }
    return this._super( event, silent );
  }
});