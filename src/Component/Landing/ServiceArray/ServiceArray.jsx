import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AccountConsumer } from "../../AccountContext/AccountProvider";

import './header.css';

const ServiceArray = ({ bgColor, beActive, checkTab }) => {
    return (
        <React.Fragment>
            <AccountConsumer>
                {({ addClass }) => <React.Fragment>

                    <nav className={`navbar navbar-expand-lg navbar-light ${addClass}`} style={{ backgroundColor: `${bgColor ? bgColor : '#FFFFFF'}` }}>
                        <Link className={`navbar-brand ${bgColor ? 'text-light' : 'text-teal'}  ${beActive === '/' ? 'active' : ''} `} to="/">
                            <img id="logoSize" width="200" src="/images/logo.png" alt="josla logo" />
                        </Link>

                        {/* Navbar Array */}
                        {checkTab && (<React.Fragment>
                            <button id="buttonToggle" className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span id="toggleIcon" className=" navbar-toggler-icon"></span>
                            </button>

                            <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item ">
                                        <NavLink to="/iamphoto" className={` nav-link linkText h5`} >I am a photographer</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink to="/explorephoto" className={` nav-link linkText h5`} >Explore photos</NavLink>
                                    </li>

                                    <li className="nav-item ">
                                        <NavLink to="/findaphoto" className={` nav-link linkText h5`} >Find a photographer</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink to="/findmyphoto" className={` nav-link linkText h5`} >Find my photos</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink to="/" className={` nav-link linkText h5`} >Login or Register</NavLink>
                                    </li>



                                </ul>
                            </div>
                        </React.Fragment>)}
                    </nav>
                </React.Fragment>}
            </AccountConsumer>


        </React.Fragment>
    );
}

export default ServiceArray;