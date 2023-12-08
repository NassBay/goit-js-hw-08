import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

function createImageList(arr) {
  return arr
    .map(
      (element) => `<li class=gallery__item>
    <a class="gallery__link" href="${element.original}">
    <img
    class="gallery__image"
    src="${element.preview}"
    alt="${element.description}"
    />
    </a>
    </li>`
    )
    .join("");
}

const listMarkup = createImageList(galleryItems);

list.innerHTML = listMarkup;

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
});
