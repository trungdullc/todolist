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

		// Added: Sparkle burst
    	for (let i = 0; i < 8; i++) {                                    	// Loop 8 times to create 8 sparkles
			const sparkle = document.createElement('div');                	// Create a new div for a sparkle
			sparkle.className = 'kitty-sparkle';                          	// Assign the CSS class for sparkle styling and animation

			// Random direction for each sparkle
			const x = (Math.random() - 0.5) * 60 + 'px';                 	// Random horizontal offset (-30px to +30px)
			const y = (Math.random() - 0.5) * 60 + 'px';                 	// Random vertical offset (-30px to +30px)
			sparkle.style.setProperty('--x', x);                          	// Set CSS variable --x for animation
			sparkle.style.setProperty('--y', y);                          	// Set CSS variable --y for animation

			// Position sparkle at Kitty's center
			const kittyRect = kitty.getBoundingClientRect();              	// Get Kitty element's size and position
			sparkle.style.left = kittyRect.left + kittyRect.width/2 + 'px'; // Set sparkle horizontal start at Kitty's center
			sparkle.style.top = kittyRect.top + kittyRect.height/2 + 'px';  // Set sparkle vertical start at Kitty's center

			document.body.appendChild(sparkle);                            	// Add sparkle to the page

			// Remove sparkle after animation
			setTimeout(() => sparkle.remove(), 600);                       	// Remove the sparkle after 0.6s (matches animation duration)
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