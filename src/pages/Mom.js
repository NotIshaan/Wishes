import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function Mom() {
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
    '/mom1.jpg',
    '/mom2.jpg',
    '/mom3.jpg',
  ];

  const positions = [
    { top: '10%', left: '5%', rotate: '-4deg' },
    { top: '10%', right: '5%', rotate: '6deg' },
    { bottom: '10%', right: '10%', rotate: '2deg' }
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 className="text-4xl font-bold text-pink-600 mb-4">🎂 Happy Birthday Mummy! 🎂</h1>

      {!showLetter && (
        <button
          onClick={handleSurprise}
          className="mt-4 px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg text-xl transition"
        >
          🎁 Tap for Surprise
        </button>
      )}

      {showLetter && (
        <>
          <div className="bg-white shadow-xl rounded-xl p-6 text-left text-gray-800 font-[cursive] leading-relaxed max-w-xl mt-8 animate-fade-in">
            <p>
              Dear Mom, <br /><br />
              Happy Birthday! You're the most caring, selfless, and beautiful soul I know. You've always put everyone else first, and I just want to say thank you for being the heart of everything good in my life. <br /><br />
              I really miss bothering you in the kitchen, just to see what you're cooking. It's those everyday moments I didn't realise I'd miss so much. <br /><br />
              I hope this birthday brings you so much happiness. You deserve everything you've ever wished for and more. I wish you peace, laughter, good health, and all the love in the world. <br /><br />
              Thank you for everything, Mom. I love you more than words can say. <br /><br />
              Love,<br />
              Ishaan
            </p>
          </div>

          {/* Random positioned bouncy photos */}
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Mom photo ${i + 1}`}
              className={`
                absolute w-80 h-80 object-cover rounded-xl shadow-md transform transition-all duration-700 ease-out
                ${showPhotos ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `}
              style={{
                ...positions[i],
                transform: showPhotos ? `rotate(${positions[i].rotate}) scale(1)` : 'rotate(0deg) scale(0)',
                transitionDelay: `${i * 200}ms`,
                animation: showPhotos ? `bounce 0.8s ease-out ${i * 200}ms` : 'none'
              }}
            />
          ))}
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