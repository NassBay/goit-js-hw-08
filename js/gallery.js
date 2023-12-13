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
    data-source="${element.original}"
    />
    </a>
    </li>`
    )
    .join("");
}

const listMarkup = createImageList(galleryItems);

list.innerHTML = listMarkup;


  let currentLightboxInstance = null;

  list.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
      return;
    }

    const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" alt="${e.target.alt}"/>`,
      {
        onShow: () => {
          document.addEventListener("keyup", handleKeyUp);
        },
        onClose: () => {
          document.removeEventListener("keyup", handleKeyUp);
        },
      }
    );

    instance.show();
    currentLightboxInstance = instance;
  });

  function handleKeyUp(e) {
    if (e.key === "Escape" && currentLightboxInstance !== null) {
      currentLightboxInstance.close();
      currentLightboxInstance = null;
    }
};

