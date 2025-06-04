import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    src: "/anniversary1.jpg",
    msg: "I am grateful to have you both as my parents.",
  },
  {
    src: "/anniversary2.jpg",
    msg: "I know tough times will pass",
  },
  {
    src: "/anniversary3.jpg",
    msg: "As long as you are together, everything will be alright.",
  },
  {
    src: "/anniversary4.jpg",
    msg: "Asech hasat rahava 😁",
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
        Your love, patience, and teamwork inspire me every day. Thank you for being the best parents and role models. May your love continue to grow stronger with each passing year. 🥰
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
