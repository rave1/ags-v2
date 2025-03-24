import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import intro from "@/assets/intro.webp";

export const Slider = () => {
  return (
    <div className="grid justify-items-center">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          gap: "1rem",
          width: 1000,
        }}
      >
        <SplideSlide>
          <img src={intro} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={intro} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};
