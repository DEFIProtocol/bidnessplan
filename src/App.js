import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import ExeucutiveSummary from './ExeucutiveSummary';
import CompanyDescription from './CompanyDescription';
import MarketAnalysis from './MarketAnalysis';
import MarketingStrategy from './MarketingStrategy';
import OperationalPlan from './OperationalPlan';
import FinancialProjections from './FinancialProjections';
import FundingRequests from './FundingRequests';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes className="mainWindow">
        <Route exact path="/" element={ExeucutiveSummary} />
        <Route exact path="/ComDesc" element={CompanyDescription} />
        <Route exact path="/MarkAna" element={MarketAnalysis} />
        <Route exact path="/MarkStrat" element={MarketingStrategy} />
        <Route exact path="/OpPlan" element={OperationalPlan} />
        <Route exact path="/FinPro" element={FinancialProjections} />
        <Route exact path="/FunReq" element={FundingRequests} />
      </Routes>
    </div>
  );
}

export default App;
