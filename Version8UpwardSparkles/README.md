# FEATURES
```
Feature	                Description
Upward Sparkles			Randomly 30 sparkles moves upward
```

# Edit
index.html<br>
game.js

# Day 08: animation
```
Boss: "Brillant! Did you know I like my Diet Coke when it not flat.  The bubbles are my favorite part about my drink.
Hey, can you add bubbles in the background? See ya laters."
```

# Lessons Learned
```
DOM stands for Document Object Model
DOM is not HTML, it’s a live representation of it
DOM is like a tree structure of the HTML document
	<html> element is the root
		<head> and <body> are child nodes
			All elements, attributes, and text are nodes in the tree

Example										<body>
body										<h1 id="title">Hello World</h1>
 ├── h1#title ("Hello World")				<button id="btn">Click Me</button>
 └── button#btn ("Click Me")				</body>

// Interacting with the DOM in JavaScript
const title = document.getElementById("title");			// Get element
title.textContent = "Welcome!";							// Change content

const btn = document.getElementById("btn");				// Add a click event to button
btn.addEventListener("click", () => {					// Listens for Event String click, if clicks call anynomous fx
    alert("Button clicked!");
});

Common event strings (Basically if it does that action in description it wall call a function)
Event Type		Description
"click"			User clicks
"dblclick"		User double-clicks
"mousedown"		Mouse button pressed down
"mouseup"		Mouse button released
"mouseover"		Mouse pointer enters element
"mouseout"		Mouse pointer leaves element
"mouseenter"	Mouse enters element (does not bubble)
"mouseleave"	Mouse leaves element (does not bubble)
"keydown"		Key pressed on keyboard
"keyup"			Key released on keyboard
"submit"		Form submitted
"change"		Input or select value changed
"input"			Input value changes (fires immediately)
"focus"			Element gains focus
"blur"			Element loses focus
"scroll"		Page or element is scrolled
"resize"		Window is resized

All modern browsers provide DOM APIs like:
	querySelector, getElementById
	createElement, appendChild, removeChild
	Event listeners: addEventListener

<div class="floating-sparkles"></div>		// Needed an empty class in the html to connect javascript to DOM
```