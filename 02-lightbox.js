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

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});
