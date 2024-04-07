import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header-page">
        <h3 to="/" style={{display: "flex", justifyContent: "center"}}>
            <div style={{color: "white"}}>grid</div>
            <div style={{color: "lime"}}>Lock</div>
        </h3>
        <Link className="header-item" to="/">Exuecutive Summary</Link>
        <Link className="header-item" to="/ComDesc">Company Description</Link>
        <Link className="header-item" to="/MarkAna">Market Analysis</Link>
        <Link className="header-item" to="/ProdAndServ">Products And Services</Link>
        <Link className="header-item" to="/MarkStrat">Marketing Strategy</Link>
        <Link className="header-item" to="/OpPlan">Operational Plan</Link>
        <Link className="header-item" to="/FinPro">Financial Projections</Link>
        <Link className="header-item" to="/FunReq">Funding Requests</Link>
    </div>
  )
}

export default Navbar