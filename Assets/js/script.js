// Select all draggable elements
const draggables = document.querySelectorAll(".draggable");

// Select all dropzone elements
const dropzones = document.querySelectorAll(".dropzone");

// Add event listeners for draggable elements
draggables.forEach(draggable => {
    // When dragging starts, add "dragging" class to the element
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    // When dragging ends, remove "dragging" class from the element
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

// Add event listeners for dropzone elements
dropzones.forEach(dropzone => {
    // When dragging over the dropzone, prevent the default action and add "dragover" class to the element
    dropzone.addEventListener("dragover", e => {
        e.preventDefault();
        dropzone.classList.add("dragover");

    });

    // When dragging leaves the dropzone, remove the "dragover" class from the element
    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    // When dropping on the dropzone, prevent the default action and append the draggable element to the dropzone
    dropzone.addEventListener("drop", e => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        if (draggable.parentNode != dropzone) {
            dropzone.appendChild(draggable);
        }
        dropzone.classList.remove("dragover");
    });
});