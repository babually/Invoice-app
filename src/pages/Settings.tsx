import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Settings: React.FC = () => {
  return (
    <div>
      <Title level={2}>Settings</Title>
      <p>This is the Settings page. You can configure your application settings here.</p>
    </div>
  );
};

export default Settings;