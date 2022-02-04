import { Card, Form, InputGroup, Button } from "react-bootstrap";
import React, { useState } from 'react';
import axios from "axios";
import '../styles/transaction_pages.scss';

function Deposit(){
    const [amount, setAmount] = useState('');
    
    const handleWithdraw = (e) => {
        e.preventDefault();
    }

    return (
        <div className="transaction_page">
            <Card className="transaction_card">
                <Card.Body>
                    <Card.Title className="transaction_card_title mb-4">Deposit</Card.Title>
                    <Form onSubmit={handleWithdraw}>
                        <Form.Group>
                            <Form.Label>Account</Form.Label>
                            <Form.Select>
                                <option>Checkings</option>
                                <option>Savings</option>
                            </Form.Select>
                            <Form.Label>Amount</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    step=".01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Button variant="light" className="transaction_button">Deposit</Button>
            </Card>
        </div>
    );
}

export default Deposit;