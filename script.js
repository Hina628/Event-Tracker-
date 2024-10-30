// Click event for button
document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("clickOutput").innerText = "Button clicked!";
});

// Mouse move event
document.getElementById("mouseArea").addEventListener("mousemove", function(event) {
    document.getElementById("mouseOutput").innerText = `Mouse X: ${event.offsetX}, Y: ${event.offsetY}`;
});

// Key press event
document.getElementById("keyInput").addEventListener("keydown", function(event) {
    document.getElementById("keyOutput").innerText = `Key pressed: ${event.key}`;
});

// Focus and blur events
const focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", function() {
    document.getElementById("focusOutput").innerText = "Input is focused";
});
focusInput.addEventListener("blur", function() {
    document.getElementById("focusOutput").innerText = "Input lost focus";
});

// Window resize event
window.addEventListener("resize", function() {
    document.getElementById("resizeOutput").innerText = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
});

// Touch event (for touch devices)
document.getElementById("touchArea").addEventListener("touchstart", function() {
    document.getElementById("touchOutput").innerText = "Touched!";
});

// Form submit event
document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    document.getElementById("formOutput").innerText = "Form submitted!";
});

// Drag and drop events
const dragItem = document.getElementById("dragItem");
const dropArea = document.getElementById("dropArea");

dragItem.addEventListener("dragstart", function() {
    document.getElementById("dragOutput").innerText = "Dragging started";
});

dropArea.addEventListener("dragover", function(event) {
    event.preventDefault();
    document.getElementById("dragOutput").innerText = "Dragging over drop area";
});

dropArea.addEventListener("drop", function() {
    document.getElementById("dragOutput").innerText = "Item dropped!";
});

// Media events
const mediaVideo = document.getElementById("mediaVideo");

mediaVideo.addEventListener("play", function() {
    document.getElementById("mediaOutput").innerText = "Video is playing";
});

mediaVideo.addEventListener("pause", function() {
    document.getElementById("mediaOutput").innerText = "Video is paused";
});

mediaVideo.addEventListener("ended", function() {
    document.getElementById("mediaOutput").innerText = "Video ended";
});
