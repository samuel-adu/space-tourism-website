import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Destination, Crew, Technology } from './components/routes';
import './App.css';

function App() {
  return (
    <>
      <header className="nav__container">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />}></Route>
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
