document.addEventListener("DOMContentLoaded", function () {
    const loadButton = document.getElementById("load");
    loadButton.addEventListener("click", loadConnection);
});

document.addEventListener("DOMContentLoaded", function () {
    const loadButton = document.getElementById("create");
    loadButton.addEventListener("click", createCustomConnections);
});

function createCustomConnections() {
    const baseUrl = window.location.origin;
    const link = `https://kjetilfr.github.io/CustomConnections/create.html`;
    window.location.href = link;
}
  
function loadConnection() {
    const connectionsBox = document.getElementById("ConnectionsBox");
    const createButton = document.getElementById("create");
    const loadButton = document.getElementById("load");
  
    // Remove the buttons
    createButton.remove();
    loadButton.remove();
  
    // Create and append the input field
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter code";
    inputField.id = "textInput";
    connectionsBox.appendChild(inputField);
  
    // Create and append the "Submit" button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = handleTextSubmit;
    connectionsBox.appendChild(submitButton);
}
  
function handleTextSubmit() {
    const inputField = document.getElementById("textInput").value;
    const baseUrl = "https://kjetilfr.github.io/CustomConnections/";
    const link = `${baseUrl}receive.html?key=${inputField}`;
    window.location.href = link;
}