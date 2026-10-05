# 🌀 TheInternetBackrooms

> **Built by a community that loves chaos.**

No roadmap.  
No design system.  
No spoilers.  
No supervision.

Just developers building strange little worlds and connecting them together.

---

## What is this?

This is an open-source web experiment where every developer gets to create their own page — or **room** — inside one growing digital maze.

Every room can be completely different.

One room might be a fake operating system.

Another could be a haunted house.

Someone else might build an underwater world, a tiny game, a fake SaaS site, an interactive comic, a terminal, a fever dream, or something nobody knows how to describe.

That is intentional.

This project is not about consistency.

It is about creativity.

We want to see what happens when developers are allowed to build without being told:

- what style to use
- what font to use
- what color palette to follow
- what framework to use
- what the next person should build

The inconsistency **is part of the project**.

---

# 🚪 The Core Idea

Every room should somehow lead to another room.

But the exit does **not** have to be obvious.

It could be:

- a hidden key
- a lamp you click three times
- a suspicious painting
- a terminal command
- a secret button
- a door
- a mirror
- a cat you have to follow
- a small puzzle
- an object you have to drag
- something completely ridiculous

Think of every page as a room inside one enormous internet maze.

Visitors should have to explore, experiment, and figure out how to leave.

---

# 🔐 No Spoilers

This rule matters.

**Do not tell the next developer how to escape your room.**

If your exit requires someone to:

- click something multiple times
- solve a puzzle
- find a hidden object
- enter a code
- drag something somewhere
- trigger an animation
- discover a secret path

...let them figure it out.

The next developer should enter your room the same way every visitor does:

confused.

curious.

slightly concerned.

Do not explain your escape mechanic in the README.

Do not leave instructions telling people exactly what to click.

Let them find their own way out.

---

# 👻 What if the next room does not exist yet?

Perfect.

If a visitor reaches a room that has not been created yet, show something like:

> **This place doesn't exist yet.**
>
> You've reached the edge of the maze.
>
> Want to bring it to life?

That empty room can become the next contributor's starting point.

The website grows as more people add their own worlds.

Nobody knows what this project will eventually become.

That is the point.

The shared waiting page lives in `waiting-room/`. It is the 404-style page for **any** room that has not been built yet. It also contains a tiny dinosaur that is taking a break from running.

If your room leads to an unbuilt room, point your exit to the shared page with the next room number. For a room inside `pages/`, the destination looks like this:

```text
../../waiting-room/index.html?room=003
```

The `room` number sets the URL shown on the waiting page. When that room is built, update the outgoing destination to the new room's `index.html`. Keep the waiting page itself shared and unchanged; contributors only need to update their own room's navigation. Coordinate with the previous room's creator or a maintainer when a link in their room needs updating. Keep the way visitors discover each exit a secret.

## Desktop viewing

The site sends small or touch-only screens to the shared notice in `desktop-only/`. On Netlify, `netlify/edge-functions/mobile-gate.js` also redirects recognized mobile devices before a room is served. This applies to future rooms too.

For local file previews and other static hosts, add the shared guard near the top of each new room's `<head>`, before its stylesheet or room script:

```html
<script src="../../desktop-only/guard.js"></script>
```

That path works for a room at `pages/room-NNN-username/index.html`. Adjust it if your room is nested differently. Keep the `desktop-only/` notice and guard shared; each creator only adds the script reference in their own room.

The shared site icon is `assets/backroomsLogo.png`. A room inside `pages/room-NNN-username/` can use it with `<link rel="icon" type="image/png" href="../../assets/backroomsLogo.png">` in its `<head>`.

## Hosting on Netlify

Connect this GitHub repository to Netlify, choose `main` as the production branch, leave the build command empty, and publish the repository root (`.`). The root `netlify.toml` sets the publish directory. With Git-connected continuous deployment, a merge or push to `main` publishes the new files automatically. A new room also needs an incoming room's exit link updated to point to its `index.html`; adding the folder alone does not connect it to the maze.

---

# 👨‍💻 Who Can Contribute?

Anyone.

Seriously.

You do **not** need to be:

- a senior developer
- a frontend specialist
- Nigerian
- an expert in JavaScript
- good at design
- working at a tech company

You can be:

- a beginner
- a student
- a backend developer who has not touched CSS in years
- a designer learning code
- an experienced engineer
- someone who learned HTML last week

If you can build something people can interact with, you are welcome.

This project is not about writing the most impressive code on GitHub.

It is about showing that developers can be creative too.

