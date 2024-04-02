import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFormik from "../Login/logIn";


const Routing = () => {
return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginFormik/>}/>
        </Routes>
        </BrowserRouter>
    </div>
)
}
export default Routing;