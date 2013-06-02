chrome.browserAction.onClicked.addListener( function( activeTab ) {
  var activeUrl = activeTab.url.split( '/' ),
    protocol = activeUrl[0],
    hostname = activeUrl[2],
    homeAddr = protocol + '//' + hostname
  chrome.tabs.update( { url: homeAddr } )
})
