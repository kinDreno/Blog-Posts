import {Routes, Route} from "react-router-dom"
export function All() {
    return(
        <>
        <Routes>
    <Route index element={"idk"}/>
    <Route path="/:id" element={"DKO ALAM PRE"}/>
    <Route path="idk" element={"ueaj"}/>
    <Route path="*" element={"bro u on the wrong page"} />
        </Routes>
        </>
    )
}