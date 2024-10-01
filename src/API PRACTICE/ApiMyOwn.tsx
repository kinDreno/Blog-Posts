import { useEffect, useState } from "react";

const MY_API = 'https://jsonplaceholder.typicode.com/'; // API we are going to use

// Start of the function
function App() {
const [posts, setPosts] = useState<Posts[]>([]) //This is where we collect the posts data
type Posts = {
  id: number;
  name: string;
  email: string;  //Types of posts that is connected to the API
  body: string;
}

//Use  useEffect() to fetch api.
useEffect(() => {
  const fetchApi = async () => { // when using an API use an async function 
    const response = await fetch(`${MY_API}posts?_limit=10`)   // Uses fetch to send an HTTP GET request to the API to retrieve the first 10 posts
    const data: Posts[] = await response.json()                // Awaits the response, parses the JSON, and stores it in data.
    
    setPosts(data)          // Updates the posts state by calling setPosts(data), which re-renders the component with the new data.
  }
  fetchApi()
}, [])

return(
  <>
  {posts.map((post) => { // mapping through the data
    return <p key={post.id}>{post.email} {post.body}</p>
  })}
  </>
)
}

export default App;