# FEATURES
```
Feature	                Description
Sound					Add item plays pop sound
```

# Edit
index.html<br>
game.js

# Day 07: Sound on clicking add
```
Boss: "My eyes are filled with joy, but my ears are displeased.  I need some simulation for them when using this app.
Can you add some sound when you click on the add button."
```

# Lessons Learned
```
preload attribute that tells the browser how to load the audio file before it’s played
Note: id is popSound
	<audio id="popSound" src="../sounds/pop.mp3" preload="auto"></audio>

Need JS to getElementById
	const popSound = document.getElementById("popSound");
	// const popSound = document.querySelector("#popSound");	// modern way
	
Side Quest: Using querySelectorAll (for multiple elements)
	// Returns a NodeList of all elements matching the selector
	const allButtons = document.querySelectorAll(".btn");
	
	allButtons.forEach(btn => {
		btn.addEventListener("click", () => console.log("Clicked!"));
	});

addBtn.onclick = () => {
    popSound.currentTime = 0;
    popSound.play();
};

Button Event Type			When it triggers
click						User clicks the button
dblclick					User double-clicks
mousedown					Mouse button pressed down
mouseup						Mouse button released
mouseenter					Mouse enters button area (does not bubble)
mouseleave					Mouse leaves button area (does not bubble)
mouseover					Mouse moves over button (bubbles)
mouseout					Mouse moves out of button (bubbles)
focus						Button receives keyboard focus
blur						Button loses keyboard focus
keydown / keyup				Keys pressed while button is focused
contextmenu					Right-click on button

Inspect
	console.dir(addBtn)
```