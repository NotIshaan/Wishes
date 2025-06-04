import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 text-center p-4">
      <h1 className="text-5xl font-bold text-pink-700 mb-4">💝 Special Day for Special People 💝</h1>
      <p className="text-lg text-gray-600 mb-8">Click below to view each surprise!</p>

      <div className="flex flex-col gap-4">
        <Link to="/mom" className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-6 rounded-xl shadow-md text-xl transition">🎂 Wish for Mom</Link>
        <Link to="/anniversary" className="bg-yellow-300 hover:bg-yellow-400 text-white py-2 px-6 rounded-xl shadow-md text-xl transition">💍 Parents' Anniversary</Link>
        <Link to="/didi" className="bg-purple-300 hover:bg-purple-400 text-white py-2 px-6 rounded-xl shadow-md text-xl transition">🎉 Wish for Didi</Link>
      </div>
    </div>
  );
}
