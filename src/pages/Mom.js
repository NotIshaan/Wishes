import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function Mom() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleSurprise = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowLetter(true);
    }, 3000); // confetti for 3 seconds
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 className="text-4xl font-bold text-pink-600 mb-4">🎂 Happy Birthday Mom! 🎂</h1>

      {!showLetter && (
        <button
          onClick={handleSurprise}
          className="mt-4 px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg text-xl transition"
        >
          🎁 Tap for Surprise
        </button>
      )}

      {showLetter && (
        <div className="bg-white shadow-xl rounded-xl p-6 text-left text-gray-800 font-[cursive] leading-relaxed max-w-xl mt-8 animate-fade-in">
          <p>
            Dear Mom, <br /><br />
            Every smile, every hug, every meal — you’ve given so much love, and I can never thank you enough. You are the most inspiring woman I know, and I’m proud to be your child. 💖<br /><br />
            May this birthday be filled with love, laughter, and peace, just like you fill our lives with joy every day.<br /><br />
            Love always,<br />
            Ishaan
          </p>
        </div>
      )}
    </div>
  );
}
