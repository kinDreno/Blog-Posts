import Nav from './A. Components/Nav';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './AC. Routes/Routing';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only render Nav if the current route is not the 404 page */}
      {location.pathname !== "*" && <Nav />}
      
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="*" element={<h1>YOU WENT TO THE WRONG WEBPAGE!! 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
