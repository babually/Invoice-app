import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, App as AntApp } from 'antd';
import AppLayout from './components/Layout';
import Home from './pages/Home';
import Invoices from './pages/Invoices';
import Report from './pages/Report';
import Customers from './pages/Customers';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <AntApp>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/report" element={<Report />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AppLayout>
        </Router>
      </AntApp>
    </ConfigProvider>
  );
};

export default App;