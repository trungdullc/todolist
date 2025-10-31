const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const popSound = document.getElementById("popSound");
const sparkleContainer = document.querySelector('.floating-sparkles');
const NUM_SPARKLES = 30;
const heartsContainer = document.getElementById('hearts-container');			// Added: Heart follow mouse

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

// Added: On mouse movement create increase increase in hearts but need css to attach to
document.addEventListener('mousemove', (e) => {         // Listen for mouse movement on the whole page
    const heart = document.createElement('div');        // Create a new <div> element to represent a heart
    heart.className = 'heart';                          // Assign the CSS class "heart" for styling/animation
    heart.textContent = '💗';                           // Set the visible character inside the div to a heart emoji

    heart.style.left = e.pageX + 'px';                  // Position the heart horizontally where the mouse is
    heart.style.top = e.pageY + 'px';                   // Position the heart vertically where the mouse is
    
    heartsContainer.appendChild(heart);                 // Add the heart element to the container in the DOM

    // Remove heart after animation
    setTimeout(() => {                                  // Wait a set amount of time before executing code
    heart.remove();                                    	// Remove the heart element so it doesn't stay forever
    }, 1500);                                     	// 1500ms = 1.5 seconds (time for animation before deletion)
});