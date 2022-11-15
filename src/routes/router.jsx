import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../screens/App.jsx"
import ItemDetail from "../screens/itemDetail.jsx"
import Deseados from "../screens/deseados.jsx"

const Router = () =>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<App/>}>  </Route>
                <Route path="/*" element={<div>404 NOT FOUND</div>}></Route>
                <Route path="/producto/:tittle" element={<ItemDetail  />}></Route>
                <Route path="/deseados" element={<Deseados />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router