(function() {
  opera.extension.addEventListener('message', function(redirect) {
    window.location = redirect.data;
  }, false);
}());