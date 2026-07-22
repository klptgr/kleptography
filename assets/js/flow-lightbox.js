import PhotoSwipeLightbox from "js/photoswipe/photoswipe-lightbox.esm.js";
import PhotoSwipe from "js/photoswipe/photoswipe.esm.js";
import PhotoSwipeDynamicCaption from "js/photoswipe/photoswipe-dynamic-caption-plugin.esm.min.js";

const flowGallery = document.getElementById("flow-gallery");

if (flowGallery) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: flowGallery,
    children: ".gallery-item",
    showHideAnimationType: "zoom",
    bgOpacity: 1,
    pswpModule: PhotoSwipe,
    imageClickAction: "close",
  });

  new PhotoSwipeDynamicCaption(lightbox, {
    mobileLayoutBreakpoint: 700,
    type: "auto",
    mobileCaptionOverlapRatio: 1,
  });

  lightbox.init();
}
