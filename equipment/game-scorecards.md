# Game Scorecards

**Team Members (1-4 suggested):** @dev-gm, @NoahF15, and @DedFishy

**Is this your first PCB rodeo? (if yes, don't feel bad. you're all good):** We have all played around with microcontrollers and circuits a bit, I (dev-gm) have designed a PCB before, and the other team members are members of the same robotics club that also does similar things.

**What you are making?** Scorecards that can be used to track people's winnings at various games. Everybody who wants will get a card with an RFID/NFC chip that stores the amount of points they have. Each player starts off with a set number of points, which they can further accumulate through winning various games. There would be multiple (small) boards using which games could be played, more or less depending on how much trouble we run into making them. There would be at the very least a general-purpose board that could be used for any game, which would have multiple scanners for players to scan their cards and a method for each player to input the final score. If all players agree that the final scores are correct, then all the final scores will be written to the players' cards. Some other potential boards include: a jeopardy board with builtin questions and buttons that detect which player pressed first, as well as a card game board that could be used to play various card games and would automatically track the scores for the game being played. At the end of the trip, we would have every person with a card scan it and be able to see the final scoreboard.

**Inspiration:** An NFC-based card game was one of the suggested project ideas on [the main website](https://trail.hackclub.com), and I noticed that, even though it seems like a really promising idea, no one had submitted a PR for it yet.

**Sketches (if they exist) (paper works):**
![General-Purpose Board and Scorecard](https://i.imgur.com/U6lN2ck.png)
