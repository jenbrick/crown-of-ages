// All 117 pages of the game
const storyPages = {
    1: {
        text: "You stand at the stone entrance to the labyrinth. The air is thick with mystery, and you know that once you enter, there’s no turning back without finding the artifact or facing its dangers.",
        choices: [
            { text: "Enter the labyrinth cautiously, studying the stone carvings on the walls.", nextPage: 2 },
            { text: "Walk around the entrance to see if there are any hidden clues.", nextPage: 3 },
            { text: "Shout into the labyrinth to see if anyone answers.", nextPage: 4 }
        ]
    },
    2: {
        text: "You step into the dark passageway of the labyrinth, noticing ancient symbols on the walls. The tunnel splits into three distinct paths.",
        choices: [
            { text: "Take the left path, where you hear the sound of flowing water.", nextPage: 5 },
            { text: "Take the middle path, where you smell something burning.", nextPage: 6 },
            { text: "Take the right path, which is eerily silent.", nextPage: 7 }
        ]
    },
    3: {
        text: "As you walk around the labyrinth’s entrance, you notice faint footprints leading to a small side door hidden by vines.",
        choices: [
            { text: "Enter the side door to see what lies behind it.", nextPage: 8 },
            { text: "Ignore the door and enter the main labyrinth.", nextPage: 2 },
            { text: "Study the footprints to see where they came from.", nextPage: 9 }
        ]
    },
    4: {
        text: "Your voice echoes back at you, and the wind picks up. Moments later, you hear a faint voice whispering from inside the labyrinth.",
        choices: [
            { text: "Enter the labyrinth and follow the voice.", nextPage: 7 },
            { text: "Wait outside to see if the voice calls again.", nextPage: 10 },
            { text: "Ignore the voice and head down the left path.", nextPage: 5 }
        ]
    },
    5: {
        text: "The left path opens into a large underground cavern with a stream running through it. A stone bridge crosses the water, and you notice a glowing object at the bottom of the stream.",
        choices: [
            { text: "Cross the stone bridge carefully.", nextPage: 11 },
            { text: "Dive into the water to retrieve the glowing object.", nextPage: 12 },
            { text: "Turn back and take a different path.", nextPage: 2 }
        ]
    },
    6: {
        text: "The middle path is filled with thick smoke, making it hard to breathe. Ahead, you see a fire pit with embers still smoldering, and a strange figure crouched beside it.",
        choices: [
            { text: "Approach the figure and try to talk to them.", nextPage: 13 },
            { text: "Avoid the figure and sneak past the fire pit.", nextPage: 14 },
            { text: "Turn back and try another path.", nextPage: 2 }
        ]
    },
    7: {
        text: "The right path is eerily silent, but you sense that something is watching you from the shadows. As you continue forward, the tunnel begins to twist unnaturally.",
        choices: [
            { text: "Continue moving forward despite the unsettling feeling.", nextPage: 15 },
            { text: "Examine the walls for hidden mechanisms.", nextPage: 16 },
            { text: "Turn back and try a different path.", nextPage: 2 }
        ]
    },
    8: {
        text: "The hidden door leads to a small, secret room filled with ancient scrolls and strange artifacts. One of the scrolls is laid out on a stone table, glowing faintly.",
        choices: [
            { text: "Read the glowing scroll to uncover its secrets.", nextPage: 17 },
            { text: "Search the room for any traps or hidden doors.", nextPage: 18 },
            { text: "Leave the room and return to the main entrance.", nextPage: 3 }
        ]
    },
    9: {
        text: "You follow the footprints away from the labyrinth and discover a small campsite that looks recently abandoned. There are a few items scattered about, including a map with strange markings.",
        choices: [
            { text: "Take the map and return to the labyrinth entrance.", nextPage: 19 },
            { text: "Search the campsite for more clues.", nextPage: 20 },
            { text: "Leave the campsite and enter the labyrinth.", nextPage: 2 }
        ]
    },
    10: {
        text: "You wait outside the labyrinth, listening for the voice again. After a while, the wind dies down, and everything becomes eerily quiet.",
        choices: [
            { text: "Enter the labyrinth, now determined to find the source of the whisper.", nextPage: 7 },
            { text: "Head down the left path, feeling uneasy.", nextPage: 5 },
            { text: "Leave the labyrinth, believing the dangers are too great.", nextPage: 'end_1' }
        ]
    },
    11: {
        text: "As you step onto the stone bridge, it starts to crumble beneath your feet. You have only moments to react before it collapses entirely.",
        choices: [
            { text: "Run across the bridge before it falls.", nextPage: 21 },
            { text: "Jump into the water below to avoid falling with the bridge.", nextPage: 12 },
            { text: "Try to backtrack carefully off the bridge.", nextPage: 22 }
        ]
    },
    12: {
        text: "You dive into the water and swim toward the glowing object. As you reach it, you realize it is a mysterious key, glowing with an ethereal light.\nClue: You have found the Mysterious Key.",
        choices: [
            { text: "Take the key and swim to the other side.", nextPage: 23 },
            { text: "Return to the shore and reconsider your options.", nextPage: 5 },
            { text: "Leave the key and swim back to where you started.", nextPage: 24 }
        ]
    },
    13: {
        text: "You approach the figure by the fire pit, who slowly stands up. It’s an old man with strange markings on his face. He seems to recognize you.",
        choices: [
            { text: "Ask the old man for help navigating the labyrinth.", nextPage: 25 },
            { text: "Attack the old man, sensing danger.", nextPage: 26 },
            { text: "Run past him without a word.", nextPage: 14 }
        ]
    },
    14: {
        text: "You sneak past the fire pit and find yourself at a crossroads. Each tunnel has strange symbols carved above them.",
        choices: [
            { text: "Take the tunnel with the symbol of an eye.", nextPage: 27 },
            { text: "Take the tunnel with the symbol of a flame.", nextPage: 28 },
            { text: "Take the tunnel with the symbol of a serpent.", nextPage: 29 }
        ]
    },
    15: {
        text: "Despite the unnatural twisting of the path, you continue forward. Suddenly, the floor gives way beneath you, and you fall into a deep pit.",
        choices: [
            { text: "Ending 2: You fall into the pit, unable to escape. Your adventure ends here.", nextPage: 'end_2' }
        ]
    },
    16: {
        text: "You examine the walls carefully and discover a hidden mechanism. By pressing one of the stones, a secret door opens in the wall.",
        choices: [
            { text: "Enter the secret door to see what lies beyond.", nextPage: 30 },
            { text: "Ignore the door and continue down the silent path.", nextPage: 7 },
            { text: "Turn back and take another path from the courtyard.", nextPage: 2 }
        ]
    },
    17: {
        text: "The scroll is filled with cryptic symbols and images. As you read, you uncover the history of the labyrinth and a clue to finding the Crown of Ages: 'Only the one who holds the Key of Eternity may claim the Crown.'\nClue: The Key of Eternity is required to claim the Crown of Ages.",
        choices: [
            { text: "Take the scroll with you and leave the room.", nextPage: 8 },
            { text: "Search for the Key of Eternity.", nextPage: 9 },
            { text: "Leave the scroll behind and return to the entrance.", nextPage: 2 }
        ]
    },
    18: {
        text: "As you search the room, you find a hidden trapdoor under a pile of old scrolls. It leads to a narrow staircase descending into darkness.",
        choices: [
            { text: "Descend the staircase cautiously.", nextPage: 31 },
            { text: "Ignore the trapdoor and leave the room.", nextPage: 8 },
            { text: "Examine the scrolls more closely before leaving.", nextPage: 17 }
        ]
    },
    19: {
        text: "Armed with the map you found at the campsite, you feel more confident navigating the labyrinth. You re-enter through the main gate.",
        choices: [
            { text: "Head down the left path to follow the map’s directions.", nextPage: 5 },
            { text: "Head down the middle path, which is marked on the map.", nextPage: 6 },
            { text: "Take the right path, marked as 'dangerous' on the map.", nextPage: 7 }
        ]
    },
    20: {
        text: "You search the campsite and find a journal with cryptic notes about the labyrinth’s layout and traps. The final entry reads, 'Beware the shadows—they follow without form.'\nClue: Beware the formless shadows.",
        choices: [
            { text: "Take the journal and return to the labyrinth.", nextPage: 19 },
            { text: "Keep searching the campsite for more clues.", nextPage: 9 },
            { text: "Abandon the search and leave the labyrinth behind.", nextPage: 'end_3' }
        ]
    },
    21: {
        text: "You sprint across the crumbling bridge just in time as it collapses into the water below. You now stand on the other side, with a tunnel leading deeper into the labyrinth.",
        choices: [
            { text: "Continue into the tunnel ahead.", nextPage: 32 },
            { text: "Search the area for any hidden clues before proceeding.", nextPage: 33 },
            { text: "Turn back and attempt to find another way across.", nextPage: 2 }
        ]
    },
    22: {
        text: "You attempt to backtrack carefully, but the stone gives way too quickly.",
        choices: [
            { text: "Ending 4: You fall into the water and are swept away by the current. The labyrinth claims another victim.", nextPage: 'end_4' }
        ]
    },
    23: {
        text: "With the Mysterious Key in hand, you swim to the other side and find a locked door. The key fits perfectly into the lock, and the door opens to reveal a hidden chamber.",
        choices: [
            { text: "Enter the chamber to see what it holds.", nextPage: 34 },
            { text: "Leave the chamber for now and continue exploring.", nextPage: 32 },
            { text: "Turn back to the stream and reconsider your options.", nextPage: 5 }
        ]
    },
    24: {
        text: "You decide to leave the glowing key behind and swim back to the shore. As you do, you feel something brush against your leg in the water.",
        choices: [
            { text: "Swim faster to escape whatever is in the water.", nextPage: 35 },
            { text: "Dive under the water to see what it is.", nextPage: 36 },
            { text: "Get out of the water and dry off.", nextPage: 5 }
        ]
    },
    25: {
        text: "The old man looks at you with suspicion but eventually agrees to help. He points you toward a hidden passage that only few know about.\nClue: You now know about the Hidden Passage.",
        choices: [
            { text: "Follow his directions and go to the hidden passage.", nextPage: 30 },
            { text: "Distrust the old man and take a different route.", nextPage: 14 },
            { text: "Offer him something in return for more information.", nextPage: 37 }
        ]
    },
    26: {
        text: "You strike at the old man, but he vanishes into smoke. The smoke fills the room, and you begin to feel weak and dizzy.",
        choices: [
            { text: "Ending 5: The old man was a phantom, and your attack triggered a curse. You fall unconscious, never to wake again.", nextPage: 'end_5' }
        ]
    },
    27: {
        text: "You enter the tunnel marked with an eye symbol. The walls are covered with more eyes, watching you as you pass. At the end of the tunnel, you find a pedestal with an ancient relic on it.",
        choices: [
            { text: "Take the relic.", nextPage: 38 },
            { text: "Examine the pedestal for traps.", nextPage: 39 },
            { text: "Leave the tunnel and explore elsewhere.", nextPage: 14 }
        ]
    },
    28: {
        text: "The tunnel grows hotter as you walk, and soon you see flames dancing along the walls. In the center of the room is a large brazier, with something glowing at its center.",
        choices: [
            { text: "Reach into the brazier to retrieve the glowing object.", nextPage: 40 },
            { text: "Try to extinguish the flames before proceeding.", nextPage: 41 },
            { text: "Leave the tunnel and take another route.", nextPage: 14 }
        ]
    },
    29: {
        text: "The tunnel twists and turns like a serpent. The walls are slick, and you hear hissing ahead. At the end, you find a massive snake coiled around a treasure chest.",
        choices: [
            { text: "Try to fight the snake and take the chest.", nextPage: 42 },
            { text: "Attempt to distract the snake to reach the chest.", nextPage: 43 },
            { text: "Turn back and leave the serpent tunnel.", nextPage: 14 }
        ]
    },
    30: {
        text: "You enter the hidden passage and find yourself in a long corridor. Strange symbols cover the walls, and the air feels charged with energy. At the end, there are two doors—one with a sun symbol, and one with a moon symbol.",
        choices: [
            { text: "Enter the door with the sun symbol.", nextPage: 44 },
            { text: "Enter the door with the moon symbol.", nextPage: 45 },
            { text: "Examine the walls for more clues before choosing.", nextPage: 46 }
        ]
    },
    31: {
        text: "The staircase spirals down into the darkness, and you feel a growing sense of dread. At the bottom, you find an ancient altar, with a book resting on it.",
        choices: [
            { text: "Open the book and read the ancient text.", nextPage: 47 },
            { text: "Take the book without reading it.", nextPage: 48 },
            { text: "Leave the book alone and ascend the staircase again.", nextPage: 18 }
        ]
    },
    32: {
        text: "The tunnel ahead is lined with torches, leading deeper into the labyrinth. As you walk, you feel a sense of déjà vu, as if you’ve been here before. A distant growl echoes from the shadows.",
        choices: [
            { text: "Press on despite the growl.", nextPage: 49 },
            { text: "Stop and search the walls for any hidden exits.", nextPage: 50 },
            { text: "Turn back and find another path.", nextPage: 21 }
        ]
    },
    33: {
        text: "You search the area around the collapsed bridge and find a hidden inscription on the wall: 'He who holds the Key may pass unharmed.'",
        choices: [
            { text: "Continue forward, knowing you have the key.", nextPage: 23 },
            { text: "Return to the stream and reconsider your options.", nextPage: 5 },
            { text: "Turn back and try another path from the courtyard.", nextPage: 2 }
        ]
    },
    34: {
        text: "The hidden chamber is filled with ancient relics and treasures. In the center, you see a pedestal with a large crystal glowing faintly. This must be important.",
        choices: [
            { text: "Take the crystal.", nextPage: 51 },
            { text: "Search the room for traps or other hidden secrets.", nextPage: 52 },
            { text: "Leave the chamber without touching anything.", nextPage: 23 }
        ]
    },
    35: {
        text: "You swim as fast as you can, but the force in the water grabs you and pulls you under.",
        choices: [
            { text: "Ending 6: You are pulled beneath the water, never to surface again. The labyrinth claims another adventurer.", nextPage: 'end_6' }
        ]
    },
    36: {
        text: "You dive under the water and see a strange creature swimming toward you. It glows with an eerie light but seems harmless.",
        choices: [
            { text: "Try to communicate with the creature.", nextPage: 53 },
            { text: "Swim away quickly and return to shore.", nextPage: 5 },
            { text: "Follow the creature deeper into the water.", nextPage: 54 }
        ]
    },
    37: {
        text: "You offer the old man a small trinket in exchange for more information. He smiles and gives you a cryptic hint: 'Beware of those who walk in shadows—they are not what they seem.'",
        choices: [
            { text: "Thank the old man and follow his directions.", nextPage: 30 },
            { text: "Leave without another word and take a different path.", nextPage: 14 },
            { text: "Ask the old man for more clues before leaving.", nextPage: 55 }
        ]
    },
    38: {
        text: "You take the relic from the pedestal, but as soon as you touch it, the eyes on the walls begin to glow and the ground shakes.",
        choices: [
            { text: "Ending 7: The labyrinth was a trap, and you are consumed by its magic. You are now part of the labyrinth forever.", nextPage: 'end_7' }
        ]
    },
    39: {
        text: "Upon examining the pedestal, you discover an inscription: 'The relic is a key, but only if taken with care.' You now know how to safely remove it.",
        choices: [
            { text: "Take the relic carefully, following the instructions.", nextPage: 56 },
            { text: "Leave the relic behind and exit the tunnel.", nextPage: 14 },
            { text: "Search the walls for more clues about the relic.", nextPage: 57 }
        ]
    },
    
    40: {
        text: "You reach into the brazier and grab the glowing object. It’s hot, but you manage to retrieve it—a small, glowing gem.",
        choices: [
            { text: "Take the gem with you and continue.", nextPage: 58 },
            { text: "Leave the gem in the brazier and exit the tunnel.", nextPage: 28 },
            { text: "Examine the gem for any hidden markings or clues.", nextPage: 59 }
        ]
    },
    41: {
        text: "You try to extinguish the flames, but they flare up even more, consuming everything in the tunnel.",
        choices: [
            { text: "Ending 8: The flames overwhelm you, and you perish in the heat of the labyrinth.", nextPage: 'end_8' }
        ]
    },
    42: {
        text: "You charge at the snake with your weapon, but it is faster than you anticipated. The snake strikes.",
        choices: [
            { text: "Ending 9: You are bitten by the serpent, and its venom quickly overcomes you. Your adventure ends here.", nextPage: 'end_9' }
        ]
    },
    43: {
        text: "You throw a rock to distract the snake, and it moves away from the chest, giving you time to open it.",
        choices: [
            { text: "Open the chest and take the treasure inside.", nextPage: 60 },
            { text: "Leave the chest unopened and retreat carefully.", nextPage: 29 },
            { text: "Search the chest for traps before opening it.", nextPage: 61 }
        ]
    },
    44: {
        text: "You enter the door with the sun symbol and find yourself in a bright, warm chamber. A massive golden disc hangs on the far wall, reflecting light.",
        choices: [
            { text: "Approach the golden disc.", nextPage: 62 },
            { text: "Search the room for other objects.", nextPage: 63 },
            { text: "Leave the room and try the other door.", nextPage: 45 }
        ]
    },
    45: {
        text: "The moon symbol door leads to a cold, dimly lit chamber. In the center is a pool of dark water, with ripples gently moving across the surface.",
        choices: [
            { text: "Step closer to the pool to investigate.", nextPage: 64 },
            { text: "Leave the room and try the sun door instead.", nextPage: 44 },
            { text: "Search the room for any hidden mechanisms.", nextPage: 65 }
        ]
    },
    46: {
        text: "You examine the walls and discover another inscription hidden in the carvings: 'Only in balance may the Crown be claimed.'\nClue: Balance is key to claiming the Crown of Ages.",
        choices: [
            { text: "Enter the sun door, believing balance is important.", nextPage: 44 },
            { text: "Enter the moon door, seeking balance in the darkness.", nextPage: 45 },
            { text: "Leave the passage and reconsider your options.", nextPage: 30 }
        ]
    },
    47: {
        text: "You open the book, and its pages glow with a strange light. The text reveals a powerful incantation that controls the labyrinth.\nClue: The Incantation of Control can influence the labyrinth’s paths.",
        choices: [
            { text: "Memorize the incantation and close the book.", nextPage: 66 },
            { text: "Take the book with you and leave the altar.", nextPage: 31 },
            { text: "Leave the book alone and ascend the staircase.", nextPage: 18 }
        ]
    },
    48: {
        text: "You take the book, sensing its power, but without reading it. The room begins to tremble as you disturb its resting place.",
        choices: [
            { text: "Run back up the staircase to escape.", nextPage: 31 },
            { text: "Open the book and read it now.", nextPage: 47 },
            { text: "Drop the book and leave quickly.", nextPage: 31 }
        ]
    },
    49: {
        text: "You move forward despite the growl, but the darkness closes in around you. Suddenly, a massive beast emerges from the shadows.",
        choices: [
            { text: "Ending 10: The beast overwhelms you, and the labyrinth claims yet another victim.", nextPage: 'end_10' }
        ]
    },
    50: {
        text: "You pause and examine the walls around you carefully. After some searching, you find a small crack in the stone, just large enough to reveal another hidden passage.",
        choices: [
            { text: "Squeeze through the crack and enter the hidden passage.", nextPage: 67 },
            { text: "Ignore the passage and continue down the main tunnel.", nextPage: 32 },
            { text: "Return to where you came from, unsure of the new path.", nextPage: 21 }
        ]
    },
    
    51: {
        text: "You lift the glowing crystal from the pedestal, feeling its energy course through you. The chamber rumbles, but nothing else happens.",
        choices: [
            { text: "Leave the chamber with the crystal in hand.", nextPage: 23 },
            { text: "Inspect the pedestal further for any hidden mechanisms.", nextPage: 52 },
            { text: "Place the crystal back down, fearing a trap.", nextPage: 34 }
        ]
    },
    
    52: {
        text: "You carefully examine the pedestal and surrounding area. After some time, you find a small trigger mechanism at the base, deactivating a trap that would have sealed the chamber.",
        choices: [
            { text: "Take the crystal now that the trap is deactivated.", nextPage: 51 },
            { text: "Leave the crystal alone and exit the chamber.", nextPage: 34 },
            { text: "Search the walls for any hidden doors.", nextPage: 67 }
        ]
    },
    
    53: {
        text: "You reach out, trying to communicate with the glowing underwater creature. It seems to respond to your presence, guiding you deeper into the water where a hidden passage awaits.",
        choices: [
            { text: "Follow the creature into the hidden underwater passage.", nextPage: 54 },
            { text: "Surface for air and rethink your approach.", nextPage: 5 },
            { text: "Try to grab the creature, fearing it may be dangerous.", nextPage: 68 }
        ]
    },
    
    54: {
        text: "The glowing creature leads you deeper into the water, where you find an air pocket and a hidden treasure room submerged beneath the labyrinth. Gold and jewels are scattered everywhere.",
        choices: [
            { text: "Take the treasure and swim back to the surface.", nextPage: 69 },
            { text: "Search the treasure room for any artifacts.", nextPage: 70 },
            { text: "Leave the treasure alone, fearing it may be cursed.", nextPage: 5 }
        ]
    },
         
    55: {
        text: "You ask the old man for more information, and he warns you: 'The Crown is only for the wise. Those who rush will never leave.'",
        choices: [
            { text: "Follow the old man’s directions to the hidden passage.", nextPage: 30 },
            { text: "Thank him and continue exploring without taking his advice.", nextPage: 14 },
            { text: "Attack the old man, doubting his trustworthiness.", nextPage: 26 }
        ]
    },
    56: {
        text: "Using the knowledge from the inscription, you carefully take the relic from the pedestal without triggering any traps. As you hold it, you feel a surge of power. This relic could be key to unlocking deeper secrets.",
        choices: [
            { text: "Leave the tunnel with the relic in hand.", nextPage: 23 },
            { text: "Continue exploring the tunnel, now feeling more confident.", nextPage: 27 },
            { text: "Search for hidden paths that the relic might reveal.", nextPage: 67 }
        ]
    },
    
    57: {
        text: "You carefully inspect the walls surrounding the relic’s pedestal. Faintly, you see another inscription hidden behind the grime: 'Those who seek with open eyes shall pass unseen.'",
        choices: [
            { text: "Take the relic carefully and leave.", nextPage: 56 },
            { text: "Leave the relic and continue down the tunnel.", nextPage: 27 },
            { text: "Search the tunnel for more hidden inscriptions.", nextPage: 67 }
        ]
    },
    
    58: {
        text: "You pocket the glowing gem from the brazier. Its warmth spreads through your body, giving you the strange feeling that it may hold some magical properties.",
        choices: [
            { text: "Continue through the tunnel with the gem.", nextPage: 28 },
            { text: "Try to activate the gem by focusing on it.", nextPage: 71 },
            { text: "Leave the tunnel, feeling uneasy about the gem’s power.", nextPage: 28 }
        ]
    },
    
    59: {
        text: "You examine the gem closely and notice tiny symbols carved into its surface. These markings seem to match those you saw earlier in the labyrinth, suggesting the gem may unlock a specific door.",
        choices: [
            { text: "Keep the gem and continue exploring.", nextPage: 28 },
            { text: "Leave the gem in the brazier and exit.", nextPage: 28 },
            { text: "Try to decipher the symbols on the gem.", nextPage: 71 }
        ]
    },
    
    60: {
        text: "You open the chest, and inside you find a golden crown encrusted with jewels—the Crown of Ages. As soon as you lift it, the serpent stirs, ready to attack.",
        choices: [
            { text: "Fight the serpent to escape with the crown.", nextPage: 72 },
            { text: "Place the crown back in the chest, hoping the serpent will calm.", nextPage: 43 },
            { text: "Run for your life with the crown.", nextPage: 73 }
        ]
    },
    
    61: {
        text: "You examine the chest carefully and find a hidden mechanism at the base. You manage to disable the trap that would have sealed you inside the tunnel. The chest is now safe to open.",
        choices: [
            { text: "Open the chest and take the treasure.", nextPage: 60 },
            { text: "Leave the chest behind and exit the tunnel.", nextPage: 43 },
            { text: "Search for more traps around the area.", nextPage: 67 }
        ]
    },
    
    62: {
        text: "You step closer to the massive golden disc, and it begins to glow, casting a warm light across the room. You notice an inscription: 'To see beyond the light, close your eyes.'",
        choices: [
            { text: "Close your eyes as instructed and wait.", nextPage: 74 },
            { text: "Touch the golden disc.", nextPage: 75 },
            { text: "Leave the room, feeling unnerved by the disc.", nextPage: 44 }
        ]
    },
    
    63: {
        text: "As you search the room, you find a small, locked box hidden behind the golden disc. It looks old and fragile, but it could hold something important.",
        choices: [
            { text: "Try to open the box.", nextPage: 76 },
            { text: "Leave the box alone and exit the room.", nextPage: 44 },
            { text: "Search the room further for a key to the box.", nextPage: 77 }
        ]
    },
    
    64: {
        text: "You step closer to the pool and see your reflection ripple across the surface. As you gaze into the water, something moves beneath it—a shadowy figure emerging.",
        choices: [
            { text: "Step back and observe the figure.", nextPage: 78 },
            { text: "Reach into the pool to touch the figure.", nextPage: 79 },
            { text: "Flee the room, sensing danger.", nextPage: 45 }
        ]
    },
    
    65: {
        text: "You search the walls around the pool and find a small lever hidden behind a stone. It looks like it could drain the pool or reveal a hidden door.",
        choices: [
            { text: "Pull the lever and see what happens.", nextPage: 80 },
            { text: "Ignore the lever and leave the room.", nextPage: 45 },
            { text: "Search the room for more hidden levers or mechanisms.", nextPage: 81 }
        ]
    },
    
    66: {
        text: "You memorize the incantation written in the book. You feel its power echo in your mind, giving you the ability to influence certain parts of the labyrinth.",
        choices: [
            { text: "Use the incantation to change the path ahead.", nextPage: 82 },
            { text: "Leave the book behind and exit the room.", nextPage: 31 },
            { text: "Take the book with you and continue exploring.", nextPage: 31 }
        ]
    },
    
    67: {
        text: "You step into the hidden passage, which is narrow and dark. The air feels heavier here, as if the labyrinth itself is closing in on you. At the end of the passage, you find a strange door with no handle.",
        choices: [
            { text: "Use the gem you found to try and unlock the door.", nextPage: 83 },
            { text: "Search the area for another way through the door.", nextPage: 84 },
            { text: "Leave the passage and return to the main tunnel.", nextPage: 32 }
        ]
    },
    
    68: {
        text: "You reach out and grab the glowing creature. It struggles in your grip, and you realize too late that it was leading you to safety.",
        choices: [
            { text: "Ending 11: The creature dissolves in your hands, and the water turns dark. You are pulled under by a powerful current and drown.", nextPage: 'end_11' }
        ]
    },
    
    69: {
        text: "You fill your pockets with as much treasure as you can carry and swim back to the surface. The labyrinth’s riches are yours, but you feel a strange weight settle over you.",
        choices: [
            { text: "Ending 12: You escape the labyrinth with the treasure, but its curse follows you wherever you go.", nextPage: 'end_12' }
        ]
    },
    
    70: {
        text: "As you search the treasure room, you find a small, ornate box. Inside is a golden key.\nClue: The Golden Key may unlock the deepest part of the labyrinth.",
        choices: [
            { text: "Take the golden key and leave the treasure behind.", nextPage: 5 },
            { text: "Take the treasure and the key, and leave.", nextPage: 69 },
            { text: "Leave everything and swim back to the surface.", nextPage: 5 }
        ]
    },
    
    71: {
        text: "You focus on the symbols carved into the gem, and suddenly they rearrange themselves, revealing a hidden word: 'Open.'",
        choices: [
            { text: "Use the gem to open the nearest sealed door.", nextPage: 83 },
            { text: "Pocket the gem and continue exploring.", nextPage: 28 },
            { text: "Leave the gem behind, fearing its power.", nextPage: 28 }
        ]
    },
    
    72: {
        text: "You battle the massive serpent, but its scales are too tough. Just when you think all is lost, the golden crown begins to glow, weakening the serpent’s power.",
        choices: [
            { text: "Finish the serpent off and escape with the crown.", nextPage: 73 },
            { text: "Try to escape without further harm.", nextPage: 43 },
            { text: "Use the crown’s power to command the serpent.", nextPage: 85 }
        ]
    },
    
    73: {
        text: "You run as fast as you can with the Crown of Ages in hand, but the labyrinth begins to shift and close in on you.",
        choices: [
            { text: "Ending 13: The labyrinth seals itself, trapping you inside forever with the crown.", nextPage: 'end_13' }
        ]
    },
    
    74: {
        text: "You close your eyes as instructed, and suddenly the room around you changes. You are no longer in the bright chamber but standing before the Crown of Ages.",
        choices: [
            { text: "Take the crown.", nextPage: 72 },
            { text: "Leave the crown, fearing its power.", nextPage: 86 },
            { text: "Examine the room further before taking action.", nextPage: 87 }
        ]
    },
    75: {
        text: "You place your hand on the golden disc, and instantly, a surge of energy flows through you. The labyrinth begins to respond to your presence.",
        choices: [
            { text: "Use the disc’s power to alter the paths of the labyrinth.", nextPage: 82 },
            { text: "Remove your hand, feeling the power is too much to control.", nextPage: 44 },
            { text: "Try to use the disc to summon the Crown of Ages.", nextPage: 88 }
        ]
    },
 76: {
    text: "You open the fragile box and inside you find a single gemstone, pulsing faintly with light. It seems to resonate with the labyrinth’s energy.",
    choices: [
        { text: "Take the gemstone and leave the room.", nextPage: 58 },
        { text: "Leave the gemstone, fearing it may be cursed.", nextPage: 44 },
        { text: "Search for more clues related to the gemstone.", nextPage: 59 }
    ]
},
 77: {
    text: "You continue searching the room and eventually find a small silver key hidden under a loose floor tile.",
    choices: [
        { text: "Use the silver key to unlock the box.", nextPage: 76 },
        { text: "Keep the key for later and leave the room.", nextPage: 44 },
        { text: "Search the room further for any more hidden objects.", nextPage: 63 }
    ]
},
 78: {
    text: "You step back and watch as the shadowy figure rises from the pool. It doesn’t seem hostile but rather curious about your presence. It beckons you to come closer, and a strange calm settles over you.",
    choices: [
        { text: "Approach the figure cautiously and see what it wants.", nextPage: 89 },
        { text: "Leave the room, feeling uneasy about the figure.", nextPage: 45 },
        { text: "Attempt to speak to the figure from a distance.", nextPage: 90 }
    ]
},
 79: {
    text: "You reach into the pool, and the moment your hand touches the water, the figure grabs you and pulls you under. Everything goes dark, and you feel yourself sinking.",
    choices: [
        { text: "Ending 14: The pool consumes you, and your body becomes part of the labyrinth. Your adventure ends in darkness.", nextPage: 'end_14' }
    ]
},
 80: {
    text: "You pull the lever, and the pool begins to drain slowly. As the water disappears, a staircase leading downward is revealed.",
    choices: [
        { text: "Descend the staircase to see where it leads.", nextPage: 91 },
        { text: "Leave the room now that the pool has been drained.", nextPage: 45 },
        { text: "Search the now-empty pool for hidden objects.", nextPage: 92 }
    ]
},
81: {
    text: "You search the walls for additional levers and find another one hidden behind a pillar. This lever looks different, with strange markings etched into it.",
    choices: [
        { text: "Pull the second lever to see what happens.", nextPage: 93 },
        { text: "Ignore the second lever and leave the room.", nextPage: 45 },
        { text: "Try to decipher the markings before doing anything.", nextPage: 94 }
    ]
},
82: {
    text: "With the knowledge of the Incantation of Control or the power of the golden disc, you speak the ancient words and focus on reshaping the labyrinth. The walls shift and open up, revealing a hidden chamber that wasn’t there before.",
    choices: [
        { text: "Enter the newly revealed chamber.", nextPage: 95 },
        { text: "Use the incantation to reshape another part of the labyrinth.", nextPage: 96 },
        { text: "Leave the labyrinth, feeling the power is too great to wield.", nextPage: 'end_15' }
    ]
},
83: {
    text: "You hold the gem up to the door, and as the symbols on it glow, the door unlocks with a soft click. Beyond it, you see a long hallway leading deeper into the labyrinth.",
    choices: [
        { text: "Enter the hallway and see where it leads.", nextPage: 97 },
        { text: "Leave the passage now that you’ve opened the door.", nextPage: 67 },
        { text: "Search the area around the door before proceeding.", nextPage: 84 }
    ]
},
84: {
    text: "You search the area around the door and discover a small, hidden keyhole that wasn’t visible before. It looks like it could fit a very specific key.",
    choices: [
        { text: "Use the silver key (if you found it earlier) to unlock the keyhole.", nextPage: 98 },
        { text: "Try to force the door open without the key.", nextPage: 99 },
        { text: "Return to the main passage and leave the hidden area.", nextPage: 67 }
    ]
},
85: {
    text: "Using the power of the Crown of Ages, you command the serpent to stop its attack. Amazingly, the serpent obeys and coils around the chest, guarding it at your will.",
    choices: [
        { text: "Use the serpent to protect the treasure and leave.", nextPage: 43 },
        { text: "Take the treasure with the serpent’s help and leave.", nextPage: 73 },
        { text: "Explore deeper into the labyrinth, feeling more powerful.", nextPage: 100 }
    ]
},
86: {
    text: "Despite the immense power you feel from the Crown of Ages, you decide that it is too dangerous to wield. You leave the room, hoping that you made the right decision.",
    choices: [
        { text: "Exit the labyrinth now that you know its secrets.", nextPage: 'end_16' },
        { text: "Continue exploring, unsure if there are other treasures.", nextPage: 32 },
        { text: "Return to examine the room further before leaving.", nextPage: 87 }
    ]
},
87: {
    text: "You take a moment to examine the room surrounding the crown. As you do, you find an inscription carved into the floor: 'The true power is not in the crown but in the heart.'",
    choices: [
        { text: "Leave the crown behind and explore elsewhere.", nextPage: 32 },
        { text: "Take the crown anyway, despite the warning.", nextPage: 72 },
        { text: "Search for more inscriptions or hidden meanings.", nextPage: 57 }
    ]
},
88: {
    text: "You use the power of the golden disc to summon the Crown of Ages to your location. The crown appears before you, glowing with ancient energy.",
    choices: [
        { text: "Take the crown and use its power.", nextPage: 72 },
        { text: "Leave the crown alone, knowing its danger.", nextPage: 86 },
        { text: "Try to combine the power of the disc and the crown.", nextPage: 85 }
    ]
},
89: {
    text: "You cautiously approach the shadowy figure. It speaks to you in a low voice: 'Only those with the key can leave this place unharmed.'",
    choices: [
        { text: "Ask the figure what key it is referring to.", nextPage: 90 },
        { text: "Leave the room and search for the key.", nextPage: 45 },
        { text: "Attack the figure, suspecting it of treachery.", nextPage: 26 }
    ]
},
90: {
    text: "The figure tells you that the Key of Eternity can unlock any door in the labyrinth, including the one that leads to the final chamber where the Crown of Ages lies. You must find it.",
    choices: [
        { text: "Search the labyrinth for the Key of Eternity.", nextPage: 91 },
        { text: "Ask the figure for more information on the key’s location.", nextPage: 55 },
        { text: "Leave the figure and continue exploring.", nextPage: 45 }
    ]
},
91: {
    text: "You descend the newly revealed staircase and find yourself in a deep, forgotten part of the labyrinth. Strange symbols line the walls, and at the far end, you see a pedestal with a key resting on top.",
    choices: [
        { text: "Take the key, believing it to be the Key of Eternity.", nextPage: 92 },
        { text: "Search the room for traps before taking the key.", nextPage: 61 },
        { text: "Leave the key alone and return to the upper levels.", nextPage: 45 }
    ]
},
92: {
    text: "You search the drained pool and find a hidden compartment at the bottom. Inside is an ancient, rusted key that may unlock one of the labyrinth’s deeper secrets.",
    choices: [
        { text: "Take the key and leave the pool area.", nextPage: 45 },
        { text: "Search the pool for more hidden compartments.", nextPage: 94 },
        { text: "Leave the key behind, unsure of its use.", nextPage: 45 }
    ]
},
93: {
    text: "You pull the second lever, and a portion of the wall shifts to reveal a hidden passage. The air is cold and stale as you step closer to investigate.",
    choices: [
        { text: "Enter the hidden passage.", nextPage: 95 },
        { text: "Ignore the passage and return to the main chamber.", nextPage: 45 },
        { text: "Search the area around the passage for traps.", nextPage: 61 }
    ]
},
94: {
    text: "You study the strange markings around the lever and realize they are a warning: 'Only the patient will pass unharmed.' You must be cautious.",
    choices: [
        { text: "Pull the lever slowly and carefully.", nextPage: 93 },
        { text: "Ignore the warning and pull the lever quickly.", nextPage: 80 },
        { text: "Leave the lever alone and return to the main room.", nextPage: 45 }
    ]
},
95: {
    text: "The hidden passage leads to a chamber filled with ancient relics and inscriptions. In the center is a pedestal with a glowing gemstone. This could be important, but the air feels thick with danger.",
    choices: [
        { text: "Take the gemstone and leave.", nextPage: 96 },
        { text: "Inspect the pedestal for any further inscriptions or mechanisms.", nextPage: 97 },
        { text: "Leave the gemstone and exit the hidden chamber, feeling that something is wrong.", nextPage: 67 }
    ]
},
96: {
    text: "You lift the glowing gemstone from the pedestal, and as soon as it is in your hands, the walls of the labyrinth begin to shift. New paths open, and others close. The labyrinth seems to be reacting to the stone’s removal, and you sense it has great power.",
    choices: [
        { text: "Continue forward through the newly opened path.", nextPage: 98 },
        { text: "Use the gemstone to try and control the labyrinth.", nextPage: 99 },
        { text: "Place the gemstone back on the pedestal, fearing the labyrinth’s response.", nextPage: 67 }
    ]
},
97: {
    text: "Upon closer inspection of the pedestal, you find a hidden inscription that reads: 'The one who holds the light shall guide the way.' The inscription confirms that the gemstone is connected to navigation within the labyrinth.",
    choices: [
        { text: "Take the gemstone and leave.", nextPage: 96 },
        { text: "Leave the gemstone and continue exploring the chamber.", nextPage: 67 },
        { text: "Search the chamber for other hidden mechanisms before leaving.", nextPage: 67 }
    ]
},
98: {
    text: "The path revealed by the labyrinth leads you into a large, brightly lit room filled with mirrors reflecting the light from your gemstone. In the center of the room, you see a statue of a woman holding a crown, and the air is thick with anticipation.",
    choices: [
        { text: "Approach the statue to examine the crown.", nextPage: 100 },
        { text: "Use the gemstone to see if it reveals any hidden passages in the mirrors.", nextPage: 101 },
        { text: "Leave the room, sensing that the crown and mirrors are part of a trap.", nextPage: 86 }
    ]
},
99: {
    text: "You focus your energy on the gemstone, and the labyrinth begins to shift around you. Walls move, floors rise, and the structure bends to your will. However, as you continue reshaping the maze, you sense the power of the labyrinth resisting.",
    choices: [
        { text: "Keep pushing, trying to exert full control over the labyrinth.", nextPage: 102 },
        { text: "Stop and carefully navigate the paths already opened.", nextPage: 67 },
        { text: "Drop the gemstone, realizing the danger of overreaching.", nextPage: 103 }
    ]
},
100: {
    text: "As you approach the statue, you realize that the crown it holds is more than just a decoration—it is the Crown of Ages. The statue’s eyes seem to follow your every move, and you feel a sense of foreboding.",
    choices: [
        { text: "Take the crown from the statue.", nextPage: 104 },
        { text: "Examine the statue closely for any traps or mechanisms.", nextPage: 105 },
        { text: "Leave the crown and exit the room.", nextPage: 86 }
    ]
},
101: {
    text: "You hold the gemstone up, and its light reflects off the mirrors. Suddenly, hidden doorways and passages appear in the reflections that weren’t visible before. The gemstone reveals hidden truths in the labyrinth.",
    choices: [
        { text: "Enter one of the hidden passages revealed in the mirrors.", nextPage: 106 },
        { text: "Keep the gemstone and leave the mirror room to explore further.", nextPage: 67 },
        { text: "Leave the mirror room, avoiding any further interaction with the mirrors.", nextPage: 86 }
    ]
},
102: {
    text: "As you try to force more changes with the gemstone, the labyrinth begins to crack and shift violently. You realize too late that you’ve pushed it too far.",
    choices: [
        { text: "Ending 17: The labyrinth collapses under the strain of your control, and you are buried in the rubble. The labyrinth is destroyed, but you perish along with it.", nextPage: 'end_17' }
    ]
},
103: {
    text: "You drop the gemstone, and the shifting stops immediately. The labyrinth settles back into place, but the path ahead is now closed off. Without the gemstone’s power, you’re trapped in this section of the labyrinth.",
    choices: [
        { text: "Ending 18: Without the gemstone’s power, you are trapped in the labyrinth. Though you avoided the collapse, you now have no way out and must wander the labyrinth until the end of your days.", nextPage: 'end_18' }
    ]
},
104: {
    text: "You take the Crown of Ages from the statue’s hands. As soon as you touch it, the room begins to shake, and the statue’s eyes glow a bright red. The labyrinth itself seems to react violently to your action.",
    choices: [
        { text: "Run from the room with the crown.", nextPage: 107 },
        { text: "Place the crown back on the statue, hoping to calm the labyrinth.", nextPage: 108 },
        { text: "Use the gemstone to try and counteract the effects of the crown’s power.", nextPage: 109 }
    ]
},
105: {
    text: "You closely inspect the statue and find tiny, nearly invisible wires running from the base of the Crown of Ages to the ground. It’s clear this is part of a trap designed to trigger if the crown is removed.",
    choices: [
        { text: "Disarm the trap and take the crown carefully.", nextPage: 104 },
        { text: "Leave the crown where it is, deciding it’s too risky to take.", nextPage: 86 },
        { text: "Try to find another way to deactivate the trap.", nextPage: 109 }
    ]
},
106: {
    text: "You step through one of the hidden passages revealed by the mirrors. The walls are adorned with intricate carvings, and at the end, you find a small chest resting on a pedestal. There is an inscription: 'Only those who see the unseen may claim what lies within.'",
    choices: [
        { text: "Use the gemstone to try and unlock the chest.", nextPage: 110 },
        { text: "Leave the chest, fearing a trap.", nextPage: 67 },
        { text: "Return to the mirror room and explore another hidden passage.", nextPage: 101 }
    ]
},
107: {
    text: "You sprint out of the room with the Crown of Ages in hand, but the entire labyrinth begins to collapse behind you. The floor trembles and cracks, and the walls begin to fall.",
    choices: [
        { text: "Ending 19: You escape the collapsing labyrinth with the Crown of Ages, but the labyrinth is destroyed. Though you possess the crown, its true power remains a mystery as you flee for your life.", nextPage: 'end_19' }
    ]
},
108: {
    text: "You quickly place the crown back on the statue, but the shaking does not stop. The labyrinth is collapsing regardless of your efforts.",
    choices: [
        { text: "Ending 20: The labyrinth collapses around you as you try to fix your mistake. Though you attempted to return the crown, it is too late. You are buried beneath the rubble, and the Crown of Ages is lost once again.", nextPage: 'end_20' }
    ]
},
109: {
    text: "You raise the gemstone, and its light begins to dull the red glow of the statue’s eyes. The shaking ceases, and the trap is deactivated. You now have the Crown of Ages, and the danger seems to have passed.",
    choices: [
        { text: "Take the crown and leave the room.", nextPage: 107 },
        { text: "Leave the crown behind and exit, unsure if you can control its power.", nextPage: 86 },
        { text: "Use the crown and gemstone together to explore deeper into the labyrinth.", nextPage: 100 }
    ]
},
110: {
    text: "The gemstone’s light reveals a hidden lock on the chest. With a soft click, the chest opens, revealing the Key of Eternity, an ancient key that is said to unlock the final chamber of the labyrinth.",
    choices: [
        { text: "Take the key and leave the hidden passage.", nextPage: 67 },
        { text: "Use the key immediately to unlock another door.", nextPage: 111 },
        { text: "Search the area for any other hidden treasures before leaving.", nextPage: 67 }
    ]
},

111: {
    text: "With the Key of Eternity in hand, you approach the final door. The key fits perfectly, and the door swings open to reveal the heart of the labyrinth. In the center of the room, bathed in golden light, sits the Crown of Ages—the true source of power in the labyrinth.",
    choices: [
        { text: "Take the crown, believing it to be the ultimate prize.", nextPage: 104 },
        { text: "Leave the crown behind, knowing that such power is too dangerous.", nextPage: 86 },
        { text: "Use the gemstone to alter the chamber before taking the crown.", nextPage: 100 }
    ]
},

112: {
    text: "You enter the heart of the labyrinth, where the Crown of Ages sits in a golden, glowing chamber. The air is heavy with ancient magic, and you can feel the immense power radiating from the crown. This is what you’ve been searching for, the ultimate prize—but it comes with risks.",
    choices: [
        { text: "Take the crown and use its power.", nextPage: 113 },
        { text: "Leave the crown behind, sensing it may not be worth the danger.", nextPage: 114 },
        { text: "Use the gemstone or the Key of Eternity to investigate further before making a decision.", nextPage: 115 }
    ]
},

113: {
    text: "You take the Crown of Ages and place it on your head. Immediately, you feel a surge of energy coursing through your body. Your vision expands, and time seems to slow around you. You realize that with the crown, you can control not only the labyrinth but also time itself. However, you also sense the weight of eternity pressing down on you—wearing the crown means you will live forever, but at a great cost.",
    choices: [
        { text: "Ending 21: You become the immortal ruler of the labyrinth, but you are trapped within its walls for all time. Though you possess ultimate power, you will never again leave the labyrinth.", nextPage: 'end_21' }
    ]
},

114: {
    text: "You stare at the Crown of Ages, its golden glow tempting you to take it, but you resist. You’ve come this far, but the cost of such power is too high. With a deep breath, you turn away from the crown, understanding that some treasures are not meant to be claimed.",
    choices: [
        { text: "Ending 22: You leave the labyrinth safely, having resisted the temptation of the Crown of Ages. While you don’t possess ultimate power, you walk away with wisdom and the satisfaction of surviving the labyrinth’s trials.", nextPage: 'end_22' }
    ]
},

115: {
    text: "Before making your decision, you hold up the gemstone, and its light reveals hidden markings all over the chamber. These markings tell the story of those who came before you, those who sought the Crown of Ages but were consumed by its power. The Key of Eternity also glows faintly in your hand, as if pointing toward a secret exit hidden behind the walls.",
    choices: [
        { text: "Use the Key of Eternity to open the secret exit and leave the crown behind.", nextPage: 116 },
        { text: "Take the Crown of Ages despite the warnings, believing you can control its power.", nextPage: 113 },
        { text: "Use both the Key of Eternity and the gemstone to attempt to unlock the crown’s true power without being trapped.", nextPage: 117 }
    ]
},

116: {
    text: "Using the Key of Eternity, you find the hidden exit and slip through it. The labyrinth shifts around you, no longer trying to trap you, as if the key allows you safe passage. You leave the Crown of Ages behind, knowing that some things are better left untouched.",
    choices: [
        { text: "Ending 23: You escape the labyrinth with the Key of Eternity and your life intact. While the Crown of Ages remains in the labyrinth, you are free to explore the world, perhaps unlocking new secrets with the key you now possess.", nextPage: 'end_23' }
    ]
},

117: {
    text: "You use both the Key of Eternity and the gemstone, and as you do, the Crown of Ages transforms before your eyes. The crown no longer radiates the ominous, overwhelming power it once did. Instead, it glows with a gentle, balanced light. The markings around the room shift, revealing that only by understanding both the key and the gemstone’s role could the crown’s true nature be unlocked—power that is controlled, not controlling.",
    choices: [
        { text: "Ending 24: You unlock the true potential of the Crown of Ages, a power based on wisdom rather than control. You leave the labyrinth as its first true victor, equipped with knowledge and the tools for further discovery. The labyrinth no longer holds sway over you, and you are free to chart your own destiny.", nextPage: 'end_24' }
    ]
},

  
'end_1': {
    text: "You leave the labyrinth, believing the dangers are too great. The Crown of Ages remains lost, and your adventure ends here.",
    choices: []
},
    'end_2': {
        text: "You fall into the pit, unable to escape. Your adventure ends here.",
        choices: []
    },
    'end_3': {
        text: "You abandon the search and leave the labyrinth behind. Your adventure ends here.",
        choices: []
    },
    'end_4': {
        text: "You fall into the water and are swept away by the current. The labyrinth claims another victim.",
        choices: []
    },
    'end_5': {
        text: "The old man was a phantom, and your attack triggered a curse. You fall unconscious, never to wake again.",
        choices: []
    },
    'end_6': {
    text: "You are pulled beneath the water, never to surface again. The labyrinth claims another adventurer. Your adventure ends here.",
    choices: []
},

'end_7': {
    text: "The labyrinth was a trap, and you are consumed by its magic. You are now part of the labyrinth forever. Your adventure ends here.",
    choices: []
},

'end_8': {
    text: "The flames overwhelm you, and you perish in the heat of the labyrinth. Your adventure ends here.",
    choices: []
},

'end_9': {
    text: "You are bitten by the serpent, and its venom quickly overcomes you. Your adventure ends here.",
    choices: []
},

'end_10': {
    text: "The beast overwhelms you, and the labyrinth claims yet another victim. Your adventure ends here.",
    choices: []
},

'end_11': {
    text: "The creature dissolves in your hands, and the water turns dark. You are pulled under by a powerful current and drown. Your adventure ends here.",
    choices: []
},

'end_12': {
    text: "You escape the labyrinth with the treasure, but its curse follows you wherever you go. Your adventure ends here.",
    choices: []
},

'end_13': {
    text: "The labyrinth seals itself, trapping you inside forever with the Crown of Ages. Your adventure ends here.",
    choices: []
},

'end_14': {
    text: "The pool consumes you, and your body becomes part of the labyrinth. Your adventure ends in darkness.",
    choices: []
},

'end_15': {
    text: "You leave the labyrinth, overwhelmed by the power you hold, and decide it is too dangerous to wield. Your adventure ends here.",
    choices: []
},

'end_16': {
    text: "You leave the Crown of Ages behind, believing some things are best left untouched. Your adventure ends with wisdom, but without the ultimate power.",
    choices: []
},

'end_17': {
    text: "The labyrinth collapses under the strain of your control, and you are buried in the rubble. The labyrinth is destroyed, but you perish along with it.",
    choices: []
},

'end_18': {
    text: "Without the gemstone's power, you are trapped in the labyrinth. Though you avoided the collapse, you now have no way out and must wander the labyrinth until the end of your days.",
    choices: []
},

'end_19': {
    text: "You escape the collapsing labyrinth with the Crown of Ages, but the labyrinth is destroyed. Though you possess the crown, its true power remains a mystery as you flee for your life.",
    choices: []
},

'end_20': {
    text: "The labyrinth collapses around you as you try to fix your mistake. Though you attempted to return the crown, it is too late. You are buried beneath the rubble, and the Crown of Ages is lost once again.",
    choices: []
},

'end_21': {
    text: "You become the immortal ruler of the labyrinth, but you are trapped within its walls for all time. Though you possess ultimate power, you will never again leave the labyrinth.",
    choices: []
},

'end_22': {
    text: "You leave the labyrinth safely, having resisted the temptation of the Crown of Ages. While you don’t possess ultimate power, you walk away with wisdom and the satisfaction of surviving the labyrinth’s trials.",
    choices: []
},

'end_23': {
    text: "You escape the labyrinth with the Key of Eternity and your life intact. While the Crown of Ages remains in the labyrinth, you are free to explore the world, perhaps unlocking new secrets with the key you now possess.",
    choices: []
},

'end_24': {
    text: "You unlock the true potential of the Crown of Ages, a power based on wisdom rather than control. You leave the labyrinth as its first true victor, equipped with knowledge and the tools for further discovery. The labyrinth no longer holds sway over you, and you are free to chart your own destiny.",
    choices: []

}
};

function renderPage(pageNumber) {
    const page = storyPages[pageNumber];
    const storyDiv = document.getElementById("story");
    const choicesUl = document.getElementById("choices");

    // Clear previous content
    storyDiv.innerHTML = "";
    choicesUl.innerHTML = "";

    // Set the story text
    storyDiv.innerHTML = page.text;

    // Create choice buttons
    page.choices.forEach((choice, index) => {
        const choiceLi = document.createElement("li");
        const choiceBtn = document.createElement("button");
        choiceBtn.innerText = choice.text;
        choiceBtn.className = "choice-btn";
        choiceBtn.onclick = () => renderPage(choice.nextPage); // Load the next page

        choiceLi.appendChild(choiceBtn);
        choicesUl.appendChild(choiceLi);
    });
}

// Start the game at page 1
renderPage(1);
