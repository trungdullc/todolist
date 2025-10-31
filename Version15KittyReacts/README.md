# FEATURES
```
Feature	                Description
Kitty reacts when completed task
```

# Edit
style.css<br>
game.js

# Day 15: Make the Kitty scare people
```
Boss: "Hey since it near Halloween, lets scare some people.  Make it so that when someone completes a task make the
Hello Kitty on the bottom right move! Ha! Ha! Ha!"
```

# Lessons Learned
```
Defining the property in CSS and creating in JavaScript
@keyframes kittyJump {
  0%   { transform: translateY(0) rotate(0deg); }
  25%  { transform: translateY(-15px) rotate(-5deg); }
  50%  { transform: translateY(-10px) rotate(5deg); }
  75%  { transform: translateY(-15px) rotate(-5deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

/* Added */
.kitty-react {
  animation: kittyJump 0.6s ease;
}


addBtn.onclick = () => {
    taskSpan.onclick = () => {
	    const kitty = document.querySelector('.kitty');
		kitty.classList.add('kitty-react');							// add a CSS class to element stored in variable kitty
		setTimeout(() => kitty.classList.remove('kitty-react'), 600);
	};
};
```