function registerStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const event = document.getElementById("event").value;

    if (!name || !roll || !event) {
        alert("All fields are required!");
        return;
    }

    const student = {
        id: Date.now(),
        name: name,
        roll: roll,
        event: event
    };

    addRegistration(student);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("event").value = "";

    displayRegistrations();
}

function displayRegistrations() {
    const list = document.getElementById("registrationList");
    list.innerHTML = "";

    const registrations = getRegistrations();

    registrations.forEach(student => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${student.name} | ${student.roll} | ${student.event}
            <button onclick="cancelRegistration(${student.id})">Cancel</button>
        `;

        list.appendChild(li);
    });
}

function cancelRegistration(id) {
    removeRegistration(id);
    displayRegistrations();
}

window.onload = displayRegistrations;

