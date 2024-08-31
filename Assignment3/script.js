let goals = [];

function addGoals() {
    const goalName = document.getElementById('goalName');
    const goal = goalName.value;
    if (goals) {
        goals.push(goal);
        goalName.value = '';
        displayGoals();
    }
}

function sortGoals() {
    goals.sort();
    displayGoals();
}

function displayGoals() {
    const goalList = document.getElementById('goalList');
    goalList.innerHTML = '';
    goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        goalList.appendChild(li);
    });
}

