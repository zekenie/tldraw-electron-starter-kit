import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import TLDrawComponent from './components/TLDrawComponent';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TLDrawComponent />} />
      </Routes>
    </Router>
  );
}
