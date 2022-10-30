// import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from '../App';
import Login from './Login';
import Signup from './Signup';
import logo from '../budget.png';


function Home() {
    return (
        <>
            <Router>
                
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand text-white" href="#">Expense Tracker</a> */}
                    <Link className="navbar-brand text-white" to="/"><img className="mx-3" src={logo} alt="Logo" width={'42px'} />Expense Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link mx-3 text-white" to="/app">App</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link mx-3 text-white" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-white" to="/signup">Signup</Link>
                            </li> */}
                        </ul>

                        <form className="d-flex" role="search">
                            <Link to="/login"><button className="nav-btn btn btn-outline-success mx-2" type="submit">LogIn</button></Link>
                            <Link to="/signup"><button className="nav-btn btn btn-outline-success mx-3" type="submit">SignUp</button></Link>
                        </form>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route exact path="/" element={ <App /> } key="app" />
                    <Route exact path="/home" element={ <Home /> } key="home" />
                    <Route exact path="/login" element={ <Login /> } key="login" />
                    <Route exact path="/signup" element={ <Signup /> } key="signup" />
                </Routes>
            </Router>
        </>
    )
}

export default Home;