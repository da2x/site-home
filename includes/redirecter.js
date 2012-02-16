(function() {
  opera.extension.addEventListener('message', function(redirect) {
    window.location = redirect.data;
  }, false);
  document.addEventListener('keypress', function(keys) {
    if (~window.navigator.platform.indexOf('Mac'))
    {
      if (keys.keyCode == '8' && keys.metaKey) // control–h, ctrl is mislabeled as meta on Mac
      {
        opera.extension.postMessage('keyboardshortcut');
        keys.preventDefault();
      }
    }
    else if (keys.keyCode == '104' && keys.ctrlKey) // control–h
    {
      opera.extension.postMessage('keyboardshortcut');
      keys.preventDefault();
    }
  }, false);
}());