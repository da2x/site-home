chrome.browserAction.onClicked.addListener( function( activeTab ) {
  var activeUrl = activeTab.url.split( '/' ),
    protocol  = activeUrl[0],
    hostname  = activeUrl[2],
    homeAddr  = protocol + '//' + hostname,
    canGoHome = activeUrl[3];
    if ( canGoHome )
      chrome.tabs.update( { url: homeAddr } );
})
