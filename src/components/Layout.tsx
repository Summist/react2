import React from 'react';

import {Routes, Route, NavLink} from "react-router-dom";

import { Team } from "./Team";
import { About } from "./About";
import { Contact } from "./Contact";
import { Main } from "./Main";

import "./header.css";

const Layout = () => {
    return (
        <>
            <header className="header">
                    <NavLink className="daisy" to="/">Daisy</NavLink>
                       <div className="about_contact">
                           <NavLink className="About" to="/about">About</NavLink>
                           <NavLink className="Contact" to="/contact">Contact</NavLink>
                           <NavLink className="Team" to="/team">Team</NavLink>
                       </div>
            </header>
            <Routes>
                <Route path="/team" element={<Team/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </>
    );
};

export default Layout;