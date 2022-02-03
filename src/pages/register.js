import React, { useState } from 'react'
import {Card, Form, Button, Image} from 'react-bootstrap';
import '../styles/auth.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <Card className="auth_card mx-5 my-5">
        <Card.Body>
        <Image className="logo" src={require('../assets/logo_name.png')} alt='bank_logo' />
            <Card.Title className="auth_title mb-4">Register</Card.Title>
            <Card.Text>
                <Form onSubmit={handleRegister}>
                <Form.Group className="mb-4=2" controlId="formEmail">
                        <Form.Label className="auth_label">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        We don't share your personal information with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formUsername">
                        <Form.Label className="auth_label">Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                    <Button variant="light" className="auth_button" type="submit">
                        Register
                    </Button>
                </Form>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Register
