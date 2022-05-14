import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import AuthUser from './AuthUser';
function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function submitForm(e) {
        e.preventDefault();
        //call api
        http.post('/login', { email: email, password: password }).then((res) => {
            setToken(res.data.user, res.data.access_token);
        })

    }
    return (
        <div className='d-flex m-auto pt-5 align-content-center justify-content-center'>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login