(function() {
  opera.extension.addEventListener('message', function(redirect) {
    window.location = redirect.data;
  }, false);
  document.addEventListener('keypress', function(keys) {
    if (~navigator.platform.indexOf('Mac'))
    {
      if (keys.keyCode == '8' && keys.metaKey && keys.altKey) // control–alt–h
      {
        opera.extension.postMessage('keyboardshortcut');
        keys.preventDefault();
      }
    }
    if (~navigator.platform.indexOf('Win'))
    {
      if (keys.keyCode == '104' && keys.ctrlKey && keys.altKey) // control–alt–h
      {
        opera.extension.postMessage('keyboardshortcut');
        keys.preventDefault();
      }
    }
    if (~navigator.platform.indexOf('Linux'))
    {
      if (keys.keyCode == '104' && keys.ctrlKey) // control–h
      {
        opera.extension.postMessage('keyboardshortcut');
        keys.preventDefault();
      }
    }
  }, false);
}());