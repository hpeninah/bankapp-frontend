import React, { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../styles/auth.scss';
import axios from '../axiosConfig';

function Login() {
    //const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);

    const handleLogin = async (e) => {
        // e.preventDefault();
        // const response = await axios.post('customer/login', {
        //     loginId: username,
        //     password: password,
        // }).catch(() => setUserNotFound(true))
        // if(response) {
        //     props.setCurrentUser(response.data);
        //     navigate('./home.js');
        // }
    }
    return (
        <Card className="auth_card mx-5 my-5">
            <Card.Body>
                <Card.Title className="auth_title">Login</Card.Title>
                <Card.Text>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-4" controlId="formUsername">
                            <Form.Label className="auth_label">Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                            We don't share your personal information with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label className="auth_label">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="auth_button" type="submit">
                            Login
                        </Button>
                    </Form>
                    {userNotFound ?
                        <span>
                            The provided credentials are unable to be authorized.
                        </span>
                        :
                        null
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Login
