import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  FileTextOutlined,
  BarChartOutlined,
  TeamOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: <Link to="/">Dashboard</Link> },
    { key: '/invoices', icon: <FileTextOutlined />, label: <Link to="/invoices">Invoices</Link> },
    { key: '/report', icon: <BarChartOutlined />, label: <Link to="/report">Report</Link> },
    { key: '/customers', icon: <TeamOutlined />, label: <Link to="/customers">Customers</Link> },
    { key: '/settings', icon: <SettingOutlined />, label: <Link to="/settings">Settings</Link> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth={isMobile ? 0 : 80}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        className="fixed left-0 h-screen z-10"
      >
        <div className="logo p-4">
          <h2 className="text-white text-xl font-bold">{collapsed && !isMobile ? 'IA' : 'Invoice App'}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout className={`transition-all duration-300 ease-in-out ${collapsed ? (isMobile ? 'ml-0' : 'ml-20') : 'ml-[200px]'}`}>
        <Header className="bg-white p-0 flex justify-between items-center fixed w-full z-10">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
            className="p-4 text-xl"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">Invoice Management</h1>
          </div>
        </Header>
        <Content className="mt-16 mx-4 p-4">
          <div className="p-6 bg-white min-h-[calc(100vh-180px)]">
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center">Invoice App ©{new Date().getFullYear()} Created by Your Company</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;