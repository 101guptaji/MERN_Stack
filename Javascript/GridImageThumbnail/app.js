// Create a grid of image thumbnails, where each thumbnail is clickable and expands to display a full-size image. The expanded image should fill the entire grid, with the other images sliding out of view.

const items = document.querySelectorAll('.grid-item ');
const thumbnails = document.querySelectorAll('.thumbnail');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        for (let j = 0; j < thumbnails.length; j++) {
            thumbnails[j].style.cssText = "width: 70%;height: 70%";
        }
        thumbnails[i].style.cssText = "width: 100%;height: 100%;";
    });
}