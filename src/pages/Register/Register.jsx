import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const {error, setError}= useState(null)
    const {success, setSuccess}= useState(null)
    const [check, setCheck] = useState(false)
    
    const handleCreateUser =(event)=>{
        const { user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        CreateUser(email, password)

    }

    
    const handleAccept = () => {
        setCheck(!check);
        
      };
    return (
        <div>
             <Container className='w-50 mx-auto'>
            <h2 className='text-center'>Sign up in to EatsExtra</h2>
            <Form onSubmit={""}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control  name='photo' type="text" placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type='text' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control required name='password' type='text' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label={<span>Accept <Link to={`/terms`}> Terms & Condition</Link></span>} checked={check} onChange={handleAccept}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button  disabled={!check} variant='primary'>Sign Up</Button>
    </div>
                <p className=' my-3'><small>Already have an Account? Please <Link to={`/login`} className='text-primary' >Login</Link></small></p>
            </Form>

            
        </Container>
        </div>
    );
};

export default Register;