# Ex-08 Design of Interactive Image Gallery
## Date:25/12/2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
<html>
<head>
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>

    <div class="top-banner">Interactive Image Gallery</div>

    <div class="main-content">
        <div class="gallery-container">
            <img id="galleryImage" class="gallery-image" src="image1.jpeg ">
            <div id="caption" class="caption">Built-in Best Friends</div>
            <div class="gallery-buttons">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
            </div>
        </div>
    </div>

    <div class="footer-banner">
       Desinged & Developed by SAHANA G - 25018306 &copy;
    </div>

    <script src="index.js"></script>
</body>
</html>

body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    height: 100;
    background-color: white;
}

.top-banner {
    background-color:beige;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
}

.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-container {
    background: brown;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 480px;
}

.gallery-image {
      width: 200px;
      margin: 10px;
      cursor: pointer;
      transition: transform 0.3s;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}
    .gallery img:hover {
      transform: scale(1.1);
}

.caption {
    margin: 15px 0;
    font-size: 18px;
    font-weight: 500;
}

.gallery-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: ivory;
    font-size: 16px;
}

.footer-banner {
    background-color: beige;
    color: rgb(86, 49, 3);
    text-align: center;
    padding: 10px;
    font-size: 14px;
}

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
```

## OUTPUT:
<img width="1920" height="1080" alt="Screenshot (170)" src="https://github.com/user-attachments/assets/669b33cf-f459-43c4-ac4b-03e08646f385" />
<img width="1920" height="1080" alt="Screenshot (171)" src="https://github.com/user-attachments/assets/a47d25bc-b02e-4300-8229-9aa91d567dac" />
<img width="1920" height="1080" alt="Screenshot (172)" src="https://github.com/user-attachments/assets/c15837bb-79e1-440e-8c75-c863a2a2ab72" />
<img width="1920" height="1080" alt="Screenshot (173)" src="https://github.com/user-attachments/assets/80f6d074-0020-4260-957a-33aa8af5b82b" />
<img width="1920" height="1080" alt="Screenshot (174)" src="https://github.com/user-attachments/assets/36a84789-a0ad-4ed6-97f7-aa90e61d9ae3" />


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
