import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Mom from './pages/Mom';
import Didi from './pages/Didi';
import Anniversary from './pages/Anniversary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mom" element={<Mom />} />
        <Route path="/didi" element={<Didi />} />
        <Route path="/anniversary" element={<Anniversary />} />
      </Routes>
    </Router>
  );
}

export default App;
