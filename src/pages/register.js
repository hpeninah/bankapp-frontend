import React, { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap';
import '../styles/auth.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <Card className="auth_card mx-5 my-5">
        <Card.Body>
            <Card.Title className="auth_title mb-4">Register</Card.Title>
            <Card.Text>
                <Form onSubmit={handleRegister}>
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
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Register
