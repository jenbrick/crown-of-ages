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
    // Additional pages go here
    // Example for ending:
    'end_1': {
        text: "You leave the labyrinth, deciding the dangers are too great. Your adventure ends here, but the Crown of Ages remains lost to the world forever.",
        choices: []
    },
    // Additional endings (ending pages like 'end_2', 'end_3', etc.) will go here
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
