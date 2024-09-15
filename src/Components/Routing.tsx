import { Routes, Route, useNavigate } from "react-router-dom";
import NewNotes from "./NewNotes";

function Routing() {
  const goBack = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<NewNotes />} />
      <Route path="/:id">
    <Route index element={<h1>Show</h1>} />
    <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route
        path="*"
        element={
          <div className="h-screen bg-slate-600 flex flex-col justify-center items-center">
            <h2 className="text-3xl mx-auto font-bold">
              <span className="text-red-500">404 </span>NOT FOUND!{" "}
            </h2>
            <p className="my-4 text-3xl font-bold">
              You went into a wrong page!
            </p>
            <button
              className="border-solid border-2 p-3 rounded-xl bg-slate-50 border-black"
              onClick={() => goBack(-1)}
            >
              Tap here to go to the previous page
            </button>
          </div>
        }
      />
    </Routes>
  );
}

export default Routing;
