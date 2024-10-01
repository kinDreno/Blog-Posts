import { useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import Content from "./Content";

export default function UI() {
  const [value, setValue] = useState<string>(""); // State to store input value
  const [isFocused, setIsFocused] = useState(false); // State to track if input is focused
  const inputRef = useRef<HTMLInputElement>(null);

  const SearchForm: React.ReactNode = (
    <div className="w-[40em] h-[15em] flex items-center space-x-2">
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)} // Update value state
        onFocus={() => setIsFocused(true)} // Set isFocused to true on focus
        onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
        placeholder="Search Here!"
        className="h-[3em] w-[40em] border-b-2 mt-10 border-solid border-slate-700 rounded-md"
        type="text"
      />
      <button className="p-2 mt-10" id="submit">
        <FaSearchengin size={"26px"} />
      </button>
    </div>
  );

  return (
    <>
      <main className="min-h-screen w-screen block">
        <div className="flex justify-center">
          {SearchForm}
          {/* Display message if input is focused */}
          <p
            className={`absolute top-[11em] transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            You are searching {value}
          </p>
        </div>
        {/* Main Section OF THE SHIT */}
        <section className="w-full h-full flex justify-center ">
          <article className="w-[80%] flex border-2 border-slate-800 rounded-lg">
            <section className="w-full grow"></section>
            <section className="w-[30em] border-l-2 border-slate-800 block">

          <Content /> {/* THIS IS THE CONTENT IN THE UI ON THE LEFT SIDE */}
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
