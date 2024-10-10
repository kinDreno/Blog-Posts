import { useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Content from "./Content";
import { Contents } from "../types";

interface UIProps {
  posts: Contents[];
  setPosts: React.Dispatch<React.SetStateAction<Contents[]>>;
}

export default function UI({ posts, setPosts }: UIProps) {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const SearchForm: React.ReactNode = (
    <div className="w-[40em] h-[15em] flex items-center space-x-2">
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search Here!"
        className="h-[3em] w-[40em] border-b-2 mt-10 border-solid border-slate-700 rounded-md"
        type="text"
      />
      <button className="p-2 mt-10" id="submit">
        <FaSearchengin size={"26px"} />
      </button>
    </div>
  );

  function starThis(index: number) {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        index === i ? { ...post, starred: post.starred === 0 ? 1 : 0 } : post
      )
    );
  }

  return (
    <>
      <main className="min-h-screen w-screen block">
        <div className="flex justify-center">
          {SearchForm}
          <p
            className={`absolute top-[13em] transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            You are searching {value}
          </p>
        </div>
        <section className="w-full h-full flex justify-center ">
          <article className="w-[80%] flex border-2 border-slate-800 rounded-lg">
            <section className="w-full grow">
              <section className="block">
                {posts.map((post, index) => (
                  <article key={index} className="w-full h-[13em] border-b-2 border-black">
                    <h1>{post.title}</h1>
                    <p>{post.caption}</p>
                    <div>
                      {Array.isArray(post.genre) && post.genre.map((g, genreIndex) => (
                        <span key={genreIndex} className="inline-block mr-2 px-2 py-1 bg-gray-200 rounded">
                          {g}
                        </span>
                      ))}
                    </div>
                    <button onClick={() => starThis(index)}>
                      <CiStar />{post.starred}
                    </button>
                  </article>
                ))}
              </section>
            </section>
            <section className="w-[30em] border-l-2 border-slate-800 block">
              <Content />
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
