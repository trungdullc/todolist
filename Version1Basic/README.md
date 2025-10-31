# FEATURES
```
Feature	                Description
Add Tasks	            Type and click Add
Complete Tasks	        Click task to cross it out
Delete Tasks	        Click X to remove
```

# Edit
index.html<br>
style.css<br>
game.js

# Day 01: Make a Basic To-Do List
```
Boss: "Welcome to my company called JavaScriptLovers.  I am looking for skilled workers that have knowledge in
HTML, JavaScript, and CSS.  Today, I need you to make a simple To-Do List that can add and delete task and cross out if
the task is completed.  You have 1 Day to finish.  Oh I forgot to tell you on the company laptop it has VSC and I want
a new repo on GitHub name it JavaScriptLovers."
```

# Lessons Learned
```
Step 1: Create the repository on GitHub
   Optional: Do not initialize with a README

Step 2: Configure Git username and email, if you never used git and GitHub
	Optional: Check configuration
		git config --list
	git config --global user.name "Your Name"
	git config --global user.email "youremail@example.com"
	
Step 3: Generate an SSH key
	ssh-keygen -t ed25519 -C "youremail@example.com"
	cd ~/.ssh/id_ed25519

Optional: Add the SSH key to the SSH agent
	Note: Git will ask you to enter it every password every time you connect to GitHub 
	eval "$(ssh-agent -s)"
	ssh-add ~/.ssh/id_ed25519

Step 4: Link public SSH to GitHub
	cat ~/.ssh/id_ed25519.pub
	Copy the public key
	Go to GitHub → Settings → SSH and GPG keys → New SSH key, paste and save key

Step 5: Clone the empty repo locally and open in VSC
	git clone git@github.com:your-username/JavaScriptLovers.git
	cd JavaScriptLovers
	touch .gitignore
	touch README.md
	code .
	
Step 6: Modify .gitignore
	node_modules/
	.env
	.DS_Store
	dist/

Step 7: Add header to README.md
	echo "# JavaScriptLovers" > README.md

	git add .gitignore README.md
	git status
	git commit -m "Add .gitignore and README"
	git push -u origin main
	git log --oneline
	git log -n 5

Step 8 (Optional): Pull latest changes
	git pull origin main

Done with Setup git and GitHub on local computer now need work on index.html
Preferences → Settings → Emmet
Using Emmet shortcut in html with VSC
	! + TAB
	link:css + TAB
	script:src + TAB
	ul>li*3 + TAB
	div.container>h1+p + TAB
	a:link + TAB
	img + TAB
Using Emmet shortcut in css with VSC
	m10 + TAB					margin: 10px;
	p20	+ TAB					padding: 20px;
	bgc#f0f + TAB				background-color: #f0f;
	w100 + TAB					width: 100px;
	h50 + TAB					height: 50px;
	posr + TAB					position: relative;
	t0 r0 + TAB					top: 0; right: 0;
Using Emmet shortcut in js with VSC
	clg	+ TAB					console.log();
	fn + TAB					function name() { }
	fori + TAB					for (let i = 0; i < ; i++) { }
	afn + TAB					Arrow function: const name = () => { }
```