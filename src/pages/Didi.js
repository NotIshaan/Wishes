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
      // delay a bit before popping photos
      setTimeout(() => setShowPhotos(true), 300);
    }, 3000); // confetti for 3 seconds
  };

  const photos = [
    '/didi1.jpg',
    '/didi2.jpg',
    '/didi3.jpg',
    '/didi4.jpg',
  ];

  const positions = [
    { top: '10%', left: '5%', rotate: '-4deg' },
    { top: '10%', right: '5%', rotate: '6deg' },
    { bottom: '10%', right: '10%', rotate: '2deg' },
    { bottom: '10%', left: '10%', rotate: '-deg' }
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
          <div className="bg-white shadow-xl rounded-xl p-6 text-left text-gray-800 font-[cursive] leading-relaxed max-w-xl mt-8 animate-fade-in">
  <p>
    Dear Didi, <br /><br />
    Thank you for always being there for me and Puru. Whether it's helping us out or just being around, you’ve always had our back, and it means a lot. <br /><br />
    You're honestly the coolest sister ever, and we feel lucky to have you. I you get you everything you wish for. May God bless you with happiness, good health, and lots of peace. <br /><br />
    Love,<br />
    Ishaan 💖
  </p>
</div>


          {/* Clean positioned photos */}
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Didi photo ${i + 1}`}
              className={`
                fixed w-80 h-80 object-cover rounded-xl shadow-md transform transition-all duration-700 ease-out z-20
                ${showPhotos ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `}
              style={{
                ...positions[i],
                transform: showPhotos ? `rotate(${positions[i].rotate}) scale(1)` : 'rotate(0deg) scale(0)',
                transitionDelay: `${i * 200}ms`,
              }}
            />
          ))}
          
          {/* Laughing emoji for didi2 (funny image) */}
          {showPhotos && (
            <div 
              className="fixed text-6xl z-30 transition-all duration-700 ease-out"
              style={{
                top: '15%',
                right: '25%',
                transform: 'rotate(-15deg)',
                transitionDelay: '800ms',
              }}
            >
              😂
            </div>
          )}
        </>
      )}

      <style jsx>{`
        @keyframes bounce {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(${positions[0]?.rotate || '0deg'}); }
          70% { transform: scale(0.9) rotate(${positions[0]?.rotate || '0deg'}); }
          100% { transform: scale(1) rotate(${positions[0]?.rotate || '0deg'}); }
        }
      `}</style>
    </div>
  );
}