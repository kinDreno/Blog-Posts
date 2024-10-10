import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { Contents, Options } from '../types'; // Ensure the correct path

interface WriteProps {
  setPosts: React.Dispatch<React.SetStateAction<Contents[]>>;
}
const genre: Options[] = [
  { genre: "Crime", value: "crime" },
  { genre: "Environment", value: "environment" }
];

interface WriteProps {
  setPosts: React.Dispatch<React.SetStateAction<Contents[]>>;
}

export default function Write({ setPosts }: WriteProps) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handlePost = () => {
    const newPost = { title, caption, starred: 0, genre: [selectedGenre] };
    setPosts(prevPosts => [...prevPosts, newPost]);
    // Reset input fields after submission
    setTitle("");
    setCaption("");
    setSelectedGenre("");
  };

  return (
    <div className='flex justify-center items-center h-screen w-full overflow-auto'>
      <div className="block">
        <section>
          <h1 className="font-bold">Title:</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-slate-600"
          />
        </section>
        <select name="options" onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Select Genre</option>
          {genre.map((gen, index) => (
            <option key={index} value={gen.value}>{gen.genre}</option>
          ))}
        </select>
        <section>
          <h1 className="font-bold">Description: </h1>
          <TextareaAutosize
            minRows={3}
            maxRows={12}
            placeholder="Type here..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border p-2 resize-y"
          />
        </section>
        <button className="border-2 border-black px-20 py-3 rounded-md" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
}
