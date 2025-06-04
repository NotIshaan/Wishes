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
        <div className="bg-white shadow-xl rounded-xl p-6 text-left text-gray-800 font-[cursive] leading-relaxed max-w-xl mt-8 animate-fade-in">
          <p>
           Dear Mom, <br /><br />
          Happy Birthday! You’re the most caring, selfless, and beautiful soul I know. You’ve always put everyone else first, and I just want to say thank you for being the heart of everything good in my life. <br /><br />
  I really miss bothering you in the kitchen, just to see what you’re cooking. It’s those everyday moments I didn’t realise I’d miss so much. <br /><br />
  I hope this birthday brings you so much happiness. You deserve everything you’ve ever wished for and more. I wish you peace, laughter, good health, and all the love in the world. <br /><br />
  Thank you for everything, Mom. I love you more than words can say. <br /><br />
  Love,<br />
  Ishaan
</p>
        </div>
      )}
    </div>
  );
}
