import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Report: React.FC = () => {
  return (
    <div>
      <Title level={2}>Reports</Title>
      <p>This is the Reports page. You can add your reporting functionality here.</p>
    </div>
  );
};

export default Report;