(function() {
  opera.extension.addEventListener('message', function(redirect) {
    window.location = redirect.data;
  }, false);
  document.addEventListener('keypress', function(keys) {
    if (keys.keyCode == '104' && keys.ctrlKey && keys.altKey) // control–alt–h
    {
      opera.extension.postMessage('keyboardshortcut');
      keys.preventDefault();
    }
  }, false);
}());