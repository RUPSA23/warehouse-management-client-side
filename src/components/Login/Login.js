import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app);


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth); 
  let from = location.state?.from?.pathname || "/";

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);  
}


const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle()
    .then( () => {
        navigate(from, {replace: true})
    })

}
// const handleFormSubmit = event => {
//     event.preventDefault();
//     signInWithEmailAndPassword(email, password)  
// }
    return (
        <div style={{marginLeft: '400px', marginRight: '400px'}}>
            <Form>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label> <h4>Email address</h4></Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" style={{margin: "auto"}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> <h4> Password</h4></Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>
    Submit
  </Button>
</Form>
<>
  <div className="mb-2 mt-3">
    <Button variant="light" size="lg" style={{border: '2px solid black', fontWeight: 'bold'}} onClick={handleGoogleSignIn}>
   <FcGoogle /> Sign in with Google
    </Button>
  </div> 
</>
</div>
    );
};

export default Login;