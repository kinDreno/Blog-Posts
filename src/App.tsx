import Nav from './AComponents/Nav';
import { Routes, Route, useLocation, useMatch } from 'react-router-dom';
import { Main, ErrorHandle } from './AC. Routes/Routing';
import { useState } from 'react';
import { Contents } from './types'; 

function App() {
  const location = useLocation();
  const isNotFound = useMatch('/404');
  const [posts, setPosts] = useState<Contents[]>([]); // State to hold posts

  console.log("Current path:", location.pathname);

  return (
    <>
      {!isNotFound && <Nav />}
      <Routes>
        <Route path="/*" element={<Main posts={posts} setPosts={setPosts} />} />
        <Route path="/404" element={<ErrorHandle />} />
        <Route path="*" element={<ErrorHandle />} />
      </Routes>
    </>
  );
}

export default App;
