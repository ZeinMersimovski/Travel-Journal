function toggleForm() {
    const entryForm = document.getElementById("entryForm");
    entryForm.classList.toggle("hidden");
}

function addEntry() {
    const locationInput = document.getElementById("locationInput");
    const dateInput = document.getElementById("dateInput");
    const storyInput = document.getElementById("storyInput");

    const entriesContainer = document.getElementById("entries");

    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = locationInput.value;

    const dateParagraph = document.createElement("p");
    dateParagraph.textContent = `Date: ${formatDate(dateInput.value)}`;

    const storyParagraph = document.createElement("p");
    storyParagraph.textContent = storyInput.value;

    entryDiv.appendChild(locationHeader);
    entryDiv.appendChild(dateParagraph);
    entryDiv.appendChild(storyParagraph);

    entriesContainer.appendChild(entryDiv);

    // Clear the form inputs
    locationInput.value = "";
    dateInput.value = "";
    storyInput.value = "";

    // Hide the form
    toggleForm();
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
