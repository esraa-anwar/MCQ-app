import React, { useState, useContext } from 'react'
import { AuthContext } from '../../middlewares/AuthContext';
import "./loginStyle.css"
const Login = () =>
{
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ name, setName ] = useState( "" );
    const [ emailError, setEmailError ] = useState( "" );
    const [ passwordError, setPasswordError ] = useState( "" );
    const [ nameError, setNameError ] = useState( "" );
    const [ erro, setError ] = useState( "" )
    const authContext = useContext( AuthContext );
    const LoginHandler = ( e ) =>
    {
        e.preventDefault();
        console.log( email, password, name )
        console.log( password.length )
        if ( password.length > 8 )
        {
            const token = "abcd"
            localStorage.setItem( "token", token )
            localStorage.setItem( "email", email )
            authContext.setAuth( { token, email } )
        } else
        {
            setError( "you enter wrong data " )
        }

        if ( !name )
        {
            setNameError( "enter the name" )
        }
        if ( typeof email !== "undefined" )
        {

            let pattern = new RegExp( /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i );
            if ( !pattern.test( email ) )
            {

                setEmailError( "Please enter valid email address." );
            }
        }
        if ( !email )
        {
            setEmailError( "enter the email" )
        }
        if ( !password )
        {
            setPasswordError( "pleaze enter the password" )
        }
    }

    return (
        <div>
            <form>
                <h2>Login</h2>
                <label for="username">Username</label>
                <input className="input" type="name" value={ name }
                    onChange={ e => setName( e.target.value ) }
                />
                <h3>{ nameError }</h3>
                <label for="email">email</label>
                <input className="input" type="email" value={ email } onChange={ e => setEmail( e.target.value ) } />

                <br />
                <h3>{ emailError }</h3>
                <br />
                <label for="password">Password</label>
                <input className="input" type="password"
                    onChange={ e => setPassword( e.target.value ) }
                    value={ password }
                />
                <br />
                <h3>{ passwordError }</h3>
                <h3>{ erro }</h3>
                <button className="register" onClick={ LoginHandler }>Login</button>
            </form>
        </div>
    )
}

export default Login
