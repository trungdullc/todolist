# FEATURES
```
Feature	                Description
Cute UI					Girly UI
```

# Edit
style.css

# Day 02: Make it Girly
```
Boss: "Wow! It works.  I forgot to tell you the target audience was for girls.  Can you redesign it, I think girls like
the color pink.
```

# Lessons Learned
```
CSS Selector	Meaning										Example HTML
.classname		Selects any element with this class			<div class="button"></div>
#idname			Selects 1 element with this unique ID		<div id="button"></div>
element			Selects all elements of this type/tag		<button></button>

BootStrap: CSS framework with pre-built components and styles
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
	<button class="btn btn-primary">Click Me</button>
Tailwind CSS: utility-first CSS framework
<button class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">
    Click Me
</button>

git branch is useful in production level
	git checkout -b feature/001-animation
Once you finish changes
	git add .
	git commit -m "FEATURE-001: Girly Theme"
Push your branch to remote so others can review it
	git push origin feature/001-animation
Open a Pull Request (PR) on GitHub
	GitHub → your repository → Compare & Pull Request
Merge PR into main/develop once accepted
	git checkout main
	git pull origin main
Delete the feature branch
	git branch -d feature/001-animation         		# Delete locally
	git push origin --delete feature/001-animation  	# Delete remotely
```