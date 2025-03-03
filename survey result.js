// Function to Open Image Preview
function openPreview(image) {
    const modal = document.getElementById("image-modal");
    const previewImg = document.getElementById("preview-img");

    previewImg.src = image.src;
    modal.style.display = "flex";
}

// Function to Close Preview
function closePreview() {
    document.getElementById("image-modal").style.display = "none";
}

// Close modal if clicked outside image
window.onclick = function(event) {
    const modal = document.getElementById("image-modal");
    if (event.target === modal) {
        closePreview();
    }
};
