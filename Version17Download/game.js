const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const popSound = document.getElementById("popSound");
const sparkleContainer = document.querySelector('.floating-sparkles');
const NUM_SPARKLES = 30;
const heartsContainer = document.getElementById('hearts-container');
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.25;

// Function to show kawaii notification
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);

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

        if (li.classList.contains("completed")) {
            showNotification("✨ Task Completed! ✨");
        }
	
	// Kitty reacts
        const kitty = document.querySelector('.kitty');
        kitty.classList.add('kitty-react');

        // Remove class after animation finishes so it can trigger again
        setTimeout(() => kitty.classList.remove('kitty-react'), 600);

	// Sparkle burst
    	for (let i = 0; i < 8; i++) {
      	    const sparkle = document.createElement('div');
      	    sparkle.className = 'kitty-sparkle';

      	    // Random direction for each sparkle
      	    const x = (Math.random() - 0.5) * 60 + 'px';
      	    const y = (Math.random() - 0.5) * 60 + 'px';
      	    sparkle.style.setProperty('--x', x);
      	    sparkle.style.setProperty('--y', y);

      	    // Position sparkle at Kitty's center
      	    const kittyRect = kitty.getBoundingClientRect();
      	    sparkle.style.left = kittyRect.left + kittyRect.width/2 + 'px';
      	    sparkle.style.top = kittyRect.top + kittyRect.height/2 + 'px';

      	    document.body.appendChild(sparkle);

      	    // Remove sparkle after animation
      	    setTimeout(() => sparkle.remove(), 600);
	}
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => {
        li.remove();
        showNotification("💔 Task Removed!");
    }

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    showNotification("💖 Task Added!");

    // 💗 Play cute pop sound 💗
    popSound.currentTime = 0;
    popSound.play();
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

// Added: Download Feature
// When the "Download" button is clicked, run this function
document.getElementById("downloadBtn").addEventListener("click", () => {  
  const tasks = document.querySelectorAll("#taskList li");  			// Select all <li> items inside the element with id="taskList" (each task)

  if (tasks.length === 0) {  											// If there are no tasks...
    alert("No tasks to download 💗");  									// Show a message telling the user nothing to download
    return;  															// Stop the function here
  }

  let textContent = "To-Do List ✨\n\n";	// Start building the text file content with a title and blank line

  tasks.forEach(task => {  												// Loop through each task
    const span = task.querySelector("span");  							// Get the task's text element
    let isDone = task.classList.contains("completed") ? "✔️" : "☐";
    // If task has class "completed", show ✔️; otherwise show ☐

    textContent += `${isDone} ${span.textContent}\n`;  					// Add a line to the text: "✔️ Task Name" or "☐ Task Name"
  });

  const blob = new Blob([textContent], { type: "text/plain" });  		// Create a downloadable text file object in memory
  const url = URL.createObjectURL(blob);  								// Convert that file into a temporary link (URL) the browser can use

  const link = document.createElement("a");  							// Create a hidden link element
  link.href = url;  													// Set the link's target to our file
  link.download = "todo-list.txt";  									// Set the file name that will be downloaded
  link.click();  														// Pretend the user clicked the link → triggers download

  URL.revokeObjectURL(url);												// Clean up the temporary file URL to free memory
});