---

# 📜 The Rules

## 1. Build something creative.

Your room should feel like **your** idea.

It can be beautiful.

Ugly.

Funny.

Unsettling.

Minimal.

Chaotic.

Interactive.

Pointless.

Brilliant.

Weird.

Just make it yours.

---

## 2. Do not destroy somebody else's work.

Every developer's room belongs to them.

Do not redesign, rewrite, "fix," modernize, or standardize another contributor's room unless they explicitly ask you to.

Different styles are intentional.

---

## 3. Keep your room mostly self-contained.

Use your own folder & unique username whenever possible (the first username is mine).

Example:

```text
/
├── index.html
├── assets/
│   └── backroomsLogo.png
├── netlify.toml
├── desktop-only/
│   ├── index.html
│   ├── style.css
│   └── guard.js
├── waiting-room/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── pages/
│   ├── room-001-popcorn150/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   └── assets/
│   │
│   ├── room-002-[username]/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   └── assets/
│   │
│   └── your-room/
│       └── ...
```

This is not because we suddenly became organized.

It is mostly so nobody accidentally deletes twelve dimensions while changing a background color.

---

## 4. Leave a way out.

Every completed room should eventually contain a path to another room.

The exit can be obvious.

Or hidden.

Or ridiculous.

That choice belongs to you.

---

## 5. Do not reveal your exit.

No walkthroughs.

No:

> "Click the lamp three times."

No:

> "The password is behind the cat."

No:

> "Open the third drawer."

Let visitors discover it.

---

## 6. Do not tell the next developer what to build.

You can create the doorway.

You do **not** decide what exists behind it.

Maybe you imagined a haunted forest.

The next developer might build a Windows 95 divorce lawyer's office operated entirely by pigeons.

You now have to live with that.

That is the project.

---

## 7. Keep the stack simple.

The default stack is:

- HTML
- CSS
- JavaScript

No framework is required.

The project should remain approachable for people who are still learning.

If your room genuinely needs something more advanced, keep it isolated and avoid creating unnecessary dependencies for everyone else.

---

## 8. Weird bugs may be features.

If you accidentally create a harmless bug that makes your room funnier...

You are under no obligation to fix it.

Use judgment.

Do not keep bugs that:

- break other rooms
- create security problems
- destroy accessibility
- make the site unusable
- damage someone else's work

But if your button rotates 37 degrees for no reason and somehow improves the experience...

Maybe leave it.

---

## 9. Do not turn this into Jira.

There is no product manager.

There is no sprint.

There is no design system.

There is no quarterly roadmap.

Please do not create seventeen meetings about the button.

Build something.

Have fun.

Ship it.

---

# 🛠️ How to Contribute

1. ⭐ Star the repository.
2. Fork the repo or create a branch using the project's current contribution flow.
3. Pick an empty room or create your own room folder.
4. Build something creative.
5. Test it locally.
6. Make sure you did not break existing rooms.
7. Open a pull request.
8. Do **not** explain the hidden solution to your room in the PR unless a maintainer genuinely needs it to review technical behavior.

If you are invited as a direct contributor, please still avoid pushing destructive changes directly into other people's rooms.

---

# 🎨 What Should I Build?

Whatever makes you think:

> "This would be cool."

or:

> "This is completely unnecessary."

or:

> "I wonder if JavaScript can do this..."

Build:

- a game
- an animation
- a fake operating system
- a horror room
- a tiny puzzle
- an interactive story
- a retro website
- a digital painting
- a fake application
- a strange experiment
- something that only makes sense after clicking the lamp three times

There is no required theme.

---

# 🧪 Important

This is an experiment.

Things may break.

Pages may become ridiculous.

Someone will abuse `position: absolute`.

Someone else will write JavaScript that should probably never have existed.

Browsers may suffer.

We accept these risks.

---

# 🌍 The Goal

There isn't really one.

But if we had to pretend there was:

We want to build a constantly growing piece of collaborative internet art made by developers around the world.

Not a startup.

Not a SaaS.

Not a portfolio template.

Not another landing page claiming to revolutionize the future.

Just a strange corner of the internet built by people who enjoy making things.

A maze.

A museum.

An experiment.

A public nuisance.

Whatever this becomes...

we will find out together.

---

# 🚪 Ready?

Star the repo.

Pick a room.

Build something weird.

Hide the exit.

Leave a doorway behind.

And whatever you do...

**do not tell the next developer what waits on the other side.**

---

> **Built by a community that loves chaos.**
