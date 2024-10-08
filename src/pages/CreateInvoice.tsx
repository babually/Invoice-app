import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const CreateInvoice: React.FC = () => {
  return (
    <div>
      <Title level={2}>Create Invoice</Title>
      <p>Use this page to create a new invoice.</p>
    </div>
  );
};

export default CreateInvoice;