import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        {/* Set home route as default */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  </>
);

export default App;
