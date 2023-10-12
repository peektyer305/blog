import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { provider ,auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    const loginWithGoogle = () =>{
        signInWithPopup(auth,provider)
        .then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        })
    };
  return (
    <div>
        <p>Login to start</p>
        <button onClick={loginWithGoogle}>Login with Google account</button>

    </div>
  );
};

export default Login;