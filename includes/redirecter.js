/*globals opera:true*/
(function () {
  'use strict';
  document.addEventListener('keypress', function (keys) {
    if ((keys.keyCode === 104 && keys.ctrlKey) || (keys.keyCode === 8 && keys.metaKey)) { // contrl–h
      opera.extension.postMessage('keyboardshortcut');
      keys.preventDefault();
    }
  }, false);
}());
