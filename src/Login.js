import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"
function Login() {
    const [state, dispatch] = useStateValue();
   const signIn = () => {
       auth.signInWithPopup(provider)
       .then((result) => {
           dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
           })

       }).catch((error) => alert(error.message));
   };

    return (
        <div className="login">
            <div className="login__logo">
                <img  className="fb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png" alt="facebook__logo" />
                <img className="word"src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                 alt="facebook__word" />
            </div >

            <Button type="submit" onClick={signIn}>sign In</Button>
            
        </div>
    )
}

export default Login 

