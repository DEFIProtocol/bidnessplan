import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
  const location = useLocation(); // Get the current location

  function PageWrapper({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><ExeucutiveSummary /></PageWrapper>} />
            <Route path="/ComDesc" element={<PageWrapper><CompanyDescription /></PageWrapper>} />
            <Route path="/MarkAna" element={<PageWrapper><MarketAnalysis /></PageWrapper>} />
            <Route path="/MarkStrat" element={<PageWrapper><MarketingStrategy /></PageWrapper>} />
            <Route path="/ProdAndServ" element={<PageWrapper><ProductsAndServices/></PageWrapper>} />
            <Route path="/OpPlan" element={<PageWrapper><OperationalPlan /></PageWrapper>} />
            <Route path="/FinPro" element={<PageWrapper><FinancialProjections /></PageWrapper>} />
            <Route path="/FunReq" element={<PageWrapper><FundingRequests /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
