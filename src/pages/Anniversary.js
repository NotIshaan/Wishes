import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    src: "/anniversary1.jpg",
    msg: "The day it all began ❤️",
  },
  {
    src: "/anniversary2.jpg",
    msg: "Your endless teamwork and love 💛",
  },
  {
    src: "/anniversary3.jpg",
    msg: "Growing stronger together every year 🌿",
  },
  {
    src: "/anniversary4.jpg",
    msg: "Cheers to many more beautiful years! 🥂",
  },
];

export default function Anniversary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center text-center p-6 font-handwritten">
      <h1 className="text-4xl font-bold text-yellow-700 mb-4">💍 Happy Anniversary Mom & Dad 💍</h1>
      <p className="text-lg text-yellow-900 max-w-2xl mb-8">
        Your love, patience, and teamwork inspire me every day. Here's to many more years together 🥂
      </p>
      <div className="w-full max-w-lg">
        <Slider {...settings}>
          {photos.map(({ src, msg }, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={src}
                alt={`Anniversary photo ${index + 1}`}
                className="rounded-xl shadow-lg mb-4 max-h-96 object-contain"
              />
              <p className="text-lg text-yellow-800">{msg}</p>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}
