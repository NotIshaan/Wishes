import { useState } from "react";
import Confetti from "react-confetti";

export default function Didi() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleSurprise = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowLetter(true);
    }, 3000); // Show confetti for 3 seconds
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center text-center p-6">
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 className="text-4xl font-bold text-purple-700 mb-4">🎂 Happy Birthday Didi! 🎂</h1>

      {!showLetter ? (
        <>
          <img
            src="https://www.svgrepo.com/show/52349/gift.svg"
            alt="Birthday gift"
            className="w-52 mb-6"
          />
          <button
            onClick={handleSurprise}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            🎁 Press here for your surprise!
          </button>
        </>
      ) : (
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl mt-4 animate-fade-in">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dear Didi, <br /><br />
            You’ve been my mentor, partner in crime, and the best listener in the world.
            No matter what life throws at me, I always know you’re one call away. 💜
            <br /><br />
            Wishing you a year full of laughter, travel, food, and dreams come true. 🥰
            <br /><br />
            Love you loads,<br />
            Ishaan 💖
          </p>
        </div>
      )}
    </div>
  );
}
