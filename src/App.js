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
import ProductsAndServices from "./ProductsAndServices";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes className="mainWindow">
      <Route path="/" element={<ExeucutiveSummary />} />
          <Route path="/ComDesc" element={<CompanyDescription />} />
          <Route path="/MarkAna" element={<MarketAnalysis />} />
          <Route path="/MarkStrat" element={<MarketingStrategy />} />
          <Route path="/ProdAndServ" element={<ProductsAndServices/>} />
          <Route path="/OpPlan" element={<OperationalPlan />} />
          <Route path="/FinPro" element={<FinancialProjections />} />
          <Route path="/FunReq" element={<FundingRequests />} />
      </Routes>
    </div>
  );
}

export default App;
