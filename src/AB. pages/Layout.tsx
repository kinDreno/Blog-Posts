import {Link, Routes, Route} from "react-router-dom"
import { All } from "./All"
export default function App() {
  return(
    <>
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/yeah"}>Contacts</Link></li>
        <li><Link to={"/woof"}>About</Link></li>
      </ul>
    </nav>

    <div>
      <Routes>
    <Route path="/" element={"WHAT"}/> {/* Default */}

    <Route path="/yeah/*" element={<All />} />
    <Route path="*" element={"bro u on the wrong page"} />
      </Routes>
    </div>
    </>
  )
}