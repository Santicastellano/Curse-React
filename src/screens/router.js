import Home  from "./home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Character from "./home/Character/Character"
import ItemDetailContainer from "./home/itemDetailcontainer"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/character/:name" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path="/*" element={<div>404 NOT FOUND</div>}></Route>
            </Routes>
        </BrowserRouter>



    )
}

export default Router
