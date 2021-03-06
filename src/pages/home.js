import React from "react";
import Navigation from "../components/navigation";
import { Card, Container, Button } from "react-bootstrap";
import "../styles/home.scss";

function Home() {
  return (
    <div className="Home">
      <Navigation />        
      <Button  variant="light" className="add_button" type="submit">
          Add Account
      </Button>
      <Container className="account_container">
        <h4 className="home_title mb-4">Here are your accounts:</h4>
        <Card className="account_card" style={{backgroundColor: "#93987C"}}>
          <Card.Body className="account_card_body">
            <Card.Title className="account_item" style={{ fontSize: "16px", color: '#283618'}}>
              Item Account Number
            </Card.Title>
            <Card.Text className="account_balance">Balance: $</Card.Text>
          </Card.Body>
        </Card>        

      </Container>
    </div>
  );
}

export default Home;
