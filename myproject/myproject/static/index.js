const gallery = [
    { src: "image1.jpeg", caption: "Built-in Best Friends!" },
    { src: "image2.jpeg", caption: "Disorder since birth!" },
    { src: "image3.jpeg", caption: "Random from drafts!" },
    { src: "image4.jpeg", caption: "Goofy Gooses!" },
     { src: "image5.jpeg", caption: "All my favs!" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}

