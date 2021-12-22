'use strict';

var eventLogger = [["EventType", "EventTimestamp", "KeyPressed", "KeyCode"]]

document.addEventListener('keydown', event => {

	const now = new Date();
	const curTime = now.getTime().toString();
	if(event.key=='Escape')
	{
		let csvContent = "data:text/csv;charset=utf-8," + eventLogger.map(e => e.join(",")).join("\n");
		var encodedUri = encodeURI(csvContent);
		window.open(encodedUri);
	}
	else
	{
		console.log("Key down at " + curTime + " -> Key Pressed: " +event.key +" Key Code: "+event.keyCode);
		var curEvent = ["keydown", curTime, event.key, event.keyCode];
		eventLogger.push(curEvent);
	}
});

document.addEventListener('keyup', event => {
	const now = new Date();
	const curTime = now.getTime().toString();
	console.log("Key up at " + curTime + " -> Key Pressed: " +event.key +" Key Code: "+event.keyCode);
	var curEvent = ["keyup", curTime, event.key, event.keyCode];
	eventLogger.push(curEvent);
});
