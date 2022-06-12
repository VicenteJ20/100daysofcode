const img_1 = {
    "id": 1,
    Url_img: "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
}

const img_2 = {
    "id": 2,
    Url_img: "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
}

const images = [img_1, img_2];
const root = document.getElementById("root");

const image_change = document.getElementById("sub_img")

cont = 0
for (let i = 0; i < images.length; i++){

    image_change.src = images[i].Url_img;
    root.appendChild(image_change);
};