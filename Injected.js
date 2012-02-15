function keydownHandler()
{
	if (event.target.nodeName.toLowerCase() !== "input")
		if(event.ctrlKey && event.altKey && event.keyCode == "72") safari.self.tab.dispatchMessage("siteHomeShortcut")
}

function loadHandler()
{
	safari.self.tab.dispatchMessage("onload");
}

window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("load", loadHandler, false);