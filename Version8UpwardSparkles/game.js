const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const popSound = document.getElementById("popSound");
const sparkleContainer = document.querySelector('.floating-sparkles');		// Added
const NUM_SPARKLES = 30; 							// Added: more sparkles for a magical background

addBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.onclick = () => {
        li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    // 💗 Play cute pop sound 💗
    popSound.currentTime = 0;
    popSound.play();
};

// Added: Spawn 30 Randomly Sparkles of different sizes going upwards
for (let i = 0; i < NUM_SPARKLES; i++) {					// Loop NUM_SPARKLES times to create multiple sparkles
	const spark = document.createElement('div');				// Create a new div element for a sparkle
	spark.classList.add('spark');						// Add the 'spark' CSS class for styling & animation

	// random size
	const size = Math.random() * 12 + 6;					// Generate a random size between 6px and 18px
	spark.style.width = size + 'px';					// Set width of the sparkle
	spark.style.height = size + 'px';					// Set height of the sparkle

	// random horizontal start position
	spark.style.left = Math.random() * 100 + 'vw';				// Place sparkle at random horizontal position across viewport width

	// random animation duration
	const duration = Math.random() * 8 + 6;					// Random duration for animation between 6s and 14s
	spark.style.animationDuration = duration + 's';				// Apply animation duration to sparkle

	// random animation delay
	spark.style.animationDelay = Math.random() * 8 + 's';			// Delay animation start randomly up to 8s

	sparkleContainer.appendChild(spark);					// Add the sparkle div to the container in the DOM
}