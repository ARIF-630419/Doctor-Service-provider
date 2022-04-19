import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Register/Register.css';


const Register = () => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }
    const handelRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate("/home");
    }

    return (
        <div className='form-container'>
            <h2>Please Register</h2>
            <div className='register-container'>
                <form onSubmit={handelRegister}>
                    <input type="email" name="email" placeholder='Your email' required />
                    <input type="password" name="password" placeholder='Your password' required />
                    <input type="password" name="Confirm Password" placeholder='confirm password' required />
                    <button>Register</button>
                </form>
                <p className='cursor'>Already have an account? <span className='text-primary' onClick={navigateToLogin}>Login</span></p>
            </div>
        </div>
    );
};

export default Register;