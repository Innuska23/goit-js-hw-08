// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarking = marking(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarking);
let lightbox = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

function marking(createGallery) {
    return createGallery
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`;
        })
        .join("");
}