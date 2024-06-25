document.addEventListener('DOMContentLoaded', () => {
   const gallery = document.querySelector('.gallery');
   const galleryItems = document.querySelectorAll('.gallery-item');
   const prevButton = document.querySelector('.prev');
   const nextButton = document.querySelector('.next');

   let index = 0;

   function updateGallery() {
       const totalWidth = Array.from(galleryItems)
           .slice(0, index)
           .reduce((acc, item) => acc + item.clientWidth, 0);
       gallery.style.transform = `translateX(${-totalWidth}px)`;
   }

   prevButton.addEventListener('click', () => {
       index = (index > 0) ? index - 1 : galleryItems.length - 1;
       updateGallery();
   });

   nextButton.addEventListener('click', () => {
       index = (index < galleryItems.length - 1) ? index + 1 : 0;
       updateGallery();
   });
});









document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');


    let index = 0;

    function updateGallery() {
        const totalWidth = Array.from(galleryItems)
            .slice(0, index)
            .reduce((acc, item) => acc + item.clientWidth, 0);
        gallery.style.transform = `translateX(${-totalWidth}px)`;
    }





    