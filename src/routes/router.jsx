import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../screens/App.jsx"
import ItemDetail from "../screens/itemDetail.jsx"

const Router = () =>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>  </Route>
                <Route path="/*" element={<div>404 NOT FOUND</div>}></Route>
                <Route path="/producto/:tittle" element={<ItemDetail  />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router