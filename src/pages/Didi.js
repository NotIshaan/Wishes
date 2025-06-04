import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function Didi() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleSurprise = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowLetter(true);
      setTimeout(() => setShowPhotos(true), 300);
    }, 3000);
  };

  const photos = [
    '/didi1.jpg',
    '/didi2.jpg',
    '/didi3.jpg',
    '/didi4.jpg',
  ];

  const positions = [
    { top: '0%', left: '5%', rotate: '-4deg' },
    { top: '5%', right: '5%', rotate: '6deg' },
    { bottom: '0%', right: '5%', rotate: '2deg' },
    { bottom: '5%', left: '5%', rotate: '-1deg' }
  ];

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 className="text-4xl font-bold text-purple-700 mb-4">🎂 Happy Birthday Didi! 🎂</h1>

      {!showLetter && (
        <button
          onClick={handleSurprise}
          className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg text-xl transition"
        >
          🎁 Tap for Surprise
        </button>
      )}

      {showLetter && (
        <>
          <div className="bg-white shadow-xl rounded-xl p-6 text-left text-gray-800 font-[cursive] leading-relaxed max-w-xl mt-8 animate-fade-in z-10 relative">
            <p>
              Dear Didi, <br /><br />
              Thank you for always being there for me and Puru. Whether it's helping us out or just being around, you’ve always had our back, and it means a lot. <br /><br />
              You're honestly the coolest sister ever, and we feel lucky to have you. I hope you get everything you wish for. May God bless you with happiness, good health, and lots of peace. <br /><br />
              Love,<br />
              Ishaan 💖
            </p>

            {/* Photo Container */}
            <div className="relative w-full max-w-5xl h-[400px] mt-10 mx-auto">
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Didi photo ${i + 1}`}
                  className={`
                    absolute w-48 md:w-64 lg:w-80 h-auto object-cover rounded-xl shadow-md
                    transform transition-all duration-700 ease-out z-20
                    ${showPhotos ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  `}
                  style={{
                    transform: showPhotos
                      ? `rotate(${positions[i].rotate}) scale(1)`
                      : 'rotate(0deg) scale(0)',
                    transitionDelay: `${i * 200}ms`,
                    ...positions[i],
                  }}
                />
              ))}
            </div>

            {/* Optional laughing emoji */}
            {showPhotos && (
              <div
                className="absolute text-6xl z-30 transition-all duration-700 ease-out"
                style={{
                  top: '10%',
                  right: '30%',
                  transform: 'rotate(-15deg)',
                  transitionDelay: '800ms',
                }}
              >
                😂
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
