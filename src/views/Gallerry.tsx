import { GalleryLight } from "@/components/GalleryLight";
import { Slider } from "@/components/PhotoSlide";

export const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-zinc-200 p-5">
      <section id="home" className="text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nasze realizacje
          </h1>
        </div>
      </section>
      <GalleryLight />
    </div>
  );
};
