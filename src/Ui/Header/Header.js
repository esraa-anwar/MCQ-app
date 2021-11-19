import React, { useContext } from 'react'
import "./style.css"
import { AuthContext } from '../../middlewares/AuthContext';
const Header = () =>
{
    const authContext = useContext( AuthContext );
    const LogoutHandler = () =>
    {
        localStorage.removeItem( "token" )
        localStorage.removeItem( "email" )
        authContext.setAuth( {} )
    }
    return (
        <div>
            <nav className="navbar">
                <h1 className="item1">MCQ task</h1>

                <div>
                    { authContext.auth.email ? <div>
                        <h3>    { authContext.auth.email }</h3>{ " " }
                        <button onClick={ LogoutHandler }>logout</button>
                    </div> : <h1 className="item1">you need to Login</h1> }
                </div>
            </nav>
        </div>
    )
}

export default Header

