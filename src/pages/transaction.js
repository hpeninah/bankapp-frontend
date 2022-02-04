import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Navigation from "../components/navigation";
import "../styles/transaction.scss";

import Withdrawal from "../components/withdrawal";
import Deposit from "../components/deposit";
import Transfer from "../components/transfer";

function Transaction() {
  const [currentTab, setCurrentTab] = useState("tab1");
  const tabList = [
    {
      name: "tab1",
      label: "Withdrawal",
      content: <Withdrawal />,
    },
    {
      name: "tab2",
      label: "Deposit",
      content: <Deposit />,
    },
    {
      name: "tab3",
      label: "Transfer",
      content: <Transfer />,
    },
  ];
  return (
    <div className="transaction">
      <Navigation />
      <div className="transaction_nav">
      {tabList.map((tab, i) => (
        <ButtonGroup>
          <button
            key={i}
            onClick={() => setCurrentTab(tab.name)}
            className={tab.name === currentTab ? "active transaction_nav_tab" : "transaction_nav_tab_inactive"}
          >
            {tab.label}
          </button>
        </ButtonGroup>
      ))}
      </div>

      {tabList.map((tab, i) => {
        if (tab.name === currentTab) {
          return <div className="transaction_page" key={i}>{tab.content}</div>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Transaction;
