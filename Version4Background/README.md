# FEATURES
```
Feature	                Description
Cute Background			Update Background
```

# Edit
style.css

# Day 04: Moving Background
```
Boss: "You work would make Pablo Picasso be proud.  I notice the background needs something, maybe moving clouds. I'll be
back to see your great work."
```

# Lessons Learned
```
In CSS, @keyframes is used to define animations by specifying how an element should change styles over time.
Note: Can also use from instead of 0% and to instead of 100%
Note: keyframes defines the animation, but animation uses it

@keyframes animationName {
    0% {
        /* Starting styles */
    }
    50% {
        /* Styles at halfway point */
    }
    100% {
        /* Ending styles */
    }
}

Example:
.box {
    width: 100px;
    height: 100px;
    background: red;
    animation: moveBox 3s infinite;		/* animation: moveBox keyframes, takes 3 seconds, repeats forever */
}

@keyframes moveBox {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(200px); }
    100% { transform: translateX(0); }
}
```