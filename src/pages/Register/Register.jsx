import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const {error, setError}= useState(null)
    const {success, setSuccess}= useState(null)
    const [showPassword, setShowPassword] = useState(false)
    
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div>
             <Container className='w-50 mx-auto'>
            <h2 className='text-center'>Login in to EatsExtra</h2>
            <Form onSubmit={""}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type={showPassword? "text" : "password"} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Show password" checked={showPassword} onChange={toggleShowPassword}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant='primary'>Sign Up</Button>
    </div>
                <p className=' my-3'><small>Don't have an Account? Please <Link to={`/login`} className='text-primary' >Login</Link></small></p>
            </Form>

            
        </Container>
        </div>
    );
};

export default Register;