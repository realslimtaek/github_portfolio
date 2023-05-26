import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../Main/MainPage/MainPage";
import Header from "../Header/Header";
import AboutMe from "../Header/About/AboutMe";
import Contact from "../Header/Contact/Contact";
import Footer from "../Footer/Footer";

function RouteRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <div style={{marginTop: "100px"}}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutMe/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>

                </Routes>
            </div>

            <div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default RouteRouter;