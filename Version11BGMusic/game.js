const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const popSound = document.getElementById("popSound");
const sparkleContainer = document.querySelector('.floating-sparkles');
const NUM_SPARKLES = 30;
const heartsContainer = document.getElementById('hearts-container');
const musicToggle = document.getElementById("musicToggle");			// Added

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

// Added: ON/OFF Background Music
musicToggle.onclick = () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 ON";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔈 OFF";
    }
};