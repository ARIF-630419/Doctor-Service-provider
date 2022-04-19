import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegister = event => {
        navigate("/register");
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className=' container w-50 mx-auto'>
            <h2 className=' text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block my-2" type="submit">
                    Log In
                </Button>
            </Form>
            {errorElement}
            <p className='w-50 mx-auto d-block'>New to Doctor service ? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p className='w-50 mx-auto d-block'>Forget Password ? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;