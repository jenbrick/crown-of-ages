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
    }
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
