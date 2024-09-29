// First 6 pages of the game
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

    // You can continue adding pages here, following the same structure for each page.

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
    }
    // Continue adding more endings and pages
};

// Function to render the current page
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
