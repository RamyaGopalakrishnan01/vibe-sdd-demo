function getRegistrations() {
    const data = localStorage.getItem("registrations");
    return data ? JSON.parse(data) : [];
}

function saveRegistrations(registrations) {
    localStorage.setItem("registrations", JSON.stringify(registrations));
}

function addRegistration(student) {
    const registrations = getRegistrations();
    registrations.push(student);
    saveRegistrations(registrations);
}

function removeRegistration(id) {
    let registrations = getRegistrations();
    registrations = registrations.filter(student => student.id !== id);
    saveRegistrations(registrations);
}
