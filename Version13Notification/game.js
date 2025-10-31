const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const popSound = document.getElementById("popSound");
const sparkleContainer = document.querySelector('.floating-sparkles');
const NUM_SPARKLES = 30;
const heartsContainer = document.getElementById('hearts-container');
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.25;

// Added: Function to show kawaii notification
function showNotification(message) {                           	// Function to display a temporary notification
	const notif = document.createElement('div');               	// Create a <div> element
	notif.className = 'notification';                         	// Apply the "notification" CSS class for styling
	notif.textContent = message;                              	// Set the text inside the notification
	document.body.appendChild(notif);                         	// Insert notification into the page

	// Remove after animation finishes
	setTimeout(() => notif.remove(), 1000);                   	// Remove it after 1 second so it fades out
}

addBtn.onclick = () => {                                      	// When the Add button is clicked
	const taskText = taskInput.value.trim();                  	// Get user input and remove extra spaces
	if (taskText === "") return;                              	// If input is empty, do nothing

	const li = document.createElement("li");                  	// Create <li> for the task item

	const taskSpan = document.createElement("span");          	// Create a <span> to hold the task text
	taskSpan.textContent = taskText;                          	// Display the text inside the span

	taskSpan.onclick = () => {                                	// When the task text is clicked
		li.classList.toggle("completed");                     	// Toggle the "completed" CSS style
		// Added: Show notification when completed
		if (li.classList.contains("completed")) {             	// If task is now completed
			showNotification("✨ Task Completed! ✨");         	// Show completion notification
		}
	};

	const deleteBtn = document.createElement("button");        	// Create delete button
	deleteBtn.textContent = "X";                              	// Set button text
	deleteBtn.className = "delete";                           	// Apply styling class
	deleteBtn.onclick = () => li.remove();                    	// Remove task when delete is clicked

	li.appendChild(taskSpan);                                 	// Add the task text to the li
	li.appendChild(deleteBtn);                                	// Add the delete button to the li
	taskList.appendChild(li);                                 	// Add the completed <li> to the task list

	taskInput.value = "";                                     	// Clear the input field

	// Added: Show notification when added
	showNotification("💖 Task Added!");                        	// Show a cute pop-up that task was added

	// 💗 Play cute pop sound 💗
	popSound.currentTime = 0;                                 	// Reset sound to start each time
	popSound.play();                                          	// Play sound effect
};

// Spawn 30 Randomly Sparkles going upwards
for (let i = 0; i < NUM_SPARKLES; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');

    // random size
    const size = Math.random() * 12 + 6; // 6px to 18px
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';

    // random horizontal start position
    spark.style.left = Math.random() * 100 + 'vw';

    // random animation duration
    const duration = Math.random() * 8 + 6; // 6s to 14s
    spark.style.animationDuration = duration + 's';

    // random animation delay
    spark.style.animationDelay = Math.random() * 8 + 's';

    sparkleContainer.appendChild(spark);
}

// On mouse movement create increase increase in hearts but need css to attach to
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1500);
});

// ON/OFF Background Music
musicToggle.onclick = () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 ON";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔈 OFF";
    }
};