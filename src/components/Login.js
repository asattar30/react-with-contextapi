import React,{useContext} from 'react'
import {myContext} from "../context/ContextAPI"


export default function Login() {

    const {isLoggedin, login} = useContext(myContext)

    function loginFunc() {
        login()
    }

    console.log(isLoggedin)
    return (
        <div>
            <h1>{isLoggedin ? "Yes you're logged in" : "You're unauthorized"}</h1>
            <button onClick={loginFunc}>Logged in</button>
        </div>
    )
}
