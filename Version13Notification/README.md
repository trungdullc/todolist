# FEATURES
```
Feature	                Description
Notification			Pop up notification when add or competed task
```

# Edit
style.css<br>
game.js

# Day 13: Notifications
```
Boss: "Sounds much better. Hey the top right area of your website looks bare.  Lets add some notifications to it.
When a user adds or completes a task, pop up a notification and not the JS alert() function and no using React or Angular."
```

# Lessons Learned
```
You can define a .notification class in CSS even if it’s not in your HTML yet.
The class doesn’t need to exist in the HTML until you create or add an element that uses it.
JavaScript can create an element, assign the class, and insert it into the page.

function showNotification(message) {
    const notif = document.createElement('div');	// create element
    notif.className = 'notification';				// apply CSS class
    notif.textContent = message;					// set message
    document.body.appendChild(notif);				// add to page

    // Remove after animation finishes
    setTimeout(() => notif.remove(), 1000);
}

addBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.onclick = () => {
        li.classList.toggle("completed");
        // Added: Show notification when completed
        if (li.classList.contains("completed")) {
            showNotification("✨ Task Completed! ✨");
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    // Added: Show notification when added
    showNotification("💖 Task Added!");

    // 💗 Play cute pop sound 💗
    popSound.currentTime = 0;
    popSound.play();
};
```