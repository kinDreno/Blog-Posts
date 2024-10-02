import UI from "../A. Components/UI";
import Write from "../A. Components/Write";
import { Routes, Route } from "react-router-dom";
export const Main: React.FC = () => {
return(
    <>
    <Routes>
    <Route index element={<UI />}/>
    <Route path='write' element={<Write />}/>
    </Routes>
    </>
)

}

