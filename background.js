(function() {

  var toolbarButton, toolbarButtonProperties;

  window.addEventListener('load', createToolbarButton, false);

  registerEventListeners();

  function registerEventListeners()
  {
    var tabEvents = ['close', 'create', 'focus', 'blur'],
    windowEvents  = ['create', 'close', 'focus'],
    processEvents = ['connect', 'disconnect'];

    // TODO: Handle keyboard shortcut message
    for (var event in processEvents) {
      opera.extension.addEventListener(processEvents[event], updateButtonState, false);
    }
    for (var event in tabEvents) {
      opera.extension.tabs.addEventListener(tabEvents[event], updateButtonState, false);
    }
    for (var event in windowEvents) {
      opera.extension.windows.addEventListener(windowEvents[event], updateButtonState, false);
    }
    opera.extension.windows.addEventListener('message', keyboardShortcutResponse, false);
  }

  function createToolbarButton()
  {
    toolbarButtonProperties = {
      disabled: true,
      icon: 'ToolbarIcon.png',
      onclick: buttonClickHome,
      title: 'Site Home'
    },
    toolbarButton = opera.contexts.toolbar.createItem(toolbarButtonProperties);
    opera.contexts.toolbar.addItem(toolbarButton);
  }

  function updateButtonState()
  {
    if (opera.extension.tabs.getFocused())
    {
      if (opera.extension.tabs.getFocused().url && opera.extension.tabs.getFocused().url != findSiteHomeURL(opera.extension.tabs.getFocused().url))
      {
        toolbarButton.disabled = false;
        toolbarButton.title = 'Go Home to ' + opera.extension.tabs.getFocused().url;
      }
      else
      {
        toolbarButton.disabled = true;  
        toolbarButton.title = 'Site Home';
      }
    }
    else
    {
      toolbarButton.disabled = true;
      toolbarButton.title = 'Site Home';
    }
  }

  function findSiteHomeURL(url)
  {
    var newurl = url.match(/^(.*?\/\/[^\/]+)/);
    if (newurl)
    {
      return newurl[1] + '/';
    }
  }

  function buttonClickHome()
  {
    var tab = opera.extension.tabs.getFocused();
    if (tab && tab.url)
    {
      tab.postMessage(findSiteHomeURL(tab.url));
    }
  }

  function keyboardShortcutResponse(event)
  {
   if (event.data == 'keyboardshortcut')
   {
     if (opera.extension.tabs.getFocused())
     {
       if (opera.extension.tabs.getFocused().url && opera.extension.tabs.getFocused().url != findSiteHomeURL(opera.extension.tabs.getFocused().url))
       {
         buttonClickHome();
       }
      }
    }
  }
}());