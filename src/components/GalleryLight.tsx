import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import intro from "@/assets/intro.webp";
import technika from "@/assets/technika.webp";

const images = [
  { src: intro, thumb: intro, alt: "Image 1" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
  { src: technika, thumb: technika, alt: "Image 2" },
];

export const GalleryLight = () => {
  return (
    <LightGallery speed={500} mode="lg-fade" selector=".gallery-item">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
        {images.map((img, index) => (
          <a
            key={index}
            href={img.src}
            className="gallery-item"
            data-src={img.src}
          >
            <img src={img.thumb} alt={img.alt} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </LightGallery>
  );
};
