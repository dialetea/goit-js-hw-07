import { galleryItems } from './gallery-items.js';

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector('.gallery');

  function renderGalleryItems() {
    gallery.innerHTML = galleryItems.map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
      </li>
    `).join('');
  }

  renderGalleryItems();

  gallery.addEventListener('click', function(event) {
    event.preventDefault();

    const clickedImage = event.target.closest('.gallery__image');

    if (clickedImage) {
      const largeImageUrl = clickedImage.dataset.source;

      const lightbox = basicLightbox.create(`
        <img src="${largeImageUrl}" alt="${clickedImage.alt}">
      `);

      lightbox.show();
    }
  });
});
