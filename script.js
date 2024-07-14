// JavaScript in script.js

document.addEventListener('DOMContentLoaded', function() {
    // Set the existing image source once the DOM is loaded
    const existingImage = document.getElementById('existingImage');
    existingImage.style.display = 'block'; // Ensure the existing image is displayed initially

    // Add click event listener to existingImage
    existingImage.addEventListener('click', function() {
        const uploadImage = document.getElementById('uploadImage');
        uploadImage.click(); // Trigger click on uploadImage input
    });
});

function previewAndGenerate(event) {
    const uploadImage = event.target.files[0];
    if (!uploadImage) {
        alert('Please upload an image.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const userImage = new Image();
        userImage.crossOrigin = 'anonymous'; // Enable CORS
        userImage.onload = function() {
            const preExistingImage = new Image();
            preExistingImage.crossOrigin = 'anonymous'; // Enable CORS
            preExistingImage.src = '/photos/generator.jpg'; // Add the path to your existing image
            preExistingImage.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = 500;
                canvas.height = 500;
                const context = canvas.getContext('2d');

                // Draw the pre-existing image first
                context.drawImage(preExistingImage, 0, 0, 500, 500);

                // Draw the uploaded image on top
                context.drawImage(userImage, 0, 0, 500, 500);

                // Hide the existing image
                const existingImage = document.getElementById('existingImage');
                existingImage.style.display = 'none';

                // Display the result image
                const resultImage = document.getElementById('resultImage');
                resultImage.src = canvas.toDataURL('image/png');
                resultImage.style.display = 'block';

                // Display the download link
                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.style.display = 'block';

                // Show the generate button
                const generateButton = document.getElementById('generateButton');
                generateButton.style.display = 'none';
            };
            preExistingImage.onerror = function() {
                alert('Failed to load pre-existing image. Please check the image URL and CORS settings.');
            };
        };
        userImage.src = event.target.result;
    };
    reader.readAsDataURL(uploadImage);
}

