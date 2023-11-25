import './Sidenavbar.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function  Sidenavbar(){


    return(
        <>
        {/* <!-- Sidenav --> */}
        <div className="sidenav">
            

            <div className="sidenav-url">
                <div className="url">
                    <Link to={`/profile`} className="active">Profile</Link>
                    <hr/>
                </div>
                <div className="url">
                    <Link to={`/login`}>Log In</Link>
                    <hr/>
                </div>
                <div className="url">
                    <Link to={`/signup`}>Sign Up</Link>
                    <hr />
                </div>
                <div className="url">
                    <Link to={`/login`}>Log Out</Link>
                    <hr />
                </div>
            </div>
        </div>
        {/* <!-- End -->  */}
            
        </>
    )
}