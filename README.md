This is a simple HTML-based game where the player controls a character ("man") to catch butterflies and avoid bombs. The game logic is implemented using JavaScript, while CSS (linked in the style.css file) is used for styling. Here's a detailed explanation:

Game Overview

    Objective:

Increase score by catching butterflies.

Avoid bombs to prevent a game-over scenario.

    Player Controls:

Use the Left Arrow key to move the character left.

Use the Right Arrow key to move the character right.

Key Components

    HTML Structure:

The game has a container (.game-area) where the character (man), butterflies (butterfly), and bombs (bomb) are rendered.

A score display is included to show the player's current score.

    JavaScript Functionality:

Movement Control: The keydown event listener updates the character's horizontal position.

Object Movement: Both the butterfly and bomb move downward continuously. Their positions reset once they go off the screen.

Collision Detection: Checks if the character collides with a butterfly (to increase the score) or a bomb (to end the game).

    Collision Logic:

Collision is determined using the getBoundingClientRect() method, which checks for overlapping boundaries of the objects.

    Game Loop:

The setInterval function runs repeatedly to handle object movement, collision detection, and score updates.

    Game End:

If the character collides with a bomb, the game stops (clearInterval), displays the score, and reloads the page.

Features

    Dynamic Object Placement:

Objects reset to random positions when they go off-screen or are interacted with.

    Game Speed:

The variable gameSpeed controls how fast objects fall, offering room for increasing difficulty.

    Responsive Controls:

The character is restricted to a defined horizontal range (0px to 250px), preventing it from moving out of bounds.

Potential Enhancements

Game Difficulty:

Gradually increase the speed (gameSpeed) as the score increases.

Audio Effects:

Add sounds for collecting butterflies and colliding with bombs.

Improved Graphics:

Enhance visuals with animations, better object images, and a background theme.

Additional Features:

Introduce more object types or levels.
