import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

function createImageList(arr) {
  return arr
    .map(
      (element) => `<li class=gallery__item>
    <a class="gallery__link" href="${element.preview}">
    <img
    class="gallery__image"
    src="${element.original}"
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
  let currentLightboxInstance = null;

  list.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
      return;
    }

    const instance = basicLightbox.create(
      `<img src="${e.target.src}" alt="${e.target.alt}"/>`
    );

    instance.show();
    currentLightboxInstance = instance;

    document.addEventListener("keyup", handleKeyUp);
  });

  function handleKeyUp(e) {
    if (e.key === "Escape" && currentLightboxInstance !== null) {
      currentLightboxInstance.close();
      currentLightboxInstance = null;

      document.removeEventListener("keyup", handleKeyUp);
    }
  }
});
