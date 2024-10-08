import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Customers: React.FC = () => {
  return (
    <div>
      <Title level={2}>Customers</Title>
      <p>This is the Customers page. You can manage your customers here.</p>
    </div>
  );
};

export default Customers;