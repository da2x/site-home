/*globals opera:true*/
(function () {
  'use strict';
  document.addEventListener('keydown', function (event) {
    var ctrlKey = event.ctrlKey;
    // Old versions of Opera on Mac swapped the Control and Meta keys
    if (((window.navigator.platform).indexOf('Mac') !== -1) && (window.opera.version() < 12.10)) {
      ctrlKey = event.metaKey;
    }
    if (event.keyCode === 72 && ctrlKey) { // Control–H
      opera.extension.postMessage('keyboardshortcut');
      event.preventDefault();
    }
  }, false);
}());
