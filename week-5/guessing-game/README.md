# Initial Design Brief
lets imagine your boss has given you the following brief in creating this game.


I want you to create a "simple guess the number type" game. It should choose a random number between 1 and 1-100 then challenge the player to guess the number in 10 turns. After each turn, the player should be told if there are right or wrong, and if they are wrong, whether the guess was too low or too high, it should also telll the player what numbers they rpreviously got, the game will end once the number guesses correctly or when they run out of turns but when the game ends the player should be given an option to start playing the game again.

Upon looking at this brief the first thing we need to do is to start breaking it down into simple actionable task, in as much a programmers mind as possible.

1. Generate a random number between 1 and 100. 
2. Record the turn number the player is on.Start it on 1.
3. Provide player with a way to guess whta the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is the correct number:
    - Display congratulations message .
    - Stop the player from being able to enter more guesses(Ths will mess the game up)
    - Display comntrol allowing the player to restart the game.
7. If it is wrong and the player has turns left:
    - Tell the player they are wrong and whether their guess was too high or too low
    - Allow them to enter another guess.
    - Increment the turn number by 1.  
8. If it is wrong and the player has no turn left:
    - Tell the player it is game over.
    - Stop the player from being able to enter more guesses.
    - Display control allowing the player to restart the game.
9. Once the game restarts make sure the game logic and UI are completely reset, then go back to step 1.
