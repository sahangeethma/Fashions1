// script.js

function changeGallery(galleryNumber) {
    const serviceGallery = document.getElementById('service-gallery');

    // Define gallery images for each galleryNumber
    const galleries = {
        1: [
            'gallery1-1.jpg',
            'gallery1-2.jpg',
            'gallery1-3.jpg',
            'gallery1-4.jpg',
        ],
        2: [
            'gallery2-1.jpg',
            'gallery2-2.jpg',
            'gallery2-3.jpg',
            'gallery2-4.jpg',
        ],
        3: [
            'gallery3-1.jpg',
            'gallery3-2.jpg',
            'gallery3-3.jpg',
            'gallery3-4.jpg',
        ]
    };

    // Clear current gallery
    serviceGallery.innerHTML = '';

    // Add new images based on the clicked gallery
    galleries[galleryNumber].forEach(imageSrc => {
        const div = document.createElement('div');
        div.className = 'image-item';

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = '';

        div.appendChild(img);
        serviceGallery.appendChild(div);
    });
}
