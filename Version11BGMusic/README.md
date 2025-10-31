# FEATURES
```
Feature	                Description
Background Music        Added Background Music with toggle button
```

# Edit
index.html<br>
game.js

# Day 11: Background Music
```
Boss: "I notice the only sound on the app is the add button.  Can you put some background music on the site?"
```

# Lessons Learned
```
Note: Most modern browsers (Chrome, Safari, Firefox, Edge) block autoplay of audio
<audio id="bgMusic" src="../sounds/freemusic.mp3" loop autoplay></audio>

const musicToggle = document.getElementById("musicToggle");
musicToggle.onclick = () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 ON";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔈 OFF";
    }
};
```