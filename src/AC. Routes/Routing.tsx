import UI from "../AComponents/UI";
import Write from "../AComponents/Write";
import { Routes, Route, Link } from "react-router-dom";
import { Contents } from '../types'; 

interface MainProps {
  posts: Contents[];
  setPosts: React.Dispatch<React.SetStateAction<Contents[]>>;
}

export const Main: React.FC<MainProps> = ({ posts, setPosts }) => {
  return (
    <Routes>
      <Route index element={<UI posts={posts} setPosts={setPosts} />} />
      <Route path="write" element={<Write setPosts={setPosts} />} />
      <Route path="*" element={<ErrorHandle />} />
    </Routes>
  );
};


export function ErrorHandle() {
    console.log(location.pathname)
  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center z-20 bg-black">
        <section className="flex items-center space-y-6">
          <article className=" space-y-4">
            <h1 className="font-bold text-center text-white text-4xl">
              Error <span className="text-red-700">404! </span>Page Cannot be
              found.
            </h1>
            <p className="text-white font-bold text-center">    
              Tap here to go to the main page.{" "}
                <Link className="py-2 px-3 bg-red-800 rounded-md" to={"/"}>Here</Link>              
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
