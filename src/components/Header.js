import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return(
        <>
        <header className="App-header">
            <nav>
            <div><h3>User Authentication Task</h3></div>
            </nav>
        </header>
        <section>  
            <div className='nav-link'>      
            <Link to="/register"  >Register</Link> |
            <Link to="/"  >Login</Link> |
            <Link to="/create-link"  >Create Link</Link> |
            <Link to="/kick-out-user" target="_blank" >Kik out User</Link>
            </div> 
        </section>
        <Outlet />
        </>
    )
}

export default Header;