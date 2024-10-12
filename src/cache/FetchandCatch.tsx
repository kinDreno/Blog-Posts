import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=10`); // Pagination with limit
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="posts">
      <h1>Posts</h1>
      <button onClick={() => setPage(prevPage => prevPage + 1)} className="border-10 border-slate-700">Next Page</button>
      <button onClick={() => setPage(prevPage => prevPage - 1)} className="mx-12 border-10 border-slate-700">Previous Page</button>
      <ul>
        {loading && <p>Loading...</p>}
        {!loading && posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
